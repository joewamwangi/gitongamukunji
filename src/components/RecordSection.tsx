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
}

function StatCard({ stat, index }: { stat: StatItem; index: number }) {
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
      className="group border-l-2 border-gold/30 pl-4 transition-colors hover:border-gold sm:pl-6"
    >
      <p className="font-display text-3xl leading-none text-gold-dark sm:text-5xl lg:text-6xl">
        {stat.value}
      </p>
      <p className="mt-1.5 text-sm font-semibold uppercase tracking-widest text-charcoal sm:text-base">
        {stat.label}
      </p>
      <p className="mt-1 max-w-xs text-sm leading-relaxed text-muted">
        {stat.description}
      </p>
      {stat.progress !== undefined && (
        <div className="mt-2 h-[2px] w-full max-w-[200px] bg-stone">
          <motion.div
            className="h-full bg-gold"
            style={{ scaleX: progress, transformOrigin: "left" }}
          />
        </div>
      )}
    </motion.div>
  );
}

export default function RecordSection({ stats }: RecordSectionProps) {
  return (
    <section id="record" className="border-t border-stone bg-white">
      <div className="mx-auto max-w-7xl px-6 py-16 sm:px-10 sm:py-28 lg:px-16 lg:py-36">
        {/* MOBILE: vertical center layout */}
        <div className="flex min-h-[80dvh] flex-col justify-center sm:block">
          <div className="mb-10 sm:mb-20">
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

          {/* MOBILE: single column */}
          <div className="flex flex-col gap-8 sm:hidden">
            {stats.map((stat, i) => (
              <StatCard key={i} stat={stat} index={i} />
            ))}
          </div>
        </div>

        {/* DESKTOP: 2-column grid */}
        <div className="hidden gap-10 sm:grid sm:grid-cols-2 lg:gap-14">
          {stats.map((stat, i) => (
            <StatCard key={i} stat={stat} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
