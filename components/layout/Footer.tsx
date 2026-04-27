import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-[#0a0b14] border-t border-gray-200 dark:border-gray-800 pt-16 pb-8">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-2">
            <Link href="/" className="inline-block mb-6">
              <Image
                src="/images/expat_teachers_lounge_logo.png"
                alt="Expat Teacher's Lounge"
                width={140}
                height={38}
                className="h-8 w-auto object-contain"
              />
            </Link>
            <p className="text-gray-600 dark:text-gray-400 max-w-sm leading-relaxed">
              Relocation strategy and contract review for teachers serious about moving internationally. Built by a teacher, for teachers.
            </p>
          </div>
          <div>
            <h4 className="font-display font-bold text-lg mb-4">Navigation</h4>
            <ul className="space-y-3 text-sm text-gray-600 dark:text-gray-400">
              <li><Link href="/" className="hover:text-brand-blue transition">Home</Link></li>
              <li><Link href="/about" className="hover:text-brand-blue transition">About</Link></li>
              <li><Link href="/products" className="hover:text-brand-blue transition">Products</Link></li>
              <li><Link href="/coaching" className="hover:text-brand-blue transition">Coaching</Link></li>
              <li><Link href="/blog" className="hover:text-brand-blue transition">Blog</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-display font-bold text-lg mb-4">Legal</h4>
            <ul className="space-y-3 text-sm text-gray-600 dark:text-gray-400">
              <li><Link href="#" className="hover:text-brand-blue transition">Terms of Service</Link></li>
              <li><Link href="#" className="hover:text-brand-blue transition">Privacy Policy</Link></li>
            </ul>
          </div>
        </div>
        <div className="pt-8 border-t border-gray-100 dark:border-gray-900 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500 dark:text-gray-500">
          <p>© {new Date().getFullYear()} Expat Teacher's Lounge. All rights reserved.</p>
          <p className="mt-4 md:mt-0 text-center md:text-right max-w-xl leading-relaxed">
            Disclaimer: Some links on this website are affiliate links. This means I may earn a small commission at no additional cost to you if you purchase through these links. This helps support the free resources provided.
          </p>
        </div>
      </div>
    </footer>
  );
}
