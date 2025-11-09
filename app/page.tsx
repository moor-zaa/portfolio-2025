import { AboutSection } from "@/components/AboutSection";
import { ContactSection } from "@/components/ContactSection";
import { ExperienceSection } from "@/components/ExperienceSection";
import { HeroSection } from "@/components/HeroSection";
import { Navigation } from "@/components/Navigation";
import { ProjectsSection } from "@/components/ProjectsSection";
import { RecommendationsSection } from "@/components/RecommendationsSection";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Navigation />
      <main>
        <HeroSection />
        <ProjectsSection />
        <AboutSection />
        <ExperienceSection />
        <RecommendationsSection />
        <ContactSection />
      </main>
    </div>
  );
}
