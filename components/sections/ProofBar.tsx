"use client";

import { CountUp } from "../ui/CountUp";

const stats = [
  { value: 2000, suffix: "+", label: "Teachers helped" },
  { value: 16, suffix: "", label: "Countries covered" },
  { value: 18, suffix: " yrs", label: "Teaching experience" },
  { value: 4, suffix: ".9", label: "Average rating" },
];

export default function ProofBar() {
  return (
    <section className="bg-brand-deep text-white py-12 relative z-20">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-white/20">
          {stats.map((stat, i) => (
            <div key={i} className={`flex flex-col items-center justify-center text-center ${i % 2 !== 0 ? "" : ""} md:pl-8`}>
              <div className="text-4xl md:text-5xl font-display font-bold mb-2 text-brand-gold">
                <CountUp end={stat.value} suffix={stat.suffix} delay={0.2} />
              </div>
              <p className="text-white text-sm md:text-base font-medium opacity-90">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
