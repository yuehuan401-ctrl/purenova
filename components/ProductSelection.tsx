"use client";

import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { Check, ChevronRight, Minus, Plus, ShoppingCart, Trash2, X } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { products } from "@/data/products";

type CartItem = {
  productId: string;
  quantity: number;
};

const CART_STORAGE_KEY = "purenova-cart";

function getCartItemHref(items: CartItem[]) {
  return `/checkout?items=${encodeURIComponent(
    items.map((item) => `${item.productId}:${item.quantity}`).join(",")
  )}`;
}

export default function ProductSelection() {
  const [selectedId, setSelectedId] = useState("aroma-air-pro");
  const [cartOpen, setCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [hydrated, setHydrated] = useState(false);
  const [cartFeedback, setCartFeedback] = useState<string | null>(null);
  const selectedProduct = products.find((product) => product.id === selectedId) ?? products[2];

  const cartCount = useMemo(
    () => cartItems.reduce((total, item) => total + item.quantity, 0),
    [cartItems]
  );
  const cartSubtotal = useMemo(
    () =>
      cartItems.reduce((total, item) => {
        const product = products.find((entry) => entry.id === item.productId);
        return total + (product?.priceValue ?? 0) * item.quantity;
      }, 0),
    [cartItems]
  );
  const checkoutHref = cartItems.length > 0 ? getCartItemHref(cartItems) : selectedProduct.checkoutUrl;

  useEffect(() => {
    try {
      const savedCart = window.localStorage.getItem(CART_STORAGE_KEY);
      if (savedCart) {
        const parsedCart = JSON.parse(savedCart) as CartItem[];
        const validCart = parsedCart.filter(
          (item) =>
            products.some((product) => product.id === item.productId) &&
            Number.isFinite(item.quantity) &&
            item.quantity > 0
        );
        setCartItems(validCart);
      }
    } catch {
      window.localStorage.removeItem(CART_STORAGE_KEY);
    } finally {
      setHydrated(true);
    }
  }, []);

  useEffect(() => {
    const handleOpenCart = () => setCartOpen(true);

    window.addEventListener("purenova-open-cart", handleOpenCart);
    return () => window.removeEventListener("purenova-open-cart", handleOpenCart);
  }, []);

  useEffect(() => {
    if (!hydrated) return;

    window.localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cartItems));
    window.dispatchEvent(
      new CustomEvent("purenova-cart-count", {
        detail: { count: cartCount }
      })
    );
  }, [cartItems, cartCount, hydrated]);

  const showFeedback = (message: string) => {
    setCartFeedback(message);
    window.setTimeout(() => setCartFeedback(null), 1600);
  };

  const addSelectedToCart = () => {
    setCartItems((items) => {
      const existingItem = items.find((item) => item.productId === selectedProduct.id);

      if (existingItem) {
        return items.map((item) =>
          item.productId === selectedProduct.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }

      return [...items, { productId: selectedProduct.id, quantity: 1 }];
    });
    showFeedback(`${selectedProduct.name} added to cart`);
  };

  const updateCartQuantity = (productId: string, nextQuantity: number) => {
    setCartItems((items) => {
      if (nextQuantity <= 0) {
        return items.filter((item) => item.productId !== productId);
      }

      return items.map((item) =>
        item.productId === productId ? { ...item, quantity: nextQuantity } : item
      );
    });
  };

  const removeCartItem = (productId: string) => {
    setCartItems((items) => items.filter((item) => item.productId !== productId));
  };

  return (
    <section id="shop" className="section-shell scroll-mt-20 bg-[radial-gradient(circle_at_74%_24%,rgba(220,236,242,0.9),transparent_30%),linear-gradient(180deg,#fff,#f7f8f6)]">
      <div>
        <div className="mb-12 flex items-end justify-between gap-10">
          <div className="max-w-3xl">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.28em] text-graphite/50">
              Product Selection
            </p>
            <h2 className="font-display text-6xl font-semibold leading-tight tracking-[-0.01em]">
              Choose Your PureNova
            </h2>
            <p className="mt-5 text-lg leading-8 text-graphite/65">
              Pick the right purifier for your room, desk, car or pet space.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-6">
          {products.map((product, index) => {
            const isSelected = product.id === selectedId;

            return (
              <motion.button
                key={product.id}
                type="button"
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.42, delay: index * 0.06, ease: "easeOut" }}
                whileHover={{ y: -6 }}
                onClick={() => setSelectedId(product.id)}
                className={`relative flex min-h-[640px] flex-col rounded-[28px] bg-white p-8 text-left shadow-soft transition duration-300 ${
                  isSelected
                    ? "border-2 border-[#f6a6bb] shadow-[0_24px_70px_rgba(246,166,187,0.28)]"
                    : "border border-line hover:border-graphite/20"
                }`}
              >
                {isSelected ? (
                  <span className="absolute right-6 top-6 grid h-10 w-10 place-items-center rounded-full bg-[#f6a6bb] text-white shadow-soft">
                    <Check size={20} strokeWidth={2.4} />
                  </span>
                ) : null}

                <span className="mb-6 inline-flex w-fit rounded-full bg-air/65 px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-ink">
                  {product.badge}
                </span>

                <div className="mb-7 flex h-52 items-center justify-center overflow-hidden rounded-[22px] bg-mist">
                  <Image
                    src={product.image}
                    alt={product.name}
                    width={520}
                    height={520}
                    quality={100}
                    unoptimized
                    className="h-full w-full object-contain object-center transition duration-500"
                  />
                </div>

                <h3 className="font-display text-3xl font-semibold leading-tight">{product.name}</h3>
                <p className="mt-2 text-sm font-medium text-graphite/55">{product.cnName}</p>
                <strong className="mt-6 block font-display text-5xl font-semibold">{product.price}</strong>

                <div className="mt-7 space-y-4 border-y border-line py-6">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-graphite/40">
                      Core
                    </p>
                    <p className="mt-2 text-sm leading-6 text-graphite/70">{product.configuration}</p>
                  </div>
                  <div className="grid grid-cols-2 gap-4 text-sm text-graphite/65">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-graphite/40">
                        Size
                      </p>
                      <p className="mt-2 leading-6">{product.size}</p>
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-graphite/40">
                        Weight
                      </p>
                      <p className="mt-2 leading-6">{product.weight}</p>
                    </div>
                  </div>
                </div>

                <ul className="mt-6 space-y-3 text-sm leading-6 text-graphite/65">
                  {product.features.map((feature) => (
                    <li key={feature} className="flex gap-3">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-ink" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <span className="mt-auto inline-flex min-h-12 items-center justify-center rounded-full border border-line px-6 text-sm font-semibold text-ink transition duration-300">
                  Select This Model
                </span>
              </motion.button>
            );
          })}
        </div>

        <motion.div
          layout
          className="mt-8 flex items-center justify-between gap-6 rounded-[28px] border border-line bg-ink p-5 pl-7 text-white shadow-float"
        >
          <p className="text-base text-white/75">
            Selected: <strong className="font-semibold text-white">{selectedProduct.name}</strong> -{" "}
            <strong className="font-semibold text-white">{selectedProduct.price}</strong>
          </p>
          <button
            type="button"
            onClick={addSelectedToCart}
            className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-white px-7 text-sm font-semibold text-ink transition duration-300 hover:-translate-y-0.5"
          >
            Add To Cart
            <ShoppingCart size={17} />
          </button>
        </motion.div>

        <motion.div layout className="mt-4 flex items-center justify-end">
          <Link
            href={checkoutHref}
            className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-line bg-white px-7 text-sm font-semibold text-ink shadow-soft transition duration-300 hover:-translate-y-0.5"
          >
            Continue To Checkout
            <ChevronRight size={17} />
          </Link>
        </motion.div>
      </div>

      <AnimatePresence>
        {cartFeedback ? (
          <motion.div
            initial={{ opacity: 0, y: 18, x: "-50%" }}
            animate={{ opacity: 1, y: 0, x: "-50%" }}
            exit={{ opacity: 0, y: 12, x: "-50%" }}
            transition={{ duration: 0.28, ease: "easeOut" }}
            className="fixed bottom-8 left-1/2 z-[110] rounded-full bg-ink px-6 py-3 text-sm font-semibold text-white shadow-float"
          >
            {cartFeedback}
          </motion.div>
        ) : null}
      </AnimatePresence>

      <div
        className={`fixed inset-0 z-[90] transition ${
          cartOpen ? "pointer-events-auto" : "pointer-events-none"
        }`}
        aria-hidden={!cartOpen}
      >
        <button
          type="button"
          className={`absolute inset-0 bg-ink/40 backdrop-blur-sm transition-opacity ${
            cartOpen ? "opacity-100" : "opacity-0"
          }`}
          onClick={() => setCartOpen(false)}
          aria-label="Close cart overlay"
        />
        <aside
          className={`absolute right-0 top-0 flex h-full w-[420px] flex-col bg-white shadow-float transition duration-300 ${
            cartOpen ? "translate-x-0" : "translate-x-full"
          }`}
          aria-label="Shopping cart"
        >
          <div className="flex items-center justify-between border-b border-line px-6 py-5">
            <div className="flex items-center gap-3">
              <ShoppingCart size={20} />
              <h2 className="font-display text-xl font-semibold">Shopping Cart</h2>
              <span className="rounded-full bg-ink px-2.5 py-1 text-xs font-semibold text-white">
                {cartCount}
              </span>
            </div>
            <button
              type="button"
              className="rounded-full border border-line p-2 transition hover:bg-mist"
              onClick={() => setCartOpen(false)}
              aria-label="Close shopping cart"
            >
              <X size={18} />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto px-6 py-6">
            {cartItems.length > 0 ? (
              <div className="space-y-4">
                {cartItems.map((item) => {
                  const product = products.find((entry) => entry.id === item.productId);
                  if (!product) return null;

                  return (
                    <div key={item.productId} className="rounded-[1.5rem] border border-line p-5">
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-graphite/40">
                            Selected Model
                          </p>
                          <h3 className="mt-2 font-display text-lg font-semibold">{product.name}</h3>
                          <p className="mt-1 text-sm text-graphite/55">{product.cnName}</p>
                          <p className="mt-3 font-display text-2xl font-semibold">{product.price}</p>
                        </div>
                        <button
                          type="button"
                          className="rounded-full border border-line p-2 text-graphite/50 transition hover:border-ink hover:text-ink"
                          onClick={() => removeCartItem(item.productId)}
                          aria-label="Remove item"
                        >
                          <Trash2 size={16} />
                        </button>
                      </div>

                      <div className="mt-5 flex items-center justify-between">
                        <span className="text-sm font-semibold text-graphite/60">Quantity</span>
                        <div className="inline-flex items-center rounded-full border border-line">
                          <button
                            type="button"
                            className="grid h-10 w-10 place-items-center"
                            onClick={() => updateCartQuantity(item.productId, item.quantity - 1)}
                            aria-label="Decrease quantity"
                          >
                            <Minus size={16} />
                          </button>
                          <span className="min-w-10 text-center font-semibold">{item.quantity}</span>
                          <button
                            type="button"
                            className="grid h-10 w-10 place-items-center"
                            onClick={() => updateCartQuantity(item.productId, item.quantity + 1)}
                            aria-label="Increase quantity"
                          >
                            <Plus size={16} />
                          </button>
                        </div>
                      </div>
                      <div className="mt-5 flex items-center justify-between border-t border-line pt-5 text-sm">
                        <span className="text-graphite/55">Item total</span>
                        <strong>${(product.priceValue * item.quantity).toFixed(2)}</strong>
                      </div>
                    </div>
                  );
                })}
              </div>
            ) : (
              <div className="flex h-full flex-col items-center justify-center rounded-[1.5rem] border border-dashed border-line p-8 text-center">
                <ShoppingCart size={30} strokeWidth={1.6} />
                <h3 className="mt-5 font-display text-2xl font-semibold">Your cart is empty.</h3>
                <p className="mt-3 text-sm leading-6 text-graphite/60">
                  Select a PureNova model and add it to cart to see it here.
                </p>
              </div>
            )}
          </div>

          <div className="border-t border-line px-6 py-6">
            <div className="mb-4 flex items-center justify-between text-base">
              <span className="text-graphite/60">Subtotal</span>
              <strong className="font-display text-2xl">${cartSubtotal.toFixed(2)}</strong>
            </div>
            <Link
              href={cartItems.length > 0 ? getCartItemHref(cartItems) : selectedProduct.checkoutUrl}
              className={`flex w-full justify-center rounded-full px-7 py-4 text-sm font-semibold transition hover:-translate-y-0.5 ${
                cartItems.length > 0
                  ? "bg-ink text-white hover:bg-graphite"
                  : "pointer-events-none bg-mist text-graphite/35"
              }`}
            >
              Checkout
            </Link>
            <button
              type="button"
              className="mt-3 w-full rounded-full border border-line px-7 py-4 text-sm font-semibold text-ink transition hover:-translate-y-0.5 hover:border-ink"
              onClick={() => setCartOpen(false)}
            >
              Continue Shopping
            </button>
          </div>
        </aside>
      </div>
    </section>
  );
}
