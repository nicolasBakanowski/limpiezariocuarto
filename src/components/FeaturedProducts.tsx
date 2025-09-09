export function FeaturedProducts() {
  return (
    <section id="productos" className="bg-gray-50 py-16">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-2xl font-bold text-center mb-12">
          Productos destacados
        </h2>
        <div className="grid gap-8 md:grid-cols-3">
          <div className="bg-white p-6 rounded shadow flex flex-col items-center text-center">
            <div className="w-24 h-24 mb-4 rounded bg-teal-100" aria-hidden></div>
            <h3 className="font-semibold mb-2">Bidón de limpiador</h3>
            <p className="text-sm text-gray-600 mb-4">
              Ideal para grandes superficies y uso profesional.
            </p>
            <a
              href="#contacto"
              className="px-4 py-2 rounded bg-teal-600 text-white hover:bg-teal-700"
            >
              Comprar
            </a>
          </div>
          <div className="bg-white p-6 rounded shadow flex flex-col items-center text-center">
            <div className="w-24 h-24 mb-4 rounded bg-teal-100" aria-hidden></div>
            <h3 className="font-semibold mb-2">Balde plástico</h3>
            <p className="text-sm text-gray-600 mb-4">
              Resistente, fácil de transportar y con excelente capacidad.
            </p>
            <a
              href="#contacto"
              className="px-4 py-2 rounded bg-teal-600 text-white hover:bg-teal-700"
            >
              Comprar
            </a>
          </div>
          <div className="bg-white p-6 rounded shadow flex flex-col items-center text-center">
            <div className="w-24 h-24 mb-4 rounded bg-teal-100" aria-hidden></div>
            <h3 className="font-semibold mb-2">Limpiador multiuso</h3>
            <p className="text-sm text-gray-600 mb-4">
              Eficaz en vidrios, pisos y muebles.
            </p>
            <a
              href="#contacto"
              className="px-4 py-2 rounded bg-teal-600 text-white hover:bg-teal-700"
            >
              Comprar
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
