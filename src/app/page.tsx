"use client";

import Header from "./components/header/Header";
import SplitText from "./components/utils/SplitText";
import { motion } from "framer-motion";

import { ArrowDownIcon } from "@heroicons/react/16/solid";

export default function Home() {
  return (
    <div className="h-full flex flex-col justify-between">
      <Header />
      <main className="flex flex-col flex-1">
        {/* Hero */}
        <section className="h-screen flex flex-col md:flex-row items-center justify-center relative bg-primary-blue-500 px-5 md:px-24">
          <div className="flex flex-col gap-10 w-full md:w-1/2 z-20">
            <SplitText
              className="font-bold text-4xl md:text-7xl text-white"
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
              Encuentra a tus clientes antes que tu competencia
            </SplitText>
            <span className="text-[1.2rem] md:text-2xl animate-slide-in-left text-white">
              Kaptia es una plataforma inteligente para equipos de ventas que
              combina prospección geolocalizada, CRM y seguimiento con
              inteligencia artificial.
            </span>
            <div>
              <button className="bg-custom-yellow-400 text-primary-blue-500 px-12 py-4 text-[1.2rem] md:text-2xl rounded-full relative font-semibold shadow cursor-pointer duration-400 overflow-hidden group">
                <span className="absolute bg-white right-full top-0 bottom-0 w-full z-0 group-hover:right-0 transition-all duration-300"></span>
                <span className="relative z-10 uppercase">Solicitar Demo</span>
              </button>
            </div>
          </div>
          <div className="hidden md:w-1/2 md:flex md:justify-end">
            <img
              className="w-130 animate-slide-in-right"
              src="./figura_1.png"
              alt="Rectangulo decorativo"
            />
          </div>
          <motion.button
            className="rounded-full bg-secondary-blue-300 flex items-center justify-center absolute bottom-10 p-6 shadow cursor-pointer group hover:bg-custom-yellow-400 transition-colors duration-300 z-100"
            animate={{ y: [0, -20, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
            onClick={() =>
              window.scrollBy({ top: window.innerHeight, behavior: "smooth" })
            }
          >
            <ArrowDownIcon className="text-custom-yellow-400 h-12 w-12 group-hover:text-primary-blue-500 transition-colors duration-300" />
          </motion.button>
        </section>

        {/* Section 01 */}
        <section className="h-screen bg-primary-blue-500 px-5 md:px-24 flex flex-col items-center justify-center">
          <div className="flex flex-col justify-center items-center gap-24">
            <img
              className="h-32 animate-slide-in-top"
              src="./figura_7.png"
              alt=""
            />
            <p className="text-2xl md:text-5xl text-white font-extralight text-center animate-slide-in-top">
              La prospección es la{" "}
              <strong className="font-extrabold text-4xl md:text-6xl">
                2°
              </strong>{" "}
              actividad que{" "}
              <span className="uppercase font-bold text-secondary-blue-300">
                <br />
                más tiempo consume
              </span>
              <span className="uppercase font-bold text-yellow-400">
                {" "}
                <br />
                en el proceso de ventas
              </span>
            </p>
            <div className="flex flex-col md:flex-row gap-10">
              <div className="animate-slide-in-left">
                <p className="font-extralight text-2xl md:text-5xl text-white">
                  Menos del{" "}
                  <strong className="font-extrabold text-secondary-blue-300 text-4xl md:text-6xl">
                    2%
                  </strong>{" "}
                  <br />
                  de las empresas <br />
                  productoras en{" "}
                  <span className="font-bold text-yellow-400">México</span>
                  <span className="font-bold text-secondary-blue-300">
                    {" "}
                    <br />
                    utilizan plataformas digitales{" "}
                  </span>
                  <span className="font-bold text-yellow-400">
                    <br />
                    para gestión comercial
                  </span>
                </p>
              </div>
              <div className="animate-slide-in-right">
                <img
                  className="h-72"
                  src="./figura_6.png"
                  alt="Figuras con un mapa de la república mexicana"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Section 02 */}
        <section className="h-screen bg-white px-5 md:px-24 items-center justify-center flex flex-col gap-10">
          <span className="text-secondary-blue-300 font-extralight text-center text-2xl md:text-5xl">Así nace</span>
          <img src="./logoAzul.webp" alt="Logo Azul de Kaptia" />
          <p className="text-primary-blue-500 font-extrabold text-center text-2xl md:text-5xl">
            Un sistema inteligente de prospección y <br />
            gestión comercial diseñada para hacer el <br />
            proceso de ventas más <br />
            <span className="text-yellow-400 italic">fácil y rápido</span>
          </p>
          <img src="./clock.png" alt="Imagen de un reloj" />
        </section>
      </main>
    </div>
  );
}
