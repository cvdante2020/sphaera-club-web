"use client";

import { useEffect, useState } from "react";

const slides = [
  "/images/ad-1.jpg",
  "/images/ad-2.jpg",
  "/images/ad-3.jpg",
];

export default function AdSlider() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 3500);

    return () => clearInterval(interval);
  }, []);

  const goToSlide = (index: number) => {
    setCurrent(index);
  };

  return (
    <section className="py-12 md:py-16">
      <div className="container-sphaera">
        <div className="mb-8 text-center">
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-blue-300">
            Publicidad y promoción
          </p>
          <h2 className="mt-3 text-3xl font-bold text-white md:text-4xl">
            Espacios visuales para auspiciantes y campañas
          </h2>
        </div>

        <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 shadow-2xl">
          <div className="relative h-[260px] md:h-[420px]">
            {slides.map((slide, index) => (
              <div
                key={slide}
                className={`absolute inset-0 transition-opacity duration-1000 ${
                  current === index ? "opacity-100" : "opacity-0"
                }`}
                style={{
                  backgroundImage: `url(${slide})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-slate-950/75 via-slate-950/30 to-slate-950/55" />
              </div>
            ))}

            <div className="relative z-10 flex h-full items-end p-6 md:p-10">
              <div className="max-w-xl rounded-3xl border border-white/10 bg-black/25 p-5 backdrop-blur">
                <p className="text-sm uppercase tracking-[0.25em] text-blue-300">
                  Sphaera Club
                </p>
                <h3 className="mt-2 text-2xl font-bold text-white md:text-3xl">
                  Más visibilidad para tu liga y tus auspiciantes
                </h3>
                <p className="mt-3 text-sm leading-6 text-white/80 md:text-base">
                  Activa banners, promociones, sorteos y presencia comercial dentro de tu campeonato.
                </p>
              </div>
            </div>
          </div>

          <div className="absolute bottom-4 right-4 z-20 flex gap-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`h-3 w-3 rounded-full transition ${
                  current === index ? "bg-white" : "bg-white/40"
                }`}
                aria-label={`Ir al banner ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}