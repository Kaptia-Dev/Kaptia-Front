"use client";

import React, { useEffect, useState } from "react";

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const linkClass =
    "relative px-2 py-1 transition-colors duration-300 hover:text-custom-yellow-400 " +
    "after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-custom-yellow-400 " +
    "after:transition-all after:duration-300 hover:after:w-full after:rounded-full after:content-['']";

  return (
    <header
      className={`flex justify-center items-center w-full z-50 fixed transition-all duration-300 ${
        scrolled ? "px-5 pt-6" : ""
      }`}
    >
      <nav
        className={`flex items-center w-full justify-between px-5 transition-all duration-300 ${
          scrolled
            ? "rounded-2xl backdrop-blur-[6px] py-5 bg-[#F9FCED]/70 shadow-xl"
            : "bg-transparent py-8"
        }`}
      >
        <img
          className={`${scrolled ? "h-8" : "h-10"} transition-all duration-300`}
          src="/KaptiaLogo.png"
          alt="Logo Kaptia"
        />

        <ul
          className={`flex font-bold text-custom-green-950 items-center ${
            scrolled ? "gap-16" : "gap-24"
          } transition-all duration-300`}
        >
          <li>
            <a href="#inicio" className={linkClass}>
              Inicio
            </a>
          </li>
          <li>
            <a href="#sobre-nosotros" className={linkClass}>
              Sobre Nosotros
            </a>
          </li>
          <li>
            <a href="#precios" className={linkClass}>
              Precios
            </a>
          </li>
          <li>
            <a href="#contacto" className={linkClass}>
              Contacto
            </a>
          </li>
        </ul>

        <button className="bg-custom-yellow-400 text-custom-green-950 px-5 py-2 rounded-lg relative font-semibold shadow cursor-pointer duration-400 overflow-hidden group">
          <span className="absolute bg-custom-yellow-500/40 right-full top-0 bottom-0 w-full z-0 group-hover:right-0 transition-all duration-300"></span>
          <span className="relative z-10">Iniciar Sesión</span>
        </button>
      </nav>
    </header>
  );
};

export default Header;
