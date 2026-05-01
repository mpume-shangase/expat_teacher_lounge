import { stripe } from '@/lib/stripe'
import { supabaseAdmin } from '@/lib/supabase/admin'
import { NextResponse } from 'next/server'
import { headers } from 'next/headers'
import {
  onSubscriptionActivated,
  onSubscriptionEnded,
} from '@/lib/email/hostinger-reach'

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

  const getUserAndEmail = async (customerId: string) => {
    const { data } = await supabaseAdmin
      .from('profiles')
      .select('id, email')
      .eq('stripe_customer_id', customerId)
      .single()
    return data
  }

  switch (event.type) {
    case 'customer.subscription.created':
    case 'customer.subscription.updated': {
      const subscription = event.data.object as any
      const profile = await getUserAndEmail(subscription.customer)
      if (profile) {
        const isActive = subscription.status === 'active'
        await supabaseAdmin
          .from('profiles')
          .update({
            role: isActive ? 'premium' : 'free',
            subscription_status: subscription.status,
            subscription_plan: subscription.items.data[0].price.id,
            subscription_period_end: new Date(
              subscription.current_period_end * 1000
            ).toISOString(),
          })
          .eq('id', profile.id)

        if (isActive && profile.email) {
          const planLabel =
            event.type === 'customer.subscription.created' ? 'new' : 'updated'
          onSubscriptionActivated(profile.email, planLabel).catch(() => {})
        }
      }
      break
    }

    case 'customer.subscription.deleted': {
      const subscription = event.data.object as any
      const profile = await getUserAndEmail(subscription.customer)
      if (profile) {
        await supabaseAdmin
          .from('profiles')
          .update({
            role: 'free',
            subscription_status: 'cancelled',
            subscription_plan: null,
            subscription_period_end: null,
          })
          .eq('id', profile.id)

        if (profile.email) {
          onSubscriptionEnded(profile.email).catch(() => {})
        }
      }
      break
    }

    case 'invoice.payment_failed': {
      const invoice = event.data.object as any
      const profile = await getUserAndEmail(invoice.customer)
      if (profile) {
        await supabaseAdmin
          .from('profiles')
          .update({ subscription_status: 'past_due' })
          .eq('id', profile.id)

        if (profile.email) {
          onSubscriptionEnded(profile.email).catch(() => {})
        }
      }
      break
    }
  }

  return NextResponse.json({ received: true })
}
