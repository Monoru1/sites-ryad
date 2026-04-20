import { SectionReveal } from '@/components/ui/SectionReveal';
import { services } from '@/lib/content';

export function ServicesSection() {
  return (
    <SectionReveal className="border-b border-line py-24 md:py-32">
      <div className="section-shell">
        <p className="editorial-kicker mb-8">Services</p>
        <ul className="grid gap-4 md:grid-cols-3">
          {services.map((service) => (
            <li key={service} className="grid-border bg-ink/45 p-8">
              <p className="font-display text-3xl text-parchment md:text-4xl">{service}</p>
            </li>
          ))}
        </ul>
      </div>
    </SectionReveal>
  );
}
