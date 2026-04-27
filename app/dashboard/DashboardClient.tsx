"use client";
import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/navigation';

export default function DashboardClient({ success }: { success: boolean }) {
  const [show, setShow] = useState(success);
  const router = useRouter();

  useEffect(() => {
    if (show) {
      const timer = setTimeout(() => {
        setShow(false);
        router.replace('/dashboard');
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [show, router]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div 
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-[2px] p-6"
        >
          <motion.div 
            initial={{ scale: 0.9, opacity: 0, y: 20 }} animate={{ scale: 1, opacity: 1, y: 0 }} exit={{ scale: 0.9, opacity: 0, y: 20 }}
            className="bg-white dark:bg-[#13151f] rounded-[24px] p-10 max-w-[500px] w-full text-center shadow-2xl border border-[rgba(0,0,0,0.05)] dark:border-[#ffffff10]"
          >
            <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: "spring", delay: 0.2 }} className="w-20 h-20 bg-green-100 dark:bg-green-900/30 text-green-500 rounded-full flex items-center justify-center mx-auto mb-6 text-4xl">
              ✅
            </motion.div>
            <h2 className="font-display font-black text-3xl text-gray-900 dark:text-white mb-4">Welcome to Expat Teacher's Lounge Premium!</h2>
            <p className="text-gray-500 font-body text-[15px] mb-8 leading-relaxed">Your subscription is active. You now have full access to the hub and all resources.</p>
            <button onClick={() => { setShow(false); router.replace('/dashboard'); }} className="bg-brand-blue text-white w-full rounded-lg font-bold py-4 hover:bg-blue-600 transition-colors shadow-lg">
              Go to your dashboard
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
