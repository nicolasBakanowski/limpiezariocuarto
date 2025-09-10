"use client";

import React, { useMemo } from "react";
import Image from "next/image";
import { ShoppingCart, CheckCircle } from "lucide-react";

interface PromotionCardProps {
  title: string;
  products: string[];
}

/**
 * Determina qué icono mostrar según los productos.
 */
function getIconForProducts(products: string[]) {
  const hayPapel =
    products.some((p) => /papel\s*hig/i.test(p)) ||
    products.some((p) => /papel\s*de\s*cocina/i.test(p));

  if (hayPapel) return "/papel.png";

  return "/bidon5l.png"; // fallback default
}

export function PromotionCard({ title, products }: PromotionCardProps) {
  const resolvedIcon = getIconForProducts(products);

  // 📏 Ajuste de tamaño dinámico según el icono
  const isPapel = resolvedIcon.includes("papel");
  const iconSize = isPapel ? 64 : 48; // papel más grande

  const whatsappMessage = useMemo(() => {
    const listado = products.map((p) => `• ${p}`).join("\n");
    return `Hola! Me interesa la promoción: ${title}\n${listado}`;
  }, [title, products]);

  return (
    <div className="relative h-full flex flex-col items-center text-center bg-gradient-to-b from-white to-teal-50 rounded-2xl shadow-md hover:shadow-xl transition-all p-6 border border-teal-100">
      {/* Icono superior */}
      <div className="w-20 h-20 flex items-center justify-center rounded-full bg-teal-100 text-teal-600 mb-4 shadow-inner overflow-hidden">
        <Image
          src={resolvedIcon}
          alt={title}
          width={iconSize}
          height={iconSize}
          className="object-contain"
        />
      </div>

      {/* Título */}
      <h3 className="font-bold text-lg text-gray-800 mb-3 flex items-center gap-2">
        <ShoppingCart className="w-5 h-5 text-teal-600" />
        {title}
      </h3>

      {/* Lista de productos */}
      <div className="flex-1 w-full">
        <ul className="text-sm text-gray-700 mb-6 space-y-1">
          {products.map((product) => (
            <li
              key={product}
              className="flex items-center gap-2 justify-center"
            >
              <CheckCircle className="w-4 h-4 text-teal-500" />
              {product}
            </li>
          ))}
        </ul>
      </div>

      {/* Botón */}
      <a
        href={`https://wa.me/5493584391662?text=${encodeURIComponent(
          whatsappMessage
        )}`}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-auto w-full px-5 py-2 rounded-lg bg-teal-600 text-white font-semibold hover:bg-teal-700 active:scale-95 transition-all"
      >
        Comprar por WhatsApp
      </a>
    </div>
  );
}
