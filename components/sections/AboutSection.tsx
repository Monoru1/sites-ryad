import { Reveal } from "@/components/ui/Reveal";
import { SectionTag } from "@/components/ui/SectionTag";

export function AboutSection() {
  return (
    <section className="border-b border-line bg-charcoal py-24 sm:py-28">
      <Reveal>
        <div className="mx-auto grid max-w-6xl gap-10 px-6 sm:px-10 lg:grid-cols-[220px_minmax(0,1fr)] lg:gap-14 lg:px-16">
          <SectionTag>À propos</SectionTag>
          <p className="max-w-3xl text-xl leading-relaxed text-ivory/88 sm:text-2xl">
            Je travaille avec des marques et des individus qui comprennent qu&apos;une image n&apos;est pas une
            documentation. C&apos;est une décision. Chaque cadre, chaque lumière, chaque silence entre deux
            prises — tout est intentionnel. Mon travail commence là où les autres s&apos;arrêtent.
          </p>
        </div>
      </Reveal>
    </section>
  );
}
