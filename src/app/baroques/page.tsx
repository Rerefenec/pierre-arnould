export const metadata = {
  title: "Baroques — Pierre-Arnould — Artiste",
  description: "Baroques (2021–2025) par Pierre Arnould — compositions riches et baroques explorant mouvement et couleur.",
  openGraph: {
    title: "Baroques — Pierre Arnould",
    description: "Baroques (2021–2025) par Pierre Arnould — compositions riches et baroques explorant mouvement et couleur.",
    type: "website",
    url: "https://pierrearnould.com/baroques",
    images: ["/2021-2025-Baroques/pierre-arnould-artiste-baroque-1.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Baroques — Pierre Arnould",
    description: "Baroques (2021–2025) par Pierre Arnould — compositions riches et baroques explorant mouvement et couleur.",
  },
};

import BaroquesClient from "./BaroquesClient";

export default function BaroquesPage() {
  return <BaroquesClient />;
}