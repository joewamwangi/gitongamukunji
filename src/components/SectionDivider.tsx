"use client";

import { motion } from "framer-motion";

export default function SectionDivider() {
  return (
    <div className="relative overflow-hidden sm:hidden">
      <motion.div
        initial={{ opacity: 0, scaleX: 0 }}
        whileInView={{ opacity: 1, scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="mx-auto flex w-full max-w-[200px] items-center gap-3 py-6"
      >
        <span className="h-px flex-1 bg-gold/40" />
        <span className="h-1.5 w-1.5 rotate-45 bg-gold" />
        <span className="h-px flex-1 bg-gold/40" />
      </motion.div>
    </div>
  );
}
