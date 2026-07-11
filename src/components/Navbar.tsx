"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "The Record", href: "#record" },
  { label: "On the Ground", href: "#ground" },
  { label: "Live", href: "#live" },
  { label: "Your Voice", href: "#voice" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

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
            <span className="text-gold">G.</span> Mukunji
          </a>

          <button
            onClick={() => setOpen(!open)}
            className="relative z-50 flex h-11 w-11 items-center justify-center rounded-sm active:scale-95"
            aria-label={open ? "Close menu" : "Open menu"}
          >
            <div className="flex flex-col items-center justify-center gap-1">
              <motion.span
                animate={open ? { rotate: 45, y: 5 } : { rotate: 0, y: 0 }}
                className={`h-[2.5px] w-5 rounded-full transition-colors ${
                  scrolled ? "bg-charcoal" : "bg-white"
                }`}
              />
              <motion.span
                animate={open ? { opacity: 0 } : { opacity: 1 }}
                className={`h-[2.5px] w-5 rounded-full transition-colors ${
                  scrolled ? "bg-charcoal" : "bg-white"
                }`}
              />
              <motion.span
                animate={open ? { rotate: -45, y: -5 } : { rotate: 0, y: 0 }}
                className={`h-[2.5px] w-5 rounded-full transition-colors ${
                  scrolled ? "bg-charcoal" : "bg-white"
                }`}
              />
            </div>
          </button>
        </nav>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-40 flex flex-col items-center justify-center gap-10 bg-white/98 backdrop-blur-2xl"
            >
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.08 * i }}
                  onClick={() => setOpen(false)}
                  className="font-display text-4xl tracking-wide text-charcoal transition-colors hover:text-gold-dark active:text-gold-dark"
                >
                  {link.label}
                </motion.a>
              ))}
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
            <span className="text-gold">G.</span> Mukunji
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
