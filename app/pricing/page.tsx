import React from 'react';
import PricingClient from './PricingClient';

export default function PricingPage() {
  const monthlyPriceId = process.env.STRIPE_PREMIUM_MONTHLY_PRICE_ID || '';
  const annualPriceId = process.env.STRIPE_PREMIUM_ANNUAL_PRICE_ID || '';

  return (
    <div className="flex flex-col w-full bg-white dark:bg-[#0a0b14] overflow-hidden">
      {/* Hero */}
      <section className="relative w-full min-h-[40vh] bg-gradient-to-br from-[#1C91D7] to-[#3739DB] flex flex-col justify-center py-20 px-6 items-center text-center">
        <span className="text-brand-gold text-[12px] font-bold uppercase tracking-widest mb-4 border border-brand-gold/30 bg-brand-gold/10 px-3 py-1 rounded-full">Membership</span>
        <h1 className="font-display font-black text-[36px] md:text-[52px] text-white leading-tight mb-4">Unlock the full Expat Teacher's Lounge</h1>
        <p className="text-white/80 font-body text-[17px] max-w-[600px]">Everything you need for your international teaching move — in one place.</p>
      </section>

      {/* Cards */}
      <section className="py-[80px] px-6 max-w-[1100px] mx-auto w-full -mt-[60px] relative z-10">
        <PricingClient monthlyPriceId={monthlyPriceId} annualPriceId={annualPriceId} />

        <div className="mt-12 w-full flex flex-col items-center justify-center text-center gap-2">
           <p className="text-gray-500 font-body text-[13px]">All plans include a 7-day money-back guarantee. No questions asked.</p>
           <div className="flex items-center gap-2 text-gray-400 font-body text-[12px]">
             <span>🔒</span> Secure payment via Stripe
           </div>
        </div>
      </section>
    </div>
  );
}
