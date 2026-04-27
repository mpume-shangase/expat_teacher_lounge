"use client";

import { ScrollReveal } from "../ui/ScrollReveal";
import { Send } from "lucide-react";

export default function EmailCapture() {
  return (
    <section className="py-24 bg-white dark:bg-[#0a0b14] relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <ScrollReveal>
          <div className="bg-brand-deep rounded-3xl p-8 md:p-16 text-center max-w-4xl mx-auto shadow-2xl relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-blue blur-[80px] rounded-full opacity-50 -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-gold blur-[80px] rounded-full opacity-20 translate-y-1/2 -translate-x-1/2" />
            
            <div className="relative z-10">
              <h2 className="font-display font-black text-4xl md:text-5xl mb-6 text-white leading-tight">
                Relocation intel,<br />straight to your inbox.
              </h2>
              <p className="text-blue-100 text-lg mb-10 max-w-2xl mx-auto">
                Visa updates, salary benchmarks, and destination guides for teachers serious about their next move.
              </p>
              
              <form className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto" onSubmit={(e) => e.preventDefault()}>
                <input 
                  type="email" 
                  name="email" 
                  placeholder="Enter your email address" 
                  className="flex-1 px-6 py-4 rounded-full bg-white/10 border border-white/20 text-white placeholder:text-blue-200 focus:outline-none focus:ring-2 focus:ring-brand-gold backdrop-blur-sm"
                  required
                />
                <button 
                  type="submit" 
                  className="bg-brand-gold hover:bg-yellow-400 text-brand-deep px-8 py-4 rounded-full font-bold transition-transform hover:-translate-y-1 hover:shadow-lg flex items-center justify-center"
                >
                  <Send className="w-5 h-5 mr-2" />
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
