import React from 'react';
import Link from 'next/link';

export function Logo({ className = "" }: { className?: string }) {
  return (
    <Link href="/" className={`font-display font-black leading-none ${className} flex items-center flex-wrap`}>
      <span className="text-brand-blue uppercase mr-1">EXPAT</span>
      <span className="text-brand-deep uppercase mr-1">TEACHER&apos;S</span>
      <span className="bg-brand-gold text-brand-deep px-1.5 py-0.5 text-sm md:text-base leading-none inline-block transform -translate-y-0.5 uppercase tracking-wide">LOUNGE</span>
    </Link>
  );
}
