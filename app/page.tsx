import Hero from "@/components/sections/Hero";
import ProofBar from "@/components/sections/ProofBar";
import HowItWorks from "@/components/sections/HowItWorks";
import Destinations from "@/components/sections/Destinations";
import Products from "@/components/sections/Products";
import FreeResources from "@/components/sections/FreeResources";
import CoachingPreview from "@/components/sections/CoachingPreview";
import AuthoritySection from "@/components/sections/AuthoritySection";
import Testimonials from "@/components/sections/Testimonials";
import BlogPreview from "@/components/sections/BlogPreview";
import EmailCapture from "@/components/sections/EmailCapture";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />
      <ProofBar />
      <HowItWorks />
      <Destinations />
      <Products />
      <FreeResources />
      <CoachingPreview />
      <AuthoritySection />
      <Testimonials />
      <BlogPreview />
      <EmailCapture />
    </div>
  );
}
