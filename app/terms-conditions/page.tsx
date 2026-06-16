import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Terms & Conditions | Expat Teacher\'s Lounge',
  description: 'Review the Terms and Conditions of Expat Teacher\'s Lounge, covering digital download access, coaching cancellations, licensing, and policies.',
};

export default function TermsConditionsPage() {
  return (
    <div className="bg-gray-50 dark:bg-[#07080e] min-h-screen pt-32 pb-20 px-6 md:px-12">
      <div className="container mx-auto max-w-3xl bg-white dark:bg-[#0a0b14] border border-gray-100 dark:border-gray-900 rounded-3xl p-8 md:p-12 shadow-[0_20px_60px_rgba(0,0,0,0.02)]">
        
        {/* Page Header */}
        <div className="mb-10 text-center md:text-left border-b border-gray-100 dark:border-gray-900 pb-8">
          <h1 className="font-display font-black text-3xl md:text-5xl text-[#0a0a14] dark:text-white mb-4">
            Terms & Conditions
          </h1>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Last Updated: June 16, 2026
          </p>
        </div>

        {/* Terms Content */}
        <div className="font-body text-gray-600 dark:text-gray-300 space-y-8 leading-relaxed text-[16px] md:text-[17px]">
          <p>
            Welcome to <strong className="text-gray-950 dark:text-white">Expat Teacher's Lounge</strong> ("we", "us", or "our"), accessible from{" "}
            <Link href="/" className="text-brand-blue dark:text-brand-gold hover:underline transition">
              expatteacherslounge.com
            </Link>
            . By accessing, browsing, or purchasing from our website, you agree to comply with and be bound by the following Terms and Conditions ("Terms").
          </p>
          
          <p>
            Please read these Terms carefully before using our website or purchasing our products. If you do not agree to all of these Terms, please do not access the website or purchase any products or services.
          </p>

          <hr className="border-gray-100 dark:border-gray-900" />

          {/* Section 1 */}
          <section className="space-y-4">
            <h2 className="font-display font-bold text-xl md:text-2xl text-[#0a0a14] dark:text-white">
              1. Intellectual Property & Digital License
            </h2>
            <p>
              All digital products, guides, worksheets, checklists, templates, interactive tools, country comparison tools, and site content are the intellectual property of Expat Teacher's Lounge. When you purchase or download a product, we grant you a limited, non-exclusive, non-transferable, revocable license for <strong className="text-gray-950 dark:text-white">personal, non-commercial use only</strong>.
            </p>
            <p className="font-semibold text-gray-950 dark:text-white">Under this license, you agree NOT to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Reproduce, copy, duplicate, resell, or distribute any part of the materials.</li>
              <li>Share downloaded files or resources with other teachers, colleagues, or schools (unless a multi-user license is purchased).</li>
              <li>Use our resources for commercial purposes or as part of a paid consulting practice.</li>
              <li>Modify, rebrand, or claim ownership of any materials purchased or downloaded from this website.</li>
            </ul>
          </section>

          {/* Section 2 */}
          <section className="space-y-4">
            <h2 className="font-display font-bold text-xl md:text-2xl text-[#0a0a14] dark:text-white">
              2. Digital Product Delivery
            </h2>
            <p>
              Our digital guides, tools, and comparison resources are delivered electronically. Upon completion of checkout via Stripe, you will receive an automated email containing a download link. You can also download the files on the order confirmation screen. If you experience any technical difficulties or do not receive your download link within 24 hours, please contact us immediately at{" "}
              <a href="mailto:info@expatteacherslounge.com" className="text-brand-blue dark:text-brand-gold hover:underline transition">
                info@expatteacherslounge.com
              </a>
              .
            </p>
          </section>

          {/* Section 3 */}
          <section className="space-y-4">
            <h2 className="font-display font-bold text-xl md:text-2xl text-[#0a0a14] dark:text-white">
              3. Refund and Cancellation Policy
            </h2>
            <p>
              To ensure transparent business practices and comply with merchant terms, please review our refund and cancellation policies:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong className="text-gray-950 dark:text-white">Digital Downloads:</strong> Due to the immediate delivery and copyable nature of digital assets (including PDF guides, selection matrices, checklists, and templates), <strong className="text-gray-950 dark:text-white">all digital product sales are final and non-refundable</strong>. We recommend reading product descriptions and viewing available mockups carefully before finalizing your purchase.
              </li>
              <li>
                <strong className="text-gray-950 dark:text-white">Coaching / Strategy Sessions:</strong> We require at least <strong className="text-gray-950 dark:text-white">24 hours' notice</strong> for rescheduling or cancellation of a booked strategy session. If you reschedule or cancel with less than 24 hours' notice, or fail to attend the scheduled session, you forfeit the session and will not be eligible for a refund.
              </li>
            </ul>
          </section>

          {/* Section 4 */}
          <section className="space-y-4">
            <h2 className="font-display font-bold text-xl md:text-2xl text-[#0a0a14] dark:text-white">
              4. Disclaimer and Limitation of Liability
            </h2>
            <p>
              The materials, guides, and coaching sessions provided on this website are for <em className="italic">informational and educational purposes only</em>.
            </p>
            <div className="bg-amber-50 dark:bg-amber-950/20 border-l-4 border-amber-500 p-6 rounded-r-2xl space-y-2">
              <p className="font-bold text-amber-900 dark:text-amber-300 text-[15px] uppercase tracking-wider">
                Important Legal Disclaimer
              </p>
              <p className="text-amber-800 dark:text-amber-400 text-sm md:text-[15px] leading-relaxed">
                Expat Teacher's Lounge is not an immigration firm, visa agency, or official government body. We do not guarantee visa approvals, job placements, credential verification outcomes, or school contract negotiations. Relocating abroad involves independent risk, and users are advised to verify all critical travel, visa, and employment details with the relevant official embassies, consulates, and licensing boards.
              </p>
            </div>
            <p>
              In no event shall Expat Teacher's Lounge, nor its directors, employees, or partners, be liable for any direct, indirect, incidental, special, or consequential damages resulting from your use of or inability to use our products or coaching services.
            </p>
          </section>

          {/* Section 5 */}
          <section className="space-y-4">
            <h2 className="font-display font-bold text-xl md:text-2xl text-[#0a0a14] dark:text-white">
              5. Pricing and Product Description Accuracy
            </h2>
            <p>
              We make every effort to describe and display our products as accurately as possible. However, we cannot guarantee that the descriptions, prices, or details are always completely accurate, complete, or error-free. We reserve the right to correct any errors, inaccuracies, or omissions, and to change or update information or cancel orders if any information on the site is inaccurate at any time without prior notice (including after you have submitted your order).
            </p>
          </section>

          {/* Section 6 */}
          <section className="space-y-4">
            <h2 className="font-display font-bold text-xl md:text-2xl text-[#0a0a14] dark:text-white">
              6. User Content and Testimonials
            </h2>
            <p>
              If you submit feedback, reviews, or testimonials to us, you grant us the right to use them on our website, social media channels, or marketing materials to showcase customer experiences. If you wish to have a testimonial removed, please contact us at{" "}
              <a href="mailto:info@expatteacherslounge.com" className="text-brand-blue dark:text-brand-gold hover:underline transition">
                info@expatteacherslounge.com
              </a>{" "}
              and we will remove it promptly.
            </p>
          </section>

          {/* Section 7 */}
          <section className="space-y-4">
            <h2 className="font-display font-bold text-xl md:text-2xl text-[#0a0a14] dark:text-white">
              7. External Links Disclaimer
            </h2>
            <p>
              Our website may contain links to external sites that are not operated by us. We have no control over the content and practices of these sites, and cannot accept responsibility or liability for their respective terms or privacy policies.
            </p>
          </section>

          {/* Section 8 */}
          <section className="space-y-4">
            <h2 className="font-display font-bold text-xl md:text-2xl text-[#0a0a14] dark:text-white">
              8. Modifications to Terms
            </h2>
            <p>
              We reserve the right, at our sole discretion, to modify or replace these Terms at any time. Any changes will be posted on this page with an updated revision date. By continuing to access or use our website after those revisions become effective, you agree to be bound by the revised terms.
            </p>
          </section>

          {/* Section 9 */}
          <section className="space-y-4">
            <h2 className="font-display font-bold text-xl md:text-2xl text-[#0a0a14] dark:text-white">
              9. Governing Law
            </h2>
            <p>
              These Terms shall be governed and construed in accordance with the laws of South Africa, without regard to its conflict of law provisions.
            </p>
          </section>

          {/* Section 10 */}
          <section className="space-y-4">
            <h2 className="font-display font-bold text-xl md:text-2xl text-[#0a0a14] dark:text-white">
              10. Contact Us
            </h2>
            <p>
              If you have any questions about these Terms and Conditions, please contact us at:
            </p>
            <div className="bg-gray-50 dark:bg-[#07080e] border border-gray-100 dark:border-gray-900 p-6 rounded-2xl font-mono text-xs md:text-sm text-gray-800 dark:text-gray-300 space-y-1">
              <p className="font-semibold text-gray-950 dark:text-white">Expat Teacher's Lounge</p>
              <p>Email: info@expatteacherslounge.com</p>
              <p>Website: expatteacherslounge.com</p>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
}
