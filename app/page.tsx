import HomePage from "@/components/HomePage";

const productJsonLd = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "PureNova Air 101 Compact Desktop Air Purifier",
  image: ["/air-purifier/product-03.jpg", "/air-purifier/product-02.jpg"],
  description:
    "A premium compact desktop air purifier with H13 HEPA filtration, activated carbon odor control, 5W USB power and an aroma pad slot.",
  brand: {
    "@type": "Brand",
    name: "PureNova"
  },
  offers: {
    "@type": "Offer",
    price: "79.90",
    priceCurrency: "USD",
    availability: "https://schema.org/InStock"
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.8",
    reviewCount: "1284"
  }
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd) }}
      />
      <HomePage />
    </>
  );
}
