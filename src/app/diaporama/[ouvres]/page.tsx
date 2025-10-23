import Diaporama from "@/components/diaporama/Diaporama";

export default async function DiaporamaPage({
  params,
}: {
  params: Promise<{ ouvres: string }>;
}) {
  const { ouvres } = await params; // ✅ await le paramètre
  return <Diaporama ouvres={ouvres} />;
}