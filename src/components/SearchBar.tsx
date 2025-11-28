"use client";
import React, { useState } from "react";
import { ChevronDown, X } from "lucide-react";

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

  // ⭐ NOUVEAU : pour reset pagination
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
  setCurrentPage, // ⭐
}: SearchBarProps) {
  const [isStyleFilterOpen, setIsStyleFilterOpen] = useState(false);

  const handleStyleSelect = (style: string) => {
    const isAll = style === "Toutes les œuvres";
    setSelectedStyle(isAll ? null : style);
    setCurrentPage(1); // ⭐ reset page
    setIsStyleFilterOpen(false);
  };

  const currentStyleLabel = selectedStyle
    ? styles.find((s) => s === selectedStyle)
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
            setCurrentPage(1); // ⭐ reset page
          }}
          className="w-full p-3 border border-gray-300 rounded-md placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-white"
        />

        {/* Mobile : filtre styles */}
        <div className="relative lg:hidden">
          <button
            onClick={() => setIsStyleFilterOpen(!isStyleFilterOpen)}
            className="w-full flex justify-between items-center px-4 py-2 bg-gray-900 border border-gray-700 rounded-md transition hover:bg-gray-700"
          >
            <span className="flex items-center">
              Style sélectionné : <strong className="ml-1">{currentStyleLabel}</strong>
            </span>
            {isStyleFilterOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <ChevronDown className="w-5 h-5" />
            )}
          </button>

          {isStyleFilterOpen && (
            <div className="absolute top-full left-0 mt-2 w-full bg-gray-900 border border-gray-700 rounded-md shadow-lg z-20">
              {styles.map((style) => {
                const isSelected =
                  selectedStyle === style ||
                  (style === "Toutes les œuvres" && selectedStyle === null);

                return (
                  <button
                    key={style}
                    onClick={() => handleStyleSelect(style)}
                    className={`w-full text-left px-4 py-2 transition duration-150 
                      ${
                        isSelected
                          ? "bg-white text-black font-semibold"
                          : "hover:bg-gray-700"
                      }`}
                  >
                    {style}
                  </button>
                );
              })}
            </div>
          )}
        </div>

        {/* Infos + reset */}
        <div className="flex flex-wrap justify-between items-center gap-4">
          <span className="text-white">Œuvres trouvées : {filteredCount}</span>

          <button
            onClick={() => {
              resetFilters();
              setCurrentPage(1); // ⭐ reset page
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
