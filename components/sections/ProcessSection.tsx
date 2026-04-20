import { Reveal } from "@/components/ui/Reveal";
import { SectionTag } from "@/components/ui/SectionTag";
import { processSteps } from "@/lib/content";

export function ProcessSection() {
  return (
    <section className="border-b border-line bg-noir py-24 sm:py-28">
      <div className="mx-auto max-w-6xl px-6 sm:px-10 lg:px-16">
        <Reveal>
          <SectionTag>Process</SectionTag>
          <div className="mt-10 grid gap-10 md:grid-cols-3 md:gap-8">
            {processSteps.map((step, index) => (
              <article key={step.title} className="space-y-4 border-t border-line pt-6">
                <p className="font-mono text-[0.64rem] uppercase tracking-editorial text-gold">0{index + 1}</p>
                <h3 className="font-serif text-3xl text-ivory">{step.title}</h3>
                <p className="text-sm leading-relaxed text-ivory/72">{step.description}</p>
              </article>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
