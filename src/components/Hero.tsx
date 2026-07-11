"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface HeroProps {
  images: string[];
  video?: string;
  name: string;
  title: string;
  tagline: string;
  ctaLabel: string;
  ctaHref: string;
}

export default function Hero({
  images,
  video,
  name,
  title,
  tagline,
  ctaLabel,
  ctaHref,
}: HeroProps) {
  const sectionRef = useRef<HTMLDivElement>(null);

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

  return (
    <section
      ref={sectionRef}
      className="relative flex h-dvh min-h-[600px] items-end overflow-hidden"
    >
      <div className="absolute inset-0 -z-10">
        <motion.div
          className="absolute inset-0"
          style={{ scale, y, opacity }}
        >
          <img
            src={images[0]}
            alt=""
            className="h-full w-full object-cover"
          />
        </motion.div>

        {images.length > 1 && (
          <motion.div
            className="absolute inset-0"
            style={{ scale, y, opacity: morphProgress }}
          >
            <img
              src={images[1]}
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

      <div className="scrim-hero-light pointer-events-none absolute inset-0 -z-10" />

      <motion.div
        className="relative z-10 flex w-full flex-col gap-6 p-6 pb-12 sm:p-12 lg:p-16"
        style={{ y: textY, opacity: textOpacity }}
      >
        <div className="max-w-3xl">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-2 font-display text-sm font-light uppercase tracking-[0.3em] text-gold-dark sm:text-base"
          >
            {title}
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="font-display text-5xl leading-[0.95] tracking-tight text-charcoal sm:text-7xl md:text-8xl lg:text-9xl"
          >
            {name}
          </motion.h1>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="max-w-lg text-base leading-relaxed text-warm-muted sm:text-lg md:text-xl"
        >
          {tagline}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col gap-4 sm:flex-row sm:items-center"
        >
          <a
            href={ctaHref}
            className="inline-flex h-13 min-h-[48px] items-center justify-center rounded-sm bg-gold px-8 text-center text-sm font-semibold uppercase tracking-widest text-white transition-all active:scale-[0.97] hover:bg-gold-light focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
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
          className="text-warm-muted/50"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <rect
            x="2"
            y="2"
            width="20"
            height="32"
            rx="10"
            stroke="currentColor"
            strokeWidth="2"
          />
          <motion.circle
            cx="12"
            cy="12"
            r="3"
            fill="currentColor"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.svg>
      </motion.div>
    </section>
  );
}
