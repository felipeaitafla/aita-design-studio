"use client";

import { useEffect, useRef } from "react";

/** Plays a muted, looping video after a delay (default 2s) instead of immediately. */
export default function DelayedVideo({
  src,
  delay = 2000,
}: {
  src: string;
  delay?: number;
}) {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = ref.current;
    if (!video) return;
    const timer = setTimeout(() => {
      video.play().catch(() => {});
    }, delay);
    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <video
      ref={ref}
      src={src}
      loop
      muted
      playsInline
      preload="auto"
      style={{ width: "100%", height: "auto", display: "block" }}
    />
  );
}
