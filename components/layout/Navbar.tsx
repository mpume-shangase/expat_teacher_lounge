'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import ThemeToggle from './ThemeToggle'
import { createClient } from '@/lib/supabase/client'
import type { User } from '@supabase/supabase-js'

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false)
    const [mobileOpen, setMobileOpen] = useState(false)
    const [user, setUser] = useState<User | null>(null)
    const [loadingUser, setLoadingUser] = useState(true)
    const pathname = usePathname()
    const router = useRouter()

  useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 80)
        window.addEventListener('scroll', handleScroll, { passive: true })
        return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close mobile menu on route change
  useEffect(() => {
        setMobileOpen(false)
  }, [pathname])

  // Listen to auth state changes
  useEffect(() => {
        const supabase = createClient()
        supabase.auth.getUser().then(({ data }) => {
                setUser(data.user)
                setLoadingUser(false)
        })
        const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
                setUser(session?.user ?? null)
        })
        return () => subscription.unsubscribe()
  }, [])

  const handleSignOut = async () => {
        const supabase = createClient()
        await supabase.auth.signOut()
        router.push('/')
        router.refresh()
  }

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/products', label: 'Products' },
    { href: '/coaching', label: 'Coaching' },
    { href: '/blog', label: 'Blog' },
      ]

  const isActive = (href: string) =>
         href === '/' ? pathname === '/' : pathname.startsWith(href)

  const rawName = user?.user_metadata?.full_name || user?.email || ''
        const displayName = rawName.includes('@') ? rawName.split('@')[0] : rawName.split(' ')[0]
  return (
        <motion.nav
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
                          scrolled
                            ? 'bg-white/95 dark:bg-[#0a0b14]/95 backdrop-blur-xl shadow-sm border-b border-black/8 dark:border-white/8'
                            : 'bg-transparent'
                }`}
          initial={{ y: -100 }}
                animate={{ y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }}
              >
          {/* Top gradient */}
          {!scrolled && (
                        <div
                                    className="absolute inset-0 pointer-events-none"
                                    style={{ background: 'linear-gradient(to bottom, rgba(0,0,0,0.5) 0%, transparent 100%)' }}
                                  />
                      )}
        
              <div className="relative max-w-6xl mx-auto px-6 lg:px-8">
                      <div className="flex items-center justify-between h-18 py-4">
                        {/* Logo */}
                                <Link href="/" className="flex items-center flex-shrink-0">
                                            <Image
                                                            src="/images/expat_teachers_lounge_logo.png"
                                                            alt="Expat Teacher's Lounge"
                                                            width={180}
                                                            height={40}
                        priority
                                                            className="h-10 w-auto object-contain"
                                      />
                                </Link>Link>
                      
                        {/* Desktop nav links */}
              <div className="hidden md:flex items-center gap-8">
                {navLinks.map((link) => (
                              <Link
                                                key={link.href}
                                                href={link.href}
                                                className={`relative text-sm font-medium transition-colors duration-200 ${
                                                                    scrolled
                                                                      ? isActive(link.href)
                                                                        ? 'text-[#1C91D7]'
                                                                        : 'text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white'
                                                                      : isActive(link.href)
                                                                      ? 'text-[#FCCB52]'
                                                                      : 'text-white/90 hover:text-white'
                                                }`}
                                              >
                                {link.label}
                                {isActive(link.href) && (
                                                                  <motion.span
                                                                                        layoutId="nav-underline"
                                                                                        className={`absolute -bottom-1 left-0 right-0 h-0.5 rounded-full ${
                                                                                                                scrolled ? 'bg-[#1C91D7]' : 'bg-[#FCCB52]'
                                                                                          }`}
                                                                                      />
                                                                )}
                              </Link>Link>
                            ))}
              </div>div>
                      
                        {/* Right side */}
                                <div className="hidden md:flex items-center gap-3">
                                            <ThemeToggle scrolled={scrolled} />
                                  {!loadingUser && (
                              user ? (
                                                <>
                                                                  <Link
                                                                                        href="/dashboard"
                                                                                        className={`text-sm font-medium px-4 py-2 rounded-lg border transition-all duration-200 ${
                                                                                                                scrolled
                                                                                                                  ? 'border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-300 hover:border-[#1C91D7] hover:text-[#1C91D7]'
                                                                                                                  : 'border-white/30 text-white hover:border-white hover:bg-white/10'
                                                                                          }`}
                      >
                                                                    {displayName ? `Hi, ${displayName}` : 'Dashboard'}
                                                                  </Link>Link>
                                                                  <button
                                                                                        onClick={handleSignOut}
                                                                                        className="text-sm font-semibold px-4 py-2 rounded-lg bg-[#1C91D7] text-white hover:bg-[#1680c0] transition-all duration-200"
                                                                                      >
                                                                                      Sign out
                                                                  </button>button>
                                                </>>
                                              ) : (
                                                <>
                                                                  <Link
                                                                                        href="/login"
                                                                                        className={`text-sm font-medium px-4 py-2 rounded-lg border transition-all duration-200 ${
                                                                                                                scrolled
                                                                                                                  ? 'border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-300 hover:border-[#1C91D7] hover:text-[#1C91D7]'
                                                                                                                  : 'border-white/30 text-white hover:border-white hover:bg-white/10'
                                                                                          }`}
                                                                                      >
                                                                                      Log in
                                                                  </Link>
                                                                  <Link
                                                                                        href="/pricing"
                                                                                        className="text-sm font-semibold px-4 py-2 rounded-lg bg-[#1C91D7] text-white hover:bg-[#1680c0] transition-all duration-200"
                                                                                      >
                                                                                      Join free
                                                                  </Link>Link>
                                                </>>
                                              )
                            )}
                                </div>div>
                      
                        {/* Mobile hamburger */}
                                <button
                                              onClick={() => setMobileOpen(!mobileOpen)}
                                              className={`md:hidden p-2 rounded-lg transition-colors ${
                                                              scrolled
                                                                ? 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
                                                                : 'text-white hover:bg-white/10'
                                              }`}
                                              aria-label="Toggle menu"
                                            >
                                            <div className="w-5 h-4 flex flex-col justify-between">
                                                          <motion.span
                                                                            animate={mobileOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
                                                                            className="block h-0.5 bg-current rounded-full"
                                                                          />
                                                          <motion.span
                                                                            animate={mobileOpen ? { opacity: 0 } : { opacity: 1 }}
                                                                            className="block h-0.5 bg-current rounded-full"
                                                                          />
                                                          <motion.span
                                                                            animate={mobileOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
                                                                            className="block h-0.5 bg-current rounded-full"
                                                                          />
                                            </div>div>
                                </button>button>
                      </div>div>
              </div>div>
        
          {/* Mobile menu */}
              <AnimatePresence>
                {mobileOpen && (
                          <motion.div
                                        initial={{ opacity: 0, height: 0 }}
                                        animate={{ opacity: 1, height: 'auto' }}
                                        exit={{ opacity: 0, height: 0 }}
                                        transition={{ duration: 0.3 }}
                                        className="fixed top-[72px] left-0 right-0 z-40 bg-white dark:bg-[#0a0b14] border-b border-gray-100 dark:border-gray-800"
                                      >
                                      <div className="max-w-6xl mx-auto px-6 py-6 flex flex-col gap-4">
                                        {navLinks.map((link) => (
                                                        <Link
                                                                            key={link.href}
                                                                            href={link.href}
                                                                            className={`text-base font-medium py-2 border-b border-gray-100 dark:border-gray-800 ${
                                                                                                  isActive(link.href)
                                                                                                    ? 'text-[#1C91D7]'
                                                                                                    : 'text-gray-700 dark:text-gray-300'
                                                                            }`}
                                                                          >
                                                          {link.label}
                                                        </Link>Link>
                                                      ))}
                                                    <div className="flex flex-col gap-3 pt-2">
                                                      {user ? (
                                                          <>
                                                                              <Link
                                                                                                      href="/dashboard"
                                                                                                      className="text-center text-sm font-medium px-4 py-3 rounded-lg border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300"
                                                                                                    >
                                                                                {displayName ? `Hi, ${displayName}` : 'Dashboard'}
                                                                              </Link>Link>
                                                                              <button
                                                                                                      onClick={handleSignOut}
                                                                                                      className="text-center text-sm font-semibold px-4 py-3 rounded-lg bg-[#1C91D7] text-white"
                                                                                                    >
                                                                                                    Sign out
                                                                              </button>button>
                                                          </>>
                                                        ) : (
                                                          <>
                                                                              <Link
                                                                                                      href="/login"
                                                                                                      className="text-center text-sm font-medium px-4 py-3 rounded-lg border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300"
                                                                                                    >
                                                                                                    Log in
                                                                              </Link>Link>
                                                                              <Link
                                                                                                      href="/pricing"
                                                                                                      className="text-center text-sm font-semibold px-4 py-3 rounded-lg bg-[#1C91D7] text-white"
                                                                                                    >
                                                                                                    Join free
                                                                              </Link>Link>
                                                          </>>
                                                        )}
                                                    </div>div>
                                      </div>div>
                          </motion.div>motion.div>
                        )}
              </AnimatePresence>AnimatePresence>
        </motion.nav>motion.nav>
      )
}</></></></></motion.nav>
