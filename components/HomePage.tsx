"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import Footer from "@/components/Footer";
import ProductSelection from "@/components/ProductSelection";
import {
  BatteryCharging,
  ChevronLeft,
  ChevronRight,
  Droplets,
  Fan,
  Instagram,
  ShoppingCart,
  Star,
  User,
  Wind,
  X
} from "lucide-react";

const features = [
  {
    icon: Wind,
    title: "360掳 Air Circulation",
    description:
      "A top vortex outlet helps clean air rise and circulate around the room, making it suitable for desks, nurseries, bedrooms and pet corners."
  },
  {
    icon: Fan,
    title: "H13 HEPA Filtration",
    description:
      "The H13 HEPA layer helps capture PM2.5, pollen, dust mites, allergens and fine everyday particles for easier breathing in small spaces."
  },
  {
    icon: BatteryCharging,
    title: "5W USB Powered",
    description:
      "Low-power USB operation works with laptops, bedside chargers, car USB ports and power banks for offices, rentals and travel."
  },
  {
    icon: Droplets,
    title: "Aroma Pad Slot",
    description:
      "Add a compatible fragrance pad before use to refresh room odor while creating a cleaner, calmer home atmosphere."
  }
];

const stories = [
  {
    title: "Designed for bedrooms, offices and pet homes.",
    body:
      "PureNova Air 101 fits on desks, bedside tables, nursery corners, pet areas and newly renovated rooms, bringing fresher air to everyday small spaces.",
    image: "/air-purifier/product-16.jpg"
  },
  {
    title: "Bottom filter cover for easier maintenance.",
    body:
      "Twist open the bottom cover to remove the filter. Routine cleaning and scheduled replacement stay simple, while activated carbon and HEPA filtration work together.",
    image: "/air-purifier/filter-cover-replacement.jpg"
  },
  {
    title: "Even diffusion for larger rooms.",
    body:
      "The top airflow design helps clean air move upward and spread evenly, making it useful for bedrooms, studies and open living areas.",
    image: "/air-purifier/large-room-purification.jpg"
  }
];

const reviews = [
  {
    name: "Emma W.",
    country: "United States",
    avatar: "EW",
    quote:
      "The aroma feature makes it feel different from a regular desktop purifier. It sits perfectly by my bed and makes the room feel fresher."
  },
  {
    name: "Noah L.",
    country: "Canada",
    avatar: "NL",
    quote:
      "I plug it directly into my desk USB hub while working. It is compact enough for a rental room without adding another bulky appliance."
  },
  {
    name: "Sofia M.",
    country: "United Kingdom",
    avatar: "SM",
    quote:
      "We keep it near the pet area. The activated carbon filter plus aroma pad slot is exactly the combination we wanted."
  }
];

type PreviewMedia = {
  type: "image" | "video";
  src: string;
  alt: string;
};

