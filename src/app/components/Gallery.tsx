interface GalleryItem {
  title: string;
  image: string;
}

const galleryItems: GalleryItem[] = [
  { title: "Dessins et debuts", image: "/gallery1.jpg" },
  { title: "Compartimentés", image: "/gallery2.jpg" },
  { title: "Verre soufflé", image: "/gallery3.jpg" },
  { title: "Tondos", image: "/gallery4.jpg" },
  { title: "3eme période", image: "/gallery5.jpg" },
];

export default function Gallery() {
  return (
    <section className="my-16 px-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 text-black gap-6">
        {galleryItems.map((item, index) => (
          <div key={index} className="flex flex-col md:flex-row items-center gap-4">
            <img
              src={item.image}
              alt={item.title}
              className="w-48 h-48 object-cover rounded-lg"
            />
            <h3 className="text-lg font-semibold">{item.title}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}
