import { createServerClient } from '@supabase/ssr'
import { NextResponse } from 'next/server'
import type { CookieOptions } from '@supabase/ssr'

export async function GET(request: Request) {
    const { searchParams, origin } = new URL(request.url)
    const code = searchParams.get('code')
    const next = searchParams.get('next') ?? '/dashboard'

  if (code) {
        // Build the redirect response first so cookie writes land on it directly
      const response = NextResponse.redirect(new URL(next, origin))

      const supabase = createServerClient(
              process.env.NEXT_PUBLIC_SUPABASE_URL!,
              process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
        {
                  cookies: {
                              get(name: string) {
                                            return request.cookies.get(name)?.value
                              },
                              set(name: string, value: string, options: CookieOptions) {
                                            response.cookies.set({ name, value, ...options })
                              },
                              remove(name: string, options: CookieOptions) {
                                            response.cookies.set({ name, value: '', ...options })
                              },
                  },
        }
            )

      const { error } = await supabase.auth.exchangeCodeForSession(code)
        if (!error) {
                return response
        }
  }

  // Auth failed – send back to login with an error flag
  return NextResponse.redirect(new URL('/login?error=auth_failed', origin))
}
