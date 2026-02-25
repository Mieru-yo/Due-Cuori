import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
// Observer imported from main gsap to avoid Windows case-sensitivity issues
import { Observer } from "gsap/all";

gsap.registerPlugin(ScrollToPlugin, Observer);

/**
 * Fullpage scroll-snap using GSAP **Observer** plugin.
 *
 * How it works
 * ────────────
 * Observer listens to wheel + touch events with built-in debouncing,
 * cross-device normalisation and direction detection.  In the "snap zone"
 * (all `.snap-section` panels) it blocks native scroll and uses
 * `gsap.to(window, { scrollTo })` to animate one section at a time.
 *
 * Everything after the last `.snap-section` (News / Footer) is a
 * "free zone" where Observer is disabled and native scroll takes over.
 * Re-entering the snap zone from below re-enables Observer automatically.
 *
 * Disabled on screens ≤ 900 px (mobile).
 */
export function useGsapSnap(panelSelector = ".snap-section") {
  useEffect(() => {
    if (!window.matchMedia("(min-width: 901px)").matches) return;

    const panels = gsap.utils.toArray<HTMLElement>(panelSelector);
    if (!panels.length) return;

    let currentIndex = 0;
    let animating = false;

    /* ── helpers ──────────────────────────────────────── */

    /** Y where the free-scroll zone begins (bottom of last snap panel) */
    const freeY = () => {
      const last = panels[panels.length - 1];
      if (!last) return 0;
      return last.offsetTop + last.offsetHeight;
    };

    /** Derive index from current scrollY */
    const syncIndex = () => {
      const y = window.scrollY;
      for (let i = panels.length - 1; i >= 0; i--) {
        const panel = panels[i];
        if (panel && y >= panel.offsetTop - 20) {
          currentIndex = i;
          return;
        }
      }
      currentIndex = 0;
    };

    /** Smooth-scroll to a snap panel */
    const goTo = (index: number) => {
      if (animating) return;
      index = gsap.utils.clamp(0, panels.length - 1, index);
      const targetPanel = panels[index];
      if (!targetPanel) return;
      
      animating = true;
      currentIndex = index;

      gsap.to(window, {
        scrollTo: { y: targetPanel.offsetTop, autoKill: false },
        duration: 0.7,
        ease: "power2.inOut",
        overwrite: true,
        onComplete: () => {
          animating = false;
        },
      });
    };

    /** Transition into the free-scroll zone */
    const goFree = () => {
      if (animating) return;
      animating = true;

      gsap.to(window, {
        scrollTo: { y: freeY(), autoKill: false },
        duration: 0.7,
        ease: "power2.inOut",
        onComplete: () => {
          animating = false;
          obs.disable(); // hand control back to native scroll
        },
      });
    };

    /* ── Observer (wheel + touch) ────────────────────── */

    /*  wheelSpeed: -1 aligns mouse-wheel direction with touch direction:
     *    onUp  → user wants NEXT section   (swipe up / wheel down)
     *    onDown → user wants PREVIOUS section (swipe down / wheel up)   */
    const obs = Observer.create({
      type: "wheel,touch",
      wheelSpeed: -1,
      tolerance: 10,
      preventDefault: true,
      onUp: () => {
        if (animating) return;
        if (currentIndex < panels.length - 1) goTo(currentIndex + 1);
        else goFree();
      },
      onDown: () => {
        if (animating) return;
        if (currentIndex > 0) goTo(currentIndex - 1);
      },
    });

    /* ── initial state ───────────────────────────────── */

    syncIndex();
    if (window.scrollY >= freeY() - 10) obs.disable();

    /* ── scroll watcher  (zone transitions + nav-link clicks) ── */

    const onScroll = () => {
      if (animating) return;

      if (obs.isEnabled) {
        // Snap zone → detect if a nav-link click moved us into the free zone
        if (window.scrollY >= freeY() - 10) {
          obs.disable();
        } else {
          syncIndex();
        }
      } else {
        // Free zone → re-enter snap zone when scrolled back above boundary
        if (window.scrollY < freeY() - 10) {
          // Snap to the last panel (Team) so it isn't skipped.
          // goTo sets animating=true, which blocks Observer's onDown
          // from immediately jumping to the panel before Team.
          const lastIdx = panels.length - 1;
          currentIndex = lastIdx;
          obs.enable();
          goTo(lastIdx);
        }
      }
    };

    /* ── keyboard ────────────────────────────────────── */

    const onKeyDown = (e: KeyboardEvent) => {
      const keys = ["ArrowDown", "ArrowUp", "PageDown", "PageUp", " "];
      if (!keys.includes(e.key) || !obs.isEnabled) return;
      e.preventDefault();
      if (animating) return;

      const down = ["ArrowDown", "PageDown", " "].includes(e.key);
      if (down) {
        if (currentIndex < panels.length - 1) goTo(currentIndex + 1);
        else goFree();
      } else {
        if (currentIndex > 0) goTo(currentIndex - 1);
      }
    };

    /* ── bind / cleanup ──────────────────────────────── */

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("keydown", onKeyDown);

    return () => {
      obs.kill();
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [panelSelector]);
}
