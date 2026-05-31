"use client";

import Image from "next/image";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Download, FileText, Compass, BookOpen, Users, ArrowRight } from "lucide-react";

interface Product {
  title: string;
  price: string;
  link: string;
  image: string | null;
  description: string;
  features?: string[];
  ctaText: string;
}

const guides: Product[] = [
  {
    title: "International Teaching Market Overview 2025",
    price: "$5.99",
    link: "https://buy.stripe.com/14A8wHeGR7Xs2pC9ICc3m00",
    image: "/images/Edwina_reading_a_book.png",
    description: "A comprehensive guide on salary benchmarks, benefits package standards, and key international teaching hubs.",
    ctaText: "Purchase Now"
  }
];

const interactiveTools: Product[] = [
  {
    title: "Personal Goal Assessment",
    price: "$6.00",
    link: "https://buy.stripe.com/5kQ4grbuF1z42pC1c6c3m01",
    image: "/images/Thumbnail-Personal Goals Assesssment.png",
    description: "Align your professional development, financial goals, and personal life prior to selecting a target country.",
    ctaText: "Purchase Now"
  },
  {
    title: "Country Comparison Tool",
    price: "$7.99",
    link: "https://buy.stripe.com/3cI6ozfKV1z43tGaMGc3m02",
    image: "/images/Thumbnail-Country Comparison Tool.png",
    description: "Compare cost of living, savings potential, visa rules, and lifestyle factors across top expat teacher destinations.",
    ctaText: "Purchase Now"
  },
  {
    title: "Country Decision Matrix",
    price: "$5.99",
    link: "https://buy.stripe.com/14A4gr7epgtYd4g9ICc3m03",
    image: "/images/Thumbnail-Country Decision Matrix.png",
    description: "A structured, objective framework to narrow down your country options and make a final relocation decision with confidence.",
    ctaText: "Purchase Now"
  }
];

const coaching: Product[] = [
  {
    title: "Relocation Strategy Session",
    price: "$97",
    link: "/coaching#sessions",
    image: "/images/Edwina_delivering_a_presentation.png",
    description: "60-minute structured sprint via Google Meet. Deep dive into target countries, optimize CV, and design your playbook.",
    features: [
      "Targeted country selection strategy",
      "C.V. & Cover Letter optimization",
      "Action plan delivered in 24 hours"
    ],
    ctaText: "Book Session"
  },
  {
    title: "Contract Review Session",
    price: "$77",
    link: "/coaching#sessions",
    image: "/images/Edwina_Teaching.png",
    description: "45-minute contract analysis session. Line-by-line review, flag hidden issues, benchmark benefits, and prep negotiation strategy.",
    features: [
      "Line-by-line contract analysis",
      "Salary benchmarking vs market rate",
      "Benefit & allowance evaluation"
    ],
    ctaText: "Book Session"
  }
];

const freeResources: Product[] = [
  {
    title: "Qatar Document Attestation Checklist",
    price: "Free",
    link: "https://drive.google.com/file/d/1ugj0TeUoQ7Z6zT8QaW6QcQdu5Y4l99xJ/view?usp=sharing",
    image: "/images/Thumbnail- Documentation Checklist.png",
    description: "Step-by-step instructions for certifying your credentials for Qatar.",
    ctaText: "Download Free"
  },
  {
    title: "Qatar Teacher Immigration Checklist",
    price: "Free",
    link: "https://drive.google.com/file/d/1UMgNsJjvVQzCXEMbJAYksE3BGLnTU_z8/view?usp=sharing",
    image: "/images/Thumbnail - Qatar Teacher Immigration Checklist.png",
    description: "Immigration steps, medical tests, and fingerprint clearance walkthrough.",
    ctaText: "Download Free"
  },
  {
    title: "Guide to Reputable British & American Schools in Qatar",
    price: "Free",
    link: "https://drive.google.com/file/d/1q-gX_7FJ61zy3QC5Loc1vRQQdqavwRnE/view?usp=sharing",
    image: "/images/thumbnail - Navigation Guide.png",
    description: "Curated list of tier-1 and tier-2 international schools in Doha.",
    ctaText: "Download Free"
  },
  {
    title: "International Teaching Resource & Navigation Guide",
    price: "Free",
    link: "https://drive.google.com/file/d/16wDe6ei6MkTz-KbNmbf9DeemGCiOjHOU/view?usp=drive_link",
    image: "/images/thumbnail_international _teaching_research _resources_navigation_guide.png",
    description: "Essential links, recruitment portals, and resources for landing a global teaching job.",
    ctaText: "Download Free"
  }
];

