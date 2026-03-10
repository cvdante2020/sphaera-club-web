import { Facebook, Instagram, Music } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#020e28] py-10">
      <div className="container-sphaera flex flex-col gap-6 md:flex-row md:items-center md:justify-between">

        <div>
          <h3 className="text-lg font-semibold text-white">
            Sphaera Club
          </h3>

          <p className="mt-2 text-sm text-white/60">
            Sistema web para ligas barriales de fútbol, Clubes, Escueles de Futbol y Colegios.
          </p>
        </div>

        <div className="flex items-center gap-6">

          <a
            href="https://www.facebook.com/profile.php?id=61582648748403&locale=es_LA"
            target="_blank"
            className="text-white/70 transition hover:text-blue-400"
          >
            <Facebook size={22}/>
          </a>

          <a
            href="https://instagram.com"
            target="_blank"
            className="text-white/70 transition hover:text-pink-400"
          >
            <Instagram size={22}/>
          </a>

          <div className="flex items-center gap-2 text-white/40">
            <Music size={20}/>
            <span className="text-sm">TikTok próximamente</span>
          </div>

        </div>

        <div className="text-sm text-white/50">
          © 2026 Sphaera Club. Todos los derechos reservados.
        </div>

      </div>
    </footer>
  );
}