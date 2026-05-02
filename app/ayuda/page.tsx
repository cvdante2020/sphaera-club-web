"use client";

import { useMemo, useState } from "react";
import { helpArticles, helpCategories } from "../../lib/help/help-articles";

export default function HelpPage() {
  const [query, setQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("Todas");

  const filteredArticles = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    return helpArticles.filter((article) => {
      const matchesCategory =
        selectedCategory === "Todas" || article.category === selectedCategory;

      const searchableText = [
        article.title,
        article.category,
        article.summary,
        ...article.keywords,
        ...article.steps,
      ]
        .join(" ")
        .toLowerCase();

      const matchesQuery =
        !normalizedQuery || searchableText.includes(normalizedQuery);

      return matchesCategory && matchesQuery;
    });
  }, [query, selectedCategory]);

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <section className="border-b border-white/10 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.35),transparent_35%),linear-gradient(180deg,#020617,#0f172a)]">
        <div className="container-sphaera py-16">
          <div className="max-w-4xl">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-300">
              Centro de ayuda
            </p>

            <h1 className="mt-4 text-4xl font-extrabold tracking-tight md:text-6xl">
              Guía rápida del sistema
            </h1>

            <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-300">
              Encuentra pasos claros para usar torneos, equipos, jugadores,
              vocalías, carnets, finanzas y reportes.
            </p>

            <div className="mt-8 rounded-3xl border border-white/10 bg-white/10 p-3 shadow-2xl shadow-blue-950/30 backdrop-blur">
              <input
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Buscar: crear torneo, imprimir vocalía, registrar pago..."
                className="w-full rounded-2xl border border-white/10 bg-white px-5 py-4 text-base text-slate-900 outline-none placeholder:text-slate-400 focus:border-blue-400 focus:ring-4 focus:ring-blue-500/20"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="container-sphaera py-10">
        <div className="flex gap-3 overflow-x-auto pb-3">
          <button
            type="button"
            onClick={() => setSelectedCategory("Todas")}
            className={`whitespace-nowrap rounded-2xl px-4 py-3 text-sm font-semibold transition ${
              selectedCategory === "Todas"
                ? "bg-blue-500 text-white"
                : "border border-white/10 bg-white/5 text-slate-300 hover:bg-white/10"
            }`}
          >
            Todas
          </button>

          {helpCategories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setSelectedCategory(category)}
              className={`whitespace-nowrap rounded-2xl px-4 py-3 text-sm font-semibold transition ${
                selectedCategory === category
                  ? "bg-blue-500 text-white"
                  : "border border-white/10 bg-white/5 text-slate-300 hover:bg-white/10"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          {filteredArticles.map((article) => (
            <article
              key={article.id}
              className="rounded-3xl border border-white/10 bg-white/[0.06] p-6 shadow-xl shadow-black/20 transition hover:-translate-y-1 hover:border-blue-400/40 hover:bg-white/[0.08]"
            >
              <div className="flex flex-wrap items-center gap-3">
                <span className="rounded-full border border-blue-400/30 bg-blue-500/10 px-3 py-1 text-xs font-semibold text-blue-200">
                  {article.category}
                </span>
                <span className="text-xs text-slate-400">
                  {article.steps.length} pasos
                </span>
              </div>

              <h2 className="mt-4 text-2xl font-bold text-white">
                {article.title}
              </h2>

              <p className="mt-2 text-sm leading-6 text-slate-300">
                {article.summary}
              </p>

              <ol className="mt-5 space-y-3">
                {article.steps.map((step, index) => (
                  <li key={step} className="flex gap-3 text-sm text-slate-200">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-blue-500 text-xs font-bold text-white">
                      {index + 1}
                    </span>
                    <span className="pt-1">{step}</span>
                  </li>
                ))}
              </ol>
            </article>
          ))}
        </div>

        {!filteredArticles.length ? (
          <div className="mt-12 rounded-3xl border border-white/10 bg-white/[0.06] p-10 text-center">
            <h2 className="text-2xl font-bold">No encontramos esa guía</h2>
            <p className="mt-2 text-slate-300">
              Prueba buscando por palabras como torneo, jugador, vocalía,
              carnet, pago o reporte.
            </p>
          </div>
        ) : null}
      </section>
    </main>
  );
}