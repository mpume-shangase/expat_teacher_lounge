import Image from "next/image";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Download, FileText } from "lucide-react";

const productsList = [
  { title: "International Teaching Market Overview 2025", price: "$5.99", link: "https://buy.stripe.com/14A8wHeGR7Xs2pC9ICc3m00", image: null },
  { title: "Personal Goal Assessment", price: "$6.00", link: "https://buy.stripe.com/5kQ4grbuF1z42pC1c6c3m01", image: "/images/Thumbnail-Personal Goals Assesssment.png" },
  { title: "Country Comparison Tool", price: "$7.99", link: "https://buy.stripe.com/3cI6ozfKV1z43tGaMGc3m02", image: "/images/Thumbnail-Country Comparison Tool.png" },
  { title: "Country Decision Matrix", price: "$5.99", link: "https://buy.stripe.com/14A4gr7epgtYd4g9ICc3m03", image: "/images/Thumbnail-Country Decision Matrix.png" },
];

const freeResources = [
  { title: "Qatar Document Attestation Checklist", link: "https://drive.google.com/file/d/1ugj0TeUoQ7Z6zT8QaW6QcQdu5Y4l99xJ/view?usp=sharing", image: "/images/Thumbnail- Documentation Checklist.png" },
  { title: "Qatar Teacher Immigration Checklist", link: "https://drive.google.com/file/d/1UMgNsJjvVQzCXEMbJAYksE3BGLnTU_z8/view?usp=sharing", image: "/images/Thumbnail - Qatar Teacher Immigration Checklist.png" },
  { title: "Guide to Reputable British & American Schools in Qatar", link: "https://drive.google.com/file/d/1q-gX_7FJ61zy3QC5Loc1vRQQdqavwRnE/view?usp=sharing", image: "/images/thumbnail - Navigation Guide.png" },
  { title: "International Teaching Resource & Navigation Guide", link: "https://drive.google.com/file/d/16wDe6ei6MkTz-KbNmbf9DeemGCiOjHOU/view?usp=drive_link", image: "/images/thumbnail_international _teaching_research _resources_navigation_guide.png" },
];

export const metadata = {
  title: 'Products | Expat Teacher\'s Lounge',
  description: 'Premium guides, tools, and free resources built specifically for educators moving abroad.',
};

export default function ProductsPage() {
  return (
    <div className="flex flex-col bg-white dark:bg-[#0a0b14]">
      {/* Hero */}
      <section className="relative h-[50vh] md:h-[60vh] flex items-center justify-center overflow-hidden">
        <Image 
          src="/images/Edwina_working_with_a_student.png"
          alt="Edwina working with a student"
          fill
          className="object-cover object-top"
          priority
        />
        <div className="absolute inset-0 bg-[#0a0b14]/70" />
        <div className="absolute inset-0 bg-gradient-to-t from-white dark:from-[#0a0b14] to-transparent" />
        
        <div className="container mx-auto px-6 md:px-12 relative z-10 text-center mt-20">
          <ScrollReveal>
            <h1 className="font-display font-black text-5xl md:text-7xl text-white mb-6">
              Empower your <span className="text-brand-blue italic">transition.</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto">
              Premium intelligence, datasets, and decision tools.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Paid Products */}
      <section className="pt-12 pb-24 border-b border-gray-100 dark:border-gray-900">
        <div className="container mx-auto px-6 md:px-12">
          <ScrollReveal>
             <h2 className="font-display font-black text-4xl mb-12 dark:text-white">Premium <span className="text-brand-blue italic">Toolkits</span></h2>
          </ScrollReveal>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {productsList.map((product, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                 <a
                   href={product.link}
                   target="_blank"
                   rel="noopener noreferrer"
                   className="group bg-gray-50 dark:bg-[#121324] border border-gray-200 dark:border-gray-800 rounded-2xl p-10 flex flex-col h-full hover:shadow-2xl hover:border-brand-blue transition-all"
                 >
                   {product.image ? (
                     <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden mb-8 border border-gray-200 dark:border-gray-800 bg-gray-100/50 dark:bg-black/50">
                       <Image src={product.image} alt={product.title} fill className="object-contain p-6 group-hover:scale-105 transition-transform duration-500" />
                     </div>
                   ) : (
                     <div className="w-16 h-16 bg-brand-blue/10 rounded-full flex items-center justify-center mb-8 text-brand-blue">
                       <FileText className="w-8 h-8" />
                     </div>
                   )}
                   <h3 className="font-display font-bold text-3xl mb-4 text-gray-900 dark:text-white group-hover:text-brand-blue transition-colors">{product.title}</h3>
                   <div className="mt-auto pt-8 flex items-center justify-between border-t border-gray-200 dark:border-gray-800">
                     <span className="font-bold text-2xl text-gray-900 dark:text-white">{product.price}</span>
                     <span className="bg-brand-blue text-white px-6 py-3 rounded-full font-medium group-hover:bg-brand-deep transition-colors">Purchase Now</span>
                   </div>
                 </a>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Free Resources */}
      <section className="py-24 bg-gray-50 dark:bg-[#0d0e1b]">
        <div className="container mx-auto px-6 md:px-12">
           <ScrollReveal>
             <h2 className="font-display font-black text-4xl mb-12 dark:text-white text-center">Free <span className="text-brand-gold italic">Downloads</span></h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {freeResources.map((resource, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <a
                  href={resource.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center p-8 bg-white dark:bg-[#121324] border border-gray-200 dark:border-gray-800 rounded-2xl hover:border-brand-gold hover:shadow-lg transition-all duration-300 min-h-[120px]"
                >
                  {resource.image ? (
                     <div className="relative w-24 h-28 flex-shrink-0 rounded-lg overflow-hidden mr-6 group-hover:scale-105 transition-transform duration-300 border border-gray-200 dark:border-gray-800 bg-gray-100/50 dark:bg-black/50">
                       <Image src={resource.image} alt={resource.title} fill className="object-contain p-2" />
                     </div>
                   ) : (
                     <div className="bg-brand-gold/10 p-5 rounded-xl flex-shrink-0 text-brand-gold mr-6 group-hover:scale-110 group-hover:bg-brand-gold group-hover:text-white transition-all duration-300">
                       <Download className="w-8 h-8" />
                     </div>
                   )}
                  <h3 className="font-display font-bold text-xl text-gray-900 dark:text-gray-100 group-hover:text-brand-gold transition-colors flex-1 pr-4 leading-snug">{resource.title}</h3>
                </a>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
