import Link from "next/link";

export default function Header() {
  return (
    <header className="flex justify-between items-center text-black p-6 ">
      <div className="text-2xl font-bold">Pierre Arnould</div>
      <nav className="space-x-6">
        <Link href="/">Home</Link>
        <Link href="/A propos">À propos</Link>
        <Link href="/collections">Collections</Link>
        <Link href="/faqs">FAQs</Link>
      </nav>
    </header>
  );
}
