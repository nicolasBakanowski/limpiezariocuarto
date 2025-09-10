import { PromotionCard } from "@/components/PromotionCard";

interface Promotion {
  title: string;
  products: string[];
}

interface FeaturedProductsProps {
  promotions: Promotion[];
}

export function FeaturedProducts({ promotions }: FeaturedProductsProps) {
  return (
    <section id="productos" className="bg-gray-50 py-16">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-2xl font-bold text-center mb-12">
          Productos destacados
        </h2>
        <div className="grid gap-8 md:grid-cols-3">
          {promotions.map((promotion) => (
            <PromotionCard
              key={promotion.title}
              title={promotion.title}
              products={promotion.products}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
