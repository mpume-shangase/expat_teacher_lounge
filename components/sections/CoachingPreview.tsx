"use client";

import { ScrollReveal } from "../ui/ScrollReveal";
import Image from "next/image";

export default function CoachingPreview() {
  return (
    <section className="py-24 bg-[#0a0b14] relative text-white overflow-hidden">
      {/* Abstract Background Element */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-deep/10 blur-[100px] rounded-full pointer-events-none -translate-y-1/2 translate-x-1/4" />
      
      <div className="container mx-auto px-6 md:px-12 relative z-10 flex flex-col lg:flex-row items-center">
        <div className="w-full lg:w-1/2 lg:pr-16 mb-16 lg:mb-0">
          <ScrollReveal>
            <h2 className="font-display font-black text-4xl md:text-5xl mb-6 leading-tight text-white">Need a <span className="italic text-brand-blue">Strategic Partner?</span></h2>
            <p className="text-gray-400 text-lg mb-8 leading-relaxed">Stop guessing what a &quot;good&quot; package looks like. Book a 1-on-1 strategy session to review your contract, optimize your CV, and negotiate exactly what you&apos;re worth.</p>
            
            <div className="space-y-6 mb-10">
              <div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-md">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-bold text-xl text-white">Relocation Strategy</h3>
                  <span className="text-brand-gold font-bold text-xl">$97</span>
                </div>
                <p className="text-gray-400 text-sm">60 minute structured sprint via Google Meet.</p>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-md">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-bold text-xl text-white">Contract Review</h3>
                  <span className="text-brand-gold font-bold text-xl">$77</span>
                </div>
                <p className="text-gray-400 text-sm">45 minute review session before you sign.</p>
              </div>
            </div>

            <a href="/coaching" className="inline-block bg-brand-blue hover:bg-brand-deep text-white px-8 py-4 rounded-full font-medium transition-all hover:-translate-y-1">
              View Coaching Packages
            </a>
          </ScrollReveal>
        </div>
        
        <div className="w-full lg:w-1/2 h-[500px] lg:h-[700px] relative">
          <ScrollReveal delay={0.2} y={50} className="w-full h-full relative">
            <Image 
              src="/images/Edwina_delivering_a_presentation.png"
              alt="Edwina coaching teachers"
              fill
              className="object-cover rounded-2xl grayscale hover:grayscale-0 transition-all duration-1000"
            />
            {/* Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0b14] via-[#0a0b14]/50 to-transparent lg:hidden pointer-events-none rounded-2xl" />
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
