import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Footer from "@/components/Footer";

type PageContent = {
  title: string;
  eyebrow: string;
  description: string;
  sections: Array<{
    title: string;
    body: string;
    items?: string[];
  }>;
};

const contactPhone = "15292066669";

const pages: Record<string, PageContent> = {
  about: {
    eyebrow: "Brand Story",
    title: "Cleaner air for modern small spaces.",
    description:
      "PureNova focuses on compact air purification and gentle aromatherapy, creating quiet products that fit naturally into modern homes and workspaces.",
    sections: [
      {
        title: "Starting with small spaces",
        body:
          "We believe air care should not require bulky appliances. PureNova Air 101 is designed for desks, bedrooms, offices, pet corners and newly renovated rooms."
      },
      {
        title: "Design language",
        body:
          "A clean white body, rounded edges, top handle and hidden filter structure help the purifier feel more like a home object than a heavy appliance."
      },
      {
        title: "Our direction",
        body:
          "PureNova will continue building compact air-care products, replacement filters, aroma consumables and a smoother cross-border shopping experience."
      }
    ]
  },
  mission: {
    eyebrow: "Our Mission",
    title: "Bring cleaner air and better living to everyday spaces.",
    description:
      "PureNova aims to make sustainable air care easier for families, renters, pet owners and people who work from home.",
    sections: [
      {
        title: "Easy to use",
        body:
          "5W USB power, a twist-open bottom filter cover and a lightweight body make PureNova easy to move from a bedside table to a desk, car or travel room."
      },
      {
        title: "Made for daily life",
        body:
          "H13 HEPA filtration and activated carbon help reduce fine particles, pollen, smoke odor, pet odor and everyday dust."
      },
      {
        title: "Built for long-term care",
        body:
          "We pay attention to filter replacement, consumable repurchase, packaging, logistics and support so customers can keep using the product with confidence."
      }
    ]
  },
  journey: {
    eyebrow: "Journey",
    title: "From desktop purifier to compact air-care brand.",
    description:
      "PureNova entered the market through compact desktop air purifiers and continues to build product, supply chain, content and cross-border ecommerce capabilities.",
    sections: [
      {
        title: "2024 - Product research",
        body:
          "We researched compact air purifiers, aroma purifiers and replacement filter demand across US, European and Southeast Asian ecommerce platforms."
      },
      {
        title: "2025 - Product sampling",
        body:
          "PureNova Air 101 was developed around H13 HEPA filtration, activated carbon odor control, an aroma pad slot, USB power and a compact desktop form."
      },
      {
        title: "2026 - Independent store launch",
        body:
          "We built the PureNova brand website with room for Shopify checkout, cart, account login and after-sales support."
      }
    ]
  },
  careers: {
    eyebrow: "Careers",
    title: "Help build a premium cross-border air-care brand.",
    description:
      "PureNova is developing its product, content, independent store operations and customer support systems.",
    sections: [
      {
        title: "Who we are looking for",
        body:
          "We value taste, execution and customer insight. People with skills in content, paid media, support, visual design, supply chain or ecommerce operations are welcome."
      },
      {
        title: "Collaboration areas",
        body:
          "Current opportunities include brand content, social media operations, influencer partnerships, store operations, support and supply chain collaboration.",
        items: ["Brand content editing", "TikTok and Instagram partnerships", "Shopify store operations", "Customer support systems"]
      },
      {
        title: "Get in touch",
        body: `For collaboration or hiring inquiries, submit a message through our contact page or call ${contactPhone}.`
      }
    ]
  },
  contact: {
    eyebrow: "Contact Us",
    title: "The PureNova team is here when you need help.",
    description:
      "Contact us for product questions, orders, wholesale inquiries, private-label cooperation or after-sales support.",
    sections: [
      {
        title: "Phone",
        body: contactPhone
      },
      {
        title: "Support hours",
        body:
          "Monday to Saturday, 09:00 - 18:00. Messages sent outside business hours will be answered as soon as possible on the next working day."
      },
      {
        title: "Business inquiries",
        body:
          "For private label, bulk purchase, influencer cooperation or platform distribution, include your cooperation type, target country and estimated quantity."
      }
    ]
  },
  faq: {
    eyebrow: "FAQ",
    title: "Common questions about PureNova Air 101.",
    description:
      "Find quick answers about use cases, aroma support, filter replacement and after-sales service.",
    sections: [
      {
        title: "Where can I use PureNova Air 101?",
        body:
          "It is suitable for bedrooms, desks, studies, pet areas, nurseries, newly renovated small spaces and travel rooms."
      },
      {
        title: "Does it support aroma pads?",
        body:
          "Yes. Add a compatible aroma pad in the designated slot before turning the purifier on to refresh the room while purifying the air."
      },
      {
        title: "How often should I replace the filter?",
        body:
          "Replacement depends on use frequency, dust level and odor conditions. High-use spaces or pet homes may need shorter replacement cycles."
      },
      {
        title: "How do I contact support?",
        body: `Submit a request through the support page or call ${contactPhone}.`
      }
    ]
  },
  "track-order": {
    eyebrow: "Track Order",
    title: "Check the shipping status of your PureNova order.",
    description:
      "This page is ready for Shopify order and logistics integration. The current version includes the front-end tracking entry.",
    sections: [
      {
        title: "How tracking works",
        body:
          "Enter your order number or tracking number. Shipping information usually updates within 24 to 48 hours after dispatch."
      },
      {
        title: "Cross-border logistics",
        body:
          "Customs clearance times vary by country and region. Holidays, inspections and extreme weather may extend delivery time."
      },
      {
        title: "Need help?",
        body: `Prepare your order number and contact PureNova support at ${contactPhone}.`
      }
    ]
  },
  support: {
    eyebrow: "Support",
    title: "Clear support for every purchase.",
    description:
      "PureNova provides support for product use, filter replacement, logistics issues, after-sales questions and Shopify order matters.",
    sections: [
      {
        title: "Support scope",
        body:
          "We can help with product use, missing accessories, shipping damage, order changes, return questions and filter purchase advice."
      },
      {
        title: "What to include",
        body:
          "Please provide your order number, purchase email, issue description and clear photos or videos so we can review the case faster."
      },
      {
        title: "Contact",
        body: `Call ${contactPhone}. We will respond as quickly as possible during business hours.`
      }
    ]
  },
  "privacy-policy": {
    eyebrow: "Privacy Policy",
    title: "We care about your personal information and shopping security.",
    description:
      "This privacy policy explains how PureNova may collect, use and protect information during shopping, customer support, logistics and marketing subscription.",
    sections: [
      {
        title: "Information we collect",
        body:
          "This may include your name, email, phone number, shipping address, order details, payment status, device information and messages you submit."
      },
      {
        title: "How we use information",
        body:
          "Information is used for order processing, delivery, after-sales service, risk control, customer support, subscription updates and website improvement."
      },
      {
        title: "Information protection",
        body:
          "We use reasonable technical and administrative measures to protect user information and limit unnecessary data collection."
      }
    ]
  },
  terms: {
    eyebrow: "Terms of Service",
    title: "Please review these service terms before using PureNova.",
    description:
      "By visiting the PureNova website, purchasing products or using related services, you agree to these terms.",
    sections: [
      {
        title: "Product information",
        body:
          "We work to keep product images, prices, specifications and inventory accurate, but slight differences may occur due to devices, batches and display settings."
      },
      {
        title: "Orders and payment",
        body:
          "Order confirmation, payment, taxes, logistics and checkout may be completed through Shopify or related service providers."
      },
      {
        title: "Website use",
        body:
          "Do not use the PureNova website in illegal, fraudulent, abusive or disruptive ways."
      }
    ]
  },
  "refund-policy": {
    eyebrow: "Refund Policy",
    title: "Clear handling for returns, exchanges and refunds.",
    description:
      "PureNova reviews return and refund requests according to order status, product condition and platform rules.",
    sections: [
      {
        title: "Eligibility",
        body:
          "If the product is damaged in transit, missing accessories or has a quality issue, contact support as soon as possible with your order number and photos or videos."
      },
      {
        title: "Refund process",
        body:
          "After approval, refunds are processed through the original payment route. Arrival time depends on the payment provider, bank and region."
      },
      {
        title: "Exclusions",
        body:
          "Products that are clearly used, damaged, missing packaging or affected by improper use may not qualify for a full refund."
      }
    ]
  },
  "cookie-policy": {
    eyebrow: "Cookie Policy",
    title: "Cookies help us provide a smoother website experience.",
    description:
      "PureNova may use cookies and similar technologies to maintain cart status, measure site performance and improve the browsing experience.",
    sections: [
      {
        title: "Cookie use",
        body:
          "Cookies may remember cart status, language preferences, traffic sources, page performance and basic security states."
      },
      {
        title: "Third-party tools",
        body:
          "When Shopify, analytics, advertising or social media tools are connected, those services may use cookies under their own policies."
      },
      {
        title: "Managing cookies",
        body:
          "You can delete or restrict cookies in your browser settings, but some shopping, login or analytics features may be affected."
      }
    ]
  }
};

