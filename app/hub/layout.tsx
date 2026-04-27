import { createClient } from '@/lib/supabase/server'
import { redirect } from 'next/navigation'
import Link from 'next/link'

export default async function HubLayout({ children }: { children: React.ReactNode }) {
  const supabase = createClient()
  const { data: { session } } = await supabase.auth.getSession()

  if (!session) redirect('/login')

  const { data: profile } = await supabase
    .from('profiles')
    .select('role')
    .eq('id', session.user.id)
    .single()

  const isPremium = profile?.role === 'premium'

  return (
    <div className="flex w-full min-h-screen bg-white dark:bg-[#0a0b14] overflow-hidden">
      {/* SIDEBAR */}
      <div className="hidden lg:flex flex-col w-[260px] bg-brand-deep text-white flex-shrink-0 min-h-screen border-r border-[#ffffff15] p-6 lg:p-8">
         <Link href="/" className="mb-12">
            <h2 className="font-display font-black text-white text-[15px] tracking-widest uppercase leading-tight">Expat Teacher's <br/>Lounge</h2>
         </Link>
         <nav className="flex flex-col gap-2 flex-1 font-body text-[14px]">
            <Link href="/dashboard" className="flex items-center gap-3 text-white/70 hover:text-white/90 rounded-lg px-4 py-3 font-medium transition-colors"><span className="text-lg">🏠</span> Dashboard</Link>
            <Link href="/dashboard" className="flex items-center gap-3 text-white/70 hover:text-white/90 rounded-lg px-4 py-3 font-medium transition-colors"><span className="text-lg">📥</span> My Resources</Link>
            <Link href="/hub/qatar" className="flex items-center gap-3 bg-white text-brand-blue rounded-lg px-4 py-3 font-bold shadow-sm transition-all"><span className="text-lg">🌍</span> Relocation Hub</Link>
            <Link href="/dashboard" className="flex items-center gap-3 text-white/70 hover:text-white/90 rounded-lg px-4 py-3 font-medium transition-colors"><span className="text-lg">⚙️</span> Account Settings</Link>
            <form action="/auth/signout" method="post" className="mt-auto">
               <button type="submit" className="flex w-full items-center gap-3 text-white/70 hover:text-white/90 rounded-lg px-4 py-3 font-medium transition-colors"><span className="text-lg">🔓</span> Sign Out</button>
            </form>
         </nav>
         <div className="mt-6 flex items-center gap-3 bg-[#ffffff10] rounded-lg p-4 border border-[#ffffff15]">
            <div className={`w-2 h-2 rounded-full ${isPremium ? 'bg-green-400' : 'bg-gray-400'}`}></div>
            <div className="text-[13px] font-bold tracking-wide">{isPremium ? 'Premium Active' : 'Free Account'}</div>
         </div>
      </div>
      {/* MAIN CONTENT */}
      <div className="flex flex-col w-full min-h-screen overflow-y-auto">
         <div className="lg:hidden flex justify-between items-center bg-brand-deep text-white p-6 border-b border-[#ffffff15]">
            <Link href="/">
               <h2 className="font-display font-black text-[14px] tracking-widest uppercase">Expat Teacher's Lounge</h2>
            </Link>
            <form action="/auth/signout" method="post">
               <button type="submit" className="text-xs font-bold bg-white/10 rounded-md px-3 py-2">Sign Out</button>
            </form>
         </div>
         {children}
      </div>
    </div>
  )
}
