"use client";

import Header from "./../components/Header";
import Hero from "./../components/Hero";
import Gallery from "./../components/Gallery";
import About from "./../components/About";
import Footer from "./../components/Footer";

export default function HomePage() {
  return (
    <div>
      <Header />
      <main>
        <Hero />
        <Gallery />
      </main>
      <Footer />
    </div>
  );
}
