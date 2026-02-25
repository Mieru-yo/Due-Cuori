import "./Hero.css";

export function Hero() {
  return (
    <section className="hero snap-section">
      <div className="hero-bg" />
      <div className="drip-lines">
        <div className="drip" />
        <div className="drip" />
        <div className="drip" />
        <div className="drip" />
        <div className="drip" />
        <div className="drip" />
      </div>
      <div className="petals">
        <div className="petal" />
        <div className="petal" />
        <div className="petal" />
        <div className="petal" />
        <div className="petal" />
      </div>

      <div className="hero-studio">Rec Studio présente</div>
      <div className="hero-ornament">&mdash; Un film d&rsquo;amour et de sang &mdash;</div>
      <h1 className="hero-title">
        <span className="line1">DUE CUORI</span>
        <span className="line2">Un Destino</span>
      </h1>
      <div className="hero-divider" />
      <p className="hero-tagline">
        Un amour interdit, entre la fille d&rsquo;un parrain et un homme étranger à ce milieu
      </p>
      <div className="hero-cta">
        <a href="#trailer" className="btn-primary">
          <span>Trailer</span>
        </a>
        <span className="hero-cta-sep"></span>
        <a href="#synopsis" className="btn-secondary">
          Découvrir
        </a>
      </div>

      <div className="scroll-indicator">
        <span>Défiler</span>
        <div className="scroll-line" />
      </div>
    </section>
  );
}
