import Link from "next/link";

export default function CTA() {
  return (
    <section className="py-20">
      <div className="container-sphaera">
        <div className="rounded-[2rem] border border-white/10 bg-gradient-to-r from-blue-700/30 to-green-700/30 p-10 text-center">
          <h2 className="text-3xl font-black text-white md:text-5xl">
            Lleva tu campeonato a otro nivel
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-white/75">
            Ordena tu liga, mejora la experiencia de los equipos y controla todo desde una sola plataforma.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/acceso-ligas"
              className="rounded-2xl bg-blue-600 px-6 py-3 font-bold text-white hover:bg-blue-500"
            >
              Quiero crear mi liga
            </Link>
            <Link
              href="/acceso-equipos"
              className="rounded-2xl bg-green-600 px-6 py-3 font-bold text-white hover:bg-green-500"
            >
              Quiero registrar mi equipo
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}