export default function ProductsClient() {
  const sections = [
    { id: "guides", label: "Guides", icon: BookOpen },
    { id: "tools", label: "Interactive Tools", icon: Compass },
    { id: "coaching", label: "Coaching", icon: Users },
    { id: "free", label: "Free Resources", icon: Download }
  ];

  const handleScroll = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 140; // account for sticky header & subnav
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <div className="flex flex-col bg-white dark:bg-[#0a0b14] min-h-screen">
      {/* Hero */}
      <section className="relative h-[40vh] md:h-[50vh] flex items-center justify-center overflow-hidden">
        <Image 
          src="/images/Edwina_working_with_a_student.png"
          alt="Edwina working with a student"
          fill
          className="object-cover object-top"
          priority
        />
        <div className="absolute inset-0 bg-[#0a0b14]/75" />
        <div className="absolute inset-0 bg-gradient-to-t from-white dark:from-[#0a0b14] to-transparent" />
        
        <div className="container mx-auto px-6 md:px-12 relative z-10 text-center mt-12">
          <ScrollReveal>
            <h1 className="font-display font-black text-4xl md:text-6xl text-white mb-4 leading-tight">
              Empower your <span className="text-brand-blue italic">transition.</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
              Premium intelligence, datasets, services, and decision tools.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Sticky Sub-Navigation */}
      <section className="sticky top-20 z-40 bg-white/80 dark:bg-[#0a0b14]/80 backdrop-blur-md border-b border-gray-100 dark:border-gray-900 py-4">
        <div className="container mx-auto px-6 md:px-12">
          <div className="flex items-center justify-center overflow-x-auto no-scrollbar gap-2 md:gap-4">
            {sections.map((section) => {
              const Icon = section.icon;
              return (
                <button
                  key={section.id}
                  onClick={() => handleScroll(section.id)}
                  className="flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-bold whitespace-nowrap transition-all duration-300 bg-gray-50 dark:bg-[#121324] hover:bg-brand-blue hover:text-white text-gray-600 dark:text-gray-400 border border-gray-200/50 dark:border-gray-800/50 hover:border-brand-blue dark:hover:border-brand-blue"
                >
                  <Icon className="w-4 h-4" />
                  {section.label}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Main Content Sections */}
      <div className="container mx-auto px-6 md:px-12 py-16 space-y-24">
        
        {/* Guides Section */}
        <section id="guides" className="scroll-mt-36">
          <ScrollReveal>
            <div className="flex items-center gap-3 mb-2">
              <BookOpen className="w-6 h-6 text-brand-blue" />
              <h2 className="font-display font-black text-3xl md:text-4xl text-gray-900 dark:text-white">Guides</h2>
            </div>
            <p className="text-gray-500 dark:text-gray-400 mb-10 max-w-3xl">
              Premium handbooks and reports compiled from 18 years of global education market experience.
            </p>
          </ScrollReveal>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {guides.map((product, i) => (
              <ProductCard key={product.title} product={product} category="guides" index={i} />
            ))}
          </div>
        </section>

        {/* Interactive Tools Section */}
        <section id="tools" className="scroll-mt-36">
          <ScrollReveal>
            <div className="flex items-center gap-3 mb-2">
              <Compass className="w-6 h-6 text-emerald-500" />
              <h2 className="font-display font-black text-3xl md:text-4xl text-gray-900 dark:text-white">Interactive Tools</h2>
            </div>
            <p className="text-gray-500 dark:text-gray-400 mb-10 max-w-3xl">
              Custom spreadsheets, comparison matrices, and goal-setting planners built specifically for educators.
            </p>
          </ScrollReveal>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {interactiveTools.map((product, i) => (
              <ProductCard key={product.title} product={product} category="tools" index={i} />
            ))}
          </div>
        </section>

        {/* Coaching Section */}
        <section id="coaching" className="scroll-mt-36">
          <ScrollReveal>
            <div className="flex items-center gap-3 mb-2">
              <Users className="w-6 h-6 text-brand-gold" />
              <h2 className="font-display font-black text-3xl md:text-4xl text-gray-900 dark:text-white">1-on-1 Coaching</h2>
            </div>
            <p className="text-gray-500 dark:text-gray-400 mb-10 max-w-3xl">
              Direct, personalized strategy sessions to review contracts, optimize CVs, and negotiate exactly what you're worth.
            </p>
          </ScrollReveal>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coaching.map((product, i) => (
              <ProductCard key={product.title} product={product} category="coaching" index={i} />
            ))}
          </div>
        </section>

        {/* Free Resources Section */}
        <section id="free" className="scroll-mt-36">
          <ScrollReveal>
            <div className="flex items-center gap-3 mb-2">
              <Download className="w-6 h-6 text-purple-500" />
              <h2 className="font-display font-black text-3xl md:text-4xl text-gray-900 dark:text-white">Free Resources</h2>
            </div>
            <p className="text-gray-500 dark:text-gray-400 mb-10 max-w-3xl">
              Checklists and guides to navigate attestation, immigration requirements, and school selections.
            </p>
          </ScrollReveal>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {freeResources.map((product, i) => (
              <ProductCard key={product.title} product={product} category="free" index={i} />
            ))}
          </div>
        </section>

      </div>
    </div>
  );
}

