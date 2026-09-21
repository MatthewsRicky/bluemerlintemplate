import type { Metadata } from "next";
import StayHero from "@/components/stay/StayHero";
import StayExperience from "@/components/stay/StayExperience";
import StayCTA from "@/components/stay/StayCTA";

export const metadata: Metadata = {
  title: "Stay at Blue Marlin Beach Hotel | Diani Beach",
  description:
    "Extend your Blue Marlin experience with a beachfront stay at Blue Marlin Beach Hotel in Diani Beach, Kenya.",
  alternates: {
    canonical: "/stay",
  },
};

export default function StayPage() {
  return (
    <main>
      <StayHero />
      <StayExperience />
      <StayCTA />
    </main>
  );
}
