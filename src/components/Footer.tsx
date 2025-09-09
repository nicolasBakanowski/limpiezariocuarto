export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-200 text-sm py-8">
      <div className="max-w-5xl mx-auto px-4 flex flex-col md:flex-row justify-between gap-6">
        <div>
          <h3 className="text-lg font-semibold mb-2">Limpieza Río</h3>
          <p>Dirección: Calle Falsa 123, Río Cuarto</p>
          <p>Teléfono: +54 9 358 123456</p>
        </div>
        <div className="md:text-right">
          <p>© {new Date().getFullYear()} Limpieza Río. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
