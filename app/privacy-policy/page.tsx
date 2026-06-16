import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Privacy Policy | Expat Teacher\'s Lounge',
  description: 'Learn how Expat Teacher\'s Lounge collects, uses, and safeguards your personal data, complying with GDPR, CCPA, and Google standards.',
};

export default function PrivacyPolicyPage() {
  return (
    <div className="bg-gray-50 dark:bg-[#07080e] min-h-screen pt-32 pb-20 px-6 md:px-12">
      <div className="container mx-auto max-w-3xl bg-white dark:bg-[#0a0b14] border border-gray-100 dark:border-gray-900 rounded-3xl p-8 md:p-12 shadow-[0_20px_60px_rgba(0,0,0,0.02)]">
        
        {/* Page Header */}
        <div className="mb-10 text-center md:text-left border-b border-gray-100 dark:border-gray-900 pb-8">
          <h1 className="font-display font-black text-3xl md:text-5xl text-[#0a0a14] dark:text-white mb-4">
            Privacy Policy
          </h1>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Last Updated: June 16, 2026
          </p>
        </div>

        {/* Policy Content */}
        <div className="font-body text-gray-600 dark:text-gray-300 space-y-8 leading-relaxed text-[16px] md:text-[17px]">
          <p>
            At <strong className="text-gray-950 dark:text-white">Expat Teacher's Lounge</strong> ("we", "us", or "our"), accessible from{" "}
            <Link href="/" className="text-brand-blue dark:text-brand-gold hover:underline transition">
              expatteacherslounge.com
            </Link>
            , one of our main priorities is the privacy of our visitors. This Privacy Policy document outlines the types of personal information collected, processed, and recorded by Expat Teacher's Lounge, and how we use it to provide our services in a secure, transparent, and compliant manner.
          </p>

          <p>
            If you have additional questions or require more information about our Privacy Policy, do not hesitate to contact us at{" "}
            <a href="mailto:info@expatteacherslounge.com" className="text-brand-blue dark:text-brand-gold hover:underline transition">
              info@expatteacherslounge.com
            </a>
            .
          </p>

          <hr className="border-gray-100 dark:border-gray-900" />

          {/* Section 1 */}
          <section className="space-y-4">
            <h2 className="font-display font-bold text-xl md:text-2xl text-[#0a0a14] dark:text-white">
              1. Information We Collect
            </h2>
            <p>
              We collect several types of information for various purposes to provide and improve our services to you:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong className="text-gray-900 dark:text-white">Personal Identification Information:</strong> When you purchase a product, sign up for a free guide, book a session, or subscribe to our newsletter, we collect personal information you provide to us, such as your full name, email address, billing/shipping address, and telephone number.
              </li>
              <li>
                <strong className="text-gray-900 dark:text-white">Payment Details:</strong> All payments are processed securely through our third-party payment processor, <strong className="text-gray-900 dark:text-white">Stripe</strong>. We do not store or collect your payment card details on our servers. That information is provided directly to Stripe, whose use of your personal information is governed by their Privacy Policy.
              </li>
              <li>
                <strong className="text-gray-900 dark:text-white">Coaching & Consultation Details:</strong> If you book a strategy session through <strong className="text-gray-900 dark:text-white">Calendly</strong>, we collect your booking preferences, time slot selections, and any survey responses you provide to help customize your session.
              </li>
              <li>
                <strong className="text-gray-900 dark:text-white">Device and Usage Data:</strong> When you browse our website, we automatically collect details about your device, including your IP address, browser type, operating system, referring URLs, pages viewed, links clicked, and search terms.
              </li>
            </ul>
          </section>

          {/* Section 2 */}
          <section className="space-y-4">
            <h2 className="font-display font-bold text-xl md:text-2xl text-[#0a0a14] dark:text-white">
              2. How We Use Your Information
            </h2>
            <p>
              We use the collected data for various business and commercial purposes, including to:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Process your transactions and deliver digital downloads, certification resources, and coaching agreements (facilitated via Netlify, Vercel, and Shopify).</li>
              <li>Manage and schedule your coaching appointments.</li>
              <li>Send order confirmation emails, digital product delivery links, and customer service updates.</li>
              <li>Deliver marketing communications, newsletters, and promotional offers (via <strong className="text-gray-950 dark:text-white">Klaviyo</strong>), provided you have opted in to receive them. You may opt out of these emails at any time by clicking the "unsubscribe" link.</li>
              <li>Monitor, analyze, and optimize website usage, layout, and user experience.</li>
              <li>Comply with applicable legal obligations and enforce our Terms and Conditions.</li>
            </ul>
          </section>

          {/* Section 3 */}
          <section className="space-y-4">
            <h2 className="font-display font-bold text-xl md:text-2xl text-[#0a0a14] dark:text-white">
              3. Cookies and Tracking Technologies
            </h2>
            <p>
              Expat Teacher's Lounge uses cookies to enhance your browsing experience. Cookies are small data files placed on your device to help us recognize you, remember your preferences, and track traffic patterns. We use both session cookies (which expire when you close your browser) and persistent cookies (which remain on your device until deleted).
            </p>
            <p>
              We use <strong className="text-gray-950 dark:text-white">Google Analytics</strong> and Shopify's native tracking pixels to collect standard internet log information and visitor behavior patterns. This helps us understand how visitors interact with our site, measure ad performance, and improve our services. You can set your browser to refuse all or some browser cookies, or to alert you when cookies are being sent. If you disable or refuse cookies, please note that some parts of this website may become inaccessible or not function properly.
            </p>
          </section>

          {/* Section 4 */}
          <section className="space-y-4">
            <h2 className="font-display font-bold text-xl md:text-2xl text-[#0a0a14] dark:text-white">
              4. Third-Party Services and Data Sharing
            </h2>
            <p>
              We do not sell, rent, or trade your personal information. We share your data only with trusted service providers necessary to operate our business and deliver services to you:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong className="text-gray-950 dark:text-white">Shopify:</strong> Our e-commerce platform. Your data is stored through Shopify's secure data storage and databases.</li>
              <li><strong className="text-gray-950 dark:text-white">Stripe:</strong> Our payment gateway. Stripe collects billing and payment details to process transactions securely.</li>
              <li><strong className="text-gray-950 dark:text-white">Calendly:</strong> Used to schedule coaching and consultation sessions.</li>
              <li><strong className="text-gray-950 dark:text-white">Klaviyo:</strong> Our email marketing software, used to manage subscriber lists and send newsletter and promotional emails.</li>
              <li><strong className="text-gray-950 dark:text-white">Hosting & Delivery (Netlify / Vercel):</strong> Services used to host our web application and coordinate digital download delivery.</li>
              <li><strong className="text-gray-950 dark:text-white">Google Analytics:</strong> Used to track and report website traffic.</li>
            </ul>
            <p>
              All third-party service providers are prohibited from using your personal information for any purpose other than providing these services to us, and they are required to maintain the confidentiality and security of your data.
            </p>
          </section>

          {/* Section 5 */}
          <section className="space-y-4">
            <h2 className="font-display font-bold text-xl md:text-2xl text-[#0a0a14] dark:text-white">
              5. Data Security
            </h2>
            <p>
              We take the security of your personal information seriously and implement appropriate technical and organizational measures to protect it against unauthorized access, alteration, disclosure, or destruction. However, please be aware that no method of transmission over the internet or method of electronic storage is 100% secure, and we cannot guarantee its absolute security.
            </p>
          </section>

          {/* Section 6 */}
          <section className="space-y-4">
            <h2 className="font-display font-bold text-xl md:text-2xl text-[#0a0a14] dark:text-white">
              6. Your Legal Rights (GDPR & CCPA)
            </h2>
            <p>
              Depending on your location, you may have the following rights regarding your personal information:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong className="text-gray-950 dark:text-white">The right to access:</strong> You can request copies of the personal data we hold about you.</li>
              <li><strong className="text-gray-950 dark:text-white">The right to rectification:</strong> You can request that we correct any inaccurate or incomplete personal information.</li>
              <li><strong className="text-gray-950 dark:text-white">The right to erasure ("Right to be Forgotten"):</strong> You can request that we erase your personal data, subject to certain legal conditions.</li>
              <li><strong className="text-gray-950 dark:text-white">The right to restrict or object to processing:</strong> You have the right to request that we restrict the processing of your personal data or object to our processing.</li>
              <li><strong className="text-gray-950 dark:text-white">The right to data portability:</strong> You can request that we transfer your collected data to another organization, or directly to you.</li>
            </ul>
            <p>
              If you wish to exercise any of these rights, please contact us at{" "}
              <a href="mailto:info@expatteacherslounge.com" className="text-brand-blue dark:text-brand-gold hover:underline transition">
                info@expatteacherslounge.com
              </a>
              . We will respond to your request within 30 days.
            </p>
          </section>

          {/* Section 7 */}
          <section className="space-y-4">
            <h2 className="font-display font-bold text-xl md:text-2xl text-[#0a0a14] dark:text-white">
              7. Children's Privacy
            </h2>
            <p>
              Another part of our priority is adding protection for children while using the internet. Expat Teacher's Lounge does not knowingly collect any Personal Identifiable Information from children under the age of 13. If you think that your child provided this kind of information on our website, we strongly encourage you to contact us immediately and we will do our best efforts to promptly remove such information from our records.
            </p>
          </section>

          {/* Section 8 */}
          <section className="space-y-4">
            <h2 className="font-display font-bold text-xl md:text-2xl text-[#0a0a14] dark:text-white">
              8. Changes to This Privacy Policy
            </h2>
            <p>
              We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date at the top of this document. You are advised to review this Privacy Policy periodically for any changes.
            </p>
          </section>

          {/* Section 9 */}
          <section className="space-y-4">
            <h2 className="font-display font-bold text-xl md:text-2xl text-[#0a0a14] dark:text-white">
              9. Contact Information
            </h2>
            <p>
              For any questions, concerns, or requests regarding this Privacy Policy or your personal data, please contact us at:
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
