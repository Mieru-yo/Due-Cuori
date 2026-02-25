import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { Presentation } from "@/components/sections/Presentation";
import { Synopsis } from "@/components/sections/Synopsis";
import { Characters } from "@/components/sections/Characters";
import { Gallery } from "@/components/sections/Gallery";
import { Trailer } from "@/components/sections/Trailer";
import { Team } from "@/components/sections/Team";
import { News } from "@/components/sections/News";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useCustomCursor } from "@/hooks/useCustomCursor";
import { useStaggerAnimation } from "@/hooks/useStaggerAnimation";
import { useGsapSnap } from "@/hooks/useGsapSnap";

export default function App() {
  const containerRef = useScrollReveal();
  useCustomCursor();
  useStaggerAnimation();
  useGsapSnap(".snap-section");

  return (
    <div ref={containerRef}>
      <Navbar />
      <Hero />
      <Presentation />
      <Synopsis />
      <Characters />
      <Gallery />
      <Trailer />
      <Team />
      <News />
      <Footer />
    </div>
  );
}
