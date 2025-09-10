export function About() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-5xl mx-auto px-4 grid gap-8 md:grid-cols-2 items-center">
        <div>
          <h2 className="text-2xl font-bold mb-4">Sobre nosotros</h2>
          <p className="mb-4">
            Somos una tienda dedicada a la venta de productos de limpieza con
            más de 5 años de experiencia en el mercado. Nuestro compromiso es
            ofrecer insumos de calidad y asesoramiento profesional para hogares
            y empresas.
          </p>
          <p>
            Trabajamos con proveedores nacionales y garantizamos entregas
            puntuales en la ciudad de Río Cuarto.
          </p>
        </div>
        <div className="w-full h-48 rounded bg-teal-100" aria-hidden></div>
      </div>
    </section>
  );
}
