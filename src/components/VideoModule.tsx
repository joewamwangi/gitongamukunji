"use client";

import { useRef, useState, useEffect, useCallback } from "react";

interface VideoItem {
  src: string;
  poster?: string;
  title: string;
  description: string;
}

interface VideoModuleProps {
  videos: VideoItem[];
}

function VideoCard({
  video,
  reverse,
}: {
  video: VideoItem;
  reverse?: boolean;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [muted, setMuted] = useState(true);
  const [playing, setPlaying] = useState(false);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setInView(entry.isIntersecting);
      },
      { rootMargin: "-100px 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const vid = videoRef.current;
    if (!vid) return;

    if (inView) {
      vid.play().then(() => setPlaying(true)).catch(() => setPlaying(false));
    } else {
      vid.pause();
      setPlaying(false);
    }
  }, [inView]);

  const toggleMute = useCallback(() => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setMuted(videoRef.current.muted);
    }
  }, []);

  return (
    <div
      ref={containerRef}
      className={`flex flex-col gap-6 sm:gap-10 lg:items-center ${
        reverse ? "lg:flex-row-reverse" : "lg:flex-row"
      }`}
    >
      <div className="relative aspect-[9/16] w-full max-w-sm shrink-0 overflow-hidden rounded-2xl bg-charcoal shadow-lg sm:mx-auto lg:mx-0">
        <video
          ref={videoRef}
          src={video.src}
          poster={video.poster}
          muted={muted}
          loop
          playsInline
          className="h-full w-full object-cover"
        />

        <div className="absolute bottom-3 left-3 flex items-center gap-2">
          <button
            onClick={toggleMute}
            className="flex h-8 w-8 items-center justify-center rounded-full bg-black/50 text-white backdrop-blur-sm transition-colors hover:bg-black/70"
            aria-label={muted ? "Unmute video" : "Mute video"}
          >
            {muted ? (
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
                <line x1="23" y1="9" x2="17" y2="15" />
                <line x1="17" y1="9" x2="23" y2="15" />
              </svg>
            ) : (
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
                <path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07" />
              </svg>
            )}
          </button>
          {playing && (
            <span className="rounded-full bg-amber/90 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-charcoal">
              Playing
            </span>
          )}
        </div>
      </div>

      <div className={`flex-1 ${reverse ? "lg:text-right" : ""}`}>
        <h3 className="font-display text-xl leading-tight text-charcoal sm:text-2xl">
          {video.title}
        </h3>
        <p className="mt-3 max-w-md text-base leading-relaxed text-charcoal-muted">
          {video.description}
        </p>
      </div>
    </div>
  );
}

export default function VideoModule({ videos }: VideoModuleProps) {
  if (!videos.length) return null;

  return (
    <section className="bg-cream py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-6 sm:px-10">
        <div className="mb-12 text-center sm:text-left">
          <h2 className="font-display text-3xl leading-tight text-charcoal sm:text-4xl lg:text-5xl">
            Hear it direct
          </h2>
          <p className="mt-3 max-w-xl text-base text-charcoal-muted sm:text-lg">
            Unscripted conversations, interviews, and moments from the ground.
            No filters, no scripts &mdash; just real talk.
          </p>
        </div>

        <div className="flex flex-col gap-14 sm:gap-20">
          {videos.map((video, i) => (
            <VideoCard key={i} video={video} reverse={i % 2 !== 0} />
          ))}
        </div>
      </div>
    </section>
  );
}
