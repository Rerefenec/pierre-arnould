import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Oxygen_Mono } from "next/font/google";

const oxygenMono = Oxygen_Mono({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Pierre-Arnould",
  description: "Site officiel de Pierre-Arnould",
};

export const viewport: Viewport = {
  themeColor: "#ffffff",
  width: "device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <head>
        <link rel="manifest" href="/manifest.webmanifest" />
      </head>
      <body className={oxygenMono.className}>{children}</body>
    </html>
  );
}
