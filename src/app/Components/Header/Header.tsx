"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import {
  Bars3Icon,
  XMarkIcon,
  UserCircleIcon,
} from "@heroicons/react/16/solid";

const Header: React.FC = () => {
  const router = useRouter();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [menuVisible, setMenuVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      setMenuVisible(true);
    } else if (menuVisible) {
      const timeout = setTimeout(() => setMenuVisible(false), 300);
      return () => clearTimeout(timeout);
    }
  }, [menuOpen, menuVisible]);

  const navLinks = [
    { name: "Inicio", href: "#inicio" },
    { name: "Sobre Nosotros", href: "#sobre-nosotros" },
    { name: "Precios", href: "#precios" },
    { name: "Contacto", href: "#contacto" },
  ];

  const linkClass =
    "relative px-2 py-1 transition-colors duration-300 hover:text-custom-yellow-400 " +
    "after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-custom-yellow-400 " +
    "after:transition-all after:duration-300 hover:after:w-full after:rounded-full after:content-['']";

  return (
    <header
      className={`flex justify-center items-center w-full z-50 fixed transition-all duration-300 ${
        scrolled ? "pt-6" : ""
      }`}
    >
      {/* Desktop Navbar */}
      <div
        className={`w-full transition-all duration-300 hidden md:flex ${
          scrolled ? "px-5" : ""
        }`}
      >
        <nav
          className={`items-center w-full justify-between px-5 transition-all duration-300 flex bg-[#FFFDD8]/80 backdrop-blur-[6px]  ${
            scrolled ? "rounded-2xl py-5 shadow-xl bg-[#FFFFF0]/60" : "py-8"
          }`}
        >
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="cursor-pointer"
            aria-label="Ir al inicio"
          >
            <img
              className={`${
                scrolled ? "h-8" : "h-10"
              } transition-all duration-300`}
              src="/KaptiaLogo.png"
              alt="Logo Kaptia"
            />
          </button>

          <ul
            className={`flex text-custom-green-950 items-center text-[1.2rem] ${
              scrolled ? "gap-16" : "gap-24"
            } transition-all duration-300`}
          >
            {navLinks.map((link, idx) => (
              <li
                key={idx}
                className="animate-slideDown"
                style={{ animationDelay: `${idx * 200}ms` }}
              >
                <a href={link.href} className={linkClass}>
                  {link.name}
                </a>
              </li>
            ))}
          </ul>

          <button
            className="bg-custom-yellow-400 text-custom-green-950 px-5 py-2 text-[1.2rem] rounded-lg relative font-semibold shadow cursor-pointer duration-400 overflow-hidden group"
            onClick={() => router.push("/auth")}
          >
            <span className="absolute bg-custom-yellow-500/40 right-full top-0 bottom-0 w-full z-0 group-hover:right-0 transition-all duration-300"></span>
            <span className="relative z-10">Iniciar Sesión</span>
          </button>
        </nav>
      </div>

      {/* Mobile Navbar */}
      <div
        className={`w-full md:hidden duration-300 transition-all ${
          scrolled ? "px-5" : ""
        }`}
      >
        <nav
          className={`w-full flex justify-between px-5 transition-all duration-300 relative 
          ${
            scrolled
              ? `rounded-2xl backdrop-blur-[6px] shadow-xl py-5 bg-[#F9FCED]/70`
              : `py-8 bg-transparent`
          }`}
        >
          <button className="transition-all duration-300 hover:scale-[1.05] group">
            <UserCircleIcon className="h-8 w-8 text-custom-green-950 cursor-pointer" />
          </button>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="cursor-pointer"
            aria-label="Ir al inicio"
          >
            <img className="h-8" src="/KaptiaLogo.png" alt="Logo Kaptia" />
          </button>
          <button
            className="transition-all duration-300 hover:scale-[1.05] relative w-8 h-8"
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            <span
              className={`absolute inset-0 flex items-center justify-center transition-all duration-300 ease-in-out
                ${menuOpen ? "opacity-0 scale-90" : "opacity-100 scale-100"}
              `}
            >
              <Bars3Icon className="h-8 w-8 text-custom-green-950 cursor-pointer" />
            </span>
            <span
              className={`absolute inset-0 flex items-center justify-center transition-all duration-300 ease-in-out
                ${menuOpen ? "opacity-100 scale-100" : "opacity-0 scale-90"}
              `}
            >
              <XMarkIcon className="h-8 w-8 text-custom-green-950 cursor-pointer" />
            </span>
          </button>

          {menuVisible && (
            <div className="absolute w-full right-0 top-22">
              <ul
                className={`shadow-xl py-5 bg-custom-yellow-400 text-center text-custom-green-950 text-[1.2rem] flex flex-col gap-4 transition-all duration-300
              ${menuOpen ? "animate-slideDown" : "animate-slideUp"} ${
                  scrolled ? "rounded-2xl" : ""
                }
              `}
              >
                {navLinks.map((link, idx) => (
                  <li key={idx}>
                    <a href={link.href}>{link.name}</a>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Header;
