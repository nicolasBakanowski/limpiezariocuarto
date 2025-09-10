import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { FeaturedProducts } from "@/components/FeaturedProducts";
import { About } from "@/components/About";
import { CallToAction } from "@/components/CallToAction";
import { Footer } from "@/components/Footer";

const products = [
  {
    title: "Bidón de limpiador",
    description: "Ideal para grandes superficies y uso profesional.",
  },
  {
    title: "Balde plástico",
    description: "Resistente, fácil de transportar y con excelente capacidad.",
  },
  {
    title: "Limpiador multiuso",
    description: "Eficaz en vidrios, pisos y muebles.",
  },
];

export default function Home() {
  return (
    <div className="font-sans text-gray-900">
      <Hero />
      <Features />
      <FeaturedProducts products={products} />
      <About />
      <CallToAction />
      <Footer />
    </div>
  );
}
