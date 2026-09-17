import type { Metadata } from "next";
import ExperienceHero from "@/components/experience/ExperienceHero";
import DiningExperience from "@/components/experience/DiningExperience";
import BeachLife from "@/components/experience/BeachLife";
import ExperienceCTA from "@/components/experience/ExperienceCTA";

export const metadata: Metadata = {
  title: "The Experience",
  description:
    "Experience beachfront dining, fresh seafood, sushi and the relaxed atmosphere of Blue Marlin Beach Restaurant in Diani Beach.",
};

export default function ExperiencePage() {
  return (
    <main>
      <ExperienceHero />
      <DiningExperience />
      <BeachLife />
      <ExperienceCTA />
    </main>
  );
}
