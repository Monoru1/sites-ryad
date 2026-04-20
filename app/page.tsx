import { AboutSection } from "@/components/sections/AboutSection";
import { FinalCtaSection } from "@/components/sections/FinalCtaSection";
import { HeroSection } from "@/components/sections/HeroSection";
import { ManifestoSection } from "@/components/sections/ManifestoSection";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { SelectedWorkSection } from "@/components/sections/SelectedWorkSection";
import { ServicesSection } from "@/components/sections/ServicesSection";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <ManifestoSection />
      <AboutSection />
      <SelectedWorkSection />
      <ServicesSection />
      <ProcessSection />
      <FinalCtaSection />
    </main>
  );
}
