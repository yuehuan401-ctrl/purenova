"use client";

import { FormEvent, useState } from "react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!email.trim()) return;
    setSubscribed(true);
  };

  return (
    <section className="border-t border-line bg-white px-5 py-16 md:py-20 lg:px-8">
      <div className="mx-auto grid max-w-[1440px] items-center gap-8 rounded-[2rem] bg-pearl px-5 py-8 shadow-soft md:grid-cols-[0.95fr_1.05fr] md:gap-10 md:px-6 md:py-10 lg:px-12 lg:py-14">
        <div>
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.28em] text-graphite/50">
            Newsletter
          </p>
          <h2 className="font-display text-4xl font-semibold tracking-[-0.02em] sm:text-5xl">
            Join The PureNova Club
          </h2>
          <p className="mt-5 max-w-xl text-base leading-7 text-graphite/65">
            Subscribe for product launches, exclusive offers and limited-time updates.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="grid gap-3 sm:grid-cols-[1fr_auto]">
          <label className="sr-only" htmlFor="newsletter-email">
            Email address
          </label>
          <input
            id="newsletter-email"
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            placeholder="Enter your email address"
            className="h-14 rounded-full border border-line bg-white px-6 text-base outline-none transition focus:border-ink"
          />
          <button
            type="submit"
            className="h-14 rounded-full bg-ink px-8 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-graphite"
          >
            Subscribe Now
          </button>
          {subscribed ? (
            <p className="text-sm font-semibold text-graphite sm:col-span-2">
              Thank you for subscribing!
            </p>
          ) : null}
        </form>
      </div>
    </section>
  );
}
