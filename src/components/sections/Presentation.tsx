import { SectionLabel } from "@/components/ui/SectionLabel";
import { SectionTitle } from "@/components/ui/SectionTitle";
import "./Presentation.css";

export function Presentation() {
  return (
    <section className="presentation reveal snap-section">
      <div className="presentation-accent presentation-accent--left" />
      <div className="presentation-accent presentation-accent--right" />
      <div className="presentation-inner">
        <SectionLabel className="presentation-label">// Le Film</SectionLabel>
        <SectionTitle>Un court-métrage par Rec Studio</SectionTitle>
        <p className="presentation-text">
          <strong>Due Cuori, Un Destino</strong> est un court-métrage réalisé par{" "}
          <strong>Rec Studio</strong>. À travers cette histoire, nous explorons un
          amour impossible dans un monde qui dépasse et écrase ceux qui osent
          ressentir. Un univers à la fois sombre et élégant, où chaque silence peut
          faire basculer un destin &mdash; une œuvre dramatique et émotionnelle où la
          romance et la tragédie s&rsquo;entrelacent.
        </p>
      </div>
    </section>
  );
}
