"use client";

import React, { useState, Suspense } from 'react';
import Image from 'next/image';
import { useRouter, useSearchParams } from 'next/navigation';
import { createClient } from '@/lib/supabase/client';
import { motion, AnimatePresence } from 'framer-motion';

function LoginPageInner() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const redirectTo = searchParams.get('redirect') || '/dashboard';
  const supabase = createClient();
  const [isSignIn, setIsSignIn] = useState(true);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  // form states
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fullName, setFullName] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleSignIn = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg('');
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) {
      setErrorMsg(error.message);
      setLoading(false);
    } else {
      router.push(redirectTo);
    }
  };

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg('');
    if (password.length < 8) {
      setErrorMsg('Password must be at least 8 characters');
      setLoading(false);
      return;
    }
    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: { data: { full_name: fullName } }
    });
    if (error) {
      setErrorMsg(error.message);
      setLoading(false);
    } else {
      router.push(redirectTo);
    }
  };

  const handleGoogleAuth = async () => {
    await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: {
        redirectTo: `${process.env.NEXT_PUBLIC_SITE_URL}/auth/callback`
      }
    });
  };

  return (
    <div className="flex w-full min-h-screen bg-white dark:bg-[#0a0b14] overflow-hidden">
      
      {/* LEFT COLUMN - Brand Area */}
      <div className="hidden lg:flex flex-col relative w-1/2 min-h-screen bg-[#0a0b14] justify-center px-16 xl:px-24">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/images/Edwina_headshot.png" 
            alt="Edwina" 
            fill 
            className="object-cover opacity-[0.1]" 
          />
          <div className="absolute inset-0 bg-gradient-to-tr from-[rgba(10,11,20,0.95)] to-[rgba(10,11,20,0.6)]" />
        </div>
        
        <div className="relative z-10 w-full max-w-[500px]">
          <a href="/" className="inline-block mb-24">
            <h2 className="font-display font-black text-white text-[20px] tracking-wide uppercase">Expat Teacher's Lounge</h2>
          </a>
          <motion.blockquote 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-display font-medium text-[32px] text-white leading-tight mb-8"
          >
            "Everything you need for your international teaching move — in one place."
          </motion.blockquote>
          <div className="flex items-center gap-4 border-t border-[rgba(255,255,255,0.1)] pt-8">
            <span className="text-white/50 text-[13px] font-body uppercase tracking-wider font-bold">18 Years Experience</span>
            <span className="w-1 h-1 rounded-full bg-brand-gold"></span>
            <span className="text-white/50 text-[13px] font-body uppercase tracking-wider font-bold">Certified Relocation Coach</span>
          </div>
        </div>
      </div>

      {/* RIGHT COLUMN - Auth Form */}
      <div className="flex flex-col w-full lg:w-1/2 min-h-screen items-center justify-center p-6 md:p-12 relative">
        {/* Mobile Logo */}
        <div className="lg:hidden absolute top-8 left-6">
          <a href="/">
            <h2 className="font-display font-black text-gray-900 dark:text-white text-[16px] tracking-wide uppercase">Expat Teacher's Lounge</h2>
          </a>
        </div>

        <div className="w-full max-w-[440px] bg-white dark:bg-[#13151f] rounded-[24px] lg:rounded-none p-8 md:p-10 shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-none border border-[rgba(0,0,0,0.05)] dark:border-transparent lg:border-none lg:shadow-none">
          <div className="mb-8">
            <h1 className="font-display font-bold text-[32px] text-gray-900 dark:text-white mb-2">Welcome back</h1>
            <p className="text-gray-500 dark:text-gray-400 font-body text-[15px]">Sign in or create your account to access the hub.</p>
          </div>

          {/* TABS */}
          <div className="flex w-full bg-[rgba(0,0,0,0.04)] dark:bg-[rgba(255,255,255,0.04)] rounded-lg p-1 mb-8">
            <button 
              onClick={() => { setIsSignIn(true); setErrorMsg(''); }}
              className={`flex-1 py-2 text-[14px] font-semibold font-body rounded-md transition-all ${isSignIn ? 'bg-white dark:bg-[#202230] text-gray-900 dark:text-white shadow-sm' : 'text-gray-500 dark:text-gray-400'}`}
            >
              Sign in
            </button>
            <button 
              onClick={() => { setIsSignIn(false); setErrorMsg(''); }}
              className={`flex-1 py-2 text-[14px] font-semibold font-body rounded-md transition-all ${!isSignIn ? 'bg-white dark:bg-[#202230] text-gray-900 dark:text-white shadow-sm' : 'text-gray-500 dark:text-gray-400'}`}
            >
              Create account
            </button>
          </div>

          {errorMsg && (
            <div className="w-full p-3 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg text-red-600 dark:text-red-400 text-sm font-body mb-6">
              {errorMsg}
            </div>
          )}

          <AnimatePresence mode="wait">
            {isSignIn ? (
              <motion.form 
                key="signin"
                initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 10 }}
                onSubmit={handleSignIn} 
                className="flex flex-col gap-5"
              >
                <div className="flex flex-col gap-1.5">
                  <label className="text-[13px] font-semibold text-gray-700 dark:text-gray-300 font-body">Email</label>
                  <input type="email" value={email} onChange={e => setEmail(e.target.value)} required className="w-full bg-white dark:bg-[#0a0b14] border border-gray-200 dark:border-gray-800 rounded-lg p-3 text-[15px] font-body text-gray-900 dark:text-white outline-none focus:border-brand-blue" />
                </div>
                <div className="flex flex-col gap-1.5">
                  <div className="flex justify-between items-center">
                    <label className="text-[13px] font-semibold text-gray-700 dark:text-gray-300 font-body">Password</label>
                    <button type="button" className="text-brand-blue text-[12px] font-semibold hover:underline bg-transparent">Forgot password?</button>
                  </div>
                  <div className="relative">
                    <input type={showPassword ? 'text' : 'password'} value={password} onChange={e => setPassword(e.target.value)} required className="w-full bg-white dark:bg-[#0a0b14] border border-gray-200 dark:border-gray-800 rounded-lg p-3 text-[15px] font-body text-gray-900 dark:text-white outline-none focus:border-brand-blue pr-10" />
                    <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm font-semibold">{showPassword ? 'Hide' : 'Show'}</button>
                  </div>
                </div>
                <button type="submit" disabled={loading} className="w-full bg-brand-blue text-white font-bold rounded-lg py-3 mt-2 hover:bg-blue-600 transition-colors disabled:opacity-50">
                  {loading ? 'Signing in...' : 'Sign in'}
                </button>
              </motion.form>
            ) : (
              <motion.form 
                key="signup"
                initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -10 }}
                onSubmit={handleSignUp} 
                className="flex flex-col gap-5"
              >
                <div className="flex flex-col gap-1.5">
                  <label className="text-[13px] font-semibold text-gray-700 dark:text-gray-300 font-body">Full name</label>
                  <input type="text" value={fullName} onChange={e => setFullName(e.target.value)} required className="w-full bg-white dark:bg-[#0a0b14] border border-gray-200 dark:border-gray-800 rounded-lg p-3 text-[15px] font-body text-gray-900 dark:text-white outline-none focus:border-brand-blue" />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-[13px] font-semibold text-gray-700 dark:text-gray-300 font-body">Email</label>
                  <input type="email" value={email} onChange={e => setEmail(e.target.value)} required className="w-full bg-white dark:bg-[#0a0b14] border border-gray-200 dark:border-gray-800 rounded-lg p-3 text-[15px] font-body text-gray-900 dark:text-white outline-none focus:border-brand-blue" />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-[13px] font-semibold text-gray-700 dark:text-gray-300 font-body">Password</label>
                  <div className="relative">
                    <input type={showPassword ? 'text' : 'password'} value={password} onChange={e => setPassword(e.target.value)} required className="w-full bg-white dark:bg-[#0a0b14] border border-gray-200 dark:border-gray-800 rounded-lg p-3 text-[15px] font-body text-gray-900 dark:text-white outline-none focus:border-brand-blue pr-10" />
                    <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm font-semibold">{showPassword ? 'Hide' : 'Show'}</button>
                  </div>
                </div>
                <button type="submit" disabled={loading} className="w-full bg-brand-blue text-white font-bold rounded-lg py-3 mt-2 hover:bg-blue-600 transition-colors disabled:opacity-50">
                  {loading ? 'Creating account...' : 'Create account'}
                </button>
              </motion.form>
            )}
          </AnimatePresence>

          <div className="flex items-center gap-4 my-8">
            <div className="h-px bg-gray-200 dark:bg-gray-800 flex-1"></div>
            <span className="text-gray-400 font-body text-[13px]">or continue with</span>
            <div className="h-px bg-gray-200 dark:bg-gray-800 flex-1"></div>
          </div>

          <button onClick={handleGoogleAuth} className="w-full flex items-center justify-center gap-3 bg-white dark:bg-[#0a0b14] border border-gray-200 dark:border-gray-800 text-gray-700 dark:text-gray-300 font-bold rounded-lg py-3 hover:bg-gray-50 dark:hover:bg-[#13151f] transition-colors shadow-sm">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
            </svg>
            Continue with Google
          </button>

          <div className="mt-8 text-center">
            <p className="text-gray-400 text-[12px] font-body">By continuing you agree to our Terms and Privacy Policy</p>
          </div>
        </div>
      </div>

    </div>
  );
}

export default function LoginPage() {
    return (
          <Suspense fallback={null}>
                  <LoginPageInner />
          </Suspense>Suspense>
        );
}
