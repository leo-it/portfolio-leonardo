"use client";

import { useState } from "react";
import type { MediaSource } from "@/types/content";
import { PortfolioImage } from "@/components/ui/PortfolioImage";

interface VideoPlayerProps {
  media: MediaSource;
  title: string;
  className?: string;
  autoPlay?: boolean;
  fill?: boolean;
}

export function VideoPlayer({
  media,
  title,
  className = "",
  autoPlay = false,
  fill = false,
}: VideoPlayerProps) {
  const [hasError, setHasError] = useState(false);
  const sizeClass = fill ? "h-full w-full" : "aspect-video";

  if (media.type === "image") {
    return (
      <div className={`relative overflow-hidden rounded-lg ${sizeClass} ${className}`}>
        <PortfolioImage
          src={media.src}
          alt={title}
          fill
          className="object-cover"
          sizes="100vw"
          priority={fill}
        />
      </div>
    );
  }

  if (media.type === "embed") {
    return (
      <div className={`relative overflow-hidden rounded-lg bg-stage-dark ${sizeClass} ${className}`}>
        <iframe
          src={media.src}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="absolute inset-0 h-full w-full"
          loading="lazy"
        />
      </div>
    );
  }

  if (hasError && media.poster) {
    return (
      <div className={`relative overflow-hidden rounded-lg ${sizeClass} ${className}`}>
        <PortfolioImage
          src={media.poster}
          alt={title}
          fill
          className="object-cover"
          sizes="100vw"
        />
      </div>
    );
  }

  return (
    <div className={`relative overflow-hidden rounded-lg bg-stage-dark ${sizeClass} ${className}`}>
      <video
        src={media.src}
        poster={media.poster}
        controls={!autoPlay}
        autoPlay={autoPlay}
        muted={autoPlay}
        loop={autoPlay}
        playsInline
        preload="metadata"
        className="h-full w-full object-cover"
        onError={() => setHasError(true)}
      >
        <track kind="captions" />
      </video>
    </div>
  );
}
