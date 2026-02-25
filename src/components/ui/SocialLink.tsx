import type { ReactNode } from "react";

interface SocialLinkProps {
  href: string;
  ariaLabel: string;
  title: string;
  children: ReactNode;
}

export function SocialLink({ href, ariaLabel, title, children }: SocialLinkProps) {
  return (
    <a href={href} className="social-link" aria-label={ariaLabel} title={title}>
      {children}
    </a>
  );
}
