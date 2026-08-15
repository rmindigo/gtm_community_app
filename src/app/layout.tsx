import type { Metadata } from "next";
import { Press_Start_2P, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import Scanlines from "./_components/Scanlines";

const pressStart = Press_Start_2P({
  variable: "--font-press-start",
  subsets: ["latin"],
  weight: "400",
});

const plexMono = IBM_Plex_Mono({
  variable: "--font-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

const DESCRIPTION =
  "A dinner in the Bay Area. Founders bring their GTM questions. Operators bring the plays. Straight talk on enterprise GTM.";

export const metadata: Metadata = {
  metadataBase: new URL("https://gtmers.co"),
  title: "The GTM Table | Enterprise GTM dinners",
  description: DESCRIPTION,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: "The GTM Table",
    url: "/",
    title: "Founders and operators. One table.",
    description: DESCRIPTION,
    // Supply /public/og/home.png (1200×630) and previews start using it.
    images: [{ url: "/og/home.png", width: 1200, height: 630, alt: "The GTM Table" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Founders and operators. One table.",
    description: DESCRIPTION,
    images: ["/og/home.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${pressStart.variable} ${plexMono.variable} scroll-smooth antialiased`}
    >
      <body>
        <Scanlines />
        {children}
      </body>
    </html>
  );
}
