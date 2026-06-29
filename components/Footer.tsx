import Link from "next/link";
import { socialLinks } from "@/config/socialLinks";

type FooterLink = {
  href: string;
  label: string;
};

type FooterColumn = {
  title: string;
  links: FooterLink[];
};

const footerColumns: FooterColumn[] = [
  {
    title: "About",
    links: [
      { label: "Brand Story", href: "/about" },
      { label: "Our Mission", href: "/mission" },
      { label: "Journey", href: "/journey" },
      { label: "Careers", href: "/careers" }
    ]
  },
  {
    title: "Contact",
    links: [
      { label: "Contact Us", href: "/contact" },
      { label: "FAQ", href: "/faq" },
      { label: "Track Order", href: "/track-order" },
      { label: "Support", href: "/support" }
    ]
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy Policy", href: "/privacy-policy" },
      { label: "Terms of Service", href: "/terms" },
      { label: "Refund Policy", href: "/refund-policy" },
      { label: "Cookie Policy", href: "/cookie-policy" }
    ]
  }
];

const socialItems = [
  { label: "Instagram", href: socialLinks.instagram, icon: InstagramIcon },
  { label: "Facebook", href: socialLinks.facebook, icon: FacebookIcon },
  { label: "TikTok", href: socialLinks.tiktok, icon: TikTokIcon },
  { label: "YouTube", href: socialLinks.youtube, icon: YouTubeIcon },
  { label: "Pinterest", href: socialLinks.pinterest, icon: PinterestIcon }
];

const payments = [
  { label: "Visa", icon: VisaIcon },
  { label: "Mastercard", icon: MastercardIcon },
  { label: "PayPal", icon: PaypalIcon },
  { label: "Apple Pay", icon: ApplePayIcon },
  { label: "Google Pay", icon: GooglePayIcon },
  { label: "American Express", icon: AmexIcon }
];

const footerLinkClass =
  "inline-flex text-sm text-white/55 transition-all duration-300 ease-in-out hover:translate-x-1 hover:text-white";

