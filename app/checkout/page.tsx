import Image from "next/image";
import Link from "next/link";
import { ChevronRight, LockKeyhole, ShoppingCart } from "lucide-react";
import { products } from "@/data/products";

type CheckoutPageProps = {
  searchParams: Promise<{
    product?: string;
    quantity?: string;
    items?: string;
  }>;
};

export const metadata = {
  title: "Checkout",
  description: "PureNova checkout handoff page prepared for Shopify integration."
};

export default async function CheckoutPage({ searchParams }: CheckoutPageProps) {
  const params = await searchParams;
  const product = products.find((item) => item.id === params.product) ?? products[2];
  const quantity = Math.max(1, Number(params.quantity) || 1);
  const parsedItems =
    params.items
      ?.split(",")
      .map((entry) => {
        const [productId, rawQuantity] = entry.split(":");
        const matchedProduct = products.find((item) => item.id === productId);
        const itemQuantity = Math.max(1, Number(rawQuantity) || 1);

        return matchedProduct ? { product: matchedProduct, quantity: itemQuantity } : null;
      })
      .filter((entry): entry is { product: typeof products[number]; quantity: number } => Boolean(entry)) ??
    [];
  const orderItems = parsedItems.length > 0 ? parsedItems : [{ product, quantity }];
  const subtotal = orderItems.reduce(
    (total, item) => total + item.product.priceValue * item.quantity,
    0
  );
  const shipping = 0;
  const total = subtotal + shipping;
  const shopifyCheckoutUrl = `/checkout?items=${encodeURIComponent(
    orderItems.map((item) => `${item.product.id}:${item.quantity}`).join(",")
  )}&shopifyVariantIds=${encodeURIComponent(
    orderItems.map((item) => `${item.product.shopifyVariantId}:${item.quantity}`).join(",")
  )}`;

  return (
    <main className="site-scale min-h-screen bg-[radial-gradient(circle_at_74%_24%,rgba(220,236,242,0.9),transparent_30%),linear-gradient(180deg,#fff,#f7f8f6)] text-ink">
      <header className="border-b border-white/70 bg-white/70 backdrop-blur-2xl">
        <nav className="mx-auto flex h-16 max-w-[1440px] items-center justify-between px-8">
          <Link href="/" className="font-display text-2xl font-semibold tracking-[0.32em]">
            PureNova
          </Link>
          <div className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-graphite/65 shadow-soft">
            <LockKeyhole size={16} />
            Secure Checkout
          </div>
        </nav>
      </header>

      <section className="px-8 py-24">
        <div className="mx-auto grid max-w-[1440px] grid-cols-[1fr_0.78fr] gap-10">
          <div className="rounded-[2rem] bg-white p-10 shadow-soft">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.28em] text-graphite/45">
              Checkout
            </p>
            <h1 className="font-display text-6xl font-semibold leading-tight tracking-[-0.01em]">
              Complete your PureNova order.
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-graphite/65">
              This page is ready for Shopify binding. Replace the placeholder variant id in the product data when your Shopify product is ready.
            </p>

            <div className="mt-10 grid gap-5">
              <div className="rounded-[1.5rem] border border-line p-6">
                <h2 className="font-display text-2xl font-semibold">Contact</h2>
                <div className="mt-5 grid grid-cols-2 gap-4">
                  <input className="h-14 rounded-xl border border-line bg-mist px-5 outline-none focus:border-ink" placeholder="Email address" />
                  <input className="h-14 rounded-xl border border-line bg-mist px-5 outline-none focus:border-ink" placeholder="Phone number" />
                </div>
              </div>

              <div className="rounded-[1.5rem] border border-line p-6">
                <h2 className="font-display text-2xl font-semibold">Shipping</h2>
                <div className="mt-5 grid grid-cols-2 gap-4">
                  <input className="h-14 rounded-xl border border-line bg-mist px-5 outline-none focus:border-ink" placeholder="First name" />
                  <input className="h-14 rounded-xl border border-line bg-mist px-5 outline-none focus:border-ink" placeholder="Last name" />
                  <input className="col-span-2 h-14 rounded-xl border border-line bg-mist px-5 outline-none focus:border-ink" placeholder="Address" />
                  <input className="h-14 rounded-xl border border-line bg-mist px-5 outline-none focus:border-ink" placeholder="City" />
                  <input className="h-14 rounded-xl border border-line bg-mist px-5 outline-none focus:border-ink" placeholder="Country / Region" />
                </div>
              </div>

              <div className="rounded-[1.5rem] border border-line p-6">
                <h2 className="font-display text-2xl font-semibold">Payment</h2>
                <p className="mt-3 text-sm leading-6 text-graphite/60">
                  Shopify Payments, PayPal, Apple Pay and card checkout can be connected here after Shopify binding.
                </p>
                <div className="mt-5 rounded-xl bg-mist px-5 py-4 text-sm font-semibold text-graphite/60">
                  Payment gateway placeholder
                </div>
              </div>
            </div>
          </div>

          <aside className="h-fit rounded-[2rem] bg-ink p-8 text-white shadow-float">
            <div className="mb-7 flex items-center gap-3">
              <ShoppingCart size={20} />
              <h2 className="font-display text-2xl font-semibold">Order Summary</h2>
            </div>

            <div className="space-y-5 border-b border-white/10 pb-7">
              {orderItems.map((item) => (
                <div key={item.product.id} className="grid grid-cols-[88px_1fr] gap-4">
                  <div className="flex h-24 items-center justify-center overflow-hidden rounded-2xl bg-white/10">
                    <Image
                      src={item.product.image}
                      alt={item.product.name}
                      width={180}
                      height={180}
                      quality={100}
                      unoptimized
                      className="h-full w-full object-contain object-center"
                    />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/35">
                      {item.product.badge}
                    </p>
                    <h3 className="mt-2 font-display text-lg font-semibold">{item.product.name}</h3>
                    <p className="mt-1 text-sm text-white/45">{item.product.cnName}</p>
                    <div className="mt-3 flex justify-between gap-4 text-sm text-white/55">
                      <span>Qty: {item.quantity}</span>
                      <span>${(item.product.priceValue * item.quantity).toFixed(2)}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="space-y-4 border-b border-white/10 py-7 text-sm">
              <div className="flex justify-between text-white/60">
                <span>Subtotal</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-white/60">
                <span>Shipping</span>
                <span>Free</span>
              </div>
              <div className="flex justify-between text-white">
                <strong>Total</strong>
                <strong className="font-display text-3xl">${total.toFixed(2)}</strong>
              </div>
            </div>

            <div className="py-7 text-sm leading-6 text-white/45">
              <p>Shopify Variants:</p>
              <p className="mt-2 break-all rounded-xl bg-white/5 p-3 font-mono text-xs">
                {orderItems
                  .map((item) => `${item.product.shopifyVariantId} x ${item.quantity}`)
                  .join(" / ")}
              </p>
            </div>

            <a
              href={shopifyCheckoutUrl}
              className="flex min-h-14 items-center justify-center gap-2 rounded-full bg-white px-7 text-sm font-semibold text-ink transition hover:-translate-y-0.5"
            >
              Continue To Shopify Checkout
              <ChevronRight size={17} />
            </a>
            <Link
              href="/"
              className="mt-3 flex min-h-14 items-center justify-center rounded-full border border-white/15 px-7 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:border-white/60"
            >
              Return To Store
            </Link>
          </aside>
        </div>
      </section>
    </main>
  );
}
