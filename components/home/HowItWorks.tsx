import Image from "next/image";

const steps = [
  {
    title: "1. Crea tu liga o tu equipo",
    text: "Regístrate en pocos pasos con una experiencia simple y guiada.",
    image: "/images/system/step1.jpg",
  },
  {
    title: "2. Configura o completa la información",
    text: "Define reglas, fechas, canchas, jugadores y datos básicos.",
    image: "/images/system/step2.jpg",
  },
  {
    title: "3. Administra el campeonato",
    text: "Controla partidos, sanciones, vocalías, estadísticas y reportes.",
    image: "/images/system/step3.jpg",
  },
];

export default function HowItWorks() {
  return (
    <section id="como-funciona" className="relative py-16 md:py-20">
      <div className="container-sphaera">

        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.3em] text-emerald-300">
            Cómo funciona
          </p>

          <h2 className="mt-4 text-3xl font-extrabold text-white md:text-4xl">
            Un sistema simple desde el primer día
          </h2>
        </div>

        <div className="mt-14 grid gap-10 md:grid-cols-3">

          {steps.map((step) => (
            <div
              key={step.title}
              className="group overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 shadow-xl transition hover:-translate-y-1 hover:border-blue-400/30"
            >
              <div className="relative h-[220px] w-full overflow-hidden">
                <Image
                  src={step.image}
                  alt={step.title}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-105"
                />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-white">
                  {step.title}
                </h3>

                <p className="mt-3 text-white/70 leading-7">
                  {step.text}
                </p>
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}