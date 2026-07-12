"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface HeroProps {
  mobileImages: string[];
  desktopImages: string[];
  video?: string;
  name: string;
  title: string;
  tagline: string;
  ctaLabel: string;
  ctaHref: string;
}

export default function Hero({
  mobileImages,
  desktopImages,
  video,
  name,
  title,
  tagline,
  ctaLabel,
  ctaHref,
}: HeroProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const mobileRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const y = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0.4]);
  const textY = useTransform(scrollYProgress, [0, 0.5], [0, -30]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0.7]);
  const morphProgress = useTransform(scrollYProgress, [0, 0.3, 0.6], [0, 0.5, 1]);
  const showVideo = useTransform(scrollYProgress, [0.5, 0.7], [0, 1]);

  const slides = mobileImages.slice(0, 8);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % slides.length);
    }, 5500);
    return () => clearInterval(timer);
  }, [slides.length]);

  const goToSlide = useCallback(
    (i: number) => setActiveIndex(i),
    []
  );

  return (
    <>
      {/* MOBILE HERO — Auto-carusel */}
      <section
        ref={mobileRef}
        className="relative flex h-dvh items-end overflow-hidden md:hidden"
      >
        <div className="absolute inset-0 -z-10 bg-charcoal">
          {slides.map((src, i) => (
            <motion.img
              key={i}
              src={src}
              alt=""
              className="absolute inset-0 h-full w-full object-cover"
              initial={false}
              animate={{
                opacity: i === activeIndex ? 1 : 0,
                scale: i === activeIndex ? 1 : 1.04,
              }}
              transition={{
                duration: 1.8,
                ease: [0.45, 0, 0.55, 1],
              }}
            />
          ))}
        </div>

        <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-t from-charcoal/80 via-charcoal/30 to-transparent" />

        <div className="relative z-10 flex w-full flex-col gap-4 p-5 pb-12">
          <p className="font-display text-[10px] font-light uppercase tracking-[0.3em] text-gold">
            {title}
          </p>

          <h1 className="font-display text-5xl leading-[0.9] tracking-tight text-white max-w-[85vw]">
            {name}
          </h1>

          <p className="max-w-[75vw] text-[11px] leading-snug text-white/70">
            {tagline}
          </p>

          <a
            href={ctaHref}
            className="inline-flex h-12 w-full items-center justify-center rounded-sm bg-gold px-6 text-center font-display text-base font-bold tracking-wide text-charcoal shadow-lg active:scale-[0.97]"
          >
            {ctaLabel}
          </a>

          <div className="flex items-center gap-1.5 pt-1">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => goToSlide(i)}
                className={`h-0.5 rounded-full transition-all duration-500 ${
                  i === activeIndex ? "w-6 bg-gold" : "w-1.5 bg-white/30"
                }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* DESKTOP HERO */}
      <section
        ref={sectionRef}
        className="relative hidden h-dvh min-h-[600px] items-end overflow-hidden md:flex"
      >
        <div className="absolute inset-0 -z-10">
          <motion.div
            className="absolute inset-0"
            style={{ scale, y, opacity }}
          >
            <img
              src={desktopImages[0]}
              alt=""
              className="h-full w-full object-cover"
            />
          </motion.div>

          {desktopImages.length > 1 && (
            <motion.div
              className="absolute inset-0"
              style={{ scale, y, opacity: morphProgress }}
            >
              <img
                src={desktopImages[1]}
                alt=""
                className="h-full w-full object-cover"
              />
            </motion.div>
          )}

          {video && (
            <motion.div
              className="absolute inset-0"
              style={{ opacity: showVideo }}
            >
              <video
                src={video}
                muted
                loop
                playsInline
                className="h-full w-full object-cover"
              />
            </motion.div>
          )}
        </div>

        <div className="scrim-gold pointer-events-none absolute inset-0 -z-10" />

        <motion.div
          className="relative z-10 flex w-full flex-col gap-6 p-12 pb-16 lg:p-16"
          style={{ y: textY, opacity: textOpacity }}
        >
          <div className="max-w-3xl">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mb-2 font-display text-sm font-light uppercase tracking-[0.3em] text-gold"
            >
              {title}
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="font-display text-8xl leading-[0.95] tracking-tight text-charcoal lg:text-9xl"
            >
              {name}
            </motion.h1>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="max-w-lg text-lg leading-relaxed text-muted lg:text-xl"
          >
            {tagline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <a
              href={ctaHref}
              className="inline-flex h-14 min-h-[56px] items-center justify-center rounded-sm bg-charcoal px-10 text-center font-display text-xl font-bold tracking-wide text-white shadow-lg transition-all hover:bg-black focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-charcoal"
            >
              {ctaLabel}
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          className="absolute bottom-6 left-1/2 z-10 -translate-x-1/2"
          style={{ opacity: useTransform(scrollYProgress, [0, 0.12], [1, 0]) }}
        >
          <motion.svg
            width="24"
            height="36"
            viewBox="0 0 24 36"
            fill="none"
            className="text-muted/40"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <rect x="2" y="2" width="20" height="32" rx="10" stroke="currentColor" strokeWidth="2" />
            <motion.circle
              cx="12" cy="12" r="3"
              fill="currentColor"
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
            />
          </motion.svg>
        </motion.div>
      </section>
    </>
  );
}
