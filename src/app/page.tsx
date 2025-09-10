import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { FeaturedProducts } from "@/components/FeaturedProducts";
import { About } from "@/components/About";
import { CallToAction } from "@/components/CallToAction";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="font-sans text-gray-900">
      <Hero />
      <Features />
      <FeaturedProducts />
      <About />
      <CallToAction />
      <Footer />
    </div>
  );
}