const slugs = Object.keys(pages);

export function generateStaticParams() {
  return slugs.map((slug) => ({ slug }));
}

type InfoPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: InfoPageProps): Promise<Metadata> {
  const { slug } = await params;
  const page = pages[slug];

  if (!page) {
    return {};
  }

  return {
    title: page.eyebrow,
    description: page.description,
    openGraph: {
      title: `${page.eyebrow} | PureNova`,
      description: page.description,
      images: ["/air-purifier/product-03.jpg"],
      type: "website"
    },
    twitter: {
      card: "summary_large_image",
      title: `${page.eyebrow} | PureNova`,
      description: page.description,
      images: ["/air-purifier/product-03.jpg"]
    }
  };
}

export default async function InfoPage({ params }: InfoPageProps) {
  const { slug } = await params;
  const page = pages[slug];

  if (!page) {
    notFound();
  }

  return (
    <main className="site-scale min-h-screen bg-pearl text-ink">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/60 bg-white/75 backdrop-blur-2xl">
        <nav className="mx-auto flex min-h-16 max-w-[1440px] flex-wrap items-center justify-between gap-3 px-5 py-3 md:px-8" aria-label="Information page navigation">
          <Link href="/" className="font-display text-sm font-semibold tracking-[0.28em]">
            PureNova
          </Link>
          <div className="flex flex-wrap items-center justify-end gap-3 text-sm font-medium text-graphite/70 md:gap-4">
            <Link href="/" className="transition hover:text-ink">
              Back Home
            </Link>
            <Link href="/contact" className="rounded-full bg-ink px-5 py-2.5 text-white transition hover:-translate-y-0.5 hover:bg-graphite">
              Contact Us
            </Link>
          </div>
        </nav>
      </header>

      <section className="px-5 pb-16 pt-28 md:px-8 md:pb-24 md:pt-32 lg:pb-28 lg:pt-36">
        <div className="mx-auto max-w-[1440px]">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-graphite/45">
            {page.eyebrow}
          </p>
          <div className="mt-8 grid grid-cols-1 gap-10 lg:grid-cols-[0.9fr_0.55fr] lg:gap-16">
            <div>
              <h1 className="max-w-4xl font-display text-[clamp(3rem,11vw,4.5rem)] font-semibold leading-[0.98] tracking-[-0.02em]">
                {page.title}
              </h1>
              <p className="mt-8 max-w-3xl text-xl leading-9 text-graphite/65">
                {page.description}
              </p>
            </div>
            <aside className="rounded-[2rem] border border-white/70 bg-white/65 p-8 shadow-soft backdrop-blur-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-graphite/45">
                PureNova Support
              </p>
              <p className="mt-5 font-display text-4xl font-semibold">{contactPhone}</p>
              <p className="mt-4 leading-7 text-graphite/60">
                Product questions, order tracking, after-sales service and business cooperation can all be handled through this number.
              </p>
            </aside>
          </div>
        </div>
      </section>

      <section className="px-5 pb-20 md:px-8 lg:pb-32">
        <div className="mx-auto grid max-w-[1440px] grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {page.sections.map((section) => (
            <article key={section.title} className="rounded-[1.75rem] border border-white/70 bg-white/70 p-8 shadow-soft backdrop-blur-2xl">
              <h2 className="font-display text-2xl font-semibold">{section.title}</h2>
              <p className="mt-5 text-base leading-8 text-graphite/65">{section.body}</p>
              {section.items ? (
                <ul className="mt-6 space-y-3 text-sm text-graphite/60">
                  {section.items.map((item) => (
                    <li key={item} className="flex gap-3">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-ink" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              ) : null}
            </article>
          ))}
        </div>
      </section>

      {slug === "track-order" ? <TrackOrderPanel /> : null}
      {slug === "contact" || slug === "support" ? <ContactPanel /> : null}

      <Footer />
    </main>
  );
}

function TrackOrderPanel() {
  return (
    <section className="px-5 pb-20 md:px-8 lg:pb-32">
      <div className="mx-auto grid max-w-[1440px] grid-cols-1 items-center gap-8 rounded-[2rem] bg-ink p-6 text-white shadow-float md:p-10 lg:grid-cols-[0.85fr_1fr] lg:gap-10">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-white/45">Order Tracking</p>
          <h2 className="mt-5 font-display text-5xl font-semibold">Enter your order number.</h2>
          <p className="mt-5 text-lg leading-8 text-white/60">
            After Shopify is connected, this area can be linked to a real order tracking API. The front-end display is ready.
          </p>
        </div>
        <form className="grid gap-4 rounded-[1.5rem] bg-white p-6 text-ink">
          <input className="h-14 rounded-xl border border-line bg-mist px-5 outline-none focus:border-ink" placeholder="Order number or tracking number" />
          <input className="h-14 rounded-xl border border-line bg-mist px-5 outline-none focus:border-ink" placeholder="Email or phone number" />
          <button type="button" className="h-14 rounded-full bg-ink px-7 text-sm font-semibold text-white transition hover:-translate-y-0.5">
            Track Order
          </button>
        </form>
      </div>
    </section>
  );
}

function ContactPanel() {
  return (
    <section className="px-5 pb-20 md:px-8 lg:pb-32">
      <div className="mx-auto grid max-w-[1440px] grid-cols-1 gap-8 lg:grid-cols-[1fr_1fr] lg:gap-10">
        <div className="rounded-[2rem] bg-ink p-10 text-white shadow-float">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-white/45">Contact</p>
          <h2 className="mt-5 font-display text-5xl font-semibold">Contact the PureNova team.</h2>
          <p className="mt-6 text-lg leading-8 text-white/60">
            Phone: {contactPhone}
            <br />
            Suitable for order questions, after-sales issues, bulk purchase, private-label cooperation and influencer partnerships.
          </p>
        </div>
        <form className="grid gap-4 rounded-[2rem] border border-white/70 bg-white/70 p-8 shadow-soft backdrop-blur-2xl">
          <input className="h-14 rounded-xl border border-line bg-white px-5 outline-none focus:border-ink" placeholder="Name" />
          <input className="h-14 rounded-xl border border-line bg-white px-5 outline-none focus:border-ink" placeholder="Phone number" />
          <input className="h-14 rounded-xl border border-line bg-white px-5 outline-none focus:border-ink" placeholder="Email address" />
          <textarea className="min-h-32 rounded-xl border border-line bg-white px-5 py-4 outline-none focus:border-ink" placeholder="Describe your question or cooperation request" />
          <button type="button" className="h-14 rounded-full bg-ink px-7 text-sm font-semibold text-white transition hover:-translate-y-0.5">
            Submit
          </button>
        </form>
      </div>
    </section>
  );
}
