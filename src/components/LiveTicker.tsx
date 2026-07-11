"use client";

import { motion } from "framer-motion";

interface LiveFeed {
  platform: "facebook" | "x" | "instagram" | "tiktok" | "youtube";
  label: string;
  href: string;
  isLive?: boolean;
}

interface LiveTickerProps {
  feeds: LiveFeed[];
}

const platformColors: Record<string, string> = {
  facebook: "hover:bg-[#1877F2]/20 hover:text-[#1877F2] border-[#1877F2]/30",
  x: "hover:bg-white/10 hover:text-white border-white/20",
  instagram:
    "hover:bg-[#E4405F]/20 hover:text-[#E4405F] border-[#E4405F]/30",
  tiktok: "hover:bg-white/10 hover:text-white border-white/20",
  youtube: "hover:bg-[#FF0000]/20 hover:text-[#FF0000] border-[#FF0000]/30",
};

export default function LiveTicker({ feeds }: LiveTickerProps) {
  const liveCount = feeds.filter((f) => f.isLive).length;

  return (
    <section id="live" className="border-t border-stone/30 bg-charcoal">
      <div className="mx-auto max-w-7xl px-6 py-20 sm:px-10 sm:py-28 lg:px-16 lg:py-36">
        <div className="mb-14 sm:mb-20">
          <div className="mb-3 flex items-center gap-3">
            <p className="font-display text-xs font-light uppercase tracking-[0.25em] text-gold">
              Chapter 03
            </p>
            {liveCount > 0 && (
              <span className="flex items-center gap-1.5 rounded-full border border-emerald/40 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-emerald">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald" />
                {liveCount} live{liveCount > 1 ? "s" : ""}
              </span>
            )}
          </div>
          <h2 className="font-display text-4xl leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
            Live & Direct
          </h2>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-warm-muted sm:text-lg">
            Follow the work as it happens. Interviews, events, town halls —
            streaming live across every platform.
          </p>
        </div>

        <div className="flex flex-wrap gap-3">
          {feeds.map((feed) => (
            <motion.a
              key={feed.platform}
              href={feed.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={`group inline-flex items-center gap-3 rounded-sm border px-5 py-3 text-sm font-medium uppercase tracking-widest text-warm-muted transition-all ${platformColors[feed.platform]}`}
            >
              {feed.isLive && (
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-gold opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-gold" />
                </span>
              )}
              {feed.label}
              <svg
                width="12"
                height="12"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              >
                <path d="M7 17L17 7M7 7h10v10" />
              </svg>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
