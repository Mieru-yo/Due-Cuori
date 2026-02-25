import { SectionLabel } from "@/components/ui/SectionLabel";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { FilmStrip } from "@/components/ui/FilmStrip";
import { galleryStrip1, galleryStrip2 } from "@/data/gallery";
import "./Gallery.css";

export function Gallery() {
  return (
    <section className="pellicule-section snap-section" id="galerie">
      <div className="pellicule-header reveal">
        <SectionLabel>// Atmosphère</SectionLabel>
        <SectionTitle>Fragments d&rsquo;ombre</SectionTitle>
      </div>

      <div className="pellicule-strips">
        <FilmStrip frames={galleryStrip1} size="sm" speed="fast" />
        <FilmStrip
          frames={galleryStrip2}
          size="lg"
          speed="slow"
          reverse
          frameOffset={6}
        />
        <FilmStrip frames={galleryStrip1} size="sm" speed="normal" reverse />
      </div>

      {/* Side fade masks */}
      <div className="pellicule-fade pellicule-fade--left" />
      <div className="pellicule-fade pellicule-fade--right" />
    </section>
  );
}
