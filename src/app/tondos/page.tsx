export const metadata = {
  title: "Tondos — Pierre-Arnould — Artiste",
  description: "Tondos (1995–2020) par Pierre Arnould — série de peintures rondes et études chromatiques.",
  openGraph: {
    title: "Tondos — Pierre-Arnould",
    description: "Tondos (1995–2020) par Pierre Arnould — série de peintures rondes et études chromatiques.",
    type: "website",
    url: "https://pierrearnould.com/tondos",
    images: ["/1995-2020-Tondos/pierre-arnould-artiste-tondo-1.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tondos — Pierre-Arnould",
    description: "Tondos (1995–2020) par Pierre Arnould — série de peintures rondes et études chromatiques.",
  },
};

import TondosClient from "./TondosClient";

export default function TondoPage() {
  return <TondosClient />;
}