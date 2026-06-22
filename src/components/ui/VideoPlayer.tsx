"use client";

import { useState } from "react";
import type { AspectRatio, MediaSource } from "@/types/content";
import { PortfolioImage } from "@/components/ui/PortfolioImage";

interface VideoPlayerProps {
  media: MediaSource;
  title: string;
  className?: string;
  autoPlay?: boolean;
  fill?: boolean;
}

function getAspectClasses(aspectRatio: AspectRatio = "landscape", fill = false) {
  if (aspectRatio === "portrait") {
    return fill
      ? "h-full max-h-[90vh] w-auto aspect-[9/16] max-w-[min(100vw,28rem)]"
      : "aspect-[9/16] w-full max-w-md mx-auto";
  }

  return fill ? "h-full w-full" : "aspect-video w-full";
}

export function VideoPlayer({
  media,
  title,
  className = "",
  autoPlay = false,
  fill = false,
}: VideoPlayerProps) {
  const [hasError, setHasError] = useState(false);
  const aspectRatio = media.aspectRatio ?? "landscape";
  const aspectClasses = getAspectClasses(aspectRatio, fill);
  const isPortrait = aspectRatio === "portrait";

  if (media.type === "image") {
    return (
      <div className={`relative overflow-hidden rounded-lg ${aspectClasses} ${className}`}>
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
    const wrapperClass = isPortrait && fill
      ? `absolute inset-0 flex items-center justify-center ${className}`
      : `relative overflow-hidden rounded-lg bg-stage-dark ${aspectClasses} ${className}`;

    const playerClass = isPortrait && fill
      ? "relative h-full max-h-[90vh] w-auto aspect-[9/16] max-w-[min(100vw,28rem)] overflow-hidden rounded-lg bg-stage-dark"
      : `relative overflow-hidden rounded-lg bg-stage-dark ${aspectClasses}`;

    return (
      <div className={wrapperClass}>
        <div className={playerClass}>
          <iframe
            src={media.src}
            title={title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="absolute inset-0 h-full w-full"
            loading="lazy"
          />
        </div>
      </div>
    );
  }

  if (hasError && media.poster) {
    return (
      <div className={`relative overflow-hidden rounded-lg ${aspectClasses} ${className}`}>
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
    <div className={`relative overflow-hidden rounded-lg bg-stage-dark ${aspectClasses} ${className}`}>
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
