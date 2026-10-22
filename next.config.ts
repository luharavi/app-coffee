import type { NextConfig } from "next";

// Set by the GitHub Pages workflow (e.g. "/app-coffee"); empty when running locally.
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const nextConfig: NextConfig = {
  /* config options here */
  output: "export",
  basePath,
  images: { unoptimized: true },
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
