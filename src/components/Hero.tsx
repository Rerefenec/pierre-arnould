"use client";

import Image from "next/image";
import Header from "./Header";
import { usePathname } from "next/navigation";

export default function Hero() {
  const pathname = usePathname();

  // 🔹 Image selon la page
    // 🔹 Image selon la page
 let heroImage = "/details/bg.jpg";
  if (pathname === "/tondos") {
    heroImage = "/details/pierre-arnould-artist-tondo-detail-01.jpg";
  } else if (pathname === "/geometrique") {
    heroImage = "/2021-2025-Geometriques/pierre-arnould-artiste-geometrique-16.jpg";
  } else if (pathname === "/compartimentes") {
    heroImage = "/details/pierre-arnould-artist-compartimentes-detail-4.jpg";
  }

  console.log("🖼️ Current pathname:", pathname);
  console.log("🖼️ Loading image:", heroImage);

  // 🔹 Texte du titre
  let textHeader;
  if (pathname === "/tondos") {
    textHeader = <>Tondos</>;
  } else if (pathname === "/geometrique") {
    textHeader = <>Geometrique</>;
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
  let heroHeight;
  if (pathname === "/") heroHeight = "h-[580px]"; // page d'accueil plein écran
  else if (pathname === "/compartimentes") heroHeight = "h-[400px]";
  else if (pathname === "/tondos") heroHeight = "h-[400px]";
  else if (pathname === "/geometrique") heroHeight = "h-[400px]";

  return (
    <>
      {/* 🔹 Image de fond */}
      <div className="absolute inset-0 -z-10">
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
       <h1
  className="animate__animated animate__fadeInDown 
    text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl

    font-bold leading-tight text-center px-4"
>
  <span>{textHeader}</span>
</h1>

      </section>
    </>
  );
}
