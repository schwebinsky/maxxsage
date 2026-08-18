import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.maxxsage.com"),
  title: "MAXX Sage — Sängerin, Songwriterin & Podcasterin",
  description:
    "MAXX Sage: anspruchsvolles Songwriting, reduzierte Arrangements, echte Geschichten und Musik für die Zwischentöne.",
  keywords: ["MAXX Sage", "Sängerin", "Songwriterin", "Podcasterin", "Out of Tune"],
  openGraph: {
    title: "MAXX Sage",
    description: "Musik, die Zwischentöne sucht.",
    type: "website",
    locale: "de_DE",
    alternateLocale: "en_GB",
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0b0a09",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="de">
      <body>{children}</body>
    </html>
  );
}
