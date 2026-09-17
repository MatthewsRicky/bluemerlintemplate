import type { Metadata } from "next";
import ReservationsHero from "@/components/reservations/ReservationsHero";
import ReservationDetails from "@/components/reservations/ReservationDetails";

export const metadata: Metadata = {
  title: "Reservations",
  description:
    "Make a reservation at Blue Marlin Beach Restaurant in Diani Beach, Kenya.",
};

export default function ReservationsPage() {
  return (
    <main>
      <ReservationsHero />
      <ReservationDetails />
    </main>
  );
}
