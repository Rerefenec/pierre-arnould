import Link from "next/link";

export default function Header() {
  return (
    <header className="flex justify-between items-center p-6 bg-gray-100">
      <div className="text-2xl font-bold">Pierre Arnould</div>
      <nav className="space-x-6">
        <Link href="/">Home</Link>
        <Link href="/props">Props</Link>
        <Link href="/collections">Collections</Link>
        <Link href="/faqs">FAQs</Link>
      </nav>
    </header>
  );
}
