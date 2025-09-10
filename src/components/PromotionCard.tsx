import React from "react";

interface PromotionCardProps {
  title: string;
  description: string;
}

export function PromotionCard({ title, description }: PromotionCardProps) {
  return (
    <div className="bidon-card bg-white p-6 shadow flex flex-col items-center text-center">
      <div className="w-24 h-24 mb-4 rounded bg-teal-100" aria-hidden></div>
      <h3 className="font-semibold mb-2">{title}</h3>
      <p className="text-sm text-gray-600 mb-4">{description}</p>
      <a
        href="https://wa.me/3584394662"
        className="px-4 py-2 rounded bg-teal-600 text-white hover:bg-teal-700"
      >
        Comprar
      </a>
    </div>
  );
}
