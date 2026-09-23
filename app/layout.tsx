import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/ui/WhatsAppButton";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Blue Marlin Beach Restaurant | Diani Beach, Kenya",
    template: "%s | Blue Marlin Beach Restaurant",
  },
  description:
    "Beachfront dining in Diani Beach, Kenya. Fresh seafood, sushi, drinks and relaxed coastal dining by the Indian Ocean.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${cormorant.variable} ${inter.variable} antialiased`}>
        <Header />
        {children}
        <WhatsAppButton
          phone="+254712559117"
          message="Hello Blue Marlin Beach Restaurant, I would like to make an enquiry."
        />
        <Footer />
      </body>
    </html>
  );
}
