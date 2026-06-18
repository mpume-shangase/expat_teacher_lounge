import Image from "next/image";
import Link from "next/link";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export const metadata = {
  title: 'Blog | Expat Teacher\'s Lounge',
  description: 'Relocation intelligence and guides for international teachers.',
};

const posts = [
  {
    title: "My First Year in Qatar: What I Wish I Knew Before Moving",
    slug: "qatar-first-year",
    excerpt: "The immigration process is a marathon, housing is rarely what the contract describes, and the heat is definitely not a metaphor.",
    category: "Qatar",
    image: "/images/Edwina_Teaching.png",
    author: "Edwina Shangase",
    readTime: "9 min",
  },
  // Placeholders for layout structure 
  {
    title: "How to Negotiate Your International Teaching Contract",
    slug: "#",
    excerpt: "Stop accepting the first offer. Why housing allowances and built-in flights are more negotiable than you think.",
    category: "Contracts",
    image: "/images/Edwina_delivering_a_presentation.png",
    author: "Edwina Shangase",
    readTime: "7 min",
  },
  {
    title: "Dubai vs Doha: A Teacher's Guide to the Middle East",
    slug: "#",
    excerpt: "Comparing savings potential, lifestyle, and work-life balance between the two most popular Middle East destinations.",
    category: "UAE",
    image: "/images/Edwina_working_with_a_student.png",
    author: "Edwina Shangase",
    readTime: "12 min",
  }
];

export default function BlogList() {
  return (
    <div className="flex flex-col bg-white dark:bg-[#0a0b14] min-h-screen">
      {/* Hero */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        <Image 
          src="/images/Edwina_reading_a_book.png"
          alt="Edwina reading"
          fill
          className="object-cover object-top"
          priority
        />
        <div className="absolute inset-0 bg-[#0a0b14]/75" />
        <div className="absolute inset-0 bg-gradient-to-t from-white dark:from-[#0a0b14] to-transparent" />
        
        <div className="container mx-auto px-6 md:px-12 relative z-10 text-center mt-20">
          <ScrollReveal>
            <h1 className="font-display font-black text-5xl md:text-7xl text-white mb-6">
              The <span className="text-brand-gold italic">Lounge.</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto">
              Real stories and hard data from the international teaching circuit.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Content */}
      <section className="py-24">
        <div className="container mx-auto px-6 md:px-12 max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                 <Link href={post.slug !== "#" ? `/blog/${post.slug}` : "/blog"} className="group flex flex-col bg-gray-50 dark:bg-[#121324] border border-gray-200 dark:border-gray-800 rounded-3xl overflow-hidden hover:shadow-xl transition-all h-full">
                   <div className="relative h-48 w-full overflow-hidden bg-gray-100 dark:bg-gray-800">
                     <Image src={post.image} alt={post.title} fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
                   </div>
                   <div className="p-6 flex flex-col flex-1 justify-between">
                     <div>
                       <span className="inline-block bg-brand-blue/10 text-brand-blue px-3 py-1 rounded-full text-xs font-bold mb-3 uppercase tracking-wider">{post.category}</span>
                       <h2 className="font-display font-bold text-xl mb-3 text-gray-900 dark:text-white group-hover:text-brand-blue transition-colors line-clamp-2">{post.title}</h2>
                       <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-3 leading-relaxed">{post.excerpt}</p>
                     </div>
                     <div className="flex items-center text-xs text-gray-500 font-medium mt-4 pt-4 border-t border-gray-100 dark:border-gray-800">
                       <span>{post.author}</span>
                       <span className="mx-2">•</span>
                       <span>{post.readTime} read</span>
                     </div>
                   </div>
                 </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
