import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/70 shadow-[0_10px_40px_rgba(0,0,0,0.25)] backdrop-blur">
      <div className="container-sphaera flex h-18 items-center justify-between py-3">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/images/logo-sphaera.png"
            alt="Sphaera Club"
            width={80}
            height={80}
            className="h-14 w-14 rounded-full object-contain"
          />
          <div className="leading-tight">
            <span className="block text-3xl font-extrabold tracking-wide text-white">
              SPHAERA <span className="text-blue-400">CLUB</span>
            </span>
          </div>
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          <Link href="#beneficios" className="text-sm text-white/80 hover:text-white">
            Beneficios
          </Link>
          <Link href="#como-funciona" className="text-sm text-white/80 hover:text-white">
            Cómo funciona
          </Link>
          <Link href="#precios" className="text-sm text-white/80 hover:text-white">
            Precios
          </Link>
          <Link href="#publicidad" className="text-sm text-white/80 hover:text-white">
            Publicidad
          </Link>
          <Link href="#auspiciantes" className="text-sm text-white/80 hover:text-white">
            Auspiciantes
          </Link>
          <Link href="/contacto" className="text-sm text-white/80 hover:text-white">
            Contacto
          </Link>
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="/acceso-ligas"
            className="rounded-2xl border border-blue-400/40 bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-500"
          >
            Acceso Ligas
          </Link>

          <Link
            href="/acceso-equipos"
            className="rounded-2xl border border-green-400/40 bg-green-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-green-500"
          >
            Acceso Equipos
          </Link>
        </div>
      </div>
    </header>
  );
}