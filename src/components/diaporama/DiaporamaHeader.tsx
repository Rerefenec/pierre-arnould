import { MaximizeIcon } from "./icons/MaximizeIcon";
import { MinimizeIcon } from "./icons/MinimizeIcon";
import { ShareIcon } from "./icons/ShareIcon";

interface DiaporamaHeaderProps {
  isZoomed: boolean;
  onZoom: () => void;
  onShare: () => void;
  onClose: () => void;
}

export function DiaporamaHeader({ isZoomed, onZoom, onShare, onClose }: DiaporamaHeaderProps) {
  return (
    <header className="absolute  top-4 left-4 right-4 flex justify-between items-start transition-opacity">
      <div className={`flex space-x-2 ${isZoomed ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
        <button onClick={onZoom} className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition">
          <MaximizeIcon />
        </button>
        <button onClick={onShare} className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition">
          <ShareIcon />
        </button>
      </div>
      <button onClick={onClose} className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition">
        {isZoomed ? <MinimizeIcon /> : (
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        )}
      </button>
    </header>
  );
}
