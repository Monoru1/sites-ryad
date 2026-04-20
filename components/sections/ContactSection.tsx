import { SectionReveal } from '@/components/ui/SectionReveal';

export function ContactSection() {
  return (
    <SectionReveal id="contact" className="bg-gold py-24 text-noir md:py-28">
      <div className="section-shell">
        <p className="font-mono text-xs uppercase tracking-editorial text-noir/70">Léna Marchetti</p>
        <h2 className="mt-5 max-w-4xl font-display text-4xl leading-[1.02] md:text-7xl">
          Vous avez un projet. Il mérite d&apos;exister correctement.
        </h2>
        <a
          href="mailto:bonjour@lenamarchetti.studio"
          className="mt-10 inline-flex items-center border border-noir px-7 py-3 font-mono text-xs uppercase tracking-editorial transition hover:bg-noir hover:text-gold"
        >
          Commencer
        </a>
      </div>
    </SectionReveal>
  );
}
