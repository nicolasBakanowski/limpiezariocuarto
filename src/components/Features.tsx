import Image from "next/image";

export function Features() {
  return (
    <section id="features" className="py-16 bg-teal-100">
      <div className="max-w-5xl mx-auto px-4 grid gap-8 md:grid-cols-3 text-center">
        {/* Feature 1 */}
        <div>
          <div className="w-32 h-32 mx-auto relative">
            <Image
              src="/variosprod.png"
              alt="Variedad de productos"
              fill
              className="object-contain"
            />
          </div>
          <h3 className="font-semibold mb-2">Variedad de productos</h3>
          <p>
            Desde desinfectantes hasta utensilios, tenemos todo lo que necesitas
            para un espacio impecable.
          </p>
        </div>

        {/* Feature 2 */}
        <div>
          <div className="w-32 h-32 mx-auto relative">
            <Image
              src="/price.png"
              alt="Precios competitivos"
              fill
              className="object-contain"
            />
          </div>
          <h3 className="font-semibold mb-2">Precios competitivos</h3>
          <p>
            Opciones pensadas para hogares y empresas con tarifas accesibles.
          </p>
        </div>

        {/* Feature 3 */}
        <div>
          <div className="w-32 h-32 mx-auto relative">
            <Image
              src="/envios.png"
              alt="Envíos rápidos"
              fill
              className="object-contain"
            />
          </div>
          <h3 className="font-semibold mb-2">Envíos rápidos en Río IV</h3>
          <p>Recibí tu pedido sin demoras y con seguimiento en todo momento.</p>
        </div>
      </div>
    </section>
  );
}
