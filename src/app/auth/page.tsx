"use client";
import SplitText from "../components/utils/SplitText";

import React from "react";

export default function LoginPage() {
  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-white">
      <div className="hidden md:flex w-1/2 items-center justify-center relative ">
        <div className="absolute -left-1/3 -top-1/7 h-[120%] w-[140%] bg-primary-blue-500 rounded-r-full flex items-center justify-center animate-slide-in-left">
          <SplitText
            className="text-white font-extrabold text-4xl lg:text-5xl xl:text-6xl text-left px-12 leading-tight select-none"
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
            ¡Bienvenido <br />
            de vuelta!
          </SplitText>
        </div>
      </div>

      <div className="flex w-full md:w-1/2 flex-col items-center justify-center px-6 py-12 md:py-0">
        <img
          className="h-16 md:h-20 mb-6 animate-slide-in-right"
          src="/logoAzul.webp"
          alt="Logo Kaptia"
        />
        <h2 className="font-bold text-2xl md:text-3xl text-[#3D3D3D] text-center mb-8 animate-slide-in-right">
          Iniciar Sesión
        </h2>
        <form
          className="flex flex-col gap-5 w-full max-w-md animate-slide-in-right"
          autoComplete="off"
        >
          <input
            className="border rounded-md p-3 border-[#3D3D3D]/40 focus:outline-none focus:border-primary-blue-500 transition"
            type="text"
            id="username"
            name="username"
            placeholder="Ingresa tu nombre de usuario"
            autoComplete="username"
          />
          <input
            className="border rounded-md p-3 border-[#3D3D3D]/40 focus:outline-none focus:border-primary-blue-500 transition"
            type="password"
            id="password"
            name="password"
            placeholder="Ingresa tu contraseña"
            autoComplete="current-password"
          />
          <button
            className="p-3 rounded-md bg-yellow-400 hover:bg-yellow-500 text-white font-semibold transition"
            type="submit"
          >
            Iniciar sesión
          </button>
        </form>
        <span className="text-[#3D3D3D] text-sm mt-6 animate-slide-in-right">
          ¿Olvidaste tu contraseña?{" "}
          <strong className="underline cursor-pointer text-primary-blue-500 hover:text-primary-blue-700 transition">
            Da click aquí
          </strong>
        </span>
      </div>
    </div>
  );
}
