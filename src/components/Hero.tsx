"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import LiveIndicator from "./LiveIndicator";

interface HeroProps {
  image1: string;
  image2: string;
  name: string;
  title: string;
  tagline: string;
  ctaLabel: string;
  ctaHref: string;
  secondaryLabel: string;
  secondaryHref: string;
  isLive?: boolean;
  livePlatform?: string;
  liveHref?: string;
}

export default function Hero({
  image1,
  image2,
  name,
  title,
  tagline,
  ctaLabel,
  ctaHref,
  secondaryLabel,
  secondaryHref,
  isLive = false,
  livePlatform,
  liveHref,
}: HeroProps) {
  const sectionRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.12]);
  const imageY = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const opacity1 = useTransform(scrollYProgress, [0, 0.4], [1, 0]);
  const opacity2 = useTransform(scrollYProgress, [0, 0.4], [0, 1]);
  const overlayOpacity = useTransform(scrollYProgress, [0, 0.15], [1, 0.92]);
  const contentY = useTransform(scrollYProgress, [0, 0.6], [0, -30]);

  return (
    <section
      ref={sectionRef}
      className="relative flex h-dvh min-h-[600px] items-end overflow-hidden"
    >
      <div className="absolute inset-0 -z-10">
        <motion.div
          className="absolute inset-0"
          style={{ scale, y: imageY, opacity: opacity1 }}
        >
          <Image
            src={image1}
            alt=""
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
        </motion.div>
        <motion.div
          className="absolute inset-0"
          style={{ scale, y: imageY, opacity: opacity2 }}
        >
          <Image
            src={image2}
            alt=""
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
        </motion.div>
      </div>

      <motion.div
        className="scrim-hero pointer-events-none absolute inset-0 -z-10"
        style={{ opacity: overlayOpacity }}
      />

      <motion.div
        className="relative z-10 flex w-full flex-col gap-5 p-6 pb-10 sm:p-10 lg:p-16"
        style={{ y: contentY }}
      >
        {isLive && (
          <div className="pointer-events-auto mb-1">
            <LiveIndicator
              isLive={isLive}
              platform={livePlatform}
              href={liveHref}
            />
          </div>
        )}

        <div className="max-w-2xl">
          <h1 className="font-display text-4xl leading-tight tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
            {name}
          </h1>
          <p className="mt-2 font-display text-lg font-light text-white/80 sm:text-xl md:text-2xl">
            {title}
          </p>
        </div>

        <p className="max-w-lg text-base text-white/90 sm:text-lg md:text-xl">
          {tagline}
        </p>

        <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
          <a
            href={ctaHref}
            className="inline-flex h-12 min-h-[44px] items-center justify-center rounded-lg bg-amber px-7 text-center text-base font-semibold text-charcoal shadow-sm transition-all active:scale-[0.97] sm:h-13 sm:px-8 hover:bg-amber-dark focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber"
          >
            {ctaLabel}
          </a>
          <a
            href={secondaryHref}
            className="inline-flex h-12 min-h-[44px] items-center justify-center rounded-lg border border-white/25 px-6 text-center text-sm font-medium text-white/90 transition-colors hover:border-white/50 hover:text-white sm:h-13 sm:px-7 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            {secondaryLabel}
          </a>
        </div>
      </motion.div>

      <motion.div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 z-10 pb-4"
        style={{ opacity: useTransform(scrollYProgress, [0, 0.1], [1, 0]) }}
      >
        <motion.svg
          width="20"
          height="30"
          viewBox="0 0 20 30"
          fill="none"
          className="text-white/60"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <rect
            x="1.5"
            y="1.5"
            width="17"
            height="27"
            rx="8.5"
            stroke="currentColor"
            strokeWidth="2"
          />
          <motion.circle
            cx="10"
            cy="10"
            r="2.5"
            fill="currentColor"
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.svg>
      </motion.div>
    </section>
  );
}
