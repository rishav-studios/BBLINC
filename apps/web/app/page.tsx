import About from "@/components/pages/home/About";
import CTA from "@/components/pages/home/CTA";
import Hero from "@/components/pages/home/hero/Hero";
import IndustrySection from "@/components/pages/home/industries/IndustrySectionMain";
import MaterialsSection from "@/components/pages/home/materials/MaterialsSection";
import WhyUsSection from "@/components/pages/home/why-us/WhyUsSection";

export default function Page() {
  return (
    <>
      <Hero />
      <About />
      <IndustrySection />
      <MaterialsSection />
      <WhyUsSection />
      <CTA />
    </>
  );
}
