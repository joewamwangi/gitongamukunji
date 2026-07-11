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
      <div className="scrim-gold pointer-events-none absolute inset-0" />

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
          className="mx-auto mb-6 text-gold/50"
        >
          <path
            d="M0 28V14.933C0 10.844.8 7.2 2.4 4 4 .8 6.667-.889 10.4.444L12 1.778c-3.2 1.333-5.333 3.555-6.4 6.666 1.6.445 2.8 1.334 3.6 2.667.8 1.333 1.2 2.889 1.2 4.667 0 2.444-.933 4.533-2.8 6.266C5.733 23.778 3.467 24.889.8 25.333L0 28zm27.6 0V14.933c0-4.089.8-7.733 2.4-10.933 1.6-3.2 4.267-4.889 8-3.556l1.6 1.334c-3.2 1.333-5.333 3.555-6.4 6.666 1.6.445 2.8 1.334 3.6 2.667.8 1.333 1.2 2.889 1.2 4.667 0 2.444-.933 4.533-2.8 6.266-1.867 1.734-4.133 2.845-6.8 3.289L27.6 28z"
            fill="currentColor"
          />
        </svg>
        <p className="font-display text-2xl leading-snug text-charcoal sm:text-3xl lg:text-4xl">
          &ldquo;{quote}&rdquo;
        </p>
        {attribution && (
          <p className="mt-6 text-sm font-medium uppercase tracking-[0.25em] text-gold-dark">
            &mdash; {attribution}
          </p>
        )}
      </motion.div>
    </section>
  );
}
