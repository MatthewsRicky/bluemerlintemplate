import type { Metadata } from "next";
import ContactHero from "@/components/contact/ContactHero";
import ContactDetails from "@/components/contact/ContactDetails";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Blue Marlin Beach Restaurant in Diani Beach, Kenya for reservations, enquiries and directions.",
};

export default function ContactPage() {
  return (
    <main>
      <ContactHero />
      <ContactDetails />
    </main>
  );
}
