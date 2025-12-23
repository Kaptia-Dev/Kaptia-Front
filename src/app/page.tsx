"use client";

import Header from "./components/header/Header";
import SplitText from "./components/utils/SplitText";
import { motion } from "framer-motion";

import { ArrowDownIcon } from "@heroicons/react/16/solid";

export default function Home() {
  return (
    <div className="flex flex-col justify-between h-screen bg-[#fffdd8]">
      <Header />
      <main className="flex flex-col flex-1 px-5 md:px-24">
        <section className="h-screen flex flex-col md:flex-row items-center justify-center relative">
          <div className="flex flex-col gap-4 w-full md:w-1/2">
            <SplitText
              className="uppercase font-bold text-6xl md:text-8xl"
              delay={100}
              duration={0.6}
              ease="power3.out"
              splitType="chars"
              from={{ opacity: 0, y: 40 }}
              to={{ opacity: 1, y: 0 }}
              threshold={0.1}
              rootMargin="-100px"
              textAlign="left"
            >
              Datos que <span className="text-custom-yellow-400">cultivan</span>{" "}
              ventas
            </SplitText>
            <span className="text-2xl animate-slide-in-left">
              Tu plataforma integral para la gestión y optimización de recursos
              agrícolas
            </span>
          </div>
          <div className="w-1/2 hidden md:block">
            <div className="rounded-full bg-custom-green-950 h-200 w-200 relative shadow animate-slide-in-right">
              <div className="rounded-full absolute bg-custom-yellow-400/95 w-160 h-160 -left-8 -bottom-8 shadow animate-slide-in-bottom"></div>
            </div>
          </div>
          <motion.button
            className="rounded-full bg-custom-green-950 flex items-center justify-center absolute bottom-10 p-6 shadow cursor-pointer"
            animate={{ y: [0, -20, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          >
            <ArrowDownIcon className="text-custom-yellow-400 h-12 w-12" />
          </motion.button>
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
    </div>
  );
}
