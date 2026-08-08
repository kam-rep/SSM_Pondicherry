import HeroSection from "@/components/hero/HeroSection";
import ServicesSection from "@/components/services/ServicesSection";
import MaterialsSection from "@/components/materials/MaterialsSection";
import WhyChooseUsSection from "@/components/sections/WhyChooseUsSection";
import PortfolioSection from "@/components/portfolio/PortfolioSection";
import TestimonialsSection from "@/components/testimonials/TestimonialsSection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <MaterialsSection />
      <WhyChooseUsSection />
      <PortfolioSection />
      <TestimonialsSection />
    </>
  );
}