export default function Footer() {
  return (
    <footer className="bg-ink px-5 py-12 text-white md:px-8 md:py-14">
      <div className="mx-auto max-w-[1440px]">
        <div className="grid grid-cols-1 gap-10 border-b border-white/10 pb-12 sm:grid-cols-2 lg:grid-cols-[1.25fr_0.8fr_0.8fr_0.8fr_0.9fr] lg:gap-12">
          <div>
            <Link href="/" className="font-display text-xl font-semibold tracking-[0.34em]">
              PureNova
            </Link>
            <p className="mt-8 max-w-sm text-base leading-7 text-white/60">
              Purification and aromatherapy for modern spaces.
            </p>
            <p className="mt-3 max-w-sm text-sm leading-6 text-white/45">
              Bringing cleaner air and better living to every home.
            </p>
            <p className="mt-8 text-sm leading-6 text-white/35">
              © 2026 PureNova.
              <br />
              All Rights Reserved.
            </p>
          </div>

          {footerColumns.map((column) => (
            <div key={column.title}>
              <h3 className="font-display text-base font-semibold text-white">{column.title}</h3>
              <ul className="mt-6 space-y-4">
                {column.links.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className={footerLinkClass}>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h3 className="font-display text-base font-semibold text-white">Follow Us</h3>
            <ul className="mt-6 space-y-4">
              {socialItems.map((social) => {
                const Icon = social.icon;
                return (
                  <li key={social.href}>
                    <Link
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group inline-flex items-center gap-3 text-sm text-white/55 transition-all duration-300 ease-in-out hover:translate-x-1 hover:text-white"
                    >
                      <Icon className="h-5 w-5 transition-transform duration-300 ease-in-out group-hover:scale-110" />
                      <span>{social.label}</span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-start justify-between gap-5 pt-8 lg:flex-row lg:items-center">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-white/35">
            Accepted Payments
          </p>
          <div className="flex w-full flex-wrap gap-3 lg:w-auto lg:justify-end">
            {payments.map((payment) => {
              const Icon = payment.icon;
              return (
                <span
                  key={payment.label}
                  className="inline-flex h-9 min-w-14 items-center justify-center rounded-md border border-white/10 bg-white px-3 text-ink"
                  aria-label={payment.label}
                  title={payment.label}
                >
                  <Icon className="h-5 w-auto" />
                </span>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
}

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" aria-hidden="true">
      <rect x="4" y="4" width="16" height="16" rx="5" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="12" cy="12" r="3.4" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="16.8" cy="7.2" r="1" fill="currentColor" />
    </svg>
  );
}

function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
      <path d="M14.2 8.2h2V4.8c-.35-.05-1.55-.15-2.95-.15-2.92 0-4.92 1.78-4.92 5.05v2.84H5v3.82h3.33V24h4.1v-7.64h3.2l.5-3.82h-3.7v-2.46c0-1.1.3-1.88 1.77-1.88Z" />
    </svg>
  );
}

function TikTokIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
      <path d="M16.6 3c.38 2.35 1.72 3.76 4.02 3.91v3.58a7.2 7.2 0 0 1-4.06-1.25v6.2c0 3.16-2.15 5.56-5.45 5.56-3.02 0-5.73-1.8-5.73-5.2 0-3.63 3.07-5.73 6.5-5.16v3.76c-1.38-.44-2.72.35-2.72 1.56 0 1.05.86 1.55 1.84 1.55 1.15 0 1.82-.7 1.82-2.26V3h3.78Z" />
    </svg>
  );
}

function YouTubeIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
      <path d="M22 8.2a3 3 0 0 0-2.1-2.1C18 5.6 12 5.6 12 5.6s-6 0-7.9.5A3 3 0 0 0 2 8.2 31.4 31.4 0 0 0 1.5 12c0 1.28.16 2.55.5 3.8a3 3 0 0 0 2.1 2.1c1.9.5 7.9.5 7.9.5s6 0 7.9-.5a3 3 0 0 0 2.1-2.1c.34-1.25.5-2.52.5-3.8 0-1.28-.16-2.55-.5-3.8ZM10 15.4V8.6l5.7 3.4-5.7 3.4Z" />
    </svg>
  );
}

function PinterestIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
      <path d="M12.1 2C6.55 2 3 5.87 3 10.08c0 2.75 1.54 4.38 2.47 4.38.38 0 .6-1.05.6-1.35 0-.35-.9-1.1-.9-2.57 0-3.05 2.32-5.2 5.33-5.2 2.58 0 4.5 1.46 4.5 4.16 0 2.02-.82 5.82-3.45 5.82-.95 0-1.77-.68-1.52-1.68.28-1.2.85-2.5.85-3.38 0-2.2-3.12-1.8-3.12 1.04 0 .6.2 1.28.45 1.83L6.37 20.8c-.06.25.03.35.23.15 1.62-1.42 2.16-3.4 2.66-5.25.48.92 1.72 1.42 2.72 1.42 4.18 0 6.02-4.08 6.02-7.72C18 5.3 14.48 2 12.1 2Z" />
    </svg>
  );
}

function VisaIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 24" className={className} aria-hidden="true">
      <text x="3" y="17" fill="#1434CB" fontSize="16" fontWeight="800" fontFamily="Arial, sans-serif">
        VISA
      </text>
    </svg>
  );
}

function MastercardIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 24" className={className} aria-hidden="true">
      <circle cx="25" cy="12" r="8" fill="#EB001B" />
      <circle cx="39" cy="12" r="8" fill="#F79E1B" />
      <path d="M32 6.5a8 8 0 0 1 0 11 8 8 0 0 1 0-11Z" fill="#FF5F00" />
    </svg>
  );
}

function PaypalIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 24" className={className} aria-hidden="true">
      <text x="2" y="17" fill="#003087" fontSize="14" fontWeight="800" fontFamily="Arial, sans-serif">
        PayPal
      </text>
    </svg>
  );
}

function ApplePayIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 80 24" className={className} aria-hidden="true">
      <text x="2" y="17" fill="#111" fontSize="14" fontWeight="700" fontFamily="Arial, sans-serif">
        Apple Pay
      </text>
    </svg>
  );
}

function GooglePayIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 86 24" className={className} aria-hidden="true">
      <text x="2" y="17" fill="#4285F4" fontSize="14" fontWeight="700" fontFamily="Arial, sans-serif">
        Google Pay
      </text>
    </svg>
  );
}

function AmexIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 74 24" className={className} aria-hidden="true">
      <rect x="1" y="3" width="72" height="18" rx="3" fill="#2E77BC" />
      <text x="8" y="17" fill="#fff" fontSize="12" fontWeight="800" fontFamily="Arial, sans-serif">
        AMEX
      </text>
    </svg>
  );
}
