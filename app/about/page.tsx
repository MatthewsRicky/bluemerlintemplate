import type { Metadata } from "next";
import AboutHero from "@/components/about/AboutHero";
import AboutStory from "@/components/about/AboutStory";
import AboutValues from "@/components/about/AboutValues";

export const metadata: Metadata = {
  title: "Our Story",
  description:
    "Discover the story behind Blue Marlin Beach Restaurant, a beachfront dining destination in Diani Beach since 2008.",
};

export default function AboutPage() {
  return (
    <main>
      <AboutHero />
      <AboutStory />
      <AboutValues />
    </main>
  );
}
