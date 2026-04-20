import { SectionReveal } from '@/components/ui/SectionReveal';

export function AboutSection() {
  return (
    <SectionReveal className="border-b border-line py-24 md:py-32">
      <div className="section-shell grid gap-8 md:grid-cols-12">
        <div className="md:col-span-3">
          <p className="editorial-kicker">À propos</p>
        </div>
        <div className="md:col-span-9">
          <p className="max-w-3xl font-display text-3xl leading-[1.2] text-parchment/95 md:text-5xl">
            Je travaille avec des marques et des individus qui comprennent qu&apos;une image n&apos;est pas une
            documentation. C&apos;est une décision. Chaque cadre, chaque lumière, chaque silence entre deux
            prises — tout est intentionnel. Mon travail commence là où les autres s&apos;arrêtent.
          </p>
        </div>
      </div>
    </SectionReveal>
  );
}
