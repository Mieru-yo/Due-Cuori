import { navLinks } from "@/data/navigation";
import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import "./Navbar.css";

gsap.registerPlugin(ScrollToPlugin);

export function Navbar() {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      gsap.to(window, {
        scrollTo: { y: target, autoKill: false },
        duration: 0.8,
        ease: "power2.inOut",
      });
    }
  };

  return (
    <nav>
      <div className="nav-logo">
        <img src={`${import.meta.env.BASE_URL}img/RecStudio-Logo.png`} alt="Rec Studio" className="nav-logo-img" />
      </div>
      <ul className="nav-links">
        {navLinks.map((link) => (
          <li key={link.href}>
            <a href={link.href} onClick={(e) => handleClick(e, link.href)}>{link.label}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
