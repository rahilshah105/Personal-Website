"use client";

import { useState } from "react";

interface ShowcaseVideoProps {
  src: string;
  alt: string;
}

export default function ShowcaseVideo({ src, alt }: ShowcaseVideoProps) {
  const isImage = /\.(png|jpg|jpeg)$/i.test(src);
  const fallbackImage = src.replace(/\.\w+$/, ".jpg"); // fallback for video case
  const [videoError, setVideoError] = useState(false);

  if (isImage || videoError) {
    return (
      <img src={isImage ? src : fallbackImage} alt={`${alt} Showcase`} className="w-full max-w-screen-lg rounded-lg" />
    );
  }

  return (
    <video
      src={src}
      className="w-full max-w-screen-lg rounded-lg"
      autoPlay
      loop
      muted
      playsInline
      onError={() => setVideoError(true)}
    />
  );
}
