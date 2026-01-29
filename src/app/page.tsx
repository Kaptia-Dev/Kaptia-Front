"use client";

import Header from "./components/Header";
import SplitText from "./components/SplitText";
import { motion } from "framer-motion";

import { ArrowDownIcon } from "@heroicons/react/16/solid";

export default function Home() {
  return (
    <div className="h-full flex flex-col justify-between">
      <Header />
      <main className="flex flex-col flex-1">
        {/* Hero */}
        <section
          id="hero"
          className="h-screen flex flex-col md:flex-row items-center justify-center relative bg-primary-blue-500 px-5 md:px-24"
        >
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
            className="rounded-full bg-secondary-blue-300 flex items-center justify-center absolute bottom-10 p-6 shadow cursor-pointer group hover:bg-custom-yellow-400 transition-colors duration-300 z-10"
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
        <section
          id="section-1"
          className="h-screen bg-primary-blue-500 px-5 md:px-24 flex flex-col items-center justify-center"
        >
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
        <section
          id="section-2"
          className="h-screen bg-white px-5 md:px-24 items-center justify-center flex flex-col gap-10"
        >
          <span className="text-secondary-blue-300 font-extralight text-center text-2xl md:text-5xl animate-slide-in-bottom">
            Así nace
          </span>
          <img
            className="animate-slide-in-bottom"
            src="./logoAzul.webp"
            alt="Logo Azul de Kaptia"
          />
          <p className="text-primary-blue-500 font-extrabold text-center text-2xl md:text-5xl animate-slide-in-bottom">
            Un sistema inteligente de prospección y <br />
            gestión comercial diseñada para hacer el <br />
            proceso de ventas más <br />
            <span className="text-yellow-400 italic animate-slide-in-bottom">
              fácil y rápido
            </span>
          </p>
          <img
            className="animate-slide-in-bottom"
            src="./clock.png"
            alt="Imagen de un reloj"
          />
        </section>

        {/* Section 03 */}
        <section
          id="section-3"
          className="h-screen bg-secondary-blue-300 px-5 md:px-24 flex flex-col relative items-center justify-center gap-14"
        >
          <img
            className="absolute top-10 left-10 h-24"
            src="./logoReducido.png"
            alt="Logo reducido de Kaptia"
          />
          <div className="flex flex-col md:flex-row gap-14 items-center justify-center">
            <div className="flex flex-col gap-4">
              <h2 className="text-white font-bold text-3xl md:text-5xl italic text-center">
                Encuentra oportunidades <br />
                reales de venta
              </h2>
              <p className="text-white text-2xl font-extralight text-center">
                Visualiza clientes potenciales del sector con datos <br />
                oficiales y planea mejor tus visitas
              </p>
            </div>
            <img
              className="h-82 shadow-2xl rounded-2xl"
              src="./figura_8.webp"
              alt="Imagen relacionada con oportunidades de venta"
            />
          </div>
          <div className="flex flex-col md:flex-row gap-14 items-center justify-center">
            <img
              className="order-2 md:order-1 w-56 h-auto shadow-2xl rounded-2xl"
              src="./figura_9.webp"
              alt=""
            />
            <div className="flex flex-col gap-4 order-1 md:order-2">
              <h2 className="text-white font-bold text-3xl md:text-5xl italic text-center">
                Un agente de ventas para <br />
                tu vendedor
              </h2>
              <p className="text-white text-2xl font-extralight text-center">
                KaptiaBot analiza tu base de datos, <br />
                prioriza prospectos y sugiere acciones <br />
                para que tu equipo venda mejor y con <br />
                menos esfuerzo
              </p>
            </div>
          </div>
        </section>

        {/* Section 04 */}
        <section
          id="section-4"
          className="h-screen bg-white px-5 md:px-24 flex flex-col md:flex-row items-center justify-center"
        >
          <div className="flex flex-col gap-14">
            <p className="text-custom-yellow-400 font-extrabold text-2xl md:text-6xl">
              ¿Eres una empresa <br /> mexicana de la industria <br />
              manufacturera que aún <br />
              no cuenta con <br />
              herramientas de <br />
              prospección de clientes?
            </p>
            <div>
              <span className="bg-primary-blue-500 text-white text-center px-6 py-4 rounded-full font-bold uppercase text-[1.2rem] md:text-2xl">
                Únete a early partners
              </span>
            </div>
          </div>
          <div>
            <img
              className="w-148 h-auto"
              src="./figura_2.png"
              alt="Figura de 2 rectángulos de colores y un texto en el centro que dice Join Us"
            />
          </div>
          <div></div>
        </section>

        {/* Section 05 */}
        <section
          id="section-5"
          className="h-[90vh] bg-white px-5 md:px-24 items-center justify-center flex flex-col"
        >
          <p className="text-center text-5xl">
            <span className="text-custom-yellow-400 italic font-bold">
              Juntos podemos llevar
            </span>
            <br />
            <span className="text-primary-blue-500 font-bold">la digitalización y las ventas inteligentes</span>
            <br />
            <span className="text-primary-blue-500 font-extralight">al alcance de todas las</span>
            <br />
            <span className="font-bold text-6xl text-secondary-blue-300">PyMEs</span>
            <br />
            <span className="text-secondary-blue-300 italic font-bold">creando un ecosistema más</span>
            <br />
            <span className="text-custom-yellow-400 italic font-bold">eficiente, moderno y conectado</span>
          </p>
        </section>
      </main>
    </div>
  );
}
