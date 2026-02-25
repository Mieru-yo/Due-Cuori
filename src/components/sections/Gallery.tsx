import { SectionLabel } from "@/components/ui/SectionLabel";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { FilmStrip } from "@/components/ui/FilmStrip";
import { ImageModal } from "@/components/ui/ImageModal";
import { galleryStrip1, galleryStrip2 } from "@/data/gallery";
import { useState } from "react";
import "./Gallery.css";

export function Gallery() {
  const [modalImage, setModalImage] = useState<{ url: string; alt: string } | null>(null);

  const openModal = (url: string, alt: string) => {
    setModalImage({ url, alt });
  };

  const closeModal = () => {
    setModalImage(null);
  };

  return (
    <section className="pellicule-section snap-section" id="galerie">
      <div className="pellicule-header reveal">
        <SectionLabel>{'// Atmosphère'}</SectionLabel>
        <SectionTitle>Fragments d&rsquo;ombre</SectionTitle>
      </div>

      <div className="pellicule-strips">
        <FilmStrip frames={galleryStrip1} size="sm" speed="fast" onFrameClick={openModal} />
        <FilmStrip
          frames={galleryStrip2}
          size="lg"
          speed="slow"
          reverse
          frameOffset={6}
          onFrameClick={openModal}
        />
        <FilmStrip frames={galleryStrip1} size="sm" speed="normal" reverse onFrameClick={openModal} />
      </div>

      {/* Side fade masks */}
      <div className="pellicule-fade pellicule-fade--left" />
      <div className="pellicule-fade pellicule-fade--right" />

      <ImageModal
        isOpen={modalImage !== null}
        imageUrl={modalImage?.url || ""}
        imageAlt={modalImage?.alt || ""}
        onClose={closeModal}
      />
    </section>
  );
}
