"use client";

import { motion } from "framer-motion";

export default function SectionDivider() {
  return (
    <div className="relative overflow-hidden sm:hidden">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="flex items-center justify-center py-10"
      >
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          className="flex w-full max-w-[200px] items-center gap-3"
        >
          <span className="h-px flex-1 bg-gold/40" />
        </motion.div>

        <motion.span
          initial={{ rotate: 45, scale: 0 }}
          whileInView={{ rotate: 45, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.5, ease: "easeOut" }}
          className="mx-3 h-2 w-2 bg-gold shrink-0"
        />

        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          className="flex w-full max-w-[200px] items-center gap-3"
        >
          <span className="h-px flex-1 bg-gold/40" />
        </motion.div>
      </motion.div>
    </div>
  );
}