function ProductCard({ product, category, index }: { product: Product; category: string; index: number }) {
  const isCoaching = category === "coaching";
  const isFree = category === "free";

  const getCategoryColor = (cat: string) => {
    switch (cat) {
      case "guides":
        return "text-brand-blue bg-brand-blue/10 border-brand-blue/20";
      case "tools":
        return "text-emerald-500 bg-emerald-500/10 border-emerald-500/20";
      case "coaching":
        return "text-brand-gold bg-brand-gold/10 border-brand-gold/20";
      case "free":
        return "text-purple-500 bg-purple-500/10 border-purple-500/20";
      default:
        return "text-gray-500 bg-gray-500/10 border-gray-500/20";
    }
  };

  const getCategoryLabel = (cat: string) => {
    switch (cat) {
      case "guides":
        return "Guide";
      case "tools":
        return "Interactive Tool";
      case "coaching":
        return "1-on-1 Coaching";
      case "free":
        return "Free Resource";
      default:
        return "Resource";
    }
  };

  return (
    <ScrollReveal delay={index * 0.05}>
      <div 
        className={`group flex flex-col h-full bg-white dark:bg-[#121324] rounded-2xl overflow-hidden border transition-all duration-300 ${
          isCoaching 
            ? "border-brand-gold/30 hover:border-brand-gold shadow-sm hover:shadow-brand-gold/5" 
            : isFree
            ? "border-purple-500/20 hover:border-purple-500 shadow-sm"
            : "border-gray-200 dark:border-gray-800 hover:border-brand-blue shadow-sm hover:shadow-brand-blue/5"
        }`}
      >
        {/* Product Thumbnail / Image */}
        <div className="relative aspect-[16/10] bg-gray-50 dark:bg-black/40 overflow-hidden border-b border-gray-100 dark:border-gray-900/50">
          {product.image ? (
            <Image 
              src={product.image} 
              alt={product.title} 
              fill 
              className="object-cover group-hover:scale-[1.03] transition-transform duration-500"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-brand-blue/5 text-brand-blue">
              <FileText className="w-16 h-16 opacity-40" />
            </div>
          )}
          
          {/* Category Label Pill */}
          <div className="absolute top-4 left-4">
            <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-bold border backdrop-blur-md ${getCategoryColor(category)}`}>
              {getCategoryLabel(category)}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="flex flex-col flex-grow p-6 md:p-8">
          <h3 className="font-display font-black text-2xl mb-3 text-gray-900 dark:text-white leading-tight group-hover:text-brand-blue dark:group-hover:text-brand-blue transition-colors">
            {product.title}
          </h3>
          
          <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-6 flex-grow">
            {product.description}
          </p>

          {/* Special Features list for Coaching */}
          {product.features && (
            <ul className="mb-6 space-y-2 border-t border-gray-100 dark:border-gray-800 pt-4">
              {product.features.map((feature, idx) => (
                <li key={idx} className="flex items-center text-xs text-gray-500 dark:text-gray-400">
                  <span className="text-brand-gold mr-2">✓</span>
                  {feature}
                </li>
              ))}
            </ul>
          )}

          {/* CTA / Price row */}
          <div className="pt-6 mt-auto border-t border-gray-100 dark:border-gray-800 flex items-center justify-between">
            <div className="flex flex-col">
              <span className="text-xs text-gray-400 font-semibold uppercase tracking-wider">Price</span>
              <span className={`text-2xl font-black ${isFree ? "text-purple-500" : isCoaching ? "text-brand-gold" : "text-gray-900 dark:text-white"}`}>
                {product.price}
              </span>
            </div>
            
            <a 
              href={product.link}
              target={isFree || !product.link.startsWith("/") ? "_blank" : "_self"}
              rel={isFree || !product.link.startsWith("/") ? "noopener noreferrer" : ""}
              className={`inline-flex items-center gap-2 px-6 py-3 rounded-full font-bold text-sm tracking-wide transition-all duration-300 ${
                isFree
                  ? "bg-purple-600 hover:bg-purple-700 text-white shadow-md shadow-purple-600/10 hover:shadow-purple-700/25"
                  : isCoaching
                  ? "bg-brand-gold hover:bg-yellow-400 text-brand-deep shadow-md shadow-brand-gold/10 hover:shadow-yellow-400/25"
                  : "bg-brand-blue hover:bg-brand-deep text-white shadow-md shadow-brand-blue/10 hover:shadow-brand-deep/25"
              } hover:-translate-y-0.5`}
            >
              {product.ctaText}
              {isFree ? (
                <Download className="w-4 h-4" />
              ) : (
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              )}
            </a>
          </div>
        </div>
      </div>
    </ScrollReveal>
  );
}
