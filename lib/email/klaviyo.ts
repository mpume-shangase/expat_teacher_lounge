/**
 * Klaviyo — email marketing integration
 *
 * Required env vars (add to Vercel + .env.local):
 *   KLAVIYO_API_KEY   — Private API key from Klaviyo Account Settings (has prefix pk_ or is a custom private key)
 *   KLAVIYO_LIST_ID   — The List ID (audience) to subscribe contacts to
 *
 * This function is fire-and-forget safe: it logs errors but never throws,
 * so a Klaviyo API failure never breaks the checkout or payment flow.
 */

export interface KlaviyoSubscriber {
  email: string;
  firstName?: string;
  lastName?: string;
}

/**
 * Subscribe a profile to a Klaviyo List (opt-in email marketing) using Klaviyo v3 API.
 */
export async function subscribeToKlaviyo(subscriber: KlaviyoSubscriber): Promise<void> {
  const apiKey = process.env.KLAVIYO_API_KEY;
  const listId = process.env.KLAVIYO_LIST_ID;

  if (!apiKey || !listId) {
    console.warn('[Klaviyo] API key or list ID not configured — skipping subscription');
    return;
  }

  try {
    const response = await fetch('https://a.klaviyo.com/api/profile-subscription-bulk-create-jobs/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Klaviyo-API-Key ${apiKey}`,
        'revision': '2024-05-15' // Standard Klaviyo API revision
      },
      body: JSON.stringify({
        data: {
          type: 'profile-subscription-bulk-create-job',
          attributes: {
            profiles: {
              data: [
                {
                  type: 'profile',
                  attributes: {
                    email: subscriber.email,
                    first_name: subscriber.firstName ?? '',
                    last_name: subscriber.lastName ?? '',
                    subscriptions: {
                      email: {
                        marketing: {
                          consent: 'SUBSCRIBED'
                        }
                      }
                    }
                  }
                }
              ]
            }
          },
          relationships: {
            list: {
              data: {
                type: 'list',
                id: listId
              }
            }
          }
        }
      })
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error(`[Klaviyo] subscription failed (${response.status}): ${errorText}`);
    } else {
      console.log(`[Klaviyo] successfully subscribed ${subscriber.email} to list ${listId}`);
    }
  } catch (error) {
    console.error('[Klaviyo] subscription error:', error);
  }
}
