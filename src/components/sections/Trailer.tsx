import { useState, useCallback } from "react";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { SectionTitle } from "@/components/ui/SectionTitle";
import "./Trailer.css";

const YOUTUBE_VIDEO_ID = "dQw4w9WgXcQ";

export function Trailer() {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = useCallback(() => {
    setIsPlaying(true);
  }, []);

  const sprockets = Array.from({ length: 15 });

  return (
    <section className="trailer-section reveal snap-section" id="trailer">
      <SectionLabel>// Bande-annonce</SectionLabel>
      <SectionTitle>Voir le Trailer</SectionTitle>
      <div className="trailer-film-wrap">
        <div className="trailer-sprockets trailer-sprockets--top">
          {sprockets.map((_, i) => (
            <div key={i} className="t-hole" />
          ))}
        </div>
        <div className={`trailer-placeholder ${isPlaying ? "is-playing" : ""}`}>
          {isPlaying ? (
            <iframe
              className="trailer-iframe"
              src={`https://www.youtube.com/embed/${YOUTUBE_VIDEO_ID}?autoplay=1&rel=0`}
              title="Due Cuori, Un Destino — Bande-annonce"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          ) : (
            <>
              <div className="trailer-bg" onClick={handlePlay}>
                <img
                  src={`https://img.youtube.com/vi/${YOUTUBE_VIDEO_ID}/maxresdefault.jpg`}
                  alt="Trailer thumbnail"
                />
              </div>
              <div className="play-element" onClick={handlePlay}>
                <div className="play-element-icon" />
              </div>
              <span className="trailer-title">
                Due Cuori, Un Destino &mdash; Bande-annonce officielle
              </span>
            </>
          )}
        </div>
        <div className="trailer-sprockets trailer-sprockets--bottom">
          {sprockets.map((_, i) => (
            <div key={i} className="t-hole" />
          ))}
        </div>
      </div>
    </section>
  );
}
