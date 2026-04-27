"use client";

import { ScrollReveal } from "../ui/ScrollReveal";

export default function AuthoritySection() {
  return (
    <section className="py-24 bg-brand-blue text-white relative overflow-hidden">
      {/* Decorative patterns */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full blur-[50px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-deep opacity-40 rounded-full blur-[80px] pointer-events-none" />
      
      <div className="container mx-auto px-6 md:px-12 text-center max-w-4xl relative z-10">
        <ScrollReveal>
          <h2 className="font-display font-black text-4xl md:text-5xl lg:text-6xl mb-8 leading-tight">
            I&apos;ve been in your shoes.
          </h2>
          <p className="text-lg md:text-xl md:leading-relaxed text-blue-50">
            For the last 18 years, I&apos;ve navigated curriculums in South Africa, the UK, Qatar, and Canada. 
            I&apos;ve seen teachers accept lowball offers, struggle with attestation, and land in bad accommodations—all because they didn&apos;t know the playbook.
          </p>
          <div className="w-24 h-1 bg-brand-gold mx-auto my-12" />
          <p className="font-display text-2xl md:text-3xl font-bold italic">
            I built Expat Teacher&apos;s Lounge so you don&apos;t have to make the same mistakes.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
