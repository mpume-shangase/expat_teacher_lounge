"use client";

import { ScrollReveal } from "../ui/ScrollReveal";
import { motion } from "framer-motion";
import { ArrowRight, FileText } from "lucide-react";
import Image from "next/image";

export const productsList = [
  { title: "International Teaching Market Overview 2025", price: "$5.99", link: "https://buy.stripe.com/14A8wHeGR7Xs2pC9ICc3m00", image: null },
  { title: "Personal Goal Assessment", price: "$6.00", link: "https://buy.stripe.com/5kQ4grbuF1z42pC1c6c3m01", image: "/images/Thumbnail-Personal Goals Assesssment.png" },
  { title: "Country Comparison Tool", price: "$7.99", link: "https://buy.stripe.com/3cI6ozfKV1z43tGaMGc3m02", image: "/images/Thumbnail-Country Comparison Tool.png" },
  { title: "Country Decision Matrix", price: "$5.99", link: "https://buy.stripe.com/14A4gr7epgtYd4g9ICc3m03", image: "/images/Thumbnail-Country Decision Matrix.png" },
];

export default function Products() {
  return (
    <section className="py-24 bg-white dark:bg-[#0a0b14] relative">
      <div className="container mx-auto px-6 md:px-12">
        <ScrollReveal>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
            <div>
              <h2 className="font-display font-black text-4xl md:text-5xl mb-4 text-gray-900 dark:text-white">
                Start your <span className="text-brand-blue italic">journey.</span>
              </h2>
              <p className="text-gray-600 dark:text-gray-400 text-lg max-w-xl leading-relaxed">Premium guides and tools built specifically for educators moving abroad.</p>
            </div>
            <a href="/products" className="group mt-6 md:mt-0 inline-flex items-center text-brand-blue font-bold tracking-wide hover:text-brand-deep transition-colors">
              VIEW ALL PRODUCTS
              <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {productsList.map((product, i) => (
            <ScrollReveal key={i} delay={i * 0.1}>
               <motion.a
                 href={product.link}
                 target="_blank"
                 rel="noopener noreferrer"
                 whileHover={{ y: -8, rotate: 1 }}
                 className="relative group bg-gray-50 dark:bg-[#121324] border border-gray-200 dark:border-gray-800 rounded-2xl p-8 flex flex-col h-full overflow-hidden transition-shadow hover:shadow-2xl hover:shadow-brand-blue/10 block"
               >
                 <div className="absolute inset-0 w-[50%] h-full bg-gradient-to-r from-transparent via-white/40 dark:via-white/5 to-transparent -translate-x-[150%] animate-shimmer pointer-events-none hidden group-hover:block" />
                 
                 <div className="mb-auto relative z-10 w-full">
                   {product.image ? (
                     <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden mb-6 border border-gray-200 dark:border-gray-800 bg-gray-100/50 dark:bg-black/50">
                       <Image src={product.image} alt={product.title} fill className="object-contain p-4 group-hover:scale-105 transition-transform duration-500" />
                     </div>
                   ) : (
                     <div className="w-14 h-14 bg-brand-blue/10 rounded-full flex items-center justify-center mb-6 text-brand-blue">
                       <FileText className="w-6 h-6" />
                     </div>
                   )}
                   <h3 className="font-display font-bold text-xl mb-4 text-gray-900 dark:text-white group-hover:text-brand-blue transition-colors leading-tight">{product.title}</h3>
                 </div>
                 
                 <div className="mt-8 flex items-center justify-between border-t border-gray-200 dark:border-gray-700/50 pt-6 relative z-10">
                   <span className="font-bold text-xl text-gray-900 dark:text-white">{product.price}</span>
                   <span className="text-brand-blue group-hover:text-brand-deep font-medium transition-colors">Buy now &rarr;</span>
                 </div>
               </motion.a>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
