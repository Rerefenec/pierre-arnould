"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";


interface GalleryItem {
  title: string;
  image: string;
  description: string;
}

const galleryItems: GalleryItem[] = [
  { title: "Dessins et debuts", image: "/gallery1.jpg",description: "Le coup de pinceau initial. Cette série capture l'énergie pure de mes premiers travaux. Elle mêle l'abstrait et le figuratif à travers des lignes spontanées et l'explosion de couleurs acryliques. C'est là où mon exploration artistique a commencé, sans règles, juste le plaisir du trait." },
  { title: "Compartimentés", image: "/gallery2.jpg", description: "La structure du fragment. Ici, je travaille la texture et la construction. J'assemble de petits morceaux de bois ou de carton en une mosaïque brute et uniforme. Ces œuvres transforment des matériaux récupérés en une surface tactile et architecturale qui juxtapose l'ordre de la grille et le chaos du matériau." },
  { title: "Verre soufflé", image: "/gallery3.jpg", description: "Capturer la lumière et la forme. Cette technique m'a permis d'explorer la transparence et la profondeur. Ces petites installations géométriques en verre soufflé jouent avec la lumière, où les couleurs et les formes se superposent pour créer un monde lumineux en trois dimensions." },
  { title: "Tondos", image: "/gallery4.jpg",description: "Une exploration circulaire. Dans cette série, je me concentre sur la forme du tondo, un cercle parfait qui invite à la contemplation. J'expérimente avec des motifs répétitifs et des couleurs vives, créant des œuvres qui semblent vibrer et se déplacer. C'est un dialogue entre la forme et la couleur, une invitation à voir au-delà du cadre." },
  { title: "3eme période", image: "/gallery5.jpg", description: "La fusion conceptuelle. Cette phase marque une synthèse de toutes mes méthodes. J'y utilise la symétrie, souvent inspirée des rosaces ou des mandales, pour créer des installations complexes. Je superpose reliefs, textures et couleurs pour évoquer des mécanismes anciens ou des visions de l'équilibre parfait." },
];

export default function Gallery() {
  const [selected, setSelected] = useState<GalleryItem | null>(null);

  // Divide los elementos en dos grupos: 3 para la fila superior y 2 para la inferior
  const topRowItems = galleryItems.slice(0, 3);
  const bottomRowItems = galleryItems.slice(3, 5);

  const renderItem = (item: GalleryItem, index: number, colSpan: string) => (
    // 'colSpan' define cuánto espacio ocupa el elemento: 'col-span-2' para 3 arriba, 'col-span-3' para 2 abajo.
    <motion.div
      key={item.title} // Usamos el título como key, ya que es único
      layoutId={item.title}
      onClick={() => setSelected(item)}
      className={`cursor-pointer ${colSpan}`} // Aplicamos el span de la columna
    >
      <Image
        src={item.image}
        alt={item.title}
        width={400} 
        height={400}
        // Aseguramos que la imagen cubra el ancho de su columna
        className="object-cover rounded-xl w-full h-64"
      />
<h3 className="mt-2 text-lg font-semibold">
  {item.title === "Compartimentés" ? (
    <Link
      href="/compartimentes"
      className="hover:underline text-blue-600"
      onClick={(e) => e.stopPropagation()}
    >
      {item.title}
    </Link>
  ) : (
    item.title
  )}
</h3>

    </motion.div>
  );

  return (
    <section className="my-16 px-6">
      {/* Contenedor unificado usando una rejilla de 6 columnas (md:grid-cols-6)
        Esto permite que los 5 elementos tengan el mismo ancho base.
      */}
      <div className="grid grid-cols-1 md:grid-cols-6 gap-6 text-black">
        
        {/* Fila superior: 3 elementos. Cada uno ocupa 2 columnas de 6 (3 * 2 = 6) */}
        {topRowItems.map((item) => renderItem(item, 0, "md:col-span-2"))}
        
        {/* Fila inferior: 2 elementos. 
          1. Dejamos un espacio vacío (1 columna) para el escalonado.
          2. El primer elemento ocupa 2 columnas.
          3. El segundo elemento ocupa 2 columnas.
          4. Dejamos un espacio vacío (1 columna) para centrar.
          (1 columna vacía + 2 columnas + 2 columnas + 1 columna vacía = 6)
        */}
        
        {/* Espacio vacío para el escalonado/centrado */}
        <div className="hidden md:block md:col-span-1"></div> 

        {/* Los 2 elementos inferiores. Cada uno ocupa 2 columnas */}
        {bottomRowItems.map((item) => renderItem(item, 0, "md:col-span-2"))}
        
        {/* Espacio vacío final para el escalonado/centrado, si fuera necesario para completar la fila. 
            En este caso, solo necesitamos uno al inicio para que el centro sea (2 + 2) / 6. */}
        <div className="hidden md:block md:col-span-1"></div>

      </div>

      {/* --- Modal animado (sin cambios) --- */}
      <AnimatePresence>
        {selected && (
          <motion.div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
          >
            <motion.div
              layoutId={selected.title}
              className="bg-white rounded-2xl overflow-hidden shadow-2xl max-w-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={selected.image}
                alt={selected.title}
                width={800}
                height={600}
                className="object-cover w-full h-96"
              />
              <div className="p-6">
                <h2 className="text-2xl font-bold mb-2">{selected.title}</h2>
                <p className="text-gray-600">
                  {selected.description }
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}