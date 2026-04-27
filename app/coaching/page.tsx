"use client";

import Image from "next/image";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { CheckCircle2 } from "lucide-react";
import { useState } from "react";

function AccordionItem({ question, answer }: { question: string, answer: string }) {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div className="border-b border-gray-200 dark:border-gray-800 py-6">
      <button 
        className="w-full flex justify-between items-center text-left focus:outline-none" 
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="font-display font-bold text-xl text-gray-900 dark:text-white">{question}</span>
        <span className={`text-brand-blue transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>▼</span>
      </button>
      <div 
        className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0'}`}
      >
        <p className="text-gray-600 dark:text-gray-400 leading-relaxed font-body">{answer}</p>
      </div>
    </div>
  );
}

export default function CoachingPage() {
  return (
    <div className="flex flex-col bg-white dark:bg-[#0a0b14]">
      {/* Hero */}
      <section className="relative h-[60vh] md:h-[70vh] flex items-center justify-center overflow-hidden">
        <Image 
          src="/images/Edwina_delivering_a_presentation.png"
          alt="Edwina coaching"
          fill
          className="object-cover object-top"
          priority
        />
        <div className="absolute inset-0 bg-[#0a0b14]/75" />
        <div className="absolute inset-0 bg-gradient-to-t from-white dark:from-[#0a0b14] to-transparent" />
        
        <div className="container mx-auto px-6 md:px-12 relative z-10 text-center mt-20">
          <ScrollReveal>
            <h1 className="font-display font-black text-5xl md:text-7xl text-white mb-6">
              1-on-1 <span className="text-brand-gold italic">Strategy.</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto mb-10">
              Clear the noise. Get direct, personalized guidance on your relocation.
            </p>
            <a href="#sessions" className="bg-brand-blue hover:bg-brand-deep text-white px-8 py-4 rounded-full font-bold transition-all inline-block hover:-translate-y-1 hover:shadow-lg">
              View Packages
            </a>
          </ScrollReveal>
        </div>
      </section>

      {/* Sessions */}
      <section id="sessions" className="py-24">
        <div className="container mx-auto px-6 md:px-12 max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            <ScrollReveal>
              <div className="bg-gray-50 dark:bg-[#121324] border border-gray-200 dark:border-gray-800 rounded-3xl p-10 flex flex-col h-full relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-brand-blue/10 rounded-full blur-[40px]" />
                <h3 className="font-display font-black text-3xl mb-2 text-gray-900 dark:text-white">Relocation Strategy Session</h3>
                <p className="text-gray-500 mb-6 font-medium tracking-wide">60 MINUTES • GOOGLE MEET</p>
                <div className="text-5xl font-black text-brand-blue mb-8">$97</div>
                
                <ul className="space-y-4 mb-10 flex-1">
                  {[
                    "Deep dive into your personal and professional priorities",
                    "Targeted country selection strategy",
                    "C.V. and cover letter review & optimization",
                    "Interview technique preparation",
                    "Written action plan delivered within 24 hours"
                  ].map((feature, i) => (
                    <li key={i} className="flex items-start text-gray-700 dark:text-gray-300">
                      <CheckCircle2 className="w-6 h-6 text-brand-gold mr-3 flex-shrink-0" />
                      <span className="leading-relaxed">{feature}</span>
                    </li>
                  ))}
                </ul>
                <a href="#booking" className="w-full block text-center bg-gray-900 dark:bg-white text-white dark:text-gray-900 py-4 rounded-full font-bold hover:scale-[1.02] transition-transform">
                   Select Package
                </a>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div className="bg-brand-deep border border-brand-deep rounded-3xl p-10 flex flex-col h-full relative overflow-hidden text-white shadow-2xl hover:shadow-blue-900/20 transition-all">
                <div className="absolute top-0 right-0 w-32 h-32 bg-brand-gold/20 rounded-full blur-[40px]" />
                <h3 className="font-display font-black text-3xl mb-2">Contract Review Session</h3>
                <p className="text-blue-200 mb-6 font-medium tracking-wide">45 MINUTES • GOOGLE MEET</p>
                <div className="text-5xl font-black text-brand-gold mb-8">$77</div>
                
                <ul className="space-y-4 mb-10 flex-1 relative z-10">
                  {[
                    "Line-by-line contract analysis before you sign",
                    "Hidden red flags and missing clauses identified",
                    "Salary benchmarking against true market rate",
                    "Negotiation coaching and exact phrasing to use",
                    "Benefit evaluation (housing, insurance, flights)"
                  ].map((feature, i) => (
                    <li key={i} className="flex items-start text-blue-50">
                      <CheckCircle2 className="w-6 h-6 text-brand-gold mr-3 flex-shrink-0" />
                      <span className="leading-relaxed">{feature}</span>
                    </li>
                  ))}
                </ul>
                <a href="#booking" className="w-full block text-center bg-brand-gold text-brand-deep py-4 rounded-full font-black hover:bg-yellow-400 hover:scale-[1.02] transition-transform relative z-10">
                   Select Package
                </a>
              </div>
            </ScrollReveal>

          </div>
        </div>
      </section>

      {/* Calendly Placeholder */}
      <section id="booking" className="py-24 bg-gray-50 dark:bg-[#0d0e1b] border-t border-gray-200 dark:border-gray-800">
        <div className="container mx-auto px-6 md:px-12 max-w-4xl text-center">
           <ScrollReveal>
             <h2 className="font-display font-black text-4xl mb-6 dark:text-white">Book your <span className="text-brand-blue italic">Session.</span></h2>
             <p className="text-gray-600 dark:text-gray-400 mb-12">Select an available time below. Payment is processed securely via Stripe.</p>
             <div className="bg-white dark:bg-[#121324] border border-gray-200 dark:border-gray-800 rounded-3xl h-[600px] flex items-center justify-center shadow-lg">
               <div className="text-gray-400 flex flex-col items-center">
                 <svg className="w-16 h-16 mb-4 text-gray-300 dark:text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                 <p className="font-bold text-xl">Calendly Widget Placeholder</p>
                 <p className="text-sm mt-2">Replace with Calendly inline embed code.</p>
               </div>
             </div>
           </ScrollReveal>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-white dark:bg-[#0a0b14]">
        <div className="container mx-auto px-6 md:px-12 max-w-3xl">
          <ScrollReveal>
            <h2 className="font-display font-black text-4xl md:text-5xl mb-12 text-center dark:text-white">Frequently Asked <span className="text-brand-gold italic">Questions.</span></h2>
          </ScrollReveal>
          
          <ScrollReveal delay={0.2}>
            <div className="border-t border-gray-200 dark:border-gray-800">
              <AccordionItem question="Is my payment secure?" answer="Yes. All payments are processed securely through Stripe. We do not store any of your credit card information locally." />
              <AccordionItem question="Can I reschedule my session?" answer="Yes, you can reschedule up to 24 hours before our scheduled time using the link in your confirmation email." />
              <AccordionItem question="What if I don't have my contract yet?" answer="The Contract Review session is best booked once you have an offer in hand. If you're still early in the process, the Relocation Strategy Session is the best place to start." />
              <AccordionItem question="Do you guarantee job placement?" answer="No. I am not a recruiter and do not guarantee placements. I provide independent, objective strategy and negotiation support to ensure you secure the best possible role on your own terms." />
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
