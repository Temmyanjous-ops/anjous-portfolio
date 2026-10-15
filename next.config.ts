import type { NextConfig } from "next";

// Static export: the whole site builds to plain files in /out,
// so it can be hosted free on Vercel, Netlify, Cloudflare Pages or GitHub Pages.
const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
  reactStrictMode: true,
};

export default nextConfig;
