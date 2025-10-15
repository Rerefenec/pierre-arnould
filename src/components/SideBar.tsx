interface SidebarProps {
  styles: string[];
  selectedStyle: string | null;
  setSelectedStyle: (style: string | null) => void;
}

export default function SideBar({ styles, selectedStyle, setSelectedStyle }: SidebarProps) {
  return (
    <div className="flex flex-col space-y-4 p-4 border-r border-gray-200 min-w-[180px]">
      {styles.map((style) => {
        const isAll = style === "Toutes les œuvres";
        const isSelected =
          (isAll && selectedStyle === null) || selectedStyle === style;

        return (
          <button
            key={style}
            onClick={() => setSelectedStyle(isAll ? null : style)}
            className={`text-left px-3 py-2 rounded transition-all duration-200 
              ${isSelected ? "bg-black text-white font-semibold" : "bg-gray-100 hover:bg-gray-200"}`}
          >
            {style}
          </button>
        );
      })}
    </div>
  );
}
