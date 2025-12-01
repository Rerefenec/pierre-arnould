"use client";
import React, { useState } from "react";
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
    const isAll = style === "Toutes les œuvres";
    setSelectedStyle(isAll ? null : style);
    setCurrentPage(1);
    setIsStyleFilterOpen(false);
  };

  const currentStyleLabel = selectedStyle
    ? selectedStyle
    : "Tous les styles";

  return (
    <div className="bg-black py-6 px-4 text-white">
      <div className="max-w-3xl mx-auto flex flex-col gap-4">

        {/* 🔍 Recherche */}
        <input
          type="text"
          placeholder="Rechercher une œuvre ..."
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setCurrentPage(1);
          }}
          className="w-full p-3 border border-gray-300 rounded-md placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-white"
        />

        {/* Mobile : input style select */}
        <div className="relative lg:hidden">
          <input
            type="text"
            readOnly
            value={currentStyleLabel}
            onClick={() => setIsStyleFilterOpen(!isStyleFilterOpen)}
            className="w-full p-3 border border-gray-700 rounded-md bg-gray-900 cursor-pointer text-white placeholder-gray-500 focus:outline-none"
          />
          <ChevronDown
            className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-white"
          />
          {isStyleFilterOpen && (
            <div className="absolute top-full left-0 mt-1 w-full bg-gray-900 border border-gray-700 rounded-md shadow-lg z-20 max-h-60 overflow-auto">
              {styles.map((style) => {
                const isSelected =
                  selectedStyle === style || (style === "Toutes les œuvres" && selectedStyle === null);
                return (
                  <button
                    key={style}
                    onClick={() => handleStyleSelect(style)}
                    className={`w-full text-left px-4 py-2 transition duration-150
                      ${isSelected ? "bg-white text-black font-semibold" : "hover:bg-gray-700"}`}
                  >
                    {style}
                  </button>
                );
              })}
            </div>
          )}
        </div>

        {/* Mobile : œuvres trouvées + réinitialiser */}
        <div className="flex flex-col items-center gap-3 lg:hidden">
          <span className="text-white text-center">
            Œuvres trouvées : {filteredCount}
          </span>
          <button
            onClick={() => {
              resetFilters();
              setCurrentPage(1);
            }}
            className="px-5 py-2 bg-black border border-white rounded-md hover:bg-gray-300 hover:text-black transition"
          >
            Réinitialiser les filtres
          </button>
        </div>

        {/* Desktop reste inchangé */}
        <div className="hidden lg:flex flex-wrap justify-between items-center gap-4">
          <span className="text-white">Œuvres trouvées : {filteredCount}</span>
          <button
            onClick={() => {
              resetFilters();
              setCurrentPage(1);
            }}
            className="px-5 py-2 bg-black border border-white rounded-md hover:bg-gray-300 hover:text-black transition"
          >
            Réinitialiser les filtres
          </button>
        </div>
      </div>
    </div>
  );
}
