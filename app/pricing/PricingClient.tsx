"use client";
import React, { useState } from 'react';

import { motion } from 'framer-motion';

interface PricingClientProps {
  monthlyPriceId: string;
  annualPriceId: string;
}

export default function PricingClient({ monthlyPriceId, annualPriceId }: PricingClientProps) {
  const [loading, setLoading] = useState<string | null>(null);

  const handleSubscribe = async (priceId: string, planName: string) => {
    setLoading(planName);
    try {
      const response = await fetch('/api/create-checkout-session', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ priceId }),
      });

      if (response.status === 401) {
        // Not logged in — send to login then back to pricing
        window.location.href = '/login?redirect=/pricing';
        return;
      }

      const data = await response.json();

      if (!data.url) {
        alert('Something went wrong. Please try again.');
        setLoading(null);
        return;
      }

      window.location.href = data.url;
    } catch (err) {
      alert('Something went wrong. Please try again.');
      setLoading(null);
    }
  };

  return (
    <div className="w-full">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
        
        {/* Card 1 - Free */}
        <div className="bg-white dark:bg-[#13151f] rounded-[24px] p-8 border border-[rgba(0,0,0,0.08)] dark:border-[rgba(255,255,255,0.08)] shadow-lg flex flex-col items-start mt-4">
           <div className="text-gray-500 font-bold uppercase tracking-wide text-[11px] mb-4">Free</div>
           <div className="font-display font-black text-3xl text-gray-900 dark:text-white mb-2">$0 <span className="text-lg font-body font-normal text-gray-500">forever</span></div>
           <div className="text-gray-500 font-body text-sm mb-6">Start your research</div>
           <a href="/login" className="w-full text-center bg-[rgba(0,0,0,0.04)] hover:bg-[rgba(0,0,0,0.08)] dark:bg-[rgba(255,255,255,0.04)] dark:hover:bg-[rgba(255,255,255,0.08)] text-gray-900 dark:text-white font-bold rounded-lg py-3 transition-colors text-sm">Get started free</a>
           <div className="text-[12px] text-gray-500 text-center mt-2 w-full mb-8">No credit card required</div>
           <ul className="flex flex-col gap-3 font-body text-[13px] text-gray-700 dark:text-gray-300 w-full">
              <li className="flex gap-3"><span className="text-brand-blue">✓</span> Access to all blog posts</li>
              <li className="flex gap-3"><span className="text-brand-blue">✓</span> 4 free downloadable resources</li>
              <li className="flex gap-3"><span className="text-brand-blue">✓</span> Qatar documentation checklist</li>
              <li className="flex gap-3"><span className="text-brand-blue">✓</span> Qatar immigration checklist</li>
              <li className="flex gap-3"><span className="text-brand-blue">✓</span> Schools guide</li>
              <li className="flex gap-3"><span className="text-brand-blue">✓</span> Navigation guide</li>
           </ul>
        </div>

        {/* Card 2 - Premium Monthly */}
        <div className="bg-white dark:bg-[#13151f] rounded-[24px] p-8 border-2 border-brand-blue shadow-[0_12px_40px_rgba(28,145,215,0.15)] flex flex-col items-start relative transform md:-translate-y-4">
           <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-brand-blue text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full whitespace-nowrap">Most Popular</div>
           <div className="text-brand-blue font-bold uppercase tracking-wide text-[11px] mb-4 mt-2">Premium Monthly</div>
           <div className="font-display font-black text-3xl text-gray-900 dark:text-white mb-2">$19.99<span className="text-lg font-body font-normal text-gray-500">/month</span></div>
           <div className="text-gray-500 font-body text-sm mb-6">Full access, cancel anytime</div>
           <button onClick={() => handleSubscribe(monthlyPriceId, 'monthly')} disabled={!!loading} className="w-full text-center bg-brand-blue hover:bg-blue-600 text-white font-bold rounded-lg py-3 transition-colors text-sm disabled:opacity-50">
             {loading === 'monthly' ? 'Redirecting...' : 'Start premium'}
           </button>
           <div className="text-[12px] text-gray-500 text-center mt-2 w-full mb-8">Cancel anytime &middot; 7-day money back guarantee</div>
           <ul className="flex flex-col gap-3 font-body text-[13px] text-gray-700 dark:text-gray-300 w-full">
              <li className="flex gap-3 font-bold text-gray-900 dark:text-white"><span className="text-brand-blue">✓</span> Everything in Free</li>
              <li className="flex gap-3"><span className="text-brand-blue">✓</span> All 4 paid digital products included</li>
              <li className="flex gap-3"><span className="text-brand-blue">✓</span> Qatar hub — full access</li>
              <li className="flex gap-3"><span className="text-brand-blue">✓</span> Document requirements by nationality</li>
              <li className="flex gap-3"><span className="text-brand-blue">✓</span> Immigration procedures step by step</li>
              <li className="flex gap-3"><span className="text-brand-blue">✓</span> Interview preparation materials</li>
              <li className="flex gap-3"><span className="text-brand-blue">✓</span> Housing and cost of living guides</li>
              <li className="flex gap-3"><span className="text-brand-blue">✓</span> School qualification requirements</li>
              <li className="flex gap-3"><span className="text-brand-blue">✓</span> First 90 days checklist</li>
              <li className="flex gap-3 opacity-60"><span className="text-brand-blue">✓</span> Canada hub (coming soon)</li>
              <li className="flex gap-3 opacity-60"><span className="text-brand-blue">✓</span> UAE hub (coming soon)</li>
              <li className="flex gap-3"><span className="text-brand-blue">✓</span> Priority email support</li>
           </ul>
        </div>

        {/* Card 3 - Premium Annual */}
        <div className="bg-white dark:bg-[#13151f] rounded-[24px] p-8 border-2 border-brand-gold shadow-lg flex flex-col items-start mt-4 relative">
           <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-brand-gold text-brand-deep text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full whitespace-nowrap">Best Value</div>
           <div className="text-brand-gold font-bold uppercase tracking-wide text-[11px] mb-4 mt-2">Premium Annual</div>
           <div className="font-display font-black text-3xl text-gray-900 dark:text-white mb-1">$149<span className="text-lg font-body font-normal text-gray-500">/year</span></div>
           <div className="text-gray-500 font-body text-xs mb-1">($12.42/month — save 38%)</div>
           <div className="text-gray-500 font-body text-sm mb-6 mt-2">Best value for serious movers</div>
           <button onClick={() => handleSubscribe(annualPriceId, 'annual')} disabled={!!loading} className="w-full text-center bg-brand-gold hover:bg-yellow-400 text-brand-deep font-bold rounded-lg py-3 transition-colors text-sm disabled:opacity-50">
             {loading === 'annual' ? 'Redirecting...' : 'Get annual access'}
           </button>
           <div className="text-[12px] text-gray-500 text-center mt-2 w-full mb-8">Best value &middot; 7-day money back guarantee</div>
           <ul className="flex flex-col gap-3 font-body text-[13px] text-gray-700 dark:text-gray-300 w-full">
              <li className="flex gap-3 font-bold text-gray-900 dark:text-white"><span className="text-brand-blue">✓</span> Everything in Premium Monthly</li>
              <li className="flex gap-3"><span className="text-brand-blue">✓</span> 10% discount on coaching sessions</li>
              <li className="flex gap-3"><span className="text-brand-blue">✓</span> Early access to new country hubs</li>
              <li className="flex gap-3"><span className="text-brand-blue">✓</span> Founding member badge</li>
           </ul>
        </div>

      </div>

      {/* Promo Code Banner */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.4 }}
        className="mx-auto mt-[24px] max-w-[480px] p-[14px_20px] rounded-[12px] border border-[rgba(252,203,82,0.3)] dark:border-[rgba(252,203,82,0.2)] bg-[rgba(252,203,82,0.08)] dark:bg-[rgba(252,203,82,0.05)] flex items-center gap-[10px]"
      >
        <div className="text-[20px]">🏷️</div>
        <div className="text-left flex-1">
          <div className="font-body font-semibold text-[14px] text-gray-900 dark:text-gray-100">Have a promo code?</div>
          <div className="font-body text-[13px] text-gray-500 dark:text-gray-400 leading-[1.5]">Enter it on the next page when you click Subscribe — look for 'Add promotion code' on the Stripe checkout screen.</div>
        </div>
      </motion.div>
    </div>
  );
}
