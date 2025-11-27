"use client";

import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import Image from "next/image";

export default function AproposPage() {
  return (
    <div className="bg-black text-white min-h-screen">
      <Hero />

      {/* --------------- SECTION 1 : Portrait + Biographie --------------- */}
      <section className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">
        {/* IMAGEN IZQUIERDA */}
        <div className="relative w-full h-[400px] rounded-xl overflow-hidden">
          <Image
            src="/lui.png"
            alt="Portrait de Pierre Arnould"
            fill
            className="object-cover"
          />
        </div>

        {/* TEXTO DERECHA */}
        <div className="space-y-6">
          <h2 className="text-4xl font-bold">À propos de l’artiste</h2>
          <p className="text-lg leading-relaxed text-gray-300">
            Pierre Arnould est un plasticien français dont le travail s’inscrit
            dans une recherche constante autour de la matière, du volume et du
            mouvement. Artiste le soir et professionnel de santé le jour, il vit
            une véritable double vie créative — une tension qui nourrit son
            travail.
          </p>
          <p className="text-lg leading-relaxed text-gray-300">
            Son travail explore les limites entre l’organique et le géométrique,
            le recyclé et le noble, l’intuition et la précision.
          </p>
        </div>
      </section>

      {/* --------------- SECTION 2 : Vidéo “Double vie” --------------- */}
      <section className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">
        {/* TEXTO IZQUIERDA */}
        <div className="space-y-6 order-2 md:order-1">
          <h2 className="text-4xl font-bold">Une double vie</h2>
          <p className="text-lg text-gray-300 leading-relaxed">
            Cette vidéo présente l’équilibre fragile entre ses deux univers :
            la rigueur quotidienne du métier médical, et la liberté intense de
            la création nocturne. Deux mondes qui semblent s’opposer mais
            s’alimentent finalement l’un l’autre.
          </p>
        </div>

        {/* VIDEO DERECHA */}
        <div className="order-1 md:order-2 w-full">
          <video
            src="/videos/1doublevie.mp4"
            className="w-full rounded-xl"
            controls
          />
        </div>
      </section>

      {/* --------------- SECTION 3 : Vidéo Atelier + Texte --------------- */}
      <section className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">
        {/* VIDEO IZQUIERDA */}
        <div className="relative order-1 w-full">
          <video
            src="/apropos/atelier.mp4"
            className="w-full rounded-xl"
            controls
          />
        </div>

        {/* TEXTO DERECHA */}
        <div className="space-y-6 order-2">
          <h2 className="text-4xl font-bold">L’atelier</h2>
          <p className="text-lg text-gray-300 leading-relaxed">
            Son atelier est un véritable laboratoire de formes, couleurs et
            matières. Chaque œuvre y naît d’une expérimentation minutieuse
            autour de matériaux naturels, recyclés ou détournés.
          </p>
        </div>
      </section>

      {/* --------------- SECTION 4 : Upcycling & Matières --------------- */}
      <section className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">
        {/* TEXTO IZQUIERDA */}
        <div className="space-y-6 order-2 md:order-1">
          <h2 className="text-4xl font-bold">Le pouvoir des matériaux</h2>
          <p className="text-lg text-gray-300 leading-relaxed">
            Pierre Arnould pratique l’upcycling bien avant que le mot ne
            devienne tendance. Il récupère des objets du quotidien, des
            éléments industriels, du bois, du métal, du carton ou des fragments
            de vie qu’il transforme en œuvres uniques.
          </p>
          <p className="text-lg text-gray-300 leading-relaxed">
            Pour lui, la matière n’est jamais morte : elle possède une mémoire,
            une histoire, et un potentiel infini.
          </p>
        </div>

        {/* IMAGE DERECHA */}
        <div className="relative w-full h-[400px] rounded-xl overflow-hidden order-1 md:order-2">
          <Image
            src="/videos/2videosonatelier.mp4"
            alt="Upcycling par Pierre Arnould"
            fill
            className="object-cover"
          />
        </div>
      </section>

      {/* --------------- SECTION 5 : Influences --------------- */}
      <section className="max-w-4xl mx-auto px-6 py-20 text-center space-y-6">
        <h2 className="text-4xl font-bold">Influences</h2>
        <p className="text-lg text-gray-300 leading-relaxed max-w-3xl mx-auto">
          Son travail se nourrit des arts premiers, de l’architecture
          brutaliste, de la sculpture moderne, mais aussi des rythmes de la vie
          urbaine. On y retrouve parfois des échos de Louise Nevelson, Pierre
          Soulages, Kandinsky ou encore Richard Serra — sans jamais cesser
          d’être profondément personnel.
        </p>
      </section>

      <Footer />
    </div>
  );
}
