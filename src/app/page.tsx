"use client";

import Header from "./components/header/Header";
import SplitText from "./components/utils/SplitText";
import { motion } from "framer-motion";

import { ArrowDownIcon } from "@heroicons/react/16/solid";

export default function Home() {
  return (
    <div className="h-full flex flex-col justify-between bg-[#fffdd8]">
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
            <span className="text-[1.2rem] md:text-2xl animate-slide-in-left">
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
            onClick={() => {
              const section = document.getElementById("sobre-nosotros");
              if (section) {
                section.scrollIntoView({ behavior: "smooth" });
              }
            }}
          >
            <ArrowDownIcon className="text-custom-yellow-400 h-12 w-12" />
          </motion.button>
        </section>
        <section
          className="min-h-screen flex flex-col-reverse md:flex-row items-center justify-center px-4 md:px-0 py-10 md:py-0 gap-8 md:gap-0"
          id="sobre-nosotros"
        >
          <div className="w-full md:w-1/2 flex flex-col gap-6 md:gap-10 items-center md:items-start text-center md:text-left">
            <h2 className="text-3xl sm:text-4xl md:text-6xl lg:text-8xl font-bold text-custom-green-950">
              ¿Quiénes Somos?
            </h2>
            <p className="text-custom-green-950 text-base sm:text-lg md:text-2xl max-w-xl">
              Tu mejor opción de agente inteligente para impulsar la venta de
              fertilizantes orgánicos a base de sargazo. Utilizamos datos y
              análisis inteligente para prospectar clientes y hacer seguimiento
              a cada venta.
            </p>
          </div>
          <div className="w-full md:w-1/2 flex items-center justify-center gap-4 md:gap-8 relative">
            <img
              className="h-32 sm:h-44 md:h-78 -mt-4 md:-mt-7.5"
              src="/left-deco.png"
              alt="Imágen izquierda"
            />
            <img
              className="h-32 sm:h-44 md:h-78 -mb-4 md:-mb-7.5"
              src="/right-deco.png"
              alt="Imágen derecha"
            />
          </div>
        </section>
      </main>
    </div>
  );
}
