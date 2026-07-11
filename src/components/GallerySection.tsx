"use client";

import { useState } from "react";

interface GalleryPhoto {
  id: string;
  src: string;
  caption: string;
  location: string;
  date: string;
}

interface GallerySectionProps {
  photos: GalleryPhoto[];
}

function PhotoCard({ photo }: { photo: GalleryPhoto }) {
  const [tapped, setTapped] = useState(false);

  return (
    <div
      className="group relative cursor-pointer overflow-hidden rounded-sm bg-white shadow-sm"
      onClick={() => setTapped((p) => !p)}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          setTapped((p) => !p);
        }
      }}
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
      <div
        className={`pointer-events-none absolute inset-0 scrim-gallery p-4 flex flex-col justify-end transition-opacity duration-300 ${
          tapped
            ? "opacity-100"
            : "opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100"
        }`}
      >
        <p className="text-sm font-medium leading-snug text-white">
          {photo.caption}
        </p>
        <p className="mt-1 text-xs text-white/70">
          {photo.location} &middot; {photo.date}
        </p>
      </div>
    </div>
  );
}

export default function GallerySection({ photos }: GallerySectionProps) {
  return (
    <section id="ground" className="border-t border-stone bg-pearl">
      <div className="mx-auto max-w-7xl px-6 py-20 sm:px-10 sm:py-28 lg:px-16 lg:py-36">
        <div className="mb-14 sm:mb-20">
          <p className="mb-3 font-display text-xs font-light uppercase tracking-[0.25em] text-gold">
            Chapter 02
          </p>
          <h2 className="font-display text-4xl leading-[1.05] tracking-tight text-charcoal sm:text-5xl lg:text-6xl">
            On the Ground
          </h2>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
            Real moments from across Manyatta. No staging, no filters &mdash; just the
            work and the people it serves.
          </p>
        </div>

        {/* MOBILE: horizontal swipe carousel */}
        <p className="mb-3 text-right text-[10px] uppercase tracking-widest text-muted/50 sm:hidden">
          Swipe &rarr;
        </p>
        <div className="flex gap-4 overflow-x-auto pb-4 sm:hidden [-webkit-overflow-scrolling:touch] snap-x snap-mandatory">
          {photos.map((photo) => (
            <div key={photo.id} className="w-[80vw] shrink-0 snap-start">
              <PhotoCard photo={photo} />
            </div>
          ))}
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
