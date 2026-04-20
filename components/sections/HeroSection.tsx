"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

export function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const image = imageRef.current;

    if (!section || !image) return;

    const reveal = gsap.fromTo(
      section.querySelectorAll("[data-hero-reveal]"),
      { y: 40, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1.4,
        stagger: 0.12,
        ease: "power3.out",
        delay: 0.2
      }
    );

    const parallax = gsap.to(image, {
      yPercent: 6,
      ease: "none",
      scrollTrigger: {
        trigger: section,
        start: "top top",
        end: "bottom top",
        scrub: true
      }
    });

    return () => {
      reveal.kill();
      parallax.scrollTrigger?.kill();
      parallax.kill();
    };
  }, []);

  return (
    <section ref={sectionRef} className="relative min-h-screen overflow-hidden border-b border-line">
      <div ref={imageRef} className="absolute inset-0 scale-105">
        <Image
          src="https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?auto=format&fit=crop&w=2000&q=80"
          alt="Portrait noir et blanc éditorial"
          fill
          priority
          className="object-cover object-center grayscale"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-noir via-noir/65 to-noir/10" />
      </div>

      <div className="relative mx-auto flex min-h-screen w-full max-w-7xl flex-col justify-between px-6 pb-8 pt-28 sm:px-10 lg:px-16">
        <div className="max-w-3xl space-y-8">
          <p data-hero-reveal className="font-mono text-xs uppercase tracking-editorial text-ivory/70">
            Léna Marchetti · Studio Paris
          </p>
          <h1
            data-hero-reveal
            className="font-serif text-5xl leading-[0.95] text-ivory sm:text-6xl md:text-7xl lg:text-8xl"
          >
            L&apos;image que vous méritez.
          </h1>
          <p data-hero-reveal className="max-w-md text-base text-ivory/80 sm:text-lg">
            Photographie éditoriale · Paris
          </p>
          <button
            data-hero-reveal
            className="group inline-flex items-center gap-3 border border-ivory/40 bg-ivory/5 px-6 py-3 font-mono text-[0.68rem] uppercase tracking-editorial text-ivory transition hover:border-gold hover:text-gold"
          >
            Voir le portfolio
            <span className="h-px w-8 bg-current transition group-hover:w-10" />
          </button>
        </div>

        <p data-hero-reveal className="font-mono text-[0.65rem] uppercase tracking-editorial text-ivory/60">
          Scroll — 01
        </p>
      </div>
    </section>
  );
}
