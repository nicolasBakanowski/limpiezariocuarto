export function CallToAction() {
  return (
    <section id="contacto" className="bg-teal-600 text-white py-16">
      <div className="max-w-5xl mx-auto px-4 flex flex-col md:flex-row items-center gap-8">
        <div className="md:w-1/2">
          <h2 className="text-3xl font-bold mb-4">
            Tu negocio más limpio empieza aquí
          </h2>
          <p className="mb-6">
            Contactanos para recibir asesoramiento personalizado y cotizaciones a
            medida.
          </p>
          <div className="flex gap-4 flex-wrap">
            <a
              href="#productos"
              className="px-6 py-2 rounded bg-white text-teal-600 hover:bg-gray-100"
            >
              Comprar ahora
            </a>
            <a
              href="https://wa.me/3584394662"
              className="px-6 py-2 rounded border border-white hover:bg-white hover:text-teal-600"
            >
              Contactar por WhatsApp
            </a>
          </div>
        </div>
        <div
          className="w-full md:w-1/2 h-48 rounded bg-white/20"
          aria-hidden
        ></div>
      </div>
    </section>
  );
}
