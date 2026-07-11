"use client";

import { motion } from "framer-motion";

interface HighlightSectionProps {
  image: string;
  quote: string;
  attribution?: string;
}

export default function HighlightSection({
  image,
  quote,
  attribution,
}: HighlightSectionProps) {
  return (
    <section className="relative flex h-[70vh] min-h-[500px] items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={image}
          alt=""
          className="h-full w-full object-cover"
        />
      </div>
      <div className="scrim-dark pointer-events-none absolute inset-0" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1 }}
        className="relative z-10 max-w-3xl px-6 text-center sm:px-10"
      >
        <svg
          width="40"
          height="28"
          viewBox="0 0 40 28"
          fill="none"
          className="mx-auto mb-6 text-gold/60"
        >
          <path
            d="M0 28V14.933C0 10.844 0.8 7.2 2.4 4 4 0.8 6.667 -0.889 10.4 0.444L12 1.778C8.8 3.111 6.667 5.333 5.6 8.444 7.2 8.889 8.4 9.778 9.2 11.111 10 12.444 10.4 14 10.4 15.778 10.4 18.222 9.467 20.311 7.6 22.044 5.733 23.778 3.467 24.889 0.8 25.333L0 28ZM27.6 28V14.933C27.6 10.844 28.4 7.2 30 4 31.6 0.8 34.267 -0.889 38 0.444L39.6 1.778C36.4 3.111 34.267 5.333 33.2 8.444 34.8 8.889 36 9.778 36.8 11.111 37.6 12.444 38 14 38 15.778 38 18.222 37.067 20.311 35.2 22.044 33.333 23.778 31.067 24.889 28.4 25.333L27.6 28Z"
            fill="currentColor"
          />
        </svg>
        <p className="font-display text-2xl leading-snug text-white sm:text-3xl lg:text-4xl">
          &ldquo;{quote}&rdquo;
        </p>
        {attribution && (
          <p className="mt-6 text-sm font-medium uppercase tracking-[0.25em] text-gold">
            &mdash; {attribution}
          </p>
        )}
      </motion.div>
    </section>
  );
}
