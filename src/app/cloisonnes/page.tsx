export const metadata = {
  title: "Cloisonnés — Pierre-Arnould — Artiste",
  description: "Cloisonnés (1969–1994) par Pierre Arnould — œuvres fines et détails dorés typiques de la période.",
  openGraph: {
    title: "Cloisonnés — Pierre Arnould",
    description: "Cloisonnés (1969–1994) par Pierre Arnould — œuvres fines et détails dorés typiques de la période.",
    type: "website",
    url: "https://pierre-arnould.vercel.app/cloisonnes",
    images: ["/1969-1994-Cloisonnes/pierre-arnould-artiste-cloisonnes-1.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Cloisonnés — Pierre Arnould",
    description: "Cloisonnés (1969–1994) par Pierre Arnould — œuvres fines et détails dorés typiques de la période.",
  },
};

import CloisonnesClient from "./CloisonnesClient";

export default function CloisonnesPage() {
  return <CloisonnesClient />;
}