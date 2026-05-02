export default function StadiumStrip() {
  const items = [
    {
      icon: "🏟️",
      title: "Canchas y estadios",
      text: "Organiza escenarios, horarios y fechas sin enredos.",
    },
    {
      icon: "📋",
      title: "Vocalías digitales",
      text: "Registra novedades, sanciones y resultados por partido.",
    },
    {
      icon: "🥇",
      title: "Premios y sorteos",
      text: "Da más valor al campeonato con incentivos visibles.",
    },
  ];

  return (
    <section className="py-8 md:py-12">
      <div className="container-sphaera">
        <div className="grid gap-4 md:grid-cols-3">
          {items.map((item) => (
            <div
              key={item.title}
              className="rounded-3xl border border-white/10 bg-gradient-to-br from-slate-900 to-slate-950 p-6 shadow-xl"
            >
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-600/15 text-3xl">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-white">{item.title}</h3>
              <p className="mt-3 text-white/65">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}