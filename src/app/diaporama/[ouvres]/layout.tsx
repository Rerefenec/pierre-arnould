// app/diaporama/[ouvres]/layout.tsx
import type { Viewport } from "next";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1.0,
  maximumScale: 5.0,
  userScalable: true,
  themeColor: "#000000",
};

export default function DiaporamaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
