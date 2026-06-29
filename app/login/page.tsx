import Link from "next/link";
import { Instagram, UserRound } from "lucide-react";
import { socialLinks } from "@/config/socialLinks";

export const metadata = {
  title: {
    absolute: "Account Login | PureNova"
  },
  description: "Log in to your PureNova account to view orders, account details and shopping history.",
  openGraph: {
    title: "Account Login | PureNova",
    description: "Log in to your PureNova account to view orders, account details and shopping history.",
    images: ["/air-purifier/product-03.jpg"],
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Account Login | PureNova",
    description: "Log in to your PureNova account to view orders, account details and shopping history.",
    images: ["/air-purifier/product-03.jpg"]
  }
};

export default function LoginPage() {
  return (
    <main className="site-scale min-h-screen bg-white text-ink">
      <header className="border-b border-line bg-white">
        <div className="mx-auto flex h-20 max-w-[1440px] items-center justify-between px-8">
          <Link href="/" className="font-display text-sm font-semibold tracking-[0.28em]">
            PureNova
          </Link>
          <Link href="/" className="rounded-full border border-line px-5 py-2.5 text-sm font-semibold transition hover:-translate-y-0.5 hover:border-ink">
            Back Home
          </Link>
        </div>
      </header>

      <section className="px-8 py-32">
        <div className="mx-auto flex max-w-md flex-col items-center text-center">
          <div className="mb-8 grid h-16 w-16 place-items-center rounded-full bg-mist">
            <UserRound size={28} strokeWidth={1.7} />
          </div>
          <h1 className="font-display text-4xl font-semibold tracking-[-0.02em] sm:text-5xl">
            Welcome back
          </h1>
          <p className="mt-5 text-base leading-7 text-graphite/65">
            Enter your email address to continue to your PureNova account.
          </p>
          <div className="my-8 h-px w-10 bg-line" />
          <form className="w-full space-y-4">
            <label className="sr-only" htmlFor="email">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="Email"
              className="h-14 w-full rounded-xl border border-line bg-mist px-5 text-base outline-none transition placeholder:text-graphite/35 focus:border-ink focus:bg-white"
            />
            <button
              type="button"
              className="h-14 w-full rounded-full bg-ink px-7 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-graphite"
            >
              Continue
            </button>
          </form>
          <p className="mt-5 text-sm leading-6 text-graphite/55">
            Shopify customer accounts or email verification can be connected here later.
          </p>
        </div>
      </section>

      <footer className="bg-ink px-8 py-16 text-center text-white">
        <div className="mx-auto max-w-4xl">
          <div className="mx-auto mb-6 grid h-16 w-16 place-items-center rounded-full border border-white/30 font-display text-xs font-semibold tracking-[0.2em]">
            PN
          </div>
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-white/80">
            PureNova Account
          </p>
          <div className="mt-8 flex justify-center gap-6 text-white/70">
            <Link href={socialLinks.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <Instagram size={20} />
            </Link>
            <Link href={socialLinks.facebook} target="_blank" rel="noopener noreferrer">Facebook</Link>
            <Link href={socialLinks.tiktok} target="_blank" rel="noopener noreferrer">TikTok</Link>
            <Link href={socialLinks.youtube} target="_blank" rel="noopener noreferrer">YouTube</Link>
          </div>
        </div>
      </footer>
    </main>
  );
}
