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
  mobileBgImage?: string;
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

export default function RecordSection({ stats, mobileBgImage }: RecordSectionProps) {
  return (
    <section id="record" className="border-t border-stone bg-white">
      {/* MOBILE: full-bleed bg image */}
      <div className="relative sm:hidden">
        {mobileBgImage && (
          <>
            <div className="absolute inset-0">
              <img
                src={mobileBgImage}
                alt=""
                className="h-full w-full object-cover"
              />
            </div>
            <div className="absolute inset-0 bg-charcoal/60" />
          </>
        )}
        <div className="relative z-10 px-6 py-16">
          <div className="flex min-h-[80dvh] flex-col justify-center">
            <div className="mb-10">
              <h2 className="font-display text-4xl leading-[1.05] tracking-tight text-white">
                The Leader
              </h2>
              <p className="mt-4 max-w-xl text-base leading-relaxed text-white/70">
                Uncompromised Representative. Principles Over Party. Sober Constitutionalist
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
          <h2 className="font-display text-4xl leading-[1.05] tracking-tight text-charcoal sm:text-5xl lg:text-6xl">
            The Leader
          </h2>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
            Uncompromised Representative. Principles Over Party. Sober Constitutionalist
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
