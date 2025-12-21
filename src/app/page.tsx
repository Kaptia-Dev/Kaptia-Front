"use client";

import Header from "./components/header/Header";

export default function Home() {
  return (
    <div className="flex flex-col justify-between h-screen bg-[#fffdd8]">
      <Header />
      <main className="flex flex-col flex-1 px-5 md:px-24">
        <section className="h-screen flex flex-col md:flex-row items-center justify-center">
          <div className="flex flex-col gap-4 w-1/2">
            <h1 className="uppercase font-bold text-6xl md:text-8xl">
              Datos que <span className="text-custom-yellow-400">cultivan</span>{" "}
              ventas
            </h1>
            <span className="text-2xl">
              Tu plataforma integral para la gestión y optimización de recursos
              agrícolas
            </span>
          </div>
          <div className="w-1/2">Círculos</div>
        </section>
        <section>
          <p>
            Tu mejor opción de agente inteligente para impulsar la venta de
            fertilizantes orgánicos a base de sargazo. Utilizamos datos y
            análisis inteligente para prospectar clientes y hacer seguimiento a
            cada venta.
          </p>
        </section>
      </main>
      <footer className="bg-custom-yellow-400">Footer aquí</footer>
    </div>
  );
}
