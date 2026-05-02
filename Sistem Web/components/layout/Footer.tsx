import { Facebook, Instagram, Music, MessageCircle } from "lucide-react";

export default function Footer() {
  return (
    <>
      <footer className="border-t border-white/10 bg-[#020e28] py-10">
        <div className="container-sphaera flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <h3 className="text-lg font-semibold text-white">
              Sphaera Club
            </h3>

            <p className="mt-2 text-sm text-white/60">
              Sistema web para ligas barriales de fútbol, Clubes, Escuelas de Fútbol y Colegios.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-6">
            <a
              href="https://www.facebook.com/profile.php?id=61582648748403&locale=es_LA"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/70 transition hover:text-blue-400"
              aria-label="Facebook"
            >
              <Facebook size={22} />
            </a>

            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/70 transition hover:text-pink-400"
              aria-label="Instagram"
            >
              <Instagram size={22} />
            </a>

            <a
              href="https://wa.me/593989913943?text=Hola%2C%20quiero%20informaci%C3%B3n%20sobre%20Sphaera%20Club"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-white/70 transition hover:text-green-400"
              aria-label="WhatsApp"
            >
              <MessageCircle size={22} />
              <span className="text-sm font-medium">+593 98 991 3943</span>
            </a>

            <div className="flex items-center gap-2 text-white/40">
              <Music size={20} />
              <span className="text-sm">TikTok próximamente</span>
            </div>
          </div>

          <div className="text-sm text-white/50">
            © 2026 Sphaera Club. Todos los derechos reservados.
          </div>
        </div>
      </footer>

      {/* Botón flotante de WhatsApp */}
      <a
        href="https://wa.me/593989913943?text=Hola%2C%20quiero%20informaci%C3%B3n%20sobre%20Sphaera%20Club"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat por WhatsApp"
        className="fixed bottom-5 right-5 z-50 flex items-center gap-3 rounded-full bg-green-500 px-4 py-3 text-white shadow-lg transition hover:scale-105 hover:bg-green-600"
      >
        <MessageCircle size={24} />
        <span className="hidden sm:inline text-sm font-semibold">
          WhatsApp
        </span>
      </a>
    </>
  );
}