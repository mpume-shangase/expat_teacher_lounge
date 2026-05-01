/**
 * Hostinger Reach — email marketing integration
 *
 * Required env vars (add to Vercel + .env.local):
 *   HOSTINGER_REACH_API_KEY   — API key from Hostinger Reach dashboard
 *   HOSTINGER_REACH_LIST_ID   — the subscriber list / audience ID to add contacts to
 *
 * All functions are fire-and-forget safe: they log errors but never throw,
 * so a Reach API failure never breaks the signup or subscription flow.
 */

const BASE_URL = 'https://api.reach.hostinger.com/v1'

const headers = () => ({
  'Content-Type': 'application/json',
  Authorization: `Bearer ${process.env.HOSTINGER_REACH_API_KEY}`,
})

// ─── Contact management ──────────────────────────────────────────────────────

export interface ReachContact {
  email: string
  firstName?: string
  lastName?: string
  /** Arbitrary key/value pairs stored on the contact */
  fields?: Record<string, string>
}

/**
 * Add or update a contact in your Hostinger Reach audience list.
 * Uses upsert semantics so re-subscribing an existing email is safe.
 */
export async function upsertContact(contact: ReachContact): Promise<void> {
  if (!process.env.HOSTINGER_REACH_API_KEY || !process.env.HOSTINGER_REACH_LIST_ID) {
    console.warn('[HostingerReach] API key or list ID not configured — skipping contact upsert')
    return
  }

  try {
    const res = await fetch(`${BASE_URL}/lists/${process.env.HOSTINGER_REACH_LIST_ID}/contacts`, {
      method: 'POST',
      headers: headers(),
      body: JSON.stringify({
        email: contact.email,
        first_name: contact.firstName ?? '',
        last_name: contact.lastName ?? '',
        custom_fields: contact.fields ?? {},
        status: 'subscribed',
      }),
    })

    if (!res.ok) {
      const body = await res.text()
      console.error(`[HostingerReach] upsertContact failed (${res.status}): ${body}`)
    }
  } catch (err) {
    console.error('[HostingerReach] upsertContact error:', err)
  }
}

/**
 * Update a contact's subscription tier tag (e.g. free → premium).
 * Useful for segmenting campaigns by plan.
 */
export async function tagContactPlan(email: string, plan: 'free' | 'premium'): Promise<void> {
  if (!process.env.HOSTINGER_REACH_API_KEY || !process.env.HOSTINGER_REACH_LIST_ID) return

  try {
    const res = await fetch(`${BASE_URL}/lists/${process.env.HOSTINGER_REACH_LIST_ID}/contacts/${encodeURIComponent(email)}`, {
      method: 'PATCH',
      headers: headers(),
      body: JSON.stringify({
        custom_fields: { plan },
      }),
    })

    if (!res.ok) {
      const body = await res.text()
      console.error(`[HostingerReach] tagContactPlan failed (${res.status}): ${body}`)
    }
  } catch (err) {
    console.error('[HostingerReach] tagContactPlan error:', err)
  }
}

/**
 * Mark a contact as unsubscribed (e.g. when a subscription is cancelled).
 * Does NOT delete the contact — keeps history intact.
 */
export async function unsubscribeContact(email: string): Promise<void> {
  if (!process.env.HOSTINGER_REACH_API_KEY || !process.env.HOSTINGER_REACH_LIST_ID) return

  try {
    const res = await fetch(`${BASE_URL}/lists/${process.env.HOSTINGER_REACH_LIST_ID}/contacts/${encodeURIComponent(email)}`, {
      method: 'PATCH',
      headers: headers(),
      body: JSON.stringify({ status: 'unsubscribed' }),
    })

    if (!res.ok) {
      const body = await res.text()
      console.error(`[HostingerReach] unsubscribeContact failed (${res.status}): ${body}`)
    }
  } catch (err) {
    console.error('[HostingerReach] unsubscribeContact error:', err)
  }
}

// ─── Transactional emails ────────────────────────────────────────────────────

/**
 * Send a transactional email via Hostinger Reach.
 *
 * @param templateId  The numeric template ID from your Reach dashboard
 * @param to          Recipient email address
 * @param variables   Template merge variables (key → value)
 */
export async function sendTransactional(
  templateId: string,
  to: string,
  variables: Record<string, string> = {}
): Promise<void> {
  if (!process.env.HOSTINGER_REACH_API_KEY) {
    console.warn('[HostingerReach] API key not configured — skipping transactional email')
    return
  }

  try {
    const res = await fetch(`${BASE_URL}/emails/transactional`, {
      method: 'POST',
      headers: headers(),
      body: JSON.stringify({
        template_id: templateId,
        to: [{ email: to }],
        variables,
      }),
    })

    if (!res.ok) {
      const body = await res.text()
      console.error(`[HostingerReach] sendTransactional failed (${res.status}): ${body}`)
    }
  } catch (err) {
    console.error('[HostingerReach] sendTransactional error:', err)
  }
}

// ─── Convenience wrappers for known email events ─────────────────────────────

/** Called when a new user creates an account (email/password or OAuth) */
export async function onUserSignup(email: string, firstName?: string): Promise<void> {
  await upsertContact({ email, firstName, fields: { plan: 'free', source: 'signup' } })

  if (process.env.HOSTINGER_REACH_WELCOME_TEMPLATE_ID) {
    await sendTransactional(
      process.env.HOSTINGER_REACH_WELCOME_TEMPLATE_ID,
      email,
      { first_name: firstName ?? 'there' }
    )
  }
}

/** Called when a Stripe subscription becomes active */
export async function onSubscriptionActivated(email: string, planLabel: string): Promise<void> {
  await upsertContact({ email, fields: { plan: 'premium', subscription: planLabel } })
  await tagContactPlan(email, 'premium')

  if (process.env.HOSTINGER_REACH_SUBSCRIPTION_TEMPLATE_ID) {
    await sendTransactional(
      process.env.HOSTINGER_REACH_SUBSCRIPTION_TEMPLATE_ID,
      email,
      { plan: planLabel }
    )
  }
}

/** Called when a Stripe subscription is cancelled or payment fails */
export async function onSubscriptionEnded(email: string): Promise<void> {
  await tagContactPlan(email, 'free')
}
