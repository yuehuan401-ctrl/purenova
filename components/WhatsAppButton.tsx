"use client";

import { MessageCircle } from "lucide-react";

const phoneNumber = "8615292066669";
const message = "Hi! I need customer support.";

export default function WhatsAppButton() {
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  const handleClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <a
      href={whatsappUrl}
      onClick={handleClick}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-4 right-4 z-[9999] inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_18px_45px_rgba(37,211,102,0.35)] transition duration-300 hover:scale-105 hover:shadow-[0_22px_55px_rgba(37,211,102,0.42)] focus:outline-none focus:ring-4 focus:ring-[#25D366]/25 md:bottom-6 md:right-6"
    >
      <MessageCircle size={28} strokeWidth={2.4} aria-hidden="true" />
    </a>
  );
}
