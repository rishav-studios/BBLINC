import About from "@/components/pages/home/About";
import CTA from "@/components/pages/home/CTA";
import Exports from "@/components/pages/home/exports/Exports";
import Hero from "@/components/pages/home/hero/Hero";
import IndustrySection from "@/components/pages/home/industries/IndustrySectionMain";
import MaterialsSection from "@/components/pages/home/materials/MaterialsSection";
import WhyUsSection from "@/components/pages/home/why-us/WhyUsSection";
import { GlobeProvider } from "@/contexts/GlobeContext";

export default function Page() {
  return (
    <main key="home">
      <Hero />
      <About />
      <GlobeProvider>
        <Exports />
      </GlobeProvider>
      <IndustrySection />
      <MaterialsSection />
      <WhyUsSection />
      <CTA />
    </main>
  );
}
