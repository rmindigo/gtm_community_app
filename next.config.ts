import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Hides the on-screen dev/"Compiling" badge. It never ships in a production
  // build; this keeps it out of local screenshots too.
  devIndicators: false,
};

export default nextConfig;
