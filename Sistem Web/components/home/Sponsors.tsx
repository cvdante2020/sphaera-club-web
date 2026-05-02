export default function Sponsors() {
  const items = [
    "Marcas deportivas",
    "Tiendas locales",
    "Restaurantes y auspiciantes",
    "Promociones del campeonato",
  ];

  return (
    <section id="auspiciantes" className="py-20">
      <div className="container-sphaera rounded-3xl border border-white/10 bg-white/5 p-10">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-green-300">
            Auspiciantes
          </p>
          <h2 className="mt-4 text-3xl font-black text-white md:text-5xl">
            Un espacio para darle más valor a cada campeonato
          </h2>
          <p className="mt-4 text-white/70">
            Integra marcas, promociones y aliados estratégicos para hacer crecer la liga
            y mejorar su imagen frente a equipos, jugadores y aficionados.
          </p>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-4">
          {items.map((item) => (
            <div
              key={item}
              className="rounded-2xl border border-white/10 bg-slate-900/70 p-5 text-center text-white/85"
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}