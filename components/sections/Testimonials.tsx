"use client";

import { ScrollReveal } from "../ui/ScrollReveal";

const testimonials = [
  {
    name: "Sarah Mitchell",
    role: "Primary Teacher",
    location: "Now teaching in Doha, Qatar",
    text: "I had been thinking about teaching internationally for three years but kept putting it off because I didn't know where to start. The Country Comparison Tool gave me exactly what I needed — a clear, side-by-side picture of what each destination actually looked like. Within two weeks I had narrowed my search to two countries. I accepted an offer in Qatar four months later.",
  },
  {
    name: "David Okonkwo",
    role: "Secondary Maths Teacher",
    location: "Now teaching in Dubai, UAE",
    text: "The International Teaching Market Overview gave me data I couldn't find anywhere else in one place — salary benchmarks, hiring timelines, subject demand by region. As someone moving to the Middle East for the first time with a family, I needed more than opinions from Facebook groups. This gave me real numbers and the confidence to negotiate a significantly better package.",
  }
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-white dark:bg-[#0a0b14] relative">
      <div className="container mx-auto px-6 md:px-12">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="font-display font-black text-4xl md:text-5xl mb-4 text-gray-900 dark:text-white">
              Don&apos;t just take <span className="text-brand-blue italic">my word for it.</span>
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {testimonials.map((t, i) => (
            <ScrollReveal key={i} delay={i * 0.2}>
              <div className="bg-gray-50 dark:bg-[#121324] border border-gray-200 dark:border-gray-800 p-8 rounded-2xl h-full flex flex-col relative">
                <div className="text-brand-gold mb-6 text-xl">★★★★★</div>
                <p className="text-gray-700 dark:text-gray-300 italic mb-8 leading-relaxed flex-1">&quot;{t.text}&quot;</p>
                <div>
                  <h4 className="font-bold text-gray-900 dark:text-white">{t.name}</h4>
                  <p className="text-sm text-gray-500">{t.role} &bull; {t.location}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
