import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { FeaturedProducts } from "@/components/FeaturedProducts";
import { About } from "@/components/About";
import { CallToAction } from "@/components/CallToAction";
import { Footer } from "@/components/Footer";

const promotions = [
  {
    title: "Promo Papel XL",
    products: [
      "Papel higiénico 30 rollos 240 paños",
      "Papel de cocina 8 rollos 200 paños",
    ],
  },
  {
    title: "Promo Papel",
    products: [
      "Papel higiénico 30 rollos 240 paños",
      "Papel de cocina 8 rollos 120 paños",
    ],
  },
  {
    title: "Promo 1",
    products: [
      "5 l jabón para ropa",
      "5 l suavizante premium",
      "5 l detergente limón",
      "5 l desinfectante para pisos",
      "5 l lavandina concentrada",
    ],
  },
  {
    title: "Promo 2",
    products: [
      "5 l jabón para ropa",
      "5 l suavizante premium",
      "5 l desinfectante para pisos",
      "5 l lavandina concentrada",
    ],
  },
  {
    title: "Promo Hogar",
    products: [
      "5 l jabón para ropa",
      "5 l suavizante",
      "5 l lavandina concentrada",
    ],
  },
  {
    title: "Promo Hogar 2",
    products: [
      "5 l jabón para ropa",
      "5 l lavandina concentrada",
    ],
  },
  {
    title: "Promo 15 litros",
    products: [
      "5 l jabón para ropa",
      "5 l desinfectante",
      "5 l lavandina concentrada",
    ],
  },
  {
    title: "Promo Negocio",
    products: [
      "5 l detergente",
      "10 l lavandina",
      "10 l desinfectante",
    ],
  },
  {
    title: "Promo 10 l",
    products: ["10 l jabón o suavizante"],
  },
];

export default function Home() {
  return (
    <div className="font-sans text-gray-900">
      <Hero />
      <Features />
      <FeaturedProducts promotions={promotions} />
      <About />
      <CallToAction />
      <Footer />
    </div>
  );
}
