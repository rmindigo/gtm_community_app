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
  "A dinner in the Bay Area. Founders bring their GTM questions, operators bring the plays, and everyone talks shop.";

export const metadata: Metadata = {
  metadataBase: new URL("https://gtmers.co"),
  title: "GTMers | Enterprise GTM dinners",
  description: DESCRIPTION,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: "GTMers",
    url: "/",
    title: "Founders and operators talking shop on enterprise GTM.",
    description: DESCRIPTION,
  },
  twitter: {
    card: "summary_large_image",
    title: "Founders and operators talking shop on enterprise GTM.",
    description: DESCRIPTION,
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
