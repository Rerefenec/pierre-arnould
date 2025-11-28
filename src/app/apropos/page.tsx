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
        <div className="space-y-6 text-justify">
          <h2 className="text-4xl font-bold">À propos de l’artiste</h2>
          <p className="text-lg leading-relaxed text-gray-300">
            Pierre Arnould est un plasticien français dont le travail s’inscrit
            dans une recherche constante autour de la matière, du volume et du
            mouvement. Son œuvre explore les frontières entre l’organique et le
            géométrique, le recyclé et le noble, l’intuition et la précision.
          </p>
          <p className="text-lg leading-relaxed text-gray-300">
            Ce qui le distingue particulièrement est sa capacité à transformer
            des matériaux recyclés en créations esthétiques et sensibles. Dans
            un contexte où l’impact environnemental est plus que jamais au cœur
            des préoccupations, pourquoi ne pas réinventer nos “déchets” en les
            mettant au service de quelque chose de beau ?
          </p>
        </div>
      </section>

      {/* --------------- SECTION 2 : Vidéo “Double vie” --------------- */}
      <section className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">
        {/* TEXTO IZQUIERDA */}
        <div className="space-y-6 order-2 md:order-1 text-justify">
          <h2 className="text-4xl font-bold">Une double vie</h2>
          <p className="text-lg text-gray-300 leading-relaxed">
            Artiste le soir et professionnel de santé le jour, il mène une
            véritable double vie créative — une tension qui nourrit son travail.
          </p>

          <p className="text-lg text-gray-300 leading-relaxed">
            Cette vidéo illustre l’équilibre entre ses deux univers : la rigueur
            du quotidien médical et la liberté intense de la création nocturne.
            Deux mondes qui paraissent opposés, mais qui, en réalité, se
            nourrissent mutuellement.
          </p>
        </div>

        {/* VIDEO DERECHA */}
        <div className="order-1 md:order-2 w-full">
          <video src="/videos/1.mp4" className="w-full rounded-xl" controls />
        </div>
      </section>

      {/* --------------- SECTION 3 : Vidéo Atelier + Texte --------------- */}
      <section className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">
        {/* VIDEO IZQUIERDA */}
        <div className="relative order-1 w-full">
          <video src="/videos/3.mp4" className="w-full rounded-xl" controls />
        </div>

        {/* TEXTO DERECHA */}
        <div className="space-y-6 order-2 text-justify">
          <h2 className="text-4xl font-bold">L’atelier</h2>
          <p className="text-lg text-gray-300 leading-relaxed">
             Son atelier est bien plus qu’un espace de création : c’est un véritable
    laboratoire où il transforme les objets du quotidien en œuvres tridimensionnelles. 
    Détestant le gaspillage, il est constamment surpris par le volume de ce que nous jetons chaque jour. 
    À partir de ces matériaux recyclés, il crée des pièces combinant différentes matières et formes, 
    jouant avec les effets optiques pour donner naissance à des objets à la fois beaux et surprenants.
  </p>
        </div>
      </section>

      {/* --------------- SECTION 4 : Upcycling & Matières --------------- */}
      <section className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">
        {/* TEXTO IZQUIERDA */}
        <div className="space-y-6 order-2 md:order-1 text-justify">
          <h2 className="text-4xl font-bold">Le pouvoir des matériaux</h2>
          <p className="text-lg text-gray-300 leading-relaxed">
            Pierre Arnould pratique l’upcycling bien avant que le mot ne
            devienne tendance. Il récupère des objets du quotidien, des éléments
            industriels, du bois, du métal, du carton ou des fragments de vie
            qu’il transforme en œuvres uniques.
          </p>
          <p className="text-lg text-gray-300 leading-relaxed">
            Pour lui, la matière n’est jamais morte : elle possède une mémoire,
            une histoire, et un potentiel infini.
          </p>
        </div>

        {/* IMAGE DERECHA */}
        <div className="relative w-full h-[400px] rounded-xl overflow-hidden order-1 md:order-2">
          <video src="/videos/4.mp4" className="w-full rounded-xl" controls />
        </div>
      </section>

      {/* --------------- SECTION 5 : Influences --------------- */}

      <section className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">
        {/* VIDEO IZQUIERDA */}
        <div className="relative order-1 w-full">
          <video src="/videos/5.mp4" className="w-full rounded-xl" controls />
        </div>

        {/* TEXTO DERECHA */}
        <div className="space-y-6 order-2 text-justify">
          <h2 className="text-4xl font-bold">Influences</h2>
          <p className="text-lg text-gray-300 leading-relaxed max-w-3xl mx-auto">
          Son travail s’inspire des arts très anciens, comme ceux des Égyptiens, mais aussi des rythmes de la vie urbaine. 
          On y retrouve des influences variées : la géométrie de Mondrian, les couleurs et volumes de Klimt, 
          les compositions abstraites de Kandinsky, ou encore l’approche contemporaine de Carlos Bougatti.
          </p>

          <p className="text-lg text-gray-300 leading-relaxed max-w-3xl mx-auto">
L’artiste s’inspire également du style des tondos, ces tableaux de forme ronde fréquents en Italie à la Renaissance. 
Mais ici, il travaille le bois, créant des bas-reliefs collés ou sculptés et n’hésitant pas à utiliser les matériaux les plus divers.
Au final, il en résulte un travail singulier et unique, à la fois novateur et atypique, qui capte l’attention par sa créativité et son originalité.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
