import Diaporama from "@/components/diaporama/Diaporama";
import { seriesData } from "@/app/data/seriesData";

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
    ? `Diaporama — ${imageTitle} — Pierre-Arnould-artiste` 
    : `Diaporama-${base}-${index}-pierre-arnould-artiste`;

  return {
    title,
  };
}

export default async function DiaporamaPage({ params, searchParams }: { params: Promise<{ ouvres: string }>, searchParams?: Promise<Record<string,string>> }) {
  const { ouvres } = await params; // route param
  const resolvedSearch: Record<string,string> | undefined = searchParams ? await searchParams : undefined;
  const index = resolvedSearch && resolvedSearch.index ? Math.max(1, parseInt(resolvedSearch.index, 10)) : 1;
  const titleParam = resolvedSearch && resolvedSearch.title ? resolvedSearch.title : undefined;

  const key = (ouvres || "").toLowerCase();
  const works = seriesData[key] || [];
  const safeIndex = Math.min(Math.max(index, 1), works.length || 1);
  const work = works[safeIndex - 1] || works[0] || { title: ouvres, description: "", image: "/", year: "" };

  const imageUrl = `https://pierre-arnould.vercel.app${work.image}`;
  const pageUrl = `https://pierre-arnould.vercel.app/diaporama/${ouvres}?index=${safeIndex}${titleParam ? `&title=${encodeURIComponent(titleParam)}` : ""}`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ImageObject",
    name: work.title,
    description: work.description || `Image ${safeIndex} de la série ${ouvres} par Pierre Arnould`,
    contentUrl: imageUrl,
    url: pageUrl,
    author: { "@type": "Person", name: "Pierre Arnould", url: "https://pierre-arnould.vercel.app" },
    inLanguage: "fr",
    datePublished: work.year || undefined,
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Diaporama ouvres={ouvres} />
    </>
  );
}