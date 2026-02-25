import { SectionLabel } from "@/components/ui/SectionLabel";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { teamMembers } from "@/data/team";
import "./Team.css";

export function Team() {
  return (
    <section className="team snap-section" id="equipe">
      {/* Cinematic grain line accents */}
      <div className="team-accent team-accent--left" />
      <div className="team-accent team-accent--right" />

      <div className="team-header reveal">
        <SectionLabel>// L&rsquo;Équipe</SectionLabel>
        <SectionTitle>Ceux qui restent dans l&rsquo;ombre</SectionTitle>
      </div>

      <div className="team-roster">
        {teamMembers.map((member, i) => (
          <div key={i} className="team-card reveal">
            <div className="team-card-portrait">
              <img src={member.image} alt={member.imageAlt} />
              <div className="team-card-vignette" />
              <div className="team-card-number">
                {String(i + 1).padStart(2, "0")}
              </div>
            </div>
            <div className="team-card-info">
              <span className="team-card-role">{member.role}</span>
              <span className="team-card-name">{member.name}</span>
              <span className="team-card-bio">{member.bio}</span>
            </div>
          </div>
        ))}
      </div>

      <div className="team-footer-line reveal">
        <span className="team-footer-ornament">✦</span>
        <span className="team-footer-text">Rec Studio — 2025</span>
        <span className="team-footer-ornament">✦</span>
      </div>
    </section>
  );
}
