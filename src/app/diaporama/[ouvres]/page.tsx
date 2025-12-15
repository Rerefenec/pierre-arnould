import Diaporama from "@/components/diaporama/Diaporama";

// Dynamic metadata for per-image diaporama pages
export async function generateMetadata({ params, searchParams }: { params: Promise<{ ouvres: string }>, searchParams?: Promise<Record<string,string>> }) {
  const { ouvres: seriesKey = "" } = (await params) || {};
  // For readable title prefer singular-ish slug (remove trailing 's' when present)
  const base = seriesKey.replace(/s$/i, '');
  const resolvedSearch: Record<string,string> | undefined = searchParams ? await searchParams : undefined;
  const index = (resolvedSearch && resolvedSearch.index) ? resolvedSearch.index : '1';
  // Prefer the per-image title if provided in the URL
  const imageTitle = resolvedSearch && resolvedSearch.title ? resolvedSearch.title : undefined;
  const title = imageTitle
    ? `Diaporama — ${imageTitle} — Pierre-Arnould` 
    : `Diaporama-${base}-${index}-pierre-arnould-artiste`;

  return {
    title,
  };
}

export default async function DiaporamaPage({ params }: { params: Promise<{ ouvres: string }> }) {
  const { ouvres } = await params; // route param
  return <Diaporama ouvres={ouvres} />;
}