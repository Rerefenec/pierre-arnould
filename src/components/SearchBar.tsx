"use client";

type SearchBarProps = {
  query: string;
  setQuery: (value: string) => void;
  filteredCount: number;
  resetFilters: () => void;
};

export default function SearchBar({
  query,
  setQuery,
  filteredCount,
  resetFilters,
}: SearchBarProps) {
  return (
    <div className="bg-black py-6 px-4 text-white">
      <div className="max-w-3xl mx-auto flex flex-col gap-4">
        {/* 🔍 Barra de búsqueda */}
        <input
          type="text"
          placeholder="Rechercher un artwork..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
        />

        {/* 📊 Info de filtrado */}
        <div className="flex flex-wrap justify-between items-center gap-4">
          <span className="text-white">Œuvres trouvées : {filteredCount}</span>
          <button
            onClick={resetFilters}
            className="px-5 py-2 bg-black border border-white rounded-md hover:bg-gray-300 hover:text-black transition"
          >
            Réinitialiser les filtres
          </button>
        </div>
      </div>
    </div>
  );
}
