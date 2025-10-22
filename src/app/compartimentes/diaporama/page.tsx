import { Suspense } from "react";
import DiaporamaContent from "./DiaporamaContent";


export default function DiaporamaPage() {
  return (
    <Suspense fallback={<div className="text-white text-center mt-10">Chargement du diaporama...</div>}>
      <DiaporamaContent />
    </Suspense>
  );
}
