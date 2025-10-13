interface SidebarProps {
  styles: string[];
  selectedStyle: string | null;
  setSelectedStyle: (style: string | null) => void;
}

export default function SideBar({ styles, selectedStyle, setSelectedStyle }: SidebarProps) {
  return (
    <div className="flex flex-col space-y-4 p-4 border-r border-gray-200">
      {styles.map((style) => (
        <button
          key={style}
          onClick={() =>
            setSelectedStyle(selectedStyle === style ? null : style)
          }
          className={`text-left px-2 py-1 rounded ${
            selectedStyle === style ? "bg-black text-white" : "bg-gray-100"
          }`}
        >
          {style}
        </button>
      ))}
    </div>
  );
}
