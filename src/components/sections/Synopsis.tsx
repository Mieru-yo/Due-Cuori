import { SectionLabel } from "@/components/ui/SectionLabel";
import { SectionTitle } from "@/components/ui/SectionTitle";
import "./Synopsis.css";

export function Synopsis() {
  return (
    <section className="synopsis-section snap-section" id="synopsis">
      <div className="synopsis">
      <div className="synopsis-visual reveal-left">
        <div className="synopsis-card">
          <img
            src="https://images.unsplash.com/photo-1518834107812-67b0b7c58434?w=800&q=80"
            alt="Silhouette sombre et romantique"
          />
        </div>
      </div>
      <div className="synopsis-text reveal-right">
        <SectionLabel>// Synopsis</SectionLabel>
        <SectionTitle>
          Entre loyauté jurée
          <br />
          et cœurs brisés
        </SectionTitle>
        <div className="synopsis-quote">
          &laquo; On ne choisit pas qui l&rsquo;on aime. Mais on paie toujours le
          prix. &raquo;
        </div>
        <p className="synopsis-body">
          Dans les années 1950, à l&rsquo;ombre d&rsquo;un empire criminel où la
          loyauté vaut plus que la vie, <strong>Gabriella</strong>, la fille d&rsquo;un
          parrain autoritaire, étouffe sous le poids des traditions familiales et des
          alliances imposées.
        </p>
        <br />
        <p className="synopsis-body">
          Son destin bascule lorsqu&rsquo;elle croise le chemin d&rsquo;
          <strong>Arnaud</strong>, un jeune homme extérieur au milieu, récemment
          recruté pour ses talents et sa loyauté. D&rsquo;abord méfiants l&rsquo;un
          envers l&rsquo;autre, ils finissent par se rapprocher malgré eux &mdash;
          trouvant dans cette relation naissante un échappatoire à un monde qui les
          écrase.
        </p>
        <br />
        <p className="synopsis-body">
          Mais cet amour interdit devient rapidement un danger. Entre obéissance au
          parrain et liberté du cœur, Gabriella et Arnaud devront choisir :{" "}
          <strong>se soumettre aux règles&hellip; ou risquer leur vie</strong> pour ce
          qu&rsquo;ils ressentent.
        </p>
      </div>
      </div>
    </section>
  );
}
