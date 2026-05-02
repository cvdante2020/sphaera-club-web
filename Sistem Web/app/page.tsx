import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/home/Hero";
import VisualBanner from "@/components/home/VisualBanner";
import StadiumStrip from "@/components/home/StadiumStrip";
import Features from "@/components/home/Features";
import HowItWorks from "@/components/home/HowItWorks";
import Pricing from "@/components/home/Pricing";
import AdSlider from "@/components/home/AdSlider";
import Sorteos  from "@/components/home/Sorteos";
import CTA from "@/components/home/CTA";
import Contacto from "@/app/contacto/page";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <VisualBanner />
        <StadiumStrip />
        <Features />
        <HowItWorks />
        <Pricing />
        <AdSlider />
        <Sorteos />
        <CTA />
        <Contacto />
      </main>
      <Footer />
    </>
  );
}