"use client";
import React from 'react';
import { motion } from 'framer-motion';

export function CheckList({ items }: { items: string[] }) {
  return (
    <motion.ul 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      className="my-8 rounded-xl border border-[rgba(0,0,0,0.08)] dark:border-[rgba(255,255,255,0.08)] bg-white dark:bg-[#121324] overflow-hidden shadow-sm"
    >
      {items.map((item, index) => (
        <li 
          key={index} 
          className="flex items-start p-4 border-b border-[rgba(0,0,0,0.05)] dark:border-[rgba(255,255,255,0.05)] last:border-0"
        >
          <div className="flex-shrink-0 mt-0.5">
            <svg className="w-5 h-5 text-brand-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <span className="ml-3 font-body text-gray-700 dark:text-gray-300 text-[16px] leading-[1.6]">
            {item}
          </span>
        </li>
      ))}
    </motion.ul>
  );
}
