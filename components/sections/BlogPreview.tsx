"use client";

import { ScrollReveal } from "../ui/ScrollReveal";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function BlogPreview() {
  return (
    <section className="py-24 bg-gray-50 dark:bg-[#0d0e1b] relative">
      <div className="container mx-auto px-6 md:px-12">
        <ScrollReveal>
          <div className="flex justify-between items-end mb-12">
            <h2 className="font-display font-black text-4xl md:text-5xl text-gray-900 dark:text-white">
              Latest from the <span className="text-brand-gold italic">Lounge.</span>
            </h2>
            <Link href="/blog" className="hidden md:flex items-center text-brand-blue font-bold tracking-wide hover:text-brand-deep transition-colors group">
              VIEW ALL POSTS
              <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <Link href="/blog/qatar-first-year" className="group block bg-white dark:bg-[#121324] border border-gray-200 dark:border-gray-800 rounded-2xl overflow-hidden hover:shadow-xl transition-shadow">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="relative h-64 md:h-full overflow-hidden">
                <Image 
                  src="/images/Edwina_Teaching.png" 
                  fill 
                  alt="Teaching in Qatar" 
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="p-8 md:p-12 flex flex-col justify-center">
                <div className="inline-block bg-brand-blue/10 text-brand-blue px-3 py-1 rounded-full text-xs font-bold mb-4 uppercase tracking-wider w-fit">Qatar</div>
                <h3 className="font-display font-bold text-2xl md:text-3xl lg:text-4xl mb-4 text-gray-900 dark:text-white group-hover:text-brand-blue transition-colors">
                  My First Year in Qatar: What I Wish I Knew Before Moving
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-6 line-clamp-3">
                  The immigration process is a marathon, housing is rarely what the contract describes, and the heat is definitely not a metaphor. Here is the unfiltered truth about relocating to Doha.
                </p>
                <div className="flex items-center text-sm text-gray-500 font-medium mt-auto">
                  <span>Edwina Shangase</span>
                  <span className="mx-2">•</span>
                  <span>9 min read</span>
                </div>
              </div>
            </div>
          </Link>
        </ScrollReveal>
        
        <Link href="/blog" className="mt-8 flex md:hidden items-center justify-center text-brand-blue font-bold tracking-wide">
          VIEW ALL POSTS
          <ArrowRight className="ml-2 w-5 h-5" />
        </Link>
      </div>
    </section>
  );
}
