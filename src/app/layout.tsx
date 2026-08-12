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

export const metadata: Metadata = {
  metadataBase: new URL("https://gtmers.co"),
  title: "The GTM Table | Enterprise GTM dinners",
  description:
    "A dinner in the Bay Area. Founders bring the deal. Operators bring the play. Straight talk on enterprise GTM.",
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
