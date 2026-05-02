import Link from "next/link";

const features = [
  {
    title: "Menos de 1 minuto",
    subtitle: "Onboarding rápido",
    icon: "⚡",
    glow: "from-blue-500/30 to-cyan-400/10",
  },
  {
    title: "Cuadrangular / Playoff",
    subtitle: "Gestión flexible",
    icon: "🏆",
    glow: "from-emerald-500/25 to-lime-400/10",
  },
  {
    title: "Sanciones y vocalías",
    subtitle: "Control total",
    icon: "🛡️",
    glow: "from-sky-500/25 to-blue-400/10",
  },
  {
    title: "Promoción y auspiciantes",
    subtitle: "Mayor visibilidad",
    icon: "📣",
    glow: "from-amber-400/25 to-yellow-300/10",
  },
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden py-12 md:py-16">
      <div className="absolute inset-0">
        <div className="absolute left-[-120px] top-20 h-72 w-72 rounded-full bg-blue-600/15 blur-3xl" />
        <div className="absolute right-[-80px] top-10 h-80 w-80 rounded-full bg-cyan-400/10 blur-3xl" />
        <div className="absolute bottom-[-100px] left-1/3 h-80 w-80 rounded-full bg-emerald-500/10 blur-3xl" />
      </div>

      <div className="container-sphaera relative grid items-center gap-10 lg:grid-cols-2">
        <div>
          <span className="inline-flex rounded-full border border-blue-400/30 bg-blue-500/10 px-4 py-1 text-sm font-medium text-blue-300 shadow-[0_0_25px_rgba(59,130,246,0.15)]">
            Tu pasión por el fútbol, ahora con más orden y control
          </span>

          <h1 className="mt-6 max-w-3xl text-3xl font-extrabold leading-tight text-white sm:text-4xl md:text-5xl lg:text-4xl">
            El sistema para <span className="text-blue-400">ligas barriales</span> que
            organiza campeonatos, equipos y estadísticas en un solo lugar
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-8 text-white/75 md:text-lg">
            Crea tu liga, administra tus equipos, controla sanciones, vocalías,
            cronogramas, goleadores, auspiciantes y sorteos con una experiencia
            rápida, clara y fácil de usar.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/acceso-ligas"
              className="rounded-2xl bg-blue-600 px-6 py-3 text-base font-bold text-white shadow-[0_0_30px_rgba(37,99,235,0.35)] transition hover:scale-[1.02] hover:bg-blue-500"
            >
              Crear / ingresar como Liga
            </Link>

            <Link
              href="/acceso-equipos"
              className="rounded-2xl bg-green-600 px-6 py-3 text-base font-bold text-white shadow-[0_0_30px_rgba(22,163,74,0.35)] transition hover:scale-[1.02] hover:bg-green-500"
            >
              Crear / ingresar como Equipo
            </Link>
          </div>

          <div className="mt-8 flex flex-wrap gap-3 text-sm text-white/70">
            <div className="rounded-full border border-white/10 bg-white/5 px-4 py-2">
              ⚽ Fixture automático
            </div>
            <div className="rounded-full border border-white/10 bg-white/5 px-4 py-2">
              🥅 Goleadores y posiciones
            </div>
            <div className="rounded-full border border-white/10 bg-white/5 px-4 py-2">
              📅 Fechas y cronogramas
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -left-8 top-10 hidden h-24 w-24 rounded-full border border-white/10 bg-white/5 blur-sm lg:block" />
          <div className="absolute -right-6 bottom-8 hidden h-20 w-20 rounded-full border border-emerald-400/20 bg-emerald-400/10 blur-sm lg:block" />

          <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-5 shadow-2xl backdrop-blur md:p-6">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.10),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(34,197,94,0.10),transparent_35%)]" />

            <div className="relative mb-5 flex items-center justify-between">
              <div>
                <p className="text-xs uppercase tracking-[0.25em] text-blue-300/80">
                  Panel destacado
                </p>
                <h3 className="mt-2 text-xl font-bold text-white">
                  Sphaera Club
                </h3>
              </div>

              <div className="rounded-full border border-amber-400/20 bg-amber-400/10 px-3 py-1 text-xs font-semibold text-amber-300">
                ⚽ Liga activa
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {features.map((item) => (
                <div
                  key={item.title}
                  className={`group relative overflow-hidden rounded-3xl border border-white/8 bg-slate-950/70 p-5 transition hover:-translate-y-1 hover:border-white/15`}
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${item.glow} opacity-80`} />
                  <div className="relative">
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/10 text-2xl shadow-lg">
                      {item.icon}
                    </div>

                    <p className="text-sm text-white/60">{item.subtitle}</p>
                    <p className="mt-2 text-xl font-bold leading-snug text-white">
                      {item.title}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="relative mt-5 rounded-2xl border border-white/8 bg-slate-950/60 p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-white/60">Vista rápida</p>
                  <p className="mt-1 text-lg font-semibold text-white">
                    12 equipos • 3 canchas • 1 torneo activo
                  </p>
                </div>
                <div className="text-3xl">🏟️</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}