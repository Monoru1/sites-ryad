import { AboutSection } from '@/components/sections/AboutSection';
import { ContactSection } from '@/components/sections/ContactSection';
import { HeroSection } from '@/components/sections/HeroSection';
import { ManifestoSection } from '@/components/sections/ManifestoSection';
import { ProcessSection } from '@/components/sections/ProcessSection';
import { SelectedWorkSection } from '@/components/sections/SelectedWorkSection';
import { ServicesSection } from '@/components/sections/ServicesSection';

export default function Home() {
  return (
    <main className="overflow-x-hidden bg-noir text-parchment">
      <HeroSection />
      <ManifestoSection />
      <AboutSection />
      <SelectedWorkSection />
      <ServicesSection />
      <ProcessSection />
      <ContactSection />
    </main>
  );
}
