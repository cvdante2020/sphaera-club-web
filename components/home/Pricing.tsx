export default function Pricing() {
  return (
    <section id="precios" className="relative overflow-hidden py-16 md:py-20">
      <div className="absolute inset-0">
        <div className="absolute left-10 top-10 h-56 w-56 rounded-full bg-blue-500/10 blur-3xl" />
        <div className="absolute right-0 bottom-0 h-64 w-64 rounded-full bg-emerald-500/10 blur-3xl" />
      </div>

      <div className="container-sphaera relative">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.3em] text-amber-300">
            Precios
          </p>
          <h2 className="mt-4 text-3xl font-extrabold text-white md:text-4xl lg:text-5xl">
            Un valor simple y claro
          </h2>
          <p className="mt-4 text-base leading-7 text-white/70 md:text-lg">
            Dos accesos diferenciados para ordenar la liga y facilitar la experiencia de cada equipo.
          </p>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          <div className="group relative overflow-hidden rounded-[2rem] border border-blue-400/20 shadow-2xl">
            <div
              className="absolute inset-0 bg-cover bg-center transition duration-500 group-hover:scale-105"
              style={{ backgroundImage: "url('/images/pricing-liga.jpg')" }}
            />
            <div className="absolute inset-0 bg-gradient-to-br from-slate-950/92 via-blue-950/82 to-slate-950/92" />
            <div className="absolute right-6 top-6 text-xs font-bold uppercase tracking-[0.4em] text-white/10">
              SPHAERA CLUB
            </div>

            <div className="absolute -left-4 top-1/2 h-8 w-8 -translate-y-1/2 rounded-full bg-[#07142f] border border-white/10" />
            <div className="absolute -right-4 top-1/2 h-8 w-8 -translate-y-1/2 rounded-full bg-[#07142f] border border-white/10" />

            <div className="relative z-10 flex min-h-[420px] flex-col justify-between p-8 md:p-10">
              <div>
                <div className="inline-flex rounded-full border border-blue-400/20 bg-blue-500/10 px-4 py-1 text-sm font-semibold uppercase tracking-[0.25em] text-blue-300">
                  Ligas
                </div>

                <div className="mt-6">
                  <h3 className="text-5xl font-black text-white md:text-6xl">
                    $9,99
                  </h3>
                  <p className="mt-2 text-lg text-white/75">valor anual</p>
                </div>

                <div className="mt-8 space-y-4">
                  <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white/90">
                    Gestión completa de la liga
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white/90">
                    Configuración de reglas y sanciones
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white/90">
                    Cronogramas, vocalías y reportes
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white/90">
                    Estadísticas y control del campeonato
                  </div>
                </div>
              </div>

              <div className="mt-8 flex items-center justify-between border-t border-white/10 pt-5">
                <p className="text-sm uppercase tracking-[0.25em] text-white/50">
                  Acceso dirigente
                </p>
                <span className="rounded-full bg-blue-500/15 px-4 py-2 text-sm font-semibold text-blue-300">
                  🎟️ Ticket Liga
                </span>
              </div>
            </div>
          </div>

          <div className="group relative overflow-hidden rounded-[2rem] border border-emerald-400/20 shadow-2xl">
            <div
              className="absolute inset-0 bg-cover bg-center transition duration-500 group-hover:scale-105"
              style={{ backgroundImage: "url('/images/pricing-equipo.jpg')" }}
            />
            <div className="absolute inset-0 bg-gradient-to-br from-slate-950/92 via-emerald-950/70 to-slate-950/92" />
            <div className="absolute right-6 top-6 text-xs font-bold uppercase tracking-[0.4em] text-white/10">
              SPHAERA CLUB
            </div>

            <div className="absolute -left-4 top-1/2 h-8 w-8 -translate-y-1/2 rounded-full bg-[#07142f] border border-white/10" />
            <div className="absolute -right-4 top-1/2 h-8 w-8 -translate-y-1/2 rounded-full bg-[#07142f] border border-white/10" />

            <div className="relative z-10 flex min-h-[420px] flex-col justify-between p-8 md:p-10">
              <div>
                <div className="inline-flex rounded-full border border-emerald-400/20 bg-emerald-500/10 px-4 py-1 text-sm font-semibold uppercase tracking-[0.25em] text-emerald-300">
                  Equipos
                </div>

                <div className="mt-6">
                  <h3 className="text-5xl font-black text-white md:text-6xl">
                    $0,99
                  </h3>
                  <p className="mt-2 text-lg text-white/75">mensual por equipo</p>
                </div>

                <div className="mt-8 space-y-4">
                  <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white/90">
                    Registro rápido del equipo
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white/90">
                    Gestión de jugadores y carnets
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white/90">
                    Consulta de partidos y resultados
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white/90">
                    Acceso a la información del torneo
                  </div>
                </div>
              </div>

              <div className="mt-8 flex items-center justify-between border-t border-white/10 pt-5">
                <p className="text-sm uppercase tracking-[0.25em] text-white/50">
                  Acceso equipo
                </p>
                <span className="rounded-full bg-emerald-500/15 px-4 py-2 text-sm font-semibold text-emerald-300">
                  ⚽ Ticket Equipo
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}