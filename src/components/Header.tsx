"use client";

import Link from "next/link";

export default function Header() {


  return (
    <header className="fixed top-0 left-0 w-full z-30 flex justify-between items-center px-6 py-4 bg-white text-black shadow-md">
        <div className="text-2xl font-bold">Pierre Arnould</div>
        <nav className="space-x-6">
          <Link href="/">Home</Link>
          <Link href="/collections">Collections</Link>
          <Link href="/A propos">À propos</Link>
          <Link href="/faqs">FAQs</Link>
        </nav>
      </header>
  );
}
