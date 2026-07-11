"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface StatItem {
  label: string;
  value: string;
  description: string;
  progress?: number;
}

interface RecordSectionProps {
  stats: StatItem[];
  mobileFromImage?: string;
  mobileToImage?: string;
}

function StatCard({ stat, index, dark }: { stat: StatItem; index: number; dark?: boolean }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.9", "start 0.4"],
  });
  const progress = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay: index * 0.1 }}
      className={`group border-l-2 border-gold/30 pl-4 transition-colors hover:border-gold sm:pl-6`}
    >
      <p className={`font-display text-3xl leading-none sm:text-5xl lg:text-6xl ${dark ? 'text-gold-light' : 'text-gold-dark'}`}>
        {stat.value}
      </p>
      <p className={`mt-1.5 text-sm font-semibold uppercase tracking-widest sm:text-base ${dark ? 'text-white' : 'text-charcoal'}`}>
        {stat.label}
      </p>
      <p className={`mt-1 max-w-xs text-sm leading-relaxed ${dark ? 'text-white/60' : 'text-muted'}`}>
        {stat.description}
      </p>
      {stat.progress !== undefined && (
        <div className={`mt-2 h-[2px] w-full max-w-[200px] ${dark ? 'bg-white/20' : 'bg-stone'}`}>
          <motion.div
            className="h-full bg-gold"
            style={{ scaleX: progress, transformOrigin: "left" }}
          />
        </div>
      )}
    </motion.div>
  );
}

export default function RecordSection({ stats, mobileFromImage, mobileToImage }: RecordSectionProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const morph = useTransform(scrollYProgress, [0, 0.5, 1], [0, 0.8, 1]);

  return (
    <section id="record" ref={sectionRef} className="border-t border-stone bg-white">
      {/* MOBILE: smooth image morph */}
      <div className="relative sm:hidden">
        {mobileFromImage && (
          <div className="absolute inset-0">
            <img
              src={mobileFromImage}
              alt=""
              className="h-full w-full object-cover"
            />
          </div>
        )}
        {mobileToImage && (
          <motion.div
            className="absolute inset-0"
            style={{ opacity: morph }}
          >
            <img
              src={mobileToImage}
              alt=""
              className="h-full w-full object-cover"
            />
          </motion.div>
        )}
        <motion.div
          className="absolute inset-0 bg-gradient-to-b from-transparent via-charcoal/40 to-charcoal/80"
          style={{ opacity: morph }}
        />

        <div className="relative z-10 px-6 py-16">
          <div className="flex min-h-[80dvh] flex-col justify-center">
            <div className="mb-10">
              <p className="mb-3 font-display text-xs font-light uppercase tracking-[0.25em] text-gold">
                Chapter 01
              </p>
              <h2 className="font-display text-4xl leading-[1.05] tracking-tight text-white">
                The Record
              </h2>
              <p className="mt-4 max-w-xl text-base leading-relaxed text-white/70">
                Promises made. Promises kept. Here&apos;s where things stand &mdash; tracked
                openly, no spin.
              </p>
            </div>

            <div className="flex flex-col gap-8">
              {stats.map((stat, i) => (
                <StatCard key={i} stat={stat} index={i} dark />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* DESKTOP */}
      <div className="hidden mx-auto max-w-7xl px-6 py-16 sm:px-10 sm:py-28 lg:px-16 lg:py-36 sm:block">
        <div className="mb-14 sm:mb-20">
          <p className="mb-3 font-display text-xs font-light uppercase tracking-[0.25em] text-gold">
            Chapter 01
          </p>
          <h2 className="font-display text-4xl leading-[1.05] tracking-tight text-charcoal sm:text-5xl lg:text-6xl">
            The Record
          </h2>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
            Promises made. Promises kept. Here&apos;s where things stand &mdash; tracked
            openly, no spin.
          </p>
        </div>

        <div className="hidden gap-10 sm:grid sm:grid-cols-2 lg:gap-14">
          {stats.map((stat, i) => (
            <StatCard key={i} stat={stat} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
