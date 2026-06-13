"use client";

import { useState } from "react";

const ES_VIDEO = /\.(mp4|webm|mov)$/i;

/**
 * Muestra el demo del ejercicio: <video> en bucle si la fuente es .mp4/.webm,
 * o <img> si es un gif/imagen. Ante error (o fuente vacía) cae al ícono 🏋️.
 */
export function ExerciseMedia({
  src,
  alt,
  className,
}: {
  src: string;
  alt: string;
  className?: string;
}) {
  const [error, setError] = useState(false);

  if (!src || error) {
    return <div className={`fallback ${className ?? ""}`.trim()}>🏋️</div>;
  }

  if (ES_VIDEO.test(src)) {
    return (
      <video
        src={src}
        className={className}
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
        aria-label={alt}
        onError={() => setError(true)}
      />
    );
  }

  return (
    /* eslint-disable-next-line @next/next/no-img-element */
    <img
      src={src}
      alt={alt}
      className={className}
      loading="lazy"
      onError={() => setError(true)}
    />
  );
}
