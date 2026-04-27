import { createClient } from '@/lib/supabase/server'
import { redirect } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import DashboardClient from './DashboardClient'

export default async function DashboardPage({ searchParams }: { searchParams: { success?: string } }) {
  const supabase = createClient()
  const { data: { session } } = await supabase.auth.getSession()

  if (!session) {
    redirect('/login')
  }

  const { data: profile } = await supabase
    .from('profiles')
    .select('*')
    .eq('id', session.user.id)
    .single()

  const isPremium = profile?.role === 'premium'
  const showSuccessModal = searchParams.success === 'true'

  const userInitials = profile?.full_name?.split(' ').map((n: string) => n[0]).join('').substring(0, 2) || 'ET'
  const userName = profile?.full_name || 'Teacher'
  const subscriptionLabel = isPremium ? 'Premium Active' : 'Free Account'
  const userRole = profile?.role || 'free'

  const sidebarLinks = [
    { href: '/dashboard', label: 'Dashboard', icon: '🏠' },
    { href: '#', label: 'My Resources', icon: '📥' },
    { href: '/hub', label: 'Relocation Hub', icon: '🌍' },
    { href: '#', label: 'Account Settings', icon: '⚙️' },
  ]
  const isActive = (href: string) => href === '/dashboard'

  return (
    <div className="flex w-full min-h-screen bg-white dark:bg-[#0a0b14] overflow-hidden pl-0 lg:pl-64">
      {/* SIDEBAR */}
      <aside className="w-64 min-h-screen bg-[#3739DB] hidden lg:flex flex-col fixed left-0 top-0 pt-[88px] z-30">
        
        {/* Logo in sidebar */}
        <div className="px-6 mb-8 mt-2">
          <Image
            src="/images/expat_teachers_lounge_logo.png"
            alt="Expat Teacher's Lounge"
            width={150}
            height={40}
            className="h-8 w-auto object-contain brightness-0 invert"
          />
        </div>

        {/* User info */}
        <div className="px-6 mb-8 pb-6 border-b border-white/10">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#FCCB52] flex items-center justify-center font-bold text-[#3739DB] text-sm flex-shrink-0">
              {userInitials}
            </div>
            <div>
              <p className="text-white text-sm font-semibold leading-tight">{userName}</p>
              <p className="text-white/50 text-xs">{subscriptionLabel}</p>
            </div>
          </div>
        </div>

        {/* Nav items */}
        <nav className="flex-1 px-3">
          {sidebarLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`
                flex items-center gap-3 px-3 py-2.5 rounded-lg mb-1
                text-sm font-medium transition-all duration-200
                ${isActive(link.href)
                  ? 'bg-white text-[#3739DB]'
                  : 'text-white/70 hover:text-white hover:bg-white/10'
                }
              `}
            >
              <span className="text-base">{link.icon}</span>
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Upgrade banner (free users only) */}
        {userRole === 'free' && (
          <div className="mx-3 mb-6 p-4 rounded-xl bg-[#FCCB52]/15 border border-[#FCCB52]/30">
            <p className="text-[#FCCB52] text-xs font-semibold mb-1">Upgrade to Premium</p>
            <p className="text-white/60 text-xs mb-3 leading-relaxed">
              Unlock the full hub, all resources, and interview prep
            </p>
            <Link
              href="/pricing"
              className="block text-center text-xs font-bold py-2 rounded-lg bg-[#FCCB52] text-[#3739DB] hover:bg-[#f5bf3a] transition-colors"
            >
              Upgrade now →
            </Link>
          </div>
        )}

        {/* Sign out */}
        <div className="px-3 mb-6">
          <form action="/auth/signout" method="post" className="w-full">
            <button type="submit" className="flex items-center w-full gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-white/50 hover:text-white hover:bg-white/10 transition-all">
              <span>🚪</span>
              Sign out
            </button>
          </form>
        </div>
      </aside>

      {/* MAIN CONTENT */}
      <div className="flex flex-col w-full min-h-screen overflow-y-auto">
         {/* Mobile Nav Header */}
         <div className="lg:hidden flex justify-between items-center bg-brand-deep text-white p-6 border-b border-[#ffffff15]">
            <Link href="/">
               <h2 className="font-display font-black text-[14px] tracking-widest uppercase">Expat Teacher's Lounge</h2>
            </Link>
            <form action="/auth/signout" method="post">
               <button type="submit" className="text-xs font-bold bg-white/10 rounded-md px-3 py-2">Sign Out</button>
            </form>
         </div>

         <div className="p-6 md:p-12 max-w-[1000px] w-full mx-auto">
            
            {/* SECTION 1 - Welcome */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-6 mt-6 md:mt-0">
                <div>
                  <div className="flex flex-col md:flex-row md:items-center gap-3 mb-3">
                    <h1 className="font-display font-black text-3xl md:text-4xl text-gray-900 dark:text-white">
                      Welcome back, {profile?.full_name?.split(' ')[0] || 'Teacher'}
                    </h1>
                    <span className={`self-start md:self-center px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider ${isPremium ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400' : 'bg-gray-100 text-gray-600 dark:bg-gray-800 dark:text-gray-400'}`}>
                      {isPremium ? 'Premium' : 'Free'}
                    </span>
                  </div>
                  <p className="text-gray-500 font-body text-sm md:text-[15px]">Manage your resources and track your relocation progress.</p>
                </div>
            </div>

            {!isPremium && (
               <div className="w-full bg-gradient-to-r from-[#FCCB52] to-[#f5bf3a] rounded-[16px] p-6 mb-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 shadow-sm">
                 <div>
                   <h3 className="text-brand-deep font-bold font-display text-xl mb-1">Unlock the full Relocation Hub</h3>
                   <p className="text-brand-deep/85 font-body text-[14px]">Get step-by-step guides, visa pathways, and expert community support.</p>
                 </div>
                 <Link href="/pricing" className="whitespace-nowrap bg-brand-deep text-white font-bold px-6 py-3 rounded-lg text-sm hover:opacity-90 transition-opacity shadow-sm">
                   Upgrade to Premium →
                 </Link>
               </div>
            )}

            {/* SECTION 2 - Resources */}
            <div className="mb-12">
               <h2 className="font-display font-bold text-[22px] md:text-2xl text-gray-900 dark:text-white mb-6">Your resources</h2>
               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Product 1 */}
                  <div className="border border-[rgba(0,0,0,0.08)] dark:border-[rgba(255,255,255,0.08)] rounded-[16px] overflow-hidden bg-white dark:bg-[#13151f] shadow-sm flex flex-col relative">
                     {!isPremium && <div className="absolute inset-0 z-10 bg-white/60 dark:bg-[#13151f]/80 backdrop-blur-[2px] flex flex-col items-center justify-center pointer-events-none">
                       <span className="text-3xl mb-2">🔒</span>
                       <span className="font-bold text-gray-900 dark:text-white font-body text-sm">Upgrade to access</span>
                     </div>}
                     <div className="h-[120px] bg-brand-blue flex items-center justify-center text-white text-4xl">📊</div>
                     <div className="p-6 flex flex-col flex-1">
                        <h3 className="font-display font-bold text-lg text-gray-900 dark:text-white mb-2">Market Overview 2025</h3>
                        <p className="text-gray-500 font-body text-[13px] leading-relaxed mb-6 flex-1">Comprehensive data on international teaching salaries and regional trends.</p>
                        <a href="https://drive.google.com/uc?export=download&id=1JHz_pLvWf9iTKWwhtrnZLGwHQKl3Q8fw" className="block w-full text-center bg-[rgba(0,0,0,0.04)] hover:bg-[rgba(0,0,0,0.08)] dark:bg-[rgba(255,255,255,0.04)] dark:hover:bg-[rgba(255,255,255,0.08)] text-gray-900 dark:text-white font-bold rounded-lg py-2.5 transition-colors text-[13px]">Download</a>
                     </div>
                  </div>
                  {/* Product 2 */}
                  <div className="border border-[rgba(0,0,0,0.08)] dark:border-[rgba(255,255,255,0.08)] rounded-[16px] overflow-hidden bg-white dark:bg-[#13151f] shadow-sm flex flex-col relative">
                     {!isPremium && <div className="absolute inset-0 z-10 bg-white/60 dark:bg-[#13151f]/80 backdrop-blur-[2px] flex flex-col items-center justify-center pointer-events-none">
                       <span className="text-3xl mb-2">🔒</span>
                       <span className="font-bold text-gray-900 dark:text-white font-body text-sm">Upgrade to access</span>
                     </div>}
                     <div className="h-[120px] bg-brand-deep flex items-center justify-center text-white text-4xl">🎯</div>
                     <div className="p-6 flex flex-col flex-1">
                        <h3 className="font-display font-bold text-lg text-gray-900 dark:text-white mb-2">Personal Goal Assessment</h3>
                        <p className="text-gray-500 font-body text-[13px] leading-relaxed mb-6 flex-1">Identify your non-negotiables before you accept your next contract.</p>
                        <a href="https://drive.google.com/uc?export=download&id=1MpOAM2gGg7Es3NdIIjQB0R1ASCc4rndi" className="block w-full text-center bg-[rgba(0,0,0,0.04)] hover:bg-[rgba(0,0,0,0.08)] dark:bg-[rgba(255,255,255,0.04)] dark:hover:bg-[rgba(255,255,255,0.08)] text-gray-900 dark:text-white font-bold rounded-lg py-2.5 transition-colors text-[13px]">Download</a>
                     </div>
                  </div>
                  {/* Product 3 */}
                  <div className="border border-[rgba(0,0,0,0.08)] dark:border-[rgba(255,255,255,0.08)] rounded-[16px] overflow-hidden bg-white dark:bg-[#13151f] shadow-sm flex flex-col relative">
                     {!isPremium && <div className="absolute inset-0 z-10 bg-white/60 dark:bg-[#13151f]/80 backdrop-blur-[2px] flex flex-col items-center justify-center pointer-events-none">
                       <span className="text-3xl mb-2">🔒</span>
                       <span className="font-bold text-gray-900 dark:text-white font-body text-sm">Upgrade to access</span>
                     </div>}
                     <div className="h-[120px] bg-[#0ea5b5] flex items-center justify-center text-white text-4xl">⚖️</div>
                     <div className="p-6 flex flex-col flex-1">
                        <h3 className="font-display font-bold text-lg text-gray-900 dark:text-white mb-2">Country Comparison Tool</h3>
                        <p className="text-gray-500 font-body text-[13px] leading-relaxed mb-6 flex-1">Calculate real savings potential accurately across different regions.</p>
                        <a href="https://drive.google.com/uc?export=download&id=1XLXOo1O0q1duyW7gI5m-qyPL_Bxsl1QP" className="block w-full text-center bg-[rgba(0,0,0,0.04)] hover:bg-[rgba(0,0,0,0.08)] dark:bg-[rgba(255,255,255,0.04)] dark:hover:bg-[rgba(255,255,255,0.08)] text-gray-900 dark:text-white font-bold rounded-lg py-2.5 transition-colors text-[13px]">Download</a>
                     </div>
                  </div>
                  {/* Product 4 */}
                  <div className="border border-[rgba(0,0,0,0.08)] dark:border-[rgba(255,255,255,0.08)] rounded-[16px] overflow-hidden bg-white dark:bg-[#13151f] shadow-sm flex flex-col relative">
                     {!isPremium && <div className="absolute inset-0 z-10 bg-white/60 dark:bg-[#13151f]/80 backdrop-blur-[2px] flex flex-col items-center justify-center pointer-events-none">
                       <span className="text-3xl mb-2">🔒</span>
                       <span className="font-bold text-gray-900 dark:text-white font-body text-sm">Upgrade to access</span>
                     </div>}
                     <div className="h-[120px] bg-brand-gold flex items-center justify-center text-brand-deep text-4xl">🗺️</div>
                     <div className="p-6 flex flex-col flex-1">
                        <h3 className="font-display font-bold text-lg text-gray-900 dark:text-white mb-2">Country Decision Matrix</h3>
                        <p className="text-gray-500 font-body text-[13px] leading-relaxed mb-6 flex-1">A structured framework to evaluate your final job offers.</p>
                        <a href="https://drive.google.com/uc?export=download&id=1Puc6v8RNrDRuRl3Tx1jY9dQ94Yfu4SQV" className="block w-full text-center bg-[rgba(0,0,0,0.04)] hover:bg-[rgba(0,0,0,0.08)] dark:bg-[rgba(255,255,255,0.04)] dark:hover:bg-[rgba(255,255,255,0.08)] text-gray-900 dark:text-white font-bold rounded-lg py-2.5 transition-colors text-[13px]">Download</a>
                     </div>
                  </div>
               </div>
            </div>

            {/* SECTION 3 - Relocation Hub */}
            <div className="mb-12">
               <h2 className="font-display font-bold text-[22px] md:text-2xl text-gray-900 dark:text-white mb-6">Relocation Hub</h2>
               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                 {/* Qatar Card */}
                 <div className="border border-[rgba(0,0,0,0.08)] dark:border-[rgba(255,255,255,0.08)] rounded-[16px] overflow-hidden bg-white dark:bg-[#13151f] shadow-sm relative">
                    {!isPremium && <div className="absolute inset-0 z-10 bg-white/60 dark:bg-[#13151f]/80 backdrop-blur-[2px] flex flex-col items-center justify-center pointer-events-none">
                      <span className="text-3xl mb-2">🔒</span>
                      <span className="font-bold text-gray-900 dark:text-white font-body text-sm">Upgrade to access the Qatar Hub</span>
                    </div>}
                    <div className="p-6 md:p-8 flex flex-col lg:flex-row items-center gap-6 border-b-0">
                       <div className="w-[80px] h-[80px] lg:w-[100px] lg:h-[100px] rounded-full bg-[rgba(0,0,0,0.03)] dark:bg-[rgba(255,255,255,0.03)] flex items-center justify-center text-4xl lg:text-5xl border border-[rgba(0,0,0,0.05)] dark:border-[rgba(255,255,255,0.05)] flex-shrink-0">🇶🇦</div>
                       <div className="flex-1 text-center lg:text-left w-full">
                          <h3 className="font-display font-black text-xl lg:text-2xl text-gray-900 dark:text-white mb-2">Qatar Hub</h3>
                          <p className="text-gray-500 font-body text-[13px] mb-6">8 sections · Immigration · Documents · Interview Prep</p>
                          <Link href="/hub/qatar" className={`inline-block w-full lg:w-auto bg-brand-deep text-white font-bold rounded-lg px-6 py-3 transition-colors text-sm shadow-sm text-center ${!isPremium ? 'opacity-50 pointer-events-none' : 'hover:bg-brand-blue'}`}>
                             Enter hub →
                          </Link>
                       </div>
                    </div>
                 </div>

                 {/* Canada Card */}
                 <div className="border border-[rgba(0,0,0,0.08)] dark:border-[rgba(255,255,255,0.08)] rounded-[16px] overflow-hidden bg-white dark:bg-[#13151f] shadow-sm relative border-brand-gold/50 hover:border-brand-gold transition-colors">
                    {!isPremium && <div className="absolute inset-0 z-10 bg-white/60 dark:bg-[#13151f]/80 backdrop-blur-[2px] flex flex-col items-center justify-center pointer-events-none">
                      <span className="text-3xl mb-2">🔒</span>
                      <span className="font-bold text-gray-900 dark:text-white font-body text-sm">Upgrade to access the Canada Hub</span>
                    </div>}
                    <div className="absolute top-4 right-4 bg-brand-gold/10 text-brand-gold text-[10px] font-bold uppercase tracking-widest px-2 py-1 rounded-full border border-brand-gold/20 leading-none">Includes personal story</div>
                    <div className="p-6 md:p-8 flex flex-col lg:flex-row items-center gap-6 border-b-0">
                       <div className="w-[80px] h-[80px] lg:w-[100px] lg:h-[100px] rounded-full bg-[rgba(0,0,0,0.03)] dark:bg-[rgba(255,255,255,0.03)] flex items-center justify-center text-4xl lg:text-5xl border border-[rgba(0,0,0,0.05)] dark:border-[rgba(255,255,255,0.05)] flex-shrink-0">🇨🇦</div>
                       <div className="flex-1 text-center lg:text-left w-full">
                          <h3 className="font-display font-black text-xl lg:text-2xl text-gray-900 dark:text-white mb-2">Canada Hub</h3>
                          <p className="text-gray-500 font-body text-[13px] mb-6">9 sections · NB Pathway · Certification · Guides</p>
                          <Link href="/hub/canada" className={`inline-block w-full lg:w-auto bg-[#1C91D7] hover:bg-[#3739DB] text-white font-bold rounded-lg px-6 py-3 transition-colors text-sm shadow-sm text-center ${!isPremium ? 'opacity-50 pointer-events-none' : ''}`}>
                             Enter hub →
                          </Link>
                       </div>
                    </div>
                 </div>
               </div>
            </div>

            {/* SECTION 4 - Quick Stats */}
            <div className="grid grid-cols-3 gap-4 md:gap-6 mb-12">
               <div className="bg-[rgba(0,0,0,0.02)] dark:bg-[rgba(255,255,255,0.02)] border border-[rgba(0,0,0,0.05)] dark:border-[rgba(255,255,255,0.05)] rounded-[16px] p-4 md:p-6 text-center shadow-sm">
                 <div className="text-3xl font-display font-black text-gray-900 dark:text-white mb-2">{isPremium ? '4' : '0'}</div>
                 <div className="text-[10px] md:text-[11px] text-gray-500 font-bold uppercase tracking-wider leading-tight">Resources <br/>Available</div>
               </div>
               <div className="bg-[rgba(0,0,0,0.02)] dark:bg-[rgba(255,255,255,0.02)] border border-[rgba(0,0,0,0.05)] dark:border-[rgba(255,255,255,0.05)] rounded-[16px] p-4 md:p-6 text-center shadow-sm">
                 <div className="text-3xl font-display font-black text-gray-900 dark:text-white mb-2">1</div>
                 <div className="text-[10px] md:text-[11px] text-gray-500 font-bold uppercase tracking-wider leading-tight">Countries <br/>in hub</div>
               </div>
               <div className="bg-[rgba(0,0,0,0.02)] dark:bg-[rgba(255,255,255,0.02)] border border-[rgba(0,0,0,0.05)] dark:border-[rgba(255,255,255,0.05)] rounded-[16px] p-4 md:p-6 text-center shadow-sm">
                 <div className="text-3xl font-display font-black text-gray-900 dark:text-white mb-2">0</div>
                 <div className="text-[10px] md:text-[11px] text-gray-500 font-bold uppercase tracking-wider leading-tight">Sessions <br/>booked</div>
               </div>
            </div>

            {/* SECTION 5 - Account */}
            <div className="mb-20">
               <h2 className="font-display font-bold text-[22px] md:text-2xl text-gray-900 dark:text-white mb-6">Account details</h2>
               <div className="bg-[rgba(0,0,0,0.02)] dark:bg-[rgba(255,255,255,0.02)] border border-[rgba(0,0,0,0.08)] dark:border-[rgba(255,255,255,0.08)] shadow-sm rounded-[16px] p-6 md:p-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                 <div className="space-y-1 w-full md:w-auto">
                   <div className="text-gray-900 dark:text-white font-bold font-body text-[15px]">{profile?.full_name}</div>
                   <div className="text-gray-500 font-body text-[13px] mb-3 md:mb-2">{profile?.email}</div>
                   <div className="p-3 md:p-0 bg-white dark:bg-[#13151f] rounded-lg border border-[rgba(0,0,0,0.05)] dark:border-[rgba(255,255,255,0.05)] md:bg-transparent md:border-transparent md:rounded-none">
                     <span className="text-[11px] text-brand-blue font-bold tracking-wider uppercase">Plan: </span>
                     <span className="text-[13px] text-gray-900 dark:text-white font-bold capitalize font-body ml-2"> {profile?.role} </span>
                   </div>
                 </div>
                 {isPremium && (
                   <form action="/api/create-portal-session" method="POST" className="w-full md:w-auto mt-2 md:mt-0">
                     <button type="submit" className="w-full bg-white dark:bg-[#202230] border border-[rgba(0,0,0,0.1)] dark:border-[rgba(255,255,255,0.1)] text-gray-900 dark:text-white font-bold px-6 py-3 rounded-lg text-sm hover:bg-gray-50 dark:hover:bg-[#2a2c3a] shadow-sm transition-colors">
                       Manage billing
                     </button>
                   </form>
                 )}
               </div>
            </div>

         </div>
      </div>

      {showSuccessModal && <DashboardClient success={true} />}

    </div>
  )
}
