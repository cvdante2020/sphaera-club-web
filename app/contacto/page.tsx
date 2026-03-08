"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";

export default function Contacto() {
  const [form, setForm] = useState({
    nombre: "",
    liga: "",
    telefono: "",
    email: "",
    mensaje: "",
  });
const router = useRouter();
  const [enviando, setEnviando] = useState(false);
  const [estado, setEstado] = useState<{
    tipo: "success" | "error" | "";
    mensaje: string;
  }>({
    tipo: "",
    mensaje: "",
  });

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  }

  async function enviar(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    setEnviando(true);
    setEstado({ tipo: "", mensaje: "" });

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      if (!res.ok) {
        throw new Error("No se pudo enviar el mensaje");
      }
if (!res.ok) {
  throw new Error("No se pudo enviar el mensaje");
}

setEstado({
  tipo: "success",
  mensaje:
    "Gracias por tu interés en Sphaera Club. Te contactaremos muy pronto.",
});

setForm({
  nombre: "",
  liga: "",
  telefono: "",
  email: "",
  mensaje: "",
});

setTimeout(() => {
  router.push("/");
}, 3000);

      setForm({
        nombre: "",
        liga: "",
        telefono: "",
        email: "",
        mensaje: "",
      });
    } catch (error) {
      setEstado({
        tipo: "error",
        mensaje:
          "Hubo un problema al enviar tu mensaje. Por favor intenta nuevamente o escríbenos por WhatsApp.",
      });
    } finally {
      setEnviando(false);
    }
  }

  return (
    <section id="contacto" className="relative py-20">
      <div className="container-sphaera">
        <div className="mx-auto max-w-4xl rounded-[2rem] border border-white/10 bg-white/5 p-10 backdrop-blur">
          <h2 className="text-4xl font-bold text-white">Contáctanos</h2>

          <p className="mt-3 text-white/70">
            Si tienes una liga barrial o un equipo interesado en utilizar
            Sphaera Club, déjanos tus datos y te contactaremos.
          </p>

          <form onSubmit={enviar} className="mt-10 grid gap-6 md:grid-cols-2">
            <input
              name="nombre"
              placeholder="Nombre"
              value={form.nombre}
              onChange={handleChange}
              className="input"
              required
            />

            <input
              name="liga"
              placeholder="Nombre de la liga"
              value={form.liga}
              onChange={handleChange}
              className="input"
            />

            <input
              name="telefono"
              placeholder="Teléfono / WhatsApp"
              value={form.telefono}
              onChange={handleChange}
              className="input"
              required
            />

            <input
              name="email"
              placeholder="Email"
              type="email"
              value={form.email}
              onChange={handleChange}
              className="input"
            />

            <textarea
              name="mensaje"
              placeholder="Mensaje"
              value={form.mensaje}
              onChange={handleChange}
              className="input h-28 md:col-span-2"
            />

            {estado.mensaje && (
              <div
                className={`rounded-xl border px-4 py-3 text-sm md:col-span-2 ${
                  estado.tipo === "success"
                    ? "border-green-400/30 bg-green-500/10 text-green-200"
                    : "border-red-400/30 bg-red-500/10 text-red-200"
                }`}
              >
                {estado.mensaje}
              </div>
            )}

            <div className="flex gap-4 md:col-span-2">
              <button
                type="submit"
                disabled={enviando}
                className="rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-500 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {enviando ? "Enviando..." : "Enviar mensaje"}
              </button>

              <a
                href="https://wa.me/593963203102"
                target="_blank"
                rel="noreferrer"
                className="rounded-xl bg-green-600 px-6 py-3 font-semibold text-white transition hover:bg-green-500"
              >
                WhatsApp
              </a>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}