import { PromotionCard } from "@/components/PromotionCard";

interface Product {
  title: string;
  description: string;
}

interface FeaturedProductsProps {
  products: Product[];
}

export function FeaturedProducts({ products }: FeaturedProductsProps) {
  return (
    <section id="productos" className="bg-gray-50 py-16">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-2xl font-bold text-center mb-12">
          Productos destacados
        </h2>
        <div className="grid gap-8 md:grid-cols-3">
          {products.map((product) => (
            <PromotionCard
              key={product.title}
              title={product.title}
              description={product.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
