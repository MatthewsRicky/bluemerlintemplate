import BeachExperience from "@/components/home/BeachExperience";
import GalleryPreview from "@/components/home/GalleryPreview";
import Hero from "@/components/home/Hero";
import ReservationCTA from "@/components/home/ReservationCTA";
import SignatureDishes from "@/components/home/SignatureDishes";
import StoryPreview from "@/components/home/StoryPreview";
import SushiFeature from "@/components/home/SushiFeature";

export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <StoryPreview />
        <SignatureDishes />
        <SushiFeature />
        <BeachExperience />
        <GalleryPreview />
        <ReservationCTA />
      </main>
    </>
  );
}
