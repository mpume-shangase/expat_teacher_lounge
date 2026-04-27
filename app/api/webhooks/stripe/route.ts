import { stripe } from '@/lib/stripe'
import { supabaseAdmin } from '@/lib/supabase/admin'
import { NextResponse } from 'next/server'
import { headers } from 'next/headers'

export async function POST(request: Request) {
  const body = await request.text()
  const signature = headers().get('stripe-signature')!

  let event
  try {
    event = stripe.webhooks.constructEvent(
      body,
      signature,
      process.env.STRIPE_WEBHOOK_SECRET!
    )
  } catch (error) {
    return NextResponse.json({ error: 'Invalid signature' }, { status: 400 })
  }

  const getUserId = async (customerId: string) => {
    const { data } = await supabaseAdmin
      .from('profiles')
      .select('id')
      .eq('stripe_customer_id', customerId)
      .single()
    return data?.id
  }

  switch (event.type) {
    case 'customer.subscription.created':
    case 'customer.subscription.updated': {
      const subscription = event.data.object as any
      const userId = await getUserId(subscription.customer)
      if (userId) {
        await supabaseAdmin
          .from('profiles')
          .update({
            role: subscription.status === 'active' ? 'premium' : 'free',
            subscription_status: subscription.status,
            subscription_plan: subscription.items.data[0].price.id,
            subscription_period_end: new Date(
              subscription.current_period_end * 1000
            ).toISOString(),
          })
          .eq('id', userId)
      }
      break
    }

    case 'customer.subscription.deleted': {
      const subscription = event.data.object as any
      const userId = await getUserId(subscription.customer)
      if (userId) {
        await supabaseAdmin
          .from('profiles')
          .update({
            role: 'free',
            subscription_status: 'cancelled',
            subscription_plan: null,
            subscription_period_end: null,
          })
          .eq('id', userId)
      }
      break
    }

    case 'invoice.payment_failed': {
      const invoice = event.data.object as any
      const userId = await getUserId(invoice.customer)
      if (userId) {
        await supabaseAdmin
          .from('profiles')
          .update({ subscription_status: 'past_due' })
          .eq('id', userId)
      }
      break
    }
  }

  return NextResponse.json({ received: true })
}
