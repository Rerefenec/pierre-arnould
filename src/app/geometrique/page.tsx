export const metadata = {
  title: "Geometriques — Pierre-Arnould — Artiste",
  description: "Geometriques (2021–2025) par Pierre Arnould — explorations géométriques et compositions colorées.",
  openGraph: {
    title: "Geometriques — Pierre Arnould",
    description: "Geometriques (2021–2025) par Pierre Arnould — explorations géométriques et compositions colorées.",
    type: "website",
    url: "https://pierrearnould.com/geometriques",
    images: ["/2021-2025-Geometriques/pierre-arnould-artiste-geometrique-1.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Geometriques — Pierre Arnould",
    description: "Geometriques (2021–2025) par Pierre Arnould — explorations géométriques et compositions colorées.",
  },
};

import GeometriqueClient from "./GeometriqueClient";

export default function GeometriquePage() {
  return <GeometriqueClient />;
}








