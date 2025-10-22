import Diaporama from "@/components/diaporama/Diaporama";

export default async function DiaporamaPage({
  params,
}: {
  params: { ouvres: string };
}) {
  const { ouvres } = await params; // attendre le paramètre
  return <Diaporama ouvres={ouvres} />;
}
