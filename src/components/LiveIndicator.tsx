"use client";

import { motion } from "framer-motion";

interface LiveIndicatorProps {
  isLive?: boolean;
  platform?: string;
  href?: string;
}

export default function LiveIndicator({
  isLive = false,
  platform = "Instagram",
  href = "#",
}: LiveIndicatorProps) {
  if (!isLive) return null;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-3 py-1.5 text-xs font-medium text-white backdrop-blur-sm transition-colors hover:bg-white/20"
    >
      <span className="relative flex h-2 w-2">
        <motion.span
          className="absolute inline-flex h-full w-full animate-ping rounded-full bg-amber opacity-75"
          animate={{ scale: [1, 1.5, 1], opacity: [0.75, 0, 0.75] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        />
        <span className="relative inline-flex h-2 w-2 rounded-full bg-amber" />
      </span>
      Live now on {platform}
    </a>
  );
}
