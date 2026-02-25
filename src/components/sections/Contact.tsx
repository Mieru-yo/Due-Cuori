import { SectionLabel } from "@/components/ui/SectionLabel";
import { SectionTitle } from "@/components/ui/SectionTitle";
import "./Contact.css";

export function Contact() {
  return (
    <section className="contact snap-section" id="contact">
      <div className="contact-inner">
        <div className="contact-ornament">◆</div>
        
        <div className="contact-header reveal">
          <SectionLabel>{'// Contact'}</SectionLabel>
          <SectionTitle>Prendre Contact</SectionTitle>
        </div>

        <p className="contact-text reveal">
          Que vous soyez curieux, passionné de cinéma, ou simplement touché par cette histoire,
          nous serions ravis d&rsquo;échanger avec vous. N&rsquo;hésitez pas à nous écrire.
        </p>

        <div className="contact-divider reveal" />

        <a href="mailto:contact@recstudio.com" className="contact-email reveal">
          contact@recstudio.com
        </a>

        <div className="contact-credits reveal">
          <div className="contact-credit-line">
            <span className="contact-credit-label">Court-métrage</span>
            <span className="contact-credit-value">15 minutes · 2025 · France</span>
          </div>
          <div className="contact-credit-line">
            <span className="contact-credit-label">Format</span>
            <span className="contact-credit-value">16:9 · HD · Couleur</span>
          </div>
          <div className="contact-credit-line">
            <span className="contact-credit-label">Production</span>
            <span className="contact-credit-value">Rec Studio</span>
          </div>
        </div>

        <div className="contact-ornament contact-ornament--bottom">◆</div>
      </div>
    </section>
  );
}
