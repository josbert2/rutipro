import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Hay varios lockfiles en el árbol; fijamos la raíz a esta carpeta.
  turbopack: { root: __dirname },
  images: {
    // Las imágenes de ejercicios vienen de varios CDNs externos; las dejamos pasar.
    remotePatterns: [{ protocol: "https", hostname: "**" }],
  },
};

export default nextConfig;
