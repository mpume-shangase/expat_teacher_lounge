"use client";

import { ScrollReveal } from "../ui/ScrollReveal";
import { Download } from "lucide-react";
import Image from "next/image";

export const freeResources = [
  { title: "Qatar Document Attestation Checklist", link: "https://drive.google.com/file/d/1ugj0TeUoQ7Z6zT8QaW6QcQdu5Y4l99xJ/view?usp=sharing", image: "/images/Thumbnail- Documentation Checklist.png" },
  { title: "Qatar Teacher Immigration Checklist", link: "https://drive.google.com/file/d/1UMgNsJjvVQzCXEMbJAYksE3BGLnTU_z8/view?usp=sharing", image: "/images/Thumbnail - Qatar Teacher Immigration Checklist.png" },
  { title: "Guide to Reputable British & American Schools in Qatar", link: "https://drive.google.com/file/d/1q-gX_7FJ61zy3QC5Loc1vRQQdqavwRnE/view?usp=sharing", image: "/images/thumbnail - Navigation Guide.png" },
  { title: "International Teaching Resource & Navigation Guide", link: "https://drive.google.com/file/d/16wDe6ei6MkTz-KbNmbf9DeemGCiOjHOU/view?usp=drive_link", image: "/images/thumbnail_international _teaching_research _resources_navigation_guide.png" },
];

export default function FreeResources() {
  return (
    <section className="py-24 bg-gray-50 dark:bg-[#0d0e1b] relative">
      <div className="container mx-auto px-6 md:px-12">
        <ScrollReveal>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="font-display font-black text-4xl md:text-5xl mb-6 text-gray-900 dark:text-white">
              Free <span className="text-brand-blue italic">Resources.</span>
            </h2>
            <p className="text-gray-600 dark:text-gray-400 text-lg">Kickstart your relocation journey with checklists and guides we use every day.</p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {freeResources.map((resource, i) => (
            <ScrollReveal key={i} delay={i * 0.1}>
              <a
                href={resource.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center p-6 bg-white dark:bg-[#121324] border border-gray-200 dark:border-gray-800 rounded-2xl hover:border-brand-blue hover:shadow-lg transition-all duration-300 h-full"
              >
                {resource.image ? (
                   <div className="relative w-20 h-24 flex-shrink-0 rounded-lg overflow-hidden mr-6 group-hover:scale-105 transition-transform duration-300 border border-gray-200 dark:border-gray-800 bg-gray-100/50 dark:bg-black/50">
                     <Image src={resource.image} alt={resource.title} fill className="object-contain p-2" />
                   </div>
                 ) : (
                   <div className="bg-brand-blue/10 p-4 rounded-xl text-brand-blue mr-6 flex-shrink-0 group-hover:scale-110 group-hover:bg-brand-blue group-hover:text-white transition-all duration-300">
                     <Download className="w-6 h-6" />
                   </div>
                 )}
                <h3 className="font-display font-bold text-lg text-gray-900 dark:text-gray-100 group-hover:text-brand-blue transition-colors flex-1 pr-4">{resource.title}</h3>
              </a>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
