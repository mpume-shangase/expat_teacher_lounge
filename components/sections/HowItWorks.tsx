"use client";

import { ScrollReveal } from "../ui/ScrollReveal";
import { motion } from "framer-motion";

const steps = [
  { step: "01", title: "Information Gathering", desc: "We provide you with clear, accurate data on international teaching markets, eliminating the noise of Facebook forums." },
  { step: "02", title: "Strategic Positioning", desc: "Optimize your CV and interview strategy to stand out to premium tier 1 and tier 2 international schools." },
  { step: "03", title: "Contract Negotiation", desc: "Never sign blind. We help you review your offer and negotiate the true market rate for your experience." },
];

export default function HowItWorks() {
  return (
    <section className="py-24 bg-white dark:bg-[#0a0b14] relative text-gray-900 dark:text-white">
      <div className="container mx-auto px-6 md:px-12">
        <ScrollReveal>
          <div className="mb-16">
            <h2 className="font-display font-black text-4xl md:text-5xl mb-6 leading-tight">A proven framework for <br/><span className="italic text-brand-blue">success.</span></h2>
            <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl leading-relaxed">Stop guessing. Follow the exact step-by-step roadmap that has successfully placed hundreds of teachers into life-changing international roles.</p>
          </div>
        </ScrollReveal>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {steps.map((step, i) => (
            <ScrollReveal key={i} delay={0.2 + i * 0.1}>
              <div className="border-t-2 border-brand-blue pt-8 relative overflow-hidden group h-full">
                <motion.div 
                  initial={{ height: "0%" }}
                  whileHover={{ height: "100%" }}
                  className="absolute top-0 left-0 right-0 bg-brand-blue/5 -z-10 transition-all duration-300"
                />
                <h3 className="font-display text-7xl font-black text-brand-gold/30 dark:text-brand-gold/20 mb-4">{step.step}</h3>
                <h4 className="font-display font-bold text-2xl mb-4 group-hover:text-brand-blue transition-colors text-gray-900 dark:text-white">{step.title}</h4>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed font-body">{step.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