export default function HomePage() {
  const [reviewIndex, setReviewIndex] = useState(0);
  const [cartCount, setCartCount] = useState(0);
  const [previewMedia, setPreviewMedia] = useState<PreviewMedia | null>(null);

  const currentReview = reviews[reviewIndex];

  useEffect(() => {
    const handleCartCount = (event: Event) => {
      const customEvent = event as CustomEvent<{ count: number }>;
      setCartCount(customEvent.detail?.count ?? 0);
    };

    window.addEventListener("purenova-cart-count", handleCartCount);
    return () => window.removeEventListener("purenova-cart-count", handleCartCount);
  }, []);

  const scrollToProductSelection = () => {
    document.getElementById("shop")?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <main className="site-scale min-h-screen overflow-x-hidden bg-pearl text-ink">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/60 bg-white/70 backdrop-blur-2xl">
        <nav className="mx-auto flex min-h-16 max-w-[1440px] flex-wrap items-center justify-between gap-3 px-5 py-3 md:px-8" aria-label="Main navigation">
          <Link href="#top" className="font-display text-xl font-semibold tracking-[0.28em] sm:text-2xl sm:tracking-[0.32em]">
            PureNova
          </Link>
          <div className="flex flex-wrap items-center justify-end gap-2 sm:gap-3">
            <button
              type="button"
              onClick={() => window.dispatchEvent(new CustomEvent("purenova-open-cart"))}
              className="relative inline-flex items-center gap-2 rounded-full border border-line bg-white px-4 py-2.5 text-sm font-medium text-ink shadow-soft transition hover:-translate-y-0.5 hover:border-ink sm:px-5"
            >
              <ShoppingCart size={16} />
              Cart
              <span className="grid h-5 min-w-5 place-items-center rounded-full bg-ink px-1.5 text-[11px] font-semibold text-white">
                {cartCount}
              </span>
            </button>
            <Link
              href="/login"
              className="inline-flex items-center gap-2 rounded-full bg-ink px-4 py-2.5 text-sm font-medium text-white transition hover:-translate-y-0.5 hover:bg-graphite sm:px-5"
            >
              <User size={16} />
              Account
            </Link>
          </div>
        </nav>
      </header>

      <section id="top" className="relative px-5 pt-28 md:px-8 md:pt-32 lg:min-h-screen lg:pt-36">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_74%_24%,rgba(220,236,242,0.9),transparent_30%),linear-gradient(180deg,#fff,#f7f8f6)]" />
        <div className="mx-auto grid max-w-[1440px] items-center gap-10 pb-16 md:gap-12 lg:min-h-[calc(100vh-7rem)] lg:grid-cols-[0.9fr_1.1fr] lg:gap-14 lg:pb-20">
          <div className="animate-fade-up">
            <div className="mb-8 grid max-w-xl grid-cols-1 gap-3 sm:grid-cols-3 lg:mb-14">
              {[
                ["H13 HEPA", "Fine particle filtration"],
                ["Aroma Slot", "Purification with fragrance"],
                ["5W USB", "Low-power desktop use"]
              ].map(([label, value]) => (
                <div key={label} className="rounded-[1.25rem] border border-line bg-white/70 px-4 py-4 shadow-soft backdrop-blur">
                  <span className="block text-[11px] font-semibold uppercase tracking-[0.18em] text-graphite/45">
                    {label}
                  </span>
                  <strong className="mt-2 block text-sm font-semibold text-ink">{value}</strong>
                </div>
              ))}
            </div>
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.28em] text-graphite/60">
              EJ-JHQ101 Desktop Air Purifier
            </p>
            <h1 className="max-w-2xl font-display text-[clamp(3.15rem,14vw,6rem)] font-semibold leading-[0.98] tracking-[-0.02em]">
              Cleaner air, calmer living.
            </h1>
            <p className="mt-7 max-w-xl text-lg leading-8 text-graphite/70">
              PureNova Air 101 combines H13 HEPA filtration, activated carbon odor control and an aroma pad slot for offices, bedrooms, pet homes and newly renovated small spaces.
            </p>
            <div className="mt-9 grid gap-3 sm:flex">
              <button type="button" onClick={scrollToProductSelection} className="btn-primary w-full sm:w-auto">
                Buy PureNova Air 101
              </button>
              <Link href="#features" className="btn-secondary w-full sm:w-auto">
                View Product Benefits
              </Link>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-2xl animate-soft-scale">
            <div className="absolute left-1/2 top-1/2 h-[72%] w-[72%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-air/70 blur-3xl" />
            <div className="relative rounded-[2rem] border border-white/80 bg-white/50 p-5 shadow-float backdrop-blur-2xl">
              <button
                type="button"
                onClick={() =>
                  setPreviewMedia({
                    type: "video",
                    src: "/air-purifier/product-video.mp4",
                    alt: "PureNova Air 101 product video"
                  })
                }
                className="group block w-full cursor-zoom-in overflow-hidden rounded-[1.55rem] text-left shadow-soft"
                aria-label="View PureNova Air 101 product video"
              >
                <video
                  className="aspect-[4/5] w-full object-cover object-center transition duration-500 group-hover:scale-[1.015]"
                  src="/air-purifier/product-video.mp4"
                  poster="/air-purifier/product-03.jpg"
                  muted
                  playsInline
                  autoPlay
                  loop
                />
              </button>
              <div className="glass-card absolute left-3 top-4 px-4 py-3 sm:-left-3 sm:top-8 sm:px-5 sm:py-4">
                <span className="block text-xs uppercase tracking-[0.22em] text-graphite/55">Coverage</span>
                <strong className="mt-1 block text-xl font-semibold sm:text-2xl">20 m虏</strong>
              </div>
              <div className="glass-card absolute bottom-3 right-3 px-4 py-3 sm:-bottom-4 sm:right-4 sm:px-5 sm:py-4">
                <span className="block text-xs uppercase tracking-[0.22em] text-graphite/55">Power</span>
                <strong className="mt-1 block text-xl font-semibold sm:text-2xl">5W USB</strong>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ProductSelection />

      <section id="features" className="section-shell">
        <div className="section-heading">
          <p>Product Benefits</p>
          <h2>Fresh air and gentle aroma for a quieter small-space routine.</h2>
        </div>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <article key={feature.title} className="glass-panel group p-7">
                <div className="mb-10 inline-flex rounded-2xl bg-white p-3 shadow-soft transition group-hover:-translate-y-1">
                  <Icon size={24} strokeWidth={1.7} />
                </div>
                <h3 className="font-display text-2xl font-semibold">{feature.title}</h3>
                <p className="mt-4 leading-7 text-graphite/65">{feature.description}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section id="reviews" className="section-shell bg-white">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mx-auto mb-8 flex h-16 w-16 items-center justify-center rounded-full bg-mist font-semibold">
            {currentReview.avatar}
          </div>
          <div className="mb-6 flex justify-center gap-1 text-ink">
            {Array.from({ length: 5 }).map((_, index) => (
              <Star key={index} size={18} fill="currentColor" strokeWidth={1.4} />
            ))}
          </div>
          <blockquote className="font-display text-[clamp(2rem,7vw,3rem)] font-medium leading-tight tracking-[-0.01em]">
            "{currentReview.quote}"
          </blockquote>
          <p className="mt-7 text-sm font-semibold uppercase tracking-[0.2em] text-graphite/55">
            {currentReview.name} - {currentReview.country}
          </p>
          <div className="mt-9 flex justify-center gap-3">
            <button className="icon-button" onClick={() => setReviewIndex((reviewIndex + reviews.length - 1) % reviews.length)} aria-label="Previous review">
              <ChevronLeft size={20} />
            </button>
            <button className="icon-button" onClick={() => setReviewIndex((reviewIndex + 1) % reviews.length)} aria-label="Next review">
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </section>

      <section className="px-5 py-14 md:px-8">
        <div className="mx-auto max-w-[1440px] space-y-6">
          {stories.map((story, index) => (
            <article key={story.title} className={`grid grid-cols-1 items-center gap-7 lg:grid-cols-2 lg:gap-8 ${index % 2 ? "lg:[&>button:first-child]:order-2" : ""}`}>
              <button
                type="button"
                onClick={() => setPreviewMedia({ type: "image", src: story.image, alt: story.title })}
                className="group flex min-h-[260px] cursor-zoom-in items-center justify-center overflow-hidden rounded-[1.5rem] bg-white text-left shadow-soft sm:min-h-[320px] lg:h-[360px]"
                aria-label={`View image for ${story.title}`}
              >
                <Image
                  src={story.image}
                  alt={story.title}
                  width={1024}
                  height={1536}
                  quality={100}
                  unoptimized
                  sizes="(min-width: 1024px) 50vw, (min-width: 820px) 790px, 100vw"
                  className="h-full w-full object-contain object-center transition duration-500 group-hover:scale-[1.01]"
                  loading="lazy"
                />
              </button>
              <div className="max-w-2xl px-0 lg:px-8">
                <h2 className="font-display text-[clamp(2rem,6vw,2.5rem)] font-semibold leading-tight tracking-[-0.01em]">{story.title}</h2>
                <p className="mt-4 text-base leading-7 text-graphite/65">{story.body}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="social" className="bg-white px-5 py-20 text-center md:px-8 lg:py-32">
        <div className="mx-auto max-w-4xl">
          <div className="inline-flex flex-wrap items-center justify-center gap-4">
            <h2 className="font-display text-[clamp(3rem,12vw,4.5rem)] font-semibold italic tracking-[-0.03em] text-[#34346f]">
              @PureNova
            </h2>
            <span className="grid h-12 w-12 place-items-center rounded-full bg-sky-400 text-lg font-black text-white">
              鉁?            </span>
          </div>
          <p className="mt-6 text-base font-semibold uppercase tracking-[0.28em] text-[#34346f]">
            Follow PureNova on Instagram
          </p>
          <p className="mx-auto mt-8 max-w-2xl text-xl leading-8 tracking-wide text-[#34346f]">
            Discover compact air-care inspiration, aroma tips and real home moments from PureNova.
          </p>
          <p className="mt-3 font-display text-2xl font-semibold text-[#34346f]">
            #PureNovaAir
          </p>
          <Link
            href="https://instagram.com/xiecuicui2841"
            target="_blank"
            rel="noopener noreferrer"
            className="mx-auto mt-12 inline-flex min-h-14 w-full max-w-md items-center justify-center gap-4 rounded-full border-2 border-[#34346f] px-8 text-sm font-semibold uppercase tracking-[0.24em] text-[#34346f] transition hover:-translate-y-0.5 hover:bg-[#34346f] hover:text-white"
          >
            <Instagram size={22} />
            Follow Us
          </Link>
        </div>
      </section>

      <Footer />

      {previewMedia ? (
        <div className="fixed inset-0 z-[120] flex items-center justify-center bg-ink/80 p-10 backdrop-blur-md">
          <button
            type="button"
            className="absolute inset-0 cursor-zoom-out"
            onClick={() => setPreviewMedia(null)}
            aria-label="Close preview background"
          />
          <div className="relative z-10 max-h-full max-w-[1180px] overflow-hidden rounded-[2rem] bg-white p-3 shadow-float">
            <button
              type="button"
              className="absolute right-6 top-6 z-20 grid h-11 w-11 place-items-center rounded-full bg-white/90 text-ink shadow-soft transition hover:scale-105"
              onClick={() => setPreviewMedia(null)}
              aria-label="Close preview"
            >
              <X size={20} />
            </button>
            {previewMedia.type === "video" ? (
              <video
                src={previewMedia.src}
                className="max-h-[82vh] w-auto max-w-full rounded-[1.5rem] bg-black object-contain"
                controls
                autoPlay
                playsInline
              />
            ) : (
              <img
                src={previewMedia.src}
                alt={previewMedia.alt}
                className="max-h-[82vh] w-auto max-w-full rounded-[1.5rem] object-contain"
              />
            )}
          </div>
        </div>
      ) : null}
    </main>
  );
}
