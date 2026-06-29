export type ProductOption = {
  id: string;
  name: string;
  cnName: string;
  price: string;
  priceValue: number;
  badge: string;
  configuration: string;
  size: string;
  weight: string;
  features: string[];
  image: string;
  shopifyVariantId: string;
  checkoutUrl: string;
};

export const products: ProductOption[] = [
  {
    id: "mini-dual-filter",
    name: "PureNova Mini Dual Filter",
    cnName: "Dual-filtration starter model",
    price: "$24.99",
    priceValue: 24.99,
    badge: "Best Starter Pick",
    configuration: "H13 HEPA Filter + Activated Carbon",
    size: "11.9 × 11.9 × 19.9 cm",
    weight: "350 g net / 460 g gross",
    features: [
      "Great for desks and bedrooms",
      "Filters PM2.5, pollen and odor",
      "USB powered",
      "Lightweight and easy to move"
    ],
    image: "/air-purifier/mini-dual-filter-hepa.jpg",
    shopifyVariantId: "gid://shopify/ProductVariant/REPLACE_LATER",
    checkoutUrl: "/checkout?product=mini-dual-filter"
  },
  {
    id: "air-mini-pro",
    name: "PureNova Air Mini Pro",
    cnName: "Daily-use dual-filtration model",
    price: "$34.99",
    priceValue: 34.99,
    badge: "Best For Daily Use",
    configuration: "H13 HEPA + Activated Carbon Composite Filter",
    size: "12.3 × 12.3 × 18 cm",
    weight: "403 g net / 526 g gross",
    features: [
      "Compact for office and small rooms",
      "H13 HEPA filtration",
      "Helps reduce dust, smoke and allergens",
      "Includes multi-language manual"
    ],
    image: "/air-purifier/air-mini-pro-room.jpg",
    shopifyVariantId: "gid://shopify/ProductVariant/REPLACE_LATER",
    checkoutUrl: "/checkout?product=air-mini-pro"
  },
  {
    id: "aroma-air-pro",
    name: "PureNova Aroma Air Pro",
    cnName: "Premium purifier with aroma support",
    price: "$79.90",
    priceValue: 79.9,
    badge: "Premium Pick",
    configuration: "Purifier + Filter + Aroma Slot + USB Cable",
    size: "19 × 19 × 29.5 cm",
    weight: "1.16 kg net / 1.5 kg gross",
    features: [
      "Purification and aroma in one",
      "5W USB low-power design",
      "Touch screen and premium look",
      "Ideal for bedroom, office and pet homes"
    ],
    image: "/air-purifier/aroma-air-pro-bedroom.jpg",
    shopifyVariantId: "gid://shopify/ProductVariant/REPLACE_LATER",
    checkoutUrl: "/checkout?product=aroma-air-pro"
  }
];
