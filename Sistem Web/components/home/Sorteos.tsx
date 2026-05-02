import Image from "next/image";

const prizes = [
  {
    title: "Giftcards deportivas",
    text: "Tarjetas de hasta $100 para comprar en tiendas deportivas.",
    image: "/images/prizes/giftcard.jpg",
  },
  {
    title: "Entradas a la final",
    text: "Participa por entradas a la final del campeonato nacional.",
    image: "/images/prizes/stadium-tickets.jpg",
  },
  {
    title: "Balones oficiales",
    text: "Balones profesionales para los equipos ganadores.",
    image: "/images/prizes/official-ball.jpg",
  },
  {
    title: "Camisetas deportivas",
    text: "Camisetas oficiales y equipamiento para tu equipo.",
    image: "/images/prizes/football-jersey.jpg",
  },
];

export default function Sorteos() {
  return (
    <section className="relative py-16 md:py-20 overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute left-10 top-10 h-56 w-56 rounded-full bg-blue-500/10 blur-3xl" />
        <div className="absolute right-0 bottom-0 h-64 w-64 rounded-full bg-emerald-500/10 blur-3xl" />
      </div>

      <div className="container-sphaera relative">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.3em] text-yellow-300">
            Sorteos y premios
          </p>

          <h2 className="mt-4 text-3xl font-extrabold text-white md:text-4xl lg:text-5xl">
            Participa por premios cada campeonato
          </h2>

          <p className="mt-5 text-base leading-7 text-white/70 md:text-lg">
            Las ligas registradas en Sphaera Club participan en sorteos al final
            de cada campeonato con premios para equipos y jugadores.
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2 xl:grid-cols-4">

          {prizes.map((prize) => (
            <div
              key={prize.title}
              className="group relative overflow-hidden rounded-[2rem] border border-white/10 shadow-2xl"
            >
              <div className="absolute inset-0">
                <Image
                  src={prize.image}
                  alt={prize.title}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-110"
                />
              </div>

              <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/40 to-black/85" />

              <div className="relative z-10 flex min-h-[300px] flex-col justify-end p-6">
                <h3 className="text-xl font-bold text-white">
                  {prize.title}
                </h3>

                <p className="mt-2 text-sm text-white/80 leading-6">
                  {prize.text}
                </p>
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}