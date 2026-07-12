"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";

interface VideoItem {
  src: string;
  poster?: string;
  title: string;
  description: string;
  location?: string;
  date?: string;
  youtubeId?: string;
}

interface VideoSectionProps {
  videos: VideoItem[];
}

function YouTubeCard({ video, index }: { video: VideoItem; index: number }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const playerRef = useRef<any>(null);
  const [inView, setInView] = useState(false);
  const [muted, setMuted] = useState(true);
  const [playing, setPlaying] = useState(false);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { rootMargin: "-80px 0px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (typeof (window as any).YT === "undefined" || !(window as any).YT.Player) {
      const tag = document.createElement("script");
      tag.src = "https://www.youtube.com/iframe_api";
      const first = document.querySelector("script");
      first?.parentNode?.insertBefore(tag, first);
    }
  }, []);

  useEffect(() => {
    const id = `yt-player-${index}`;
    const init = () => {
      if (document.getElementById(id)?.hasAttribute("data-initialized")) return;
      playerRef.current = new (window as any).YT.Player(id, {
        videoId: video.youtubeId,
        playerVars: {
          autoplay: 0,
          controls: 1,
          modestbranding: 1,
          rel: 0,
          playsinline: 1,
        },
        events: {
          onReady: () => {
            document.getElementById(id)?.setAttribute("data-initialized", "true");
            playerRef.current?.mute();
            setReady(true);
          },
        },
      });
    };
    if (typeof (window as any).YT !== "undefined" && (window as any).YT.Player) {
      init();
    } else {
      const prev = (window as any).onYouTubeIframeAPIReady;
      (window as any).onYouTubeIframeAPIReady = () => {
        prev?.();
        init();
      };
    }
    return () => {
      try { playerRef.current?.destroy(); } catch {}
    };
  }, [index, video.youtubeId]);

  useEffect(() => {
    if (!ready || !playerRef.current) return;
    if (inView) {
      playerRef.current.playVideo();
      if (muted) playerRef.current.mute();
      else playerRef.current.unMute();
      setPlaying(true);
    } else {
      playerRef.current.pauseVideo();
      setPlaying(false);
    }
  }, [inView, ready]);

  const toggleMute = useCallback(() => {
    if (!playerRef.current) return;
    if (muted) {
      playerRef.current.unMute();
      setMuted(false);
    } else {
      playerRef.current.mute();
      setMuted(true);
    }
  }, [muted]);

  const isReversed = index % 2 !== 0;

  return (
    <motion.div
      ref={containerRef}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7 }}
      className={`flex flex-col gap-8 md:flex-row md:items-center ${
        isReversed ? "md:flex-row-reverse" : ""
      }`}
    >
      <div className="relative aspect-[9/16] w-full max-w-sm shrink-0 overflow-hidden rounded-sm bg-charcoal shadow-lg">
        <div id={`yt-player-${index}`} className="h-full w-full" />

        <div className="absolute bottom-3 left-3 flex items-center gap-2">
          <button
            onClick={toggleMute}
            className="flex h-9 w-9 items-center justify-center rounded-sm bg-white/80 text-charcoal backdrop-blur-sm transition-colors hover:bg-white"
            aria-label={muted ? "Unmute" : "Mute"}
          >
            {muted ? (
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
                <line x1="23" y1="9" x2="17" y2="15" />
                <line x1="17" y1="9" x2="23" y2="15" />
              </svg>
            ) : (
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
                <path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07" />
              </svg>
            )}
          </button>
          {playing && (
            <span className="rounded-sm bg-gold/90 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-widest text-white">
              Playing
            </span>
          )}
        </div>
      </div>

      <div className={`flex-1 ${isReversed ? "md:text-right" : ""}`}>
        <p className="mb-2 text-xs uppercase tracking-[0.2em] text-gold-dark">
          {video.date && `${video.date} — `}Press Release
        </p>
        <h3 className="font-display text-2xl leading-tight text-charcoal">
          {video.title}
        </h3>
        <p className="mt-4 max-w-md text-base leading-relaxed text-muted">
          {video.description}
        </p>
        {video.location && (
          <p className="mt-3 text-sm text-muted/60">{video.location}</p>
        )}
      </div>
    </motion.div>
  );
}

function VideoCard({ video, index }: { video: VideoItem; index: number }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [muted, setMuted] = useState(true);
  const [playing, setPlaying] = useState(false);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { rootMargin: "-80px 0px" }
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

  const isReversed = index % 2 !== 0;

  return (
    <motion.div
      ref={containerRef}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7 }}
      className={`flex flex-col gap-8 md:flex-row md:items-center ${
        isReversed ? "md:flex-row-reverse" : ""
      }`}
    >
      <div className="relative aspect-[9/16] w-full max-w-sm shrink-0 overflow-hidden rounded-sm bg-white shadow-lg">
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
            className="flex h-9 w-9 items-center justify-center rounded-sm bg-white/80 text-charcoal backdrop-blur-sm transition-colors hover:bg-white"
            aria-label={muted ? "Unmute" : "Mute"}
          >
            {muted ? (
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
                <line x1="23" y1="9" x2="17" y2="15" />
                <line x1="17" y1="9" x2="23" y2="15" />
              </svg>
            ) : (
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
                <path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07" />
              </svg>
            )}
          </button>
          {playing && (
            <span className="rounded-sm bg-gold/90 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-widest text-white">
              Playing
            </span>
          )}
        </div>
      </div>

      <div className={`flex-1 ${isReversed ? "md:text-right" : ""}`}>
        <p className="mb-2 text-xs uppercase tracking-[0.2em] text-gold-dark">
          {video.date && `${video.date} — `}Unscripted
        </p>
        <h3 className="font-display text-2xl leading-tight text-charcoal">
          {video.title}
        </h3>
        <p className="mt-4 max-w-md text-base leading-relaxed text-muted">
          {video.description}
        </p>
        {video.location && (
          <p className="mt-3 text-sm text-muted/60">{video.location}</p>
        )}
      </div>
    </motion.div>
  );
}

export default function VideoSection({ videos }: VideoSectionProps) {
  if (!videos.length) return null;

  return (
    <section className="border-t border-stone bg-pearl">
      <div className="mx-auto max-w-7xl px-6 py-20 sm:px-10 sm:py-28 lg:px-16 lg:py-36">
        <div className="mb-14 sm:mb-20">
          <p className="mb-3 font-display text-xs font-light uppercase tracking-[0.25em] text-gold">
            Chapter 04
          </p>
          <h2 className="font-display text-4xl leading-[1.05] tracking-tight text-charcoal sm:text-5xl lg:text-6xl">
            Press Releases, Blogs &amp; Posts
          </h2>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
            Stay informed with the latest press releases, blog posts, and media updates from the office of Gitonga Mukunji.
          </p>
        </div>

        <div className="flex flex-col gap-16 md:gap-24">
          {videos.map((video, i) =>
            video.youtubeId ? (
              <YouTubeCard key={i} video={video} index={i} />
            ) : (
              <VideoCard key={i} video={video} index={i} />
            )
          )}
        </div>
      </div>
    </section>
  );
}
