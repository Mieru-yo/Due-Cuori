import { useEffect } from "react";

/**
 * Applies staggered transition delays on reveal children
 * (character cards, team members, news items).
 */
export function useStaggerAnimation() {
  useEffect(() => {
    document
      .querySelectorAll(
        ".characters-grid .character-card, .team-grid .team-member"
      )
      .forEach((el, i) => {
        (el as HTMLElement).style.transitionDelay = `${i * 0.15}s`;
      });

    document.querySelectorAll(".news-item").forEach((el, i) => {
      (el as HTMLElement).style.transitionDelay = `${i * 0.2}s`;
    });
  }, []);
}
