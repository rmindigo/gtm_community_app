import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Hides the on-screen dev/"Compiling" badge. It never ships in a production
  // build; this keeps it out of local screenshots too.
  devIndicators: false,

  // /updates was briefly live before the "keep me posted" path was cut.
  // Send any stale links to the homepage rather than a 404.
  async redirects() {
    return [{ source: "/updates", destination: "/", permanent: true }];
  },
};

export default nextConfig;
