"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

interface StyleProps {
  styles: string[];
  selectedStyle: string | null;
  setSelectedStyle: (style: string | null) => void;
}

type SearchBarProps = {
  query: string;
  setQuery: (value: string) => void;
  filteredCount: number;
  resetFilters: () => void;
  setCurrentPage: (page: number) => void;
} & StyleProps;

export default function SearchBar({
  query,
  setQuery,
  filteredCount,
  resetFilters,
  styles,
  selectedStyle,
  setSelectedStyle,
  setCurrentPage,
}: SearchBarProps) {
  const [isStyleFilterOpen, setIsStyleFilterOpen] = useState(false);

  const handleStyleSelect = (style: string) => {
    setSelectedStyle(style === "Toutes les œuvres" ? null : style);
    setCurrentPage(1);
    setIsStyleFilterOpen(false);
  };

  return (
    <div className="bg-black py-6 px-4 text-white">
      <div className="max-w-3xl mx-auto flex flex-col gap-4 ">
        <input
          type="text"
          placeholder="Rechercher une œuvre..."
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setCurrentPage(1);
          }}
          className="w-full p-3 border border-gray-300 rounded-md placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-white"
        />

        <div className="relative lg:hidden">
          <input
            readOnly
            value={selectedStyle ?? "Tous les styles"}
            onClick={() => setIsStyleFilterOpen(!isStyleFilterOpen)}
            className="w-full p-3 rounded-md bg-gray-800 cursor-pointer"
          />
          <ChevronDown className="absolute right-3 top-3" />

          {isStyleFilterOpen && (
            <div className="absolute w-full bg-gray-900 mt-1 rounded-md z-20">
              {styles.map((style) => (
                <button
                  key={style}
                  onClick={() => handleStyleSelect(style)}
                  className="block w-full text-left px-4 py-2 hover:bg-gray-700"
                >
                  {style}
                </button>
              ))}
            </div>
          )}
        </div>

        <div className="flex justify-between items-center">
          <span>Œuvres trouvées : {filteredCount}</span>
          <button
            onClick={() => {
              resetFilters();
              setCurrentPage(1);
            }}
            className="border px-4 py-2 rounded-md"
          >
            Réinitialiser
          </button>
        </div>
      </div>
    </div>
  );
}
