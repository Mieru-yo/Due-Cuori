import { SectionLabel } from "@/components/ui/SectionLabel";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { ImageModal } from "@/components/ui/ImageModal";
import { characters } from "@/data/characters";
import { useState } from "react";
import "./Characters.css";

export function Characters() {
  const [modalImage, setModalImage] = useState<{ url: string; alt: string } | null>(null);

  const openModal = (url: string, alt: string) => {
    setModalImage({ url, alt });
  };

  const closeModal = () => {
    setModalImage(null);
  };

  return (
    <section className="characters snap-section" id="personnages">
      <div className="characters-accent characters-accent--left" />
      <div className="characters-accent characters-accent--right" />
      <div className="characters-header reveal">
        <SectionLabel className="characters-label">{'// Les Personnages'}</SectionLabel>
        <SectionTitle>Trois destins liés par le sang</SectionTitle>
      </div>
      <div className="characters-grid">
        {characters.map((character) => (
          <div key={character.name} className="character-card reveal">
            <div className="character-card-border" />
            <div 
              className="character-img-wrapper"
              onClick={() => openModal(character.image, character.imageAlt)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  openModal(character.image, character.imageAlt);
                }
              }}
            >
              <img src={character.image} alt={character.imageAlt} />
            </div>
            <div className="character-info">
              <div className="character-name">{character.name}</div>
              <div className="character-role">{character.role}</div>
              <p className="character-desc">{character.description}</p>
            </div>
          </div>
        ))}
      </div>

      <ImageModal
        isOpen={modalImage !== null}
        imageUrl={modalImage?.url || ""}
        imageAlt={modalImage?.alt || ""}
        onClose={closeModal}
      />
    </section>
  );
}
