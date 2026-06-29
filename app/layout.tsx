import type { Metadata } from "next";
import WhatsAppButton from "@/components/WhatsAppButton";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://purenova.example"),
  title: {
    default: "PureNova Air 101 | Compact Desktop Air Purifier",
    template: "%s | PureNova"
  },
  description:
    "PureNova Air 101 is a premium compact desktop air purifier with H13 HEPA filtration, activated carbon odor control, 5W USB power and an aroma pad slot.",
  keywords: [
    "PureNova",
    "desktop air purifier",
    "compact air purifier",
    "aroma air purifier",
    "H13 HEPA",
    "USB air purifier",
    "EJ-JHQ101",
    "premium air purifier"
  ],
  openGraph: {
    title: "PureNova Air 101 | Compact Purification With Aroma",
    description:
      "A premium compact air purifier for offices, bedrooms, pet homes, nurseries and newly renovated small spaces.",
    images: ["/air-purifier/product-03.jpg"],
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "PureNova Air 101 | Compact Purification With Aroma",
    description:
      "A premium compact air purifier for offices, bedrooms, pet homes, nurseries and newly renovated small spaces.",
    images: ["/air-purifier/product-03.jpg"]
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
        <WhatsAppButton />
      </body>
    </html>
  );
}
