"use client";

import { ScrollReveal } from "../ui/ScrollReveal";

const destinations = [
  { name: "Qatar", desc: "High savings potential, modern infrastructure, and excellent flight connections to explore the globe." },
  { name: "UAE", desc: "Tax-free salaries, vibrant expat communities, and world-class premium amenities." },
  { name: "China", desc: "Unmatched saving potential and rapid professional development." },
  { name: "Saudi Arabia", desc: "The fastest growing education market globally with premium salary packages." },
];

export default function Destinations() {
  return (
    <section className="py-24 bg-gray-50 dark:bg-[#0d0e1b] relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
         <ScrollReveal>
            <h2 className="font-display font-black text-4xl md:text-5xl mb-12 text-gray-900 dark:text-white">
              Where will you <span className="text-brand-gold italic">teach next?</span>
            </h2>
         </ScrollReveal>

         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
           {destinations.map((dest, i) => (
             <ScrollReveal key={i} delay={i * 0.1}>
               <div className="group relative bg-white dark:bg-[#121324] border border-gray-200 dark:border-gray-800 p-8 rounded-xl overflow-hidden transition-all duration-500 hover:translate-x-4 hover:shadow-xl cursor-default h-full">
                 <div className="absolute left-0 top-0 bottom-0 w-0 bg-brand-blue transition-all duration-300 group-hover:w-2" />
                 <h3 className="font-display font-bold text-2xl mb-3 text-gray-900 dark:text-white transition-transform group-hover:translate-x-2">{dest.name}</h3>
                 <p className="text-gray-600 dark:text-gray-400 transition-transform group-hover:translate-x-2 leading-relaxed">{dest.desc}</p>
               </div>
             </ScrollReveal>
           ))}
         </div>
      </div>
    </section>
  );
}
