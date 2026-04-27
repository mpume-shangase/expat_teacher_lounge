"use client";
import React from 'react';
import { motion } from 'framer-motion';

export function VideoEmbed({ src, caption }: { src: string, caption?: string }) {
  return (
    <motion.div 
      initial={{ y: 30, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true, amount: 0.1 }}
      className="my-10"
    >
      <div className="relative w-full pb-[56.25%] rounded-xl overflow-hidden bg-[#0a0a14] shadow-lg">
        <iframe
          src={src}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="absolute top-0 left-0 w-full h-full border-0"
        ></iframe>
      </div>
      {caption && (
        <p className="mt-3 text-[14px] italic text-gray-500 dark:text-gray-400 font-body text-center">
          {caption}
        </p>
      )}
    </motion.div>
  );
}
