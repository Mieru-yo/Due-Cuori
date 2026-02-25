import { useEffect } from "react";

/**
 * Custom cursor glow that follows the mouse pointer.
 * Uses transform for GPU-accelerated positioning (Chrome-safe).
 * Scales up when hovering interactive elements.
 */
export function useCustomCursor() {
  useEffect(() => {
    // Don't run on touch-only devices
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const cursor = document.createElement("div");
    cursor.style.cssText = [
      "position:fixed",
      "top:0",
      "left:0",
      "width:20px",
      "height:20px",
      "border:1px solid rgba(204,0,0,0.6)",
      "border-radius:50%",
      "pointer-events:none",
      "z-index:10000",
      "mix-blend-mode:screen",
      "will-change:transform",
      "transition:width 0.15s ease,height 0.15s ease,border-color 0.15s ease,background 0.15s ease",
    ].join(";");
    document.body.appendChild(cursor);

    let mx = -100;
    let my = -100;
    let cx = -100;
    let cy = -100;
    let raf = 0;

    const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

    const tick = () => {
      cx = lerp(cx, mx, 0.18);
      cy = lerp(cy, my, 0.18);
      cursor.style.transform = `translate(${cx - 10}px, ${cy - 10}px)`;
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    const onMouseMove = (e: MouseEvent) => {
      mx = e.clientX;
      my = e.clientY;
    };

    const interactiveSelector =
      "a, button, .fs-frame, .character-card, .trailer-placeholder, .team-card";

    const onEnter = () => {
      cursor.style.width = "40px";
      cursor.style.height = "40px";
      cursor.style.borderColor = "rgba(204,0,0,1)";
      cursor.style.background = "rgba(204,0,0,0.1)";
    };

    const onLeave = () => {
      cursor.style.width = "20px";
      cursor.style.height = "20px";
      cursor.style.borderColor = "rgba(204,0,0,0.6)";
      cursor.style.background = "transparent";
    };

    document.addEventListener("mousemove", onMouseMove);

    const elements = document.querySelectorAll(interactiveSelector);
    elements.forEach((el) => {
      el.addEventListener("mouseenter", onEnter);
      el.addEventListener("mouseleave", onLeave);
    });

    return () => {
      cancelAnimationFrame(raf);
      document.removeEventListener("mousemove", onMouseMove);
      elements.forEach((el) => {
        el.removeEventListener("mouseenter", onEnter);
        el.removeEventListener("mouseleave", onLeave);
      });
      cursor.remove();
    };
  }, []);
}
