import { Reveal } from "@/components/ui/Reveal";
import { SectionTag } from "@/components/ui/SectionTag";
import { projects } from "@/lib/content";
import Image from "next/image";

export function SelectedWorkSection() {
  return (
    <section className="border-b border-line bg-noir py-24 sm:py-28">
      <div className="mx-auto max-w-6xl px-6 sm:px-10 lg:px-16">
        <Reveal>
          <div className="mb-14 flex items-end justify-between gap-6">
            <div>
              <SectionTag>Selected Work</SectionTag>
              <h2 className="mt-4 font-serif text-4xl text-ivory sm:text-5xl">Sélection récente</h2>
            </div>
            <p className="hidden max-w-sm text-sm text-ivory/65 md:block">
              Trois projets. Trois tensions visuelles. Une même exigence éditoriale.
            </p>
          </div>
        </Reveal>

        <div className="grid gap-6 md:grid-cols-12 md:gap-8">
          {projects.map((project, index) => (
            <Reveal key={project.title} y={30 + index * 10}>
              <article
                className={`group relative overflow-hidden border border-line bg-charcoal shadow-luxe ${
                  index === 0 ? "md:col-span-7" : index === 1 ? "md:col-span-5 md:mt-14" : "md:col-span-8"
                }`}
              >
                <div className="relative h-[420px] w-full overflow-hidden sm:h-[520px]">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover grayscale transition duration-700 group-hover:scale-[1.03] group-hover:grayscale-0"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-noir/85 via-noir/30 to-transparent transition group-hover:from-noir/65" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
                  <p className="font-mono text-[0.64rem] uppercase tracking-editorial text-gold/95">{project.type}</p>
                  <h3 className="mt-3 font-serif text-3xl text-ivory">{project.title}</h3>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
