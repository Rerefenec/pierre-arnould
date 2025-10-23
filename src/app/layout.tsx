import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Pierre-Arnould",
  description: "Site officiel de Pierre-Arnould",
  icons: [
    {
      url: "/web-app-manifest-192x192.png",
      sizes: "192x192",
      type: "image/png",
    },
    {
      url: "/web-app-manifest-512x512.png",
      sizes: "512x512",
      type: "image/png",
    },
  ],
};

export const viewport: Viewport = {
  themeColor: "#ffffff",
  width: "device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <head>
        <link rel="manifest" href="/manifest.webmanifest" />

        {/* 🔹 Lien Google Fonts direct biscoin*/}
        {/* <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Bitcount+Grid+Single:wght@100..900&display=swap"
          rel="stylesheet"
        /> */}

        {/* michroma static */}
        {/* <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
           href="https://fonts.googleapis.com/css2?family=Michroma&display=swap"
            rel="stylesheet"
        /> */}


          {/* suse mono */}
          {/* <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
          <link
            href="https://fonts.googleapis.com/css2?family=SUSE+Mono:wght@300&display=swap"
            rel="stylesheet"
          /> */}

            {/*Cinzel */}
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
            <link
              href="https://fonts.googleapis.com/css2?family=Cinzel:wght@400&display=swap"
              rel="stylesheet"
            />
      </head>
      <body>{children}</body>
    </html>
  );
}

