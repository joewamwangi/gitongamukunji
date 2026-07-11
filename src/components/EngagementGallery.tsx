"use client";

import { useState } from "react";
import Image from "next/image";

interface GalleryPhoto {
  id: string;
  src: string;
  caption: string;
  location: string;
  date: string;
  cols?: 1 | 2;
  rows?: 1 | 2;
}

interface EngagementGalleryProps {
  photos: GalleryPhoto[];
}

function PhotoCard({ photo }: { photo: GalleryPhoto }) {
  const [tapped, setTapped] = useState(false);

  return (
    <div
      className="group relative cursor-pointer overflow-hidden rounded-xl bg-cream"
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
      <div className="relative">
        <Image
          src={photo.src}
          alt={photo.caption}
          width={800}
          height={photo.rows === 2 ? 1000 : photo.cols === 2 ? 600 : 700}
          className="w-full object-cover transition-transform duration-500 group-hover:scale-105 group-focus-visible:scale-105"
          loading="lazy"
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
        />
        <div
          className={`scrim-gallery pointer-events-none absolute inset-0 flex flex-col justify-end p-4 opacity-0 transition-opacity duration-300 ${
            tapped ? "opacity-100" : "group-hover:opacity-100 group-focus-visible:opacity-100"
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
    </div>
  );
}

export default function EngagementGallery({ photos }: EngagementGalleryProps) {
  if (!photos.length) return null;

  return (
    <section className="bg-cream-light py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-6 sm:px-10">
        <div className="mb-10 text-center sm:text-left">
          <h2 className="font-display text-3xl leading-tight text-charcoal sm:text-4xl lg:text-5xl">
            In the constituency
          </h2>
          <p className="mt-3 max-w-xl text-base text-charcoal-muted sm:text-lg">
            Real moments from the ground &mdash; youth forums, bursary days,
            market visits, and community meetings across Manyatta.
          </p>
        </div>

        <div className="columns-2 gap-4 sm:columns-3 lg:columns-4">
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
