const items = [
  {
    title: "Gestión de campeonatos y fixture",
    icon: "⚽",
  },
  {
    title: "Cuadrangulares, grupos y playoff",
    icon: "🏆",
  },
  {
    title: "Control de sanciones y multas",
    icon: "🛡️",
  },
  {
    title: "Vocalías digitales por partido",
    icon: "📋",
  },
  {
    title: "Goleadores, tablas y reportes",
    icon: "🥇",
  },
  {
    title: "Promoción en redes y auspiciantes",
    icon: "📣",
  },
];

export default function Features() {
  return (
    <section id="beneficios" className="relative overflow-hidden py-16 md:py-20">
      <div className="absolute inset-0">
        <div className="absolute left-0 top-10 h-56 w-56 rounded-full bg-blue-500/10 blur-3xl" />
        <div className="absolute right-0 bottom-0 h-64 w-64 rounded-full bg-emerald-500/10 blur-3xl" />
      </div>

      <div className="container-sphaera relative">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.3em] text-blue-300">
            Beneficios
          </p>

          <h2 className="mt-4 text-3xl font-extrabold leading-tight text-white md:text-4xl lg:text-5xl">
            Todo lo que una liga barrial necesita para funcionar mejor
          </h2>

          <p className="mt-5 text-base leading-7 text-white/70 md:text-lg">
            Sphaera Club no solo organiza partidos. También mejora el control,
            la imagen y la experiencia de ligas y equipos.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {items.map((item) => (
            <div
              key={item.title}
              className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-xl transition duration-300 hover:-translate-y-1 hover:border-blue-400/30 hover:bg-white/7"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/8 via-transparent to-emerald-500/8 opacity-0 transition duration-300 group-hover:opacity-100" />

              <div className="relative">
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/10 text-3xl shadow-lg">
                  {item.icon}
                </div>

                <h3 className="text-xl font-bold leading-snug text-white">
                  {item.title}
                </h3>

                <p className="mt-4 text-base leading-7 text-white/65">
                  Diseñado para reducir trabajo manual, ordenar el torneo y dar
                  una mejor experiencia al dirigente y al equipo.
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}