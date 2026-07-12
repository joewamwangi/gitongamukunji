"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface GalleryPhoto {
  id: string;
  src: string;
  caption: string;
  location: string;
  date: string;
  href?: string;
}

interface GallerySectionProps {
  photos: GalleryPhoto[];
}

function PhotoCard({ photo }: { photo: GalleryPhoto }) {
  const content = (
    <div
      className="group relative cursor-pointer overflow-hidden rounded-sm bg-white shadow-sm"
      tabIndex={0}
      role="button"
      aria-label={`Photo: ${photo.caption}`}
    >
      <img
        src={photo.src}
        alt={photo.caption}
        loading="lazy"
        className="w-full object-cover transition-all duration-700 group-hover:scale-105 group-focus-visible:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/20 to-transparent p-4 flex flex-col justify-end">
        <p className="text-sm font-medium leading-snug text-white">
          {photo.caption}
        </p>
        <p className="mt-1 text-xs text-white/70">
          {photo.location} &middot; {photo.date}
        </p>
      </div>
      {photo.href && (
        <div className="absolute right-3 top-3 flex items-center gap-1.5 rounded-sm bg-white/20 backdrop-blur-sm px-2 py-1 text-[9px] font-medium uppercase tracking-wider text-white/90">
          Open
          <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
            <path d="M2 8l6-6M3 2h5v5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      )}
    </div>
  );

  if (photo.href) {
    return (
      <a href={photo.href} target="_blank" rel="noopener noreferrer">
        {content}
      </a>
    );
  }

  return content;
}

export default function GallerySection({ photos }: GallerySectionProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const touchX = useRef(0);
  const animating = useRef(false);

  const goTo = (target: number | "next" | "prev") => {
    if (animating.current) return;
    animating.current = true;
    const len = photos.length;
    if (target === "next") {
      setDirection(1);
      setCurrentIndex((prev) => (prev + 1) % len);
    } else if (target === "prev") {
      setDirection(-1);
      setCurrentIndex((prev) => (prev - 1 + len) % len);
    } else {
      setDirection(target > currentIndex ? 1 : -1);
      setCurrentIndex((target + len) % len);
    }
    setTimeout(() => { animating.current = false; }, 400);
  };

  const variants = {
    enter: (dir: number) => ({ x: dir > 0 ? 200 : -200, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (dir: number) => ({ x: dir > 0 ? -200 : 200, opacity: 0 }),
  };

  return (
    <section id="ground" className="border-t border-stone bg-pearl">
      <div className="mx-auto max-w-7xl px-6 py-20 sm:px-10 sm:py-28 lg:px-16 lg:py-36">
        <div className="mb-10 sm:mb-14">
          <h2 className="font-display text-4xl leading-[1.05] tracking-tight text-charcoal sm:text-5xl lg:text-6xl">
            Youth; The &ldquo;Now&rdquo; Economy
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
            &ldquo;We must advocate and recognize the importance of young people in governance and political processes!&rdquo;
          </p>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
            With a deeply personal advocacy for youth empowerment as a practical blueprint for economic growth, I firmly believe that when young people are given technical tools instead of symbolic tokens, they thrive&mdash;and are set on a path of self-reliance and raw innovation.
          </p>
        </div>

        {/* MOBILE: swipe carusel */}
        <div className="pb-4 sm:hidden">
          <div
            className="relative overflow-hidden"
            onTouchStart={(e) => { touchX.current = e.touches[0].clientX; }}
            onTouchEnd={(e) => {
              if (animating.current) return;
              const diff = touchX.current - e.changedTouches[0].clientX;
              if (diff > 50) goTo("next");
              else if (diff < -50) goTo("prev");
            }}
          >
            <div className="w-[80vw] mx-auto">
              <AnimatePresence mode="popLayout" custom={direction}>
                <motion.div
                  key={currentIndex}
                  custom={direction}
                  variants={variants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
                >
                  <PhotoCard photo={photos[currentIndex]} />
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          <div className="mt-5 flex items-center justify-center gap-2">
            {photos.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                className={`h-1.5 rounded-full transition-all duration-500 ${
                  i === currentIndex ? "w-6 bg-gold" : "w-1.5 bg-charcoal/20"
                }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </div>

        {/* DESKTOP: masonry */}
        <div className="hidden columns-2 gap-4 sm:columns-3 lg:columns-4 sm:block">
          {photos.map((photo) => (
            <div key={photo.id} className="mb-4 break-inside-avoid">
              <PhotoCard photo={photo} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
