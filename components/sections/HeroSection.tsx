'use client';

import Image from 'next/image';
import gsap from 'gsap';
import { useEffect, useRef } from 'react';

export function HeroSection() {
  const rootRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!rootRef.current || !imageRef.current) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });
      tl.fromTo('.hero-image', { scale: 1.07, opacity: 0.4 }, { scale: 1, opacity: 0.82, duration: 1.6 })
        .fromTo('.hero-title', { y: 36, opacity: 0 }, { y: 0, opacity: 1, duration: 1.1 }, '-=1.0')
        .fromTo('.hero-meta', { y: 18, opacity: 0 }, { y: 0, opacity: 1, duration: 0.9 }, '-=0.8')
        .fromTo('.hero-cta', { y: 16, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8 }, '-=0.7');

      gsap.to(imageRef.current, {
        yPercent: 6,
        ease: 'none',
        scrollTrigger: {
          trigger: rootRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: true
        }
      });
    }, rootRef);

    return () => ctx.revert();
  }, []);

  return (
    <header ref={rootRef} className="relative flex min-h-screen items-end overflow-hidden border-b border-line">
      <div ref={imageRef} className="hero-image absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?auto=format&fit=crop&w=2000&q=80"
          alt="Portrait éditorial noir et blanc"
          fill
          priority
          className="object-cover grayscale"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-noir/40 via-noir/40 to-noir" />
      </div>

      <div className="section-shell relative z-10 pb-14 pt-28 md:pb-20">
        <p className="hero-meta editorial-kicker mb-5">Photographie éditoriale · Paris</p>
        <h1 className="hero-title max-w-3xl font-display text-5xl leading-[0.95] tracking-wide text-parchment md:text-7xl lg:text-8xl">
          L&apos;image que vous méritez.
        </h1>
        <div className="hero-cta mt-10 flex items-center gap-8">
          <a
            href="#contact"
            className="inline-flex items-center border border-gold/80 px-6 py-3 text-sm uppercase tracking-[0.2em] text-parchment transition hover:bg-gold hover:text-noir"
          >
            Découvrir
          </a>
          <span className="font-mono text-xs uppercase tracking-editorial text-parchment/55">Scroll</span>
        </div>
      </div>
    </header>
  );
}
