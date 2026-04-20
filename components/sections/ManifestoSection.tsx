import { Reveal } from "@/components/ui/Reveal";

export function ManifestoSection() {
  return (
    <section className="border-b border-line bg-noir py-28 sm:py-32 lg:py-40">
      <Reveal>
        <div className="mx-auto flex max-w-4xl flex-col items-center px-6 text-center sm:px-10">
          <p className="font-serif text-4xl italic leading-tight text-ivory sm:text-5xl lg:text-6xl">
            Je ne photographie pas des gens. Je fixe leur présence.
          </p>
          <p className="mt-10 font-mono text-[0.68rem] uppercase tracking-editorial text-gold">
            — Léna Marchetti
          </p>
        </div>
      </Reveal>
    </section>
  );
}
