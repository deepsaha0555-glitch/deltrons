import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import WhyDeltrons from "@/components/WhyDeltrons";
import HowItWorks from "@/components/HowItWorks";
import DemoPreview from "@/components/DemoPreview";
import Pricing from "@/components/Pricing";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <WhyDeltrons />
      <HowItWorks />
      <DemoPreview />
      <Pricing />
      <Footer />
    </div>
  );
}
