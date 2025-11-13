export default function Footer() {
  return (
    <footer className="px-4 sm:px-8 py-6 sm:py-10 bg-black text-center text-white text-xs sm:text-sm md:text-base leading-relaxed relative z-10">
      © {new Date().getFullYear()}{" "}
      <span className="font-semibold">Pierre Arnould</span>. Tous droits réservés.
    </footer>
  );
}
