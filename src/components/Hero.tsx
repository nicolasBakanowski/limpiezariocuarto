import Image from "next/image";

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
        </div>

        {/* Contenedor del ícono y círculo */}
        <div className="relative mx-auto w-60 h-60">
          {/* Ícono PNG encima */}
          <Image
            src="/iconoRIO.png"
            alt="Icono RIO"
            fill
            className="object-contain -top-12 absolute"
          />
          {/* Círculo */}
          <div className="w-60 h-60 bg-white rounded-full shadow-inner" />
        </div>
      </div>
    </section>
  );
}
