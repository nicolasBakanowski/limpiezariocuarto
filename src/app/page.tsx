import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { FeaturedProducts } from "@/components/FeaturedProducts";
import { About } from "@/components/About";
import { CallToAction } from "@/components/CallToAction";
import { Footer } from "@/components/Footer";

const promotions = [
  {
    title: "Kit de limpieza total",
    products: [
      "Bidón de limpiador",
      "Balde plástico",
      "Limpiador multiuso",
    ],
  },
  {
    title: "Accesorios esenciales",
    products: ["Esponja", "Guantes", "Paños de microfibra"],
  },
  {
    title: "Combo profesional",
    products: [
      "Bidón de limpiador",
      "Limpiador multiuso",
      "Cepillo industrial",
    ],
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
