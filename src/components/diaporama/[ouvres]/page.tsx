import Diaporama from "@/components/diaporama/Diaporama";

export default function DiaporamaPage({
  params,
}: {
  params: { ouvres: string };
}) {
  return <Diaporama ouvres={params.ouvres} />;
}
