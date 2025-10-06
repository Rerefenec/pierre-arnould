"use client";

import Image from "next/image";


export default function Hero() {
  const words = ["Pierre", "Arnould"];

  return (
    <section className="text-center mt-20 ">
      <Image
        src="/photo1.jpg"
        alt="Pierre Arnould"
        width={1200}
        height={600}
        className="mx-auto rounded-lg object-cover mb-30"
      />

      <h1 className="mb-40 text-6xl font-bold text-black my-10 inline-flex justify-center items-center group cursor-pointer">
        <span
          className="inline-block transition-transform duration-500"
          style={{ transitionTimingFunction: "cubic-bezier(0.19, 1, 0.22, 1)" }}
        >
          {/* Pierre sube */}
          <span className="block group-hover:-translate-y-5">{words[0]}</span>
        </span>

        {/* Espacio entre palabras */}
        <span className="w-4"></span>

        <span
          className="inline-block transition-transform duration-500"
          style={{ transitionTimingFunction: "cubic-bezier(0.19, 1, 0.22, 1)" }}
        >
          {/* Arnould baja */}
          <span className="block group-hover:translate-y-5">{words[1]}</span>
        </span>
      </h1>
    </section>
  );
}
