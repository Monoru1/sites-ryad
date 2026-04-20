import { SectionReveal } from '@/components/ui/SectionReveal';

export function ManifestoSection() {
  return (
    <SectionReveal className="border-b border-line py-24 md:py-32">
      <div className="section-shell text-center">
        <p className="mx-auto max-w-4xl font-display text-4xl italic leading-tight text-parchment md:text-6xl">
          “Je ne photographie pas des gens. Je fixe leur présence.”
        </p>
        <p className="mt-8 font-mono text-xs uppercase tracking-editorial text-gold">— Léna Marchetti</p>
      </div>
    </SectionReveal>
  );
}
