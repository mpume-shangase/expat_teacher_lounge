"use client";
import React from 'react';
import { motion } from 'framer-motion';

type CTAButton = {
  text: string;
  href: string;
  type: 'solid' | 'ghost';
};

export function CTABox({ title, body, buttons }: { title: string, body: string, buttons: CTAButton[] }) {
  return (
    <motion.div 
      initial={{ scale: 0.97, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      viewport={{ once: true, amount: 0.1 }}
      className="bg-brand-deep rounded-[14px] p-8 text-center my-12"
    >
      <h3 className="font-display font-bold text-[22px] text-brand-gold mb-3">{title}</h3>
      <p className="text-white/80 font-body text-[15px] mb-6 max-w-lg mx-auto leading-relaxed">{body}</p>
      <div className="flex flex-col sm:flex-row justify-center gap-3">
        {buttons.map((btn, i) => {
          const isExternal = btn.href.startsWith('http');
          return (
            <a
              key={i}
              href={btn.href}
              target={isExternal ? '_blank' : undefined}
              rel={isExternal ? 'noopener noreferrer' : undefined}
              className={`px-6 py-3 rounded-full font-bold transition-all text-sm flex items-center justify-center ${
                btn.type === 'solid'
                  ? 'bg-brand-gold text-brand-deep hover:bg-yellow-400'
                  : 'bg-transparent border border-white/30 text-white hover:bg-white/10'
              }`}
            >
              {btn.text}
            </a>
          );
        })}
      </div>
    </motion.div>
  );
}
