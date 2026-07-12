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

function PlatformIcon({ platform, className }: { platform: LiveFeed["platform"]; className?: string }) {
  switch (platform) {
    case "facebook":
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
        </svg>
      );
    case "x":
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      );
    case "instagram":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={className}>
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
        </svg>
      );
    case "tiktok":
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
          <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
        </svg>
      );
    case "youtube":
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
        </svg>
      );
    default:
      return null;
  }
}

export default function LiveTicker({ feeds }: LiveTickerProps) {
  const liveCount = feeds.filter((f) => f.isLive).length;

  const brandColors: Record<LiveFeed["platform"], { border: string; text: string; hoverBg: string }> = {
    facebook: { border: "border-[#1877F2]", text: "text-[#1877F2]", hoverBg: "hover:bg-[#1877F2]" },
    x: { border: "border-[#000000]", text: "text-[#000000]", hoverBg: "hover:bg-[#000000]" },
    instagram: { border: "border-[#E4405F]", text: "text-[#E4405F]", hoverBg: "hover:bg-[#E4405F]" },
    tiktok: { border: "border-[#000000]", text: "text-[#000000]", hoverBg: "hover:bg-[#000000]" },
    youtube: { border: "border-[#FF0000]", text: "text-[#FF0000]", hoverBg: "hover:bg-[#FF0000]" },
  };

  const buttonClass = (platform: LiveFeed["platform"]) => {
    const c = brandColors[platform];
    return `group inline-flex items-center gap-3 rounded-sm border px-5 py-3.5 text-sm font-medium uppercase tracking-widest transition-all text-muted border-stone hover:text-white ${c.hoverBg} ${c.border} sm:py-3`;
  };

  return (
    <section id="live" className="border-t border-stone bg-white">
      <div className="mx-auto max-w-7xl px-6 py-20 sm:px-10 sm:py-28 lg:px-16 lg:py-36">
        <div className="mb-14 sm:mb-20">
          <div className="mb-3 flex items-center gap-3">
            {liveCount > 0 && (
              <span className="flex items-center gap-1.5 rounded-full border border-gold/30 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-gold-dark">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-gold" />
                {liveCount} live{liveCount > 1 ? "s" : ""}
              </span>
            )}
          </div>
          <h2 className="font-display text-4xl leading-[1.05] tracking-tight text-charcoal sm:text-5xl lg:text-6xl">
            Live & Direct
          </h2>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
            Follow the work as it happens. Interviews, events, town halls &mdash;
            streaming live across every platform.
          </p>
        </div>

        {/* MOBILE: horizontal scroll */}
        <div className="flex gap-3 overflow-x-auto pb-2 sm:hidden [-webkit-overflow-scrolling:touch] snap-x snap-mandatory">
          {feeds.map((feed) => (
            <motion.a
              key={feed.platform}
              href={feed.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={buttonClass(feed.platform) + " shrink-0 snap-start"}
            >
              {feed.isLive && (
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-gold opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-gold" />
                </span>
              )}
              <PlatformIcon platform={feed.platform} className="h-4 w-4 shrink-0" />
              {feed.label}
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                <path d="M7 17L17 7M7 7h10v10" />
              </svg>
            </motion.a>
          ))}
        </div>

        {/* DESKTOP: flex wrap */}
        <div className="hidden flex-wrap gap-3 sm:flex">
          {feeds.map((feed) => (
            <motion.a
              key={feed.platform}
              href={feed.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={buttonClass(feed.platform)}
            >
              {feed.isLive && (
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-gold opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-gold" />
                </span>
              )}
              <PlatformIcon platform={feed.platform} className="h-4 w-4 shrink-0" />
              {feed.label}
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                <path d="M7 17L17 7M7 7h10v10" />
              </svg>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
