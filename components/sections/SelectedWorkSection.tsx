import Image from 'next/image';
import { SectionReveal } from '@/components/ui/SectionReveal';
import { selectedWork } from '@/lib/content';

export function SelectedWorkSection() {
  return (
    <SectionReveal className="border-b border-line py-24 md:py-32">
      <div className="section-shell">
        <div className="mb-10 flex items-end justify-between gap-4">
          <h2 className="section-title">Selected Work</h2>
          <p className="editorial-kicker">Trois visions, une signature</p>
        </div>

        <div className="grid gap-6 md:grid-cols-12 md:grid-rows-2">
          {selectedWork.map((project, index) => (
            <article
              key={project.title}
              className={`group relative overflow-hidden rounded-sm border border-line bg-ink ${
                index === 0
                  ? 'md:col-span-7 md:row-span-2'
                  : index === 1
                    ? 'md:col-span-5 md:row-span-1'
                    : 'md:col-span-5 md:row-span-1'
              }`}
            >
              <div className={`relative ${index === 0 ? 'min-h-[500px]' : 'min-h-[240px] md:min-h-[247px]'}`}>
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover grayscale transition duration-700 group-hover:scale-[1.04] group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-noir/80 via-noir/30 to-transparent transition duration-500 group-hover:from-noir/65" />
                <div className="absolute bottom-0 left-0 p-6 md:p-8">
                  <h3 className="font-display text-2xl leading-tight text-parchment md:text-3xl">{project.title}</h3>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </SectionReveal>
  );
}
