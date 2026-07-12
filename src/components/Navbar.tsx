"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface NavGroup {
  label: string;
  subtitle: string;
  href: string;
}

const navLinks = [
  { label: "The Record", href: "#record" },
  { label: "On the Ground", href: "#ground" },
  { label: "Live", href: "#live" },
  { label: "Your Voice", href: "#voice" },
];

const navGroups: NavGroup[] = [
  {
    label: "The Journey",
    subtitle: "From a university room to an innovative self-made entrepreneur",
    href: "#journey",
  },
  {
    label: "The Lawmaker",
    subtitle: "Service with integrity | People over politics",
    href: "#lawmaker",
  },
  {
    label: "The Blueprint",
    subtitle: "Youth | Education | Infrastructure | Agriculture",
    href: "#blueprint",
  },
  {
    label: "The Social Impact",
    subtitle: "Empowerment | Public Accountability | Philanthropy",
    href: "#impact",
  },
  {
    label: "The Newsroom",
    subtitle: "Policy analysis | Media Insights",
    href: "#newsroom",
  },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const toggleItem = (i: number) => {
    setActiveIndex(activeIndex === i ? null : i);
  };

  const closeMenu = () => {
    setOpen(false);
    setActiveIndex(null);
  };

  return (
    <>
      {/* MOBILE NAV */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 md:hidden ${
          scrolled
            ? "bg-white/95 backdrop-blur-xl shadow-sm"
            : "bg-transparent"
        }`}
      >
        <nav className="flex items-center justify-between px-5 py-3.5">
          <a
            href="#"
            className={`font-display text-base font-semibold tracking-wide transition-colors ${
              scrolled ? "text-charcoal" : "text-white"
            }`}
          >
            <span className="text-gold">Gitonga</span> Mukunji
          </a>

          <button
            onClick={() => {
              setOpen(!open);
              setActiveIndex(null);
            }}
            className="relative z-50 flex h-11 w-11 items-center justify-center rounded-sm active:scale-95"
            aria-label={open ? "Close menu" : "Open menu"}
          >
            {open ? (
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="text-charcoal">
                <path d="M4 4l12 12M16 4L4 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            ) : (
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className={`${scrolled ? "text-charcoal" : "text-white"}`}>
                <circle cx="10" cy="4" r="1.5" fill="currentColor" />
                <circle cx="10" cy="10" r="1.5" fill="currentColor" />
                <circle cx="10" cy="16" r="1.5" fill="currentColor" />
              </svg>
            )}
          </button>
        </nav>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 z-40 flex items-start justify-center pt-24 bg-black/20 backdrop-blur-sm"
            >
              <motion.div
                initial={{ opacity: 0, y: -12, scale: 0.97 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -12, scale: 0.97 }}
                transition={{ duration: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
                className="w-[90%] max-w-sm rounded-sm bg-white/85 backdrop-blur-xl px-6 py-5 shadow-xl shadow-black/10"
              >
              <div className="flex w-full max-w-sm flex-col">
                {navGroups.map((group, i) => (
                  <motion.div
                    key={group.href}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.05 * i, duration: 0.4 }}
                    className="relative"
                  >
                    <button
                      onClick={() => toggleItem(i)}
                      className="group relative flex w-full flex-col py-[18px] text-left"
                    >
                      <motion.div
                        animate={{
                          width: activeIndex === i ? "3px" : "0px",
                        }}
                        transition={{ duration: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
                        className="absolute left-0 top-1/2 -translate-y-1/2 bg-gold"
                        style={{ height: activeIndex === i ? "70%" : "0%" }}
                      />

                      <div className="flex items-center justify-between pl-5">
                        <span
                          className={`font-display text-2xl tracking-tight transition-colors duration-300 ${
                            activeIndex === i
                              ? "text-charcoal"
                              : "text-charcoal/65 hover:text-charcoal/85"
                          }`}
                        >
                          {group.label}
                        </span>

                        <motion.svg
                          animate={{
                            rotate: activeIndex === i ? 180 : 0,
                            color:
                              activeIndex === i ? "#D4AF37" : "rgba(26,24,21,0.2)",
                          }}
                          transition={{ duration: 0.3 }}
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                          className="mr-1"
                        >
                          <path
                            d="M4 6l4 4 4-4"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </motion.svg>
                      </div>

                      <AnimatePresence>
                        {activeIndex === i && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3, ease: "easeOut" }}
                            className="overflow-hidden"
                          >
                            <p className="pl-5 pt-1.5 text-[11px] leading-relaxed text-charcoal/70">
                              {group.subtitle}
                            </p>

                            <a
                              href={group.href}
                              onClick={closeMenu}
                              className="ml-5 mt-3 inline-flex h-[30px] items-center gap-1.5 rounded-sm border border-gold/30 px-3 text-[10px] font-medium uppercase tracking-widest text-gold transition-colors hover:border-gold hover:bg-gold/5"
                            >
                              Explore
                              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                                <path
                                  d="M2 6h8M6 2l4 4-4 4"
                                  stroke="currentColor"
                                  strokeWidth="1.2"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                              </svg>
                            </a>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </button>

                    <motion.div
                      animate={{ opacity: activeIndex === i ? 0 : 0.12 }}
                      className="ml-5 h-px bg-gold"
                    />
                  </motion.div>
                ))}
              </div>
            </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* DESKTOP NAV */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 hidden md:block ${
          scrolled
            ? "bg-white/90 backdrop-blur-xl shadow-sm shadow-black/5"
            : "bg-transparent"
        }`}
      >
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-10 py-5 lg:px-16">
          <a
            href="#"
            className={`font-display text-lg font-semibold tracking-wide transition-colors ${
              scrolled ? "text-charcoal" : "text-white"
            }`}
          >
            <span className="text-gold">Gitonga</span> Mukunji
          </a>

          <ul className="flex items-center gap-10">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={`text-sm font-medium uppercase tracking-widest transition-colors ${
                    scrolled
                      ? "text-muted hover:text-gold-dark"
                      : "text-white/70 hover:text-white"
                  }`}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </header>
    </>
  );
}
