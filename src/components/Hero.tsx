"use client";

import Image from "next/image";
import Header from "./Header";
import { usePathname } from "next/navigation";

export default function Hero() {
  const pathname = usePathname();

  // 🔹 Image selon la page
  let heroImage = "/Details/pierre-arnould-artist-compartimentes-detail-12.jpg";
  if (pathname === "/tondo") {
    heroImage = "/Details/pierre-arnould-artist-tondo-detail-01.jpg";
  } else if (pathname === "/Troisieme-periode") {
    heroImage = "/2021-20xx-3eme-periode/pierre-arnould-artist-3eme-periode-14.jpg";
  } else if (pathname === "/compartimentes") {
    heroImage = "/Details/pierre-arnould-artist-compartimentes-detail-4.jpg";
  }

  // 🔹 Texte du titre
  let textHeader;
  if (pathname === "/tondo") {
    textHeader = <>Tondos</>;
  } else if (pathname === "/Troisieme-periode") {
    textHeader = <>Troisième période</>;
  } else if (pathname === "/compartimentes") {
    textHeader = <>Compartimentés</>;
  } else if (pathname === "/collections") {
    textHeader = <>Collections</>;
  } else {
    textHeader = (
      <>
        Pierre Arnould
        <br />
        Plasticien
      </>
    );
  }

  // 🔹 Hauteur du Hero selon la page
  let heroHeight = "h-[300px]"; // hauteur par défaut
  if (pathname === "/") heroHeight = "h-[700px]"; // page d'accueil plein écran
  else if (pathname === "/compartimentes") heroHeight = "h-[300px]";
  else if (pathname === "/tondo") heroHeight = "h-[300px]";
  else if (pathname === "/Troisieme-periode") heroHeight = "h-[300px]";

  return (
    <>
      {/* 🔹 Image de fond */}
      <div className="fixed inset-0 -z-10">
        <Image
          src={heroImage}
          alt="Pierre Arnould, plasticien"
          fill
          priority
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* 🔹 Header */}
      <Header />

      {/* 🔹 Section Hero avec hauteur dynamique */}
      <section
        className={`${heroHeight} flex flex-col justify-center text-center text-white`}
      >
        <h1 className="flex-col animate__animated animate__fadeInDown text-6xl font-bold inline-flex">
          <span>{textHeader}</span>
        </h1>
      </section>
    </>
  );
}
