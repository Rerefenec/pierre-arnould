import { seriesData } from "@/app/data/seriesData";
import { notFound } from "next/navigation";

interface Props {
  params: { slug: string };
}

export async function generateStaticParams() {
  return seriesData["tondos"].map((work) => ({
    slug: work.slug,
  }));
}

export async function generateMetadata({ params }: Props) {
  const work = seriesData["tondos"].find(
    (w) => w.slug === params.slug
  );

  if (!work) return {};

  return {
    title: `${work.title} — Pierre Arnould`,
    description: `${work.title}, ${work.year}, ${work.description} — œuvre de Pierre Arnould.`,
    openGraph: {
      title: `${work.title} — Pierre Arnould`,
      description: work.description,
      images: [work.image],
    },
  };
}

export default function WorkPage({ params }: Props) {
  const work = seriesData["tondos"].find(
    (w) => w.slug === params.slug
  );

  if (!work) return notFound();

  return (
    <main className="bg-black text-white min-h-screen px-6 py-20">
      <article className="max-w-4xl mx-auto">

        {/* H1 important pour SEO */}
        <h1 className="text-3xl md:text-5xl font-semibold mb-6">
          {work.title}
        </h1>
               {/* pour faire comprendre à google qu'on a affaire à des oeuvres d'art */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "VisualArtwork",
            name: work.title,
            creator: {
              "@type": "Person",
              name: "Pierre Arnould",
            },
            dateCreated: work.year,
            description: work.description,
            image: `https://pierrearnould.com${work.image}`,
          }),
        }}
      />

        {/* Image SEO */}
        <img
          src={work.image}
          alt={`${work.title}, ${work.year}, œuvre baroque de Pierre Arnould`}
          className="w-full object-contain mb-8"
        />

        {/* Informations structurées */}
        <section className="space-y-4 text-lg text-gray-300">
          <p><strong>Année :</strong> {work.year}</p>
          <p><strong>Description :</strong> {work.description}</p>
          <p>
            Œuvre de la série <strong>Tondos</strong> réalisée par
            Pierre Arnould, artiste plasticien explorant relief,
            matière et tension visuelle.
          </p>
        </section>

      </article>
    </main>
  );
}