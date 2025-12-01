import Diaporama from "@/components/diaporama/Diaporama";

// Dynamic metadata for per-image diaporama pages
export async function generateMetadata({ params, searchParams }: { params: { ouvres: string }, searchParams?: Record<string,string> }) {
  const seriesKey = (params?.ouvres || "").toString();
  // For readable title prefer singular-ish slug (remove trailing 's' when present)
  const base = seriesKey.replace(/s$/i, '');
  const index = (searchParams && searchParams.index) ? searchParams.index : '1';
  const title = `Diaporama-${base}-${index}-pierre-arnould-artiste`;

  return {
    title,
  };
}

export default async function DiaporamaPage({ params }: { params: Promise<{ ouvres: string }> }) {
  const { ouvres } = await params; // route param
  return <Diaporama ouvres={ouvres} />;
}