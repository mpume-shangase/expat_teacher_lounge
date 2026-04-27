"use client";
import React from 'react';
import { motion } from 'framer-motion';

export function TipBox({ label, children, variant = 'tip' }: { label: string, children: React.ReactNode, variant?: 'tip' | 'warning' }) {
  const isTip = variant === 'tip';
  
  return (
    <motion.div 
      initial={{ x: -20, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      viewport={{ once: true, amount: 0.1 }}
      className={`rounded-xl p-[20px_24px] my-8 border ${
        isTip 
          ? 'bg-[#1C91D7]/[0.07] border-[#1C91D7]/20' 
          : 'bg-[#FCCB52]/10 border-[#FCCB52]/40'
      }`}
    >
      <div className={`text-[11px] uppercase font-bold tracking-[0.08em] mb-2 ${
        isTip ? 'text-brand-blue' : 'text-[#b45309]'
      }`}>
        {label}
      </div>
      <div className="text-[15px] text-[#1a1a2e] dark:text-white leading-relaxed font-body">
        {children}
      </div>
    </motion.div>
  );
}
