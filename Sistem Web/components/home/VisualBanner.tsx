import Link from "next/link";

export default function VisualBanner() {
  return (
    <section className="py-10 md:py-14">
      <div className="container-sphaera">
        <div className="relative overflow-hidden rounded-[2rem] border border-white/10 shadow-2xl">
          <div
            className="relative min-h-[360px] md:min-h-[430px] bg-cover bg-center"
            style={{ backgroundImage: "url('/images/stadium-banner.jpg')" }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-950/65 to-slate-950/30" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_left,rgba(37,99,235,0.18),transparent_30%),radial-gradient(circle_at_right,rgba(34,197,94,0.16),transparent_28%)]" />

            <div className="relative z-10 flex min-h-[360px] items-center px-8 py-10 md:min-h-[430px] md:px-14">
              <div className="max-w-2xl">
                <div className="inline-flex rounded-full border border-blue-400/30 bg-blue-500/10 px-4 py-1 text-sm font-medium text-blue-300">
                  Plataforma + campeonato + visibilidad
                </div>

                <h2 className="mt-5 text-3xl font-extrabold leading-tight text-white md:text-4xl">
                  Tu liga barrial merece una imagen más profesional
                </h2>

                <p className="mt-5 max-w-xl text-base leading-7 text-white/80 md:text-lg">
                  Organiza equipos, controla sanciones, programa partidos, muestra
                  goleadores, activa auspiciantes y comunica sorteos desde una sola plataforma.
                </p>

                <div className="mt-7 flex flex-wrap gap-4">
                  <Link
                    href="/acceso-ligas"
                    className="rounded-2xl bg-blue-600 px-6 py-3 text-base font-bold text-white shadow-[0_0_30px_rgba(37,99,235,0.35)] transition hover:scale-[1.02] hover:bg-blue-500"
                  >
                    Crear mi liga
                  </Link>

                  <Link
                    href="/acceso-equipos"
                    className="rounded-2xl border border-white/20 bg-white/10 px-6 py-3 text-base font-bold text-white backdrop-blur transition hover:bg-white/15"
                  >
                    Registrar equipo
                  </Link>
                </div>

                <div className="mt-7 flex flex-wrap gap-3">
                  <span className="rounded-full border border-white/10 bg-black/20 px-4 py-2 text-sm text-white/75">
                    ⚽ Fixture automático
                  </span>
                  <span className="rounded-full border border-white/10 bg-black/20 px-4 py-2 text-sm text-white/75">
                    🏟️ Control por cancha
                  </span>
                  <span className="rounded-full border border-white/10 bg-black/20 px-4 py-2 text-sm text-white/75">
                    📣 Promoción y auspiciantes
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}