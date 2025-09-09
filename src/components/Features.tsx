export function Features() {
  return (
    <section className="py-16 bg-teal-100">
      <div className="max-w-5xl mx-auto px-4 grid gap-8 md:grid-cols-3 text-center">
        <div>
          <div
            className="w-12 h-12 mx-auto mb-4 rounded-full bg-teal-100"
            aria-hidden
          ></div>
          <h3 className="font-semibold mb-2">Variedad de productos</h3>
          <p>
            Desde desinfectantes hasta utensilios, tenemos todo lo que necesitas
            para un espacio impecable.
          </p>
        </div>
        <div>
          <div
            className="w-12 h-12 mx-auto mb-4 rounded-full bg-teal-100"
            aria-hidden
          ></div>
          <h3 className="font-semibold mb-2">Precios competitivos</h3>
          <p>
            Opciones pensadas para hogares y empresas con tarifas accesibles.
          </p>
        </div>
        <div>
          <div
            className="w-12 h-12 mx-auto mb-4 rounded-full bg-teal-100"
            aria-hidden
          ></div>
          <h3 className="font-semibold mb-2">Envíos rápidos en Río IV</h3>
          <p>Recibí tu pedido sin demoras y con seguimiento en todo momento.</p>
        </div>
      </div>
    </section>
  );
}
