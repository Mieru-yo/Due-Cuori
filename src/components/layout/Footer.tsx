import { SocialLink } from "@/components/ui/SocialLink";
import { InstagramIcon, TwitterIcon, EmailIcon } from "@/components/ui/Icons";
import "./Footer.css";

export function Footer() {
  return (
    <footer>
      <div className="footer-inner">
        <div className="footer-logo">
          <div>
            <span className="rec-dot-footer" /> REC STUDIO
          </div>
          <div className="footer-sub">Due Cuori, Un Destino</div>
        </div>
        <div className="footer-center">
          <div className="footer-tagline">
            &laquo; L&rsquo;amour le plus grand naît dans l&rsquo;ombre la plus
            profonde &raquo;
          </div>
          <div className="footer-socials">
            <SocialLink href="#" ariaLabel="Instagram" title="Instagram">
              <InstagramIcon />
            </SocialLink>
            <SocialLink href="#" ariaLabel="X / Twitter" title="X / Twitter">
              <TwitterIcon />
            </SocialLink>
            <SocialLink
              href="mailto:contact@recstudio.fr"
              ariaLabel="Email"
              title="Email"
            >
              <EmailIcon />
            </SocialLink>
          </div>
        </div>
        <div className="footer-copy">&copy; 2026 Rec Studio</div>
      </div>
    </footer>
  );
}
