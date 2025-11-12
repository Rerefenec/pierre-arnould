import type { Viewport } from "next";

export const viewport: Viewport = {
  width: "device-width, initial-scale=1.0, maximum-scale=5.0, user-scalable=yes",
};

export default function DiaporamaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
