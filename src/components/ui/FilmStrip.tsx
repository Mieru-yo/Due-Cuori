import type { GalleryFrame } from "@/data/gallery";
import "./FilmStrip.css";

interface FilmStripProps {
  readonly frames: GalleryFrame[];
  readonly reverse?: boolean;
  readonly speed?: "slow" | "normal" | "fast";
  readonly size?: "sm" | "md" | "lg";
  readonly frameOffset?: number;
  readonly onFrameClick?: (image: string, alt: string) => void;
}

function SprocketBorder() {
  // 160 sprockets so the track never runs out before translateX(-50%) loops
  const holes = Array.from({ length: 160 });
  return (
    <div className="fs-sprocket-border">
      <div className="fs-sprocket-track">
        {holes.map((_, i) => (
          <div key={i} className="fs-sprocket" />
        ))}
      </div>
    </div>
  );
}

export function FilmStrip({
  frames,
  reverse = false,
  speed = "normal",
  size = "md",
  frameOffset = 0,
  onFrameClick,
}: FilmStripProps) {
  // Duplicate 4× so the first half = 2 full sets.
  // CSS translateX(-50%) scrolls exactly 2 sets, then loops seamlessly.
  const allFrames = [...frames, ...frames, ...frames, ...frames];

  return (
    <div
      className={[
        "fs",
        reverse ? "fs--reverse" : "",
        `fs--${speed}`,
        `fs--${size}`,
      ].join(" ")}
    >
      <SprocketBorder />
      <div className="fs-track">
        {allFrames.map((frame, i) => (
          <div 
            key={`${frame.image}-${i}`}
            className="fs-frame"
            onClick={() => onFrameClick?.(frame.image, frame.alt)}
            role={onFrameClick ? "button" : undefined}
            tabIndex={onFrameClick ? 0 : undefined}
            onKeyDown={(e: React.KeyboardEvent) => {
              if (onFrameClick && (e.key === 'Enter' || e.key === ' ')) {
                e.preventDefault();
                onFrameClick(frame.image, frame.alt);
              }
            }}
          >
            <div className="fs-frame-counter">
              {String(((i + frameOffset) % frames.length) + 1).padStart(2, "0")}
              A
            </div>
            <img src={frame.image} alt={frame.alt} loading="lazy" />
            <div className="fs-frame-overlay" />
            <div className="fs-frame-label">
              <span className="fs-frame-label-text">{frame.label}</span>
            </div>
          </div>
        ))}
      </div>
      <SprocketBorder />
    </div>
  );
}
