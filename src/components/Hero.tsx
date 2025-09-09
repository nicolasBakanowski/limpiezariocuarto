export function Hero() {
  return (
    <section className="bg-teal-100 py-16">
      <div className="max-w-5xl mx-auto px-4 text-center">
        <h1 className="text-3xl md:text-5xl font-bold mb-4">
          Productos de limpieza para hogares y empresas
        </h1>
        <p className="text-lg text-gray-700 mb-8">
          Calidad y confianza en cada entrega
        </p>
        <div className="flex justify-center gap-4 flex-wrap mb-8">
          <a
            href="#productos"
            className="px-6 py-2 rounded bg-teal-600 text-white hover:bg-teal-700"
          >
            Comprar ahora
          </a>
          <a
            href="https://wa.me/XXXXXXXXXXX"
            className="px-6 py-2 rounded border border-teal-600 text-teal-600 hover:bg-teal-50"
          >
            Contactar por WhatsApp
          </a>
        </div>
        <div
          className="mx-auto w-32 h-32 bg-white rounded-full shadow-inner"
          aria-hidden
        />
      </div>
    </section>
  );
}
