import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sphaera Club | Sistema para ligas barriales de fútbol",
  description:
    "Plataforma web para ligas barriales de fútbol: gestión de campeonatos, equipos, sanciones, vocalías, estadísticas, sorteos y promoción.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}