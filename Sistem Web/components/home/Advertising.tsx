export default function Advertising() {
  const ads = [
    {
      title: "Tu marca aquí",
      subtitle: "Espacio para auspiciantes de la liga",
      description:
        "Muestra promociones, marcas deportivas, locales aliados o campañas del campeonato.",
      bg: "from-red-500/80 to-orange-400/70",
    },
    {
      title: "Promoción de campeonato",
      subtitle: "Difusión de fechas, sorteos y premios",
      description:
        "Comunica sorteos, giftcards, balones oficiales, premios y activaciones para equipos y aficionados.",
      bg: "from-blue-500/80 to-cyan-400/70",
    },
    {
      title: "Impulsa tu liga",
      subtitle: "Mayor visibilidad en redes",
      description:
        "Haz que tu campeonato se vea más profesional con banners, presencia de marca y contenidos patrocinados.",
      bg: "from-slate-700/90 to-slate-500/80",
    },
  ];

  return (
    <section id="publicidad" className="py-20">
      <div className="container-sphaera">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-blue-300">
            Publicidad y promoción
          </p>
          <h2 className="mt-4 text-3xl font-black text-white md:text-5xl">
            Tu liga también puede generar presencia comercial
          </h2>
          <p className="mt-4 text-white/70">
            Sphaera Club no solo organiza el torneo. También permite destacar auspiciantes,
            promociones y campañas visuales dentro de la plataforma.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {ads.map((ad) => (
            <div
              key={ad.title}
              className={`rounded-3xl bg-gradient-to-br ${ad.bg} min-h-[280px] overflow-hidden p-6 shadow-xl`}
            >
              <div className="flex h-full flex-col justify-between rounded-2xl bg-black/20 p-5 backdrop-blur-sm">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-widest text-white/80">
                    {ad.subtitle}
                  </p>
                  <h3 className="mt-3 text-3xl font-black text-white">{ad.title}</h3>
                </div>

                <p className="mt-6 text-sm leading-6 text-white/90">
                  {ad.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}