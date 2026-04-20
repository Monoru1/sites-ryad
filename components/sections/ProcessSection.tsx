import { SectionReveal } from '@/components/ui/SectionReveal';
import { processSteps } from '@/lib/content';

export function ProcessSection() {
  return (
    <SectionReveal className="border-b border-line py-24 md:py-32">
      <div className="section-shell">
        <p className="editorial-kicker mb-8">Process</p>
        <div className="grid gap-4 md:grid-cols-3">
          {processSteps.map((step, index) => (
            <article key={step.title} className="grid-border bg-noir/60 p-8">
              <p className="font-mono text-xs uppercase tracking-editorial text-gold">0{index + 1}</p>
              <h3 className="mt-4 font-display text-4xl text-parchment">{step.title}</h3>
              <p className="mt-4 max-w-sm text-base leading-relaxed text-parchment/78">{step.text}</p>
            </article>
          ))}
        </div>
      </div>
    </SectionReveal>
  );
}
