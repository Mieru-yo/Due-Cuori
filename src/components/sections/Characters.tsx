import { SectionLabel } from "@/components/ui/SectionLabel";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { characters } from "@/data/characters";
import "./Characters.css";

export function Characters() {
  return (
    <section className="characters snap-section" id="personnages">
      <div className="characters-header reveal">
        <SectionLabel className="characters-label">// Les Personnages</SectionLabel>
        <SectionTitle>Trois destins liés par le sang</SectionTitle>
      </div>
      <div className="characters-grid">
        {characters.map((character) => (
          <div key={character.name} className="character-card reveal">
            <div className="character-card-border" />
            <div className="character-img-wrapper">
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
    </section>
  );
}
