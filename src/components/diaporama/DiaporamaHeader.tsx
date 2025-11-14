import { MaximizeIcon } from "./icons/MaximizeIcon";
import { MinimizeIcon } from "./icons/MinimizeIcon";
import { ShareIcon } from "./icons/ShareIcon";
interface DiaporamaHeaderProps {
  isZoomed: boolean;
  onZoom: () => void;
  onShare: () => void;
  onClose: () => void;
}

export function DiaporamaHeader({
  isZoomed,
  onZoom,
  onShare,
  onClose,
}: DiaporamaHeaderProps) {
  return (
    <header className="absolute top-4 left-4 right-4 flex justify-between items-start transition-opacity z-10">
      {/* === Version Mobile UNIQUEMENT (< 640px) === */}
      <div className="flex sm:hidden w-full justify-between">
        <button
          onClick={onShare}
          className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition"
          aria-label="Partager"
        >
          <svg
            className="w-5 h-5 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
            />
          </svg>
        </button>

        <button
          onClick={onClose}
          className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition"
          aria-label="Fermer"
        >
          <svg
            className="w-6 h-6 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>

      {/* === Version Tablette/Desktop (≥ 640px) === */}
      <div
        className={`hidden sm:flex w-full justify-between ${
          isZoomed ? "opacity-0 pointer-events-none" : "opacity-100"
        }`}
      >
        <div className="flex space-x-2">
          <button
            onClick={onZoom}
            className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition"
          >
            <MaximizeIcon />
          </button>
          <button
            onClick={onShare}
            className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition"
            aria-label="Partager"
          >
            <ShareIcon />
          </button>
        </div>
        <button
          onClick={onClose}
          className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition"
        >
          {isZoomed ? (
            <MinimizeIcon />
          ) : (
            <svg
              className="w-6 h-6 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          )}
        </button>
      </div>
    </header>
  );
}
