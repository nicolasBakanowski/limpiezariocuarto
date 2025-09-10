import Image from "next/image";
import Link from "next/link";
import { Instagram, MessageCircle } from "lucide-react";

export function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-teal-600 text-white z-50">
      <div className="max-w-5xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link href="/" className="flex items-center">
          <Image src="/iconoRIO.png" alt="Limpieza Río" width={48} height={48} />
        </Link>
        <ul className="flex items-center gap-4">
          <li>
            <a href="#features" className="hover:underline">
              Servicios
            </a>
          </li>
          <li>
            <a href="#productos" className="hover:underline">
              Productos
            </a>
          </li>
          <li>
            <a href="#nosotros" className="hover:underline">
              Nosotros
            </a>
          </li>
          <li>
            <a href="#contacto" className="hover:underline">
              Contacto
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/limpiezariocuarto"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="hover:text-teal-200"
            >
              <Instagram className="w-5 h-5" />
            </a>
          </li>
          <li>
            <a
              href="https://wa.me/3584394662"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="hover:text-teal-200"
            >
              <MessageCircle className="w-5 h-5" />
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
