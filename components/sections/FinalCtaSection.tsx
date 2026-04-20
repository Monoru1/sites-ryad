"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

export function FinalCtaSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const animation = gsap.fromTo(
      sectionRef.current.querySelectorAll("[data-cta]"),
      { y: 24, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        stagger: 0.1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%"
        }
      }
    );

    return () => {
      animation.scrollTrigger?.kill();
      animation.kill();
    };
  }, []);

  return (
    <section ref={sectionRef} className="bg-gold py-24 sm:py-28">
      <div className="mx-auto flex max-w-5xl flex-col gap-10 px-6 sm:px-10 lg:px-16">
        <p data-cta className="font-mono text-[0.65rem] uppercase tracking-editorial text-noir/80">
          Contact
        </p>
        <h2 data-cta className="max-w-4xl font-serif text-4xl leading-tight text-noir sm:text-6xl">
          Vous avez un projet. Il mérite d&apos;exister correctement.
        </h2>
        <div data-cta>
          <button className="group inline-flex items-center gap-3 border border-noir/70 px-6 py-3 font-mono text-[0.66rem] uppercase tracking-editorial text-noir transition hover:bg-noir hover:text-ivory">
            Commencer
            <span className="h-px w-8 bg-current transition group-hover:w-10" />
          </button>
        </div>
      </div>
    </section>
  );
}
