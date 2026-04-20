import { Reveal } from "@/components/ui/Reveal";
import { SectionTag } from "@/components/ui/SectionTag";
import { services } from "@/lib/content";

export function ServicesSection() {
  return (
    <section className="border-b border-line bg-charcoal py-24 sm:py-28">
      <div className="mx-auto max-w-6xl px-6 sm:px-10 lg:px-16">
        <Reveal>
          <SectionTag>Services</SectionTag>
          <div className="mt-8 grid gap-4 sm:grid-cols-3 sm:gap-6">
            {services.map((service) => (
              <div key={service} className="border border-line bg-noir/60 px-6 py-10 backdrop-blur-sm">
                <p className="font-serif text-3xl text-ivory">{service}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
