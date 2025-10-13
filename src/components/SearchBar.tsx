"use client";

import { Search } from "lucide-react";

type SearchBarProps = {
  query: string;
  setQuery: (value: string) => void;
};

export default function SearchBar({ query, setQuery }: SearchBarProps) {
  return (
    <div className="bg-white py-10">
      <div className="max-w-xl mx-auto px-4 relative">
        {/* Champ de recherche avec icône */}
        <input
          type="text"
          placeholder="Rechercher un artwork..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full p-3 pr-10 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
        />

        {/* Icône de loupe à droite */}
        <Search className="absolute right-7 top-1/2 transform -translate-y-1/2 text-gray-500 w-5 h-5 pointer-events-none" />
      </div>
    </div>
  );
}
