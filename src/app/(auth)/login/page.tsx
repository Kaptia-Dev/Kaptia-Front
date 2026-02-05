"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useAuth } from "@/contexts/AuthContext";
import Swal from "sweetalert2";

const schema = yup.object().shape({
  username: yup.string().required("El usuario es obligatorio"),
  password: yup.string().required("La contraseña es obligatoria"),
});

export default function LoginPage() {
  const { login } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data: any) => {
    try {
      await login({
        username: data.username,
        password: data.password,
      });
    } catch (error: any) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: error.message || "Error al iniciar sesión",
      });
    }
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-white">
      {/* Left Section - Welcome Message */}
      <div className="hidden md:flex w-1/2 items-center justify-center relative">
        <div className="absolute -left-1/3 -top-1/7 h-[120%] w-[140%] bg-primary-blue-500 rounded-r-full flex items-center justify-center animate-slide-in-left">
          <div className="text-white font-extrabold text-4xl lg:text-5xl xl:text-6xl text-left px-12 leading-tight select-none">
            ¡Bienvenido <br />
            de vuelta!
          </div>
        </div>
      </div>

      {/* Right Section - Login Form */}
      <div className="flex h-screen w-full md:w-1/2 flex-col items-center justify-center px-6 py-12 md:py-0">
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
          onSubmit={handleSubmit(onSubmit)}
        >
          {/* Username Input */}
          <div className="flex flex-col gap-1">
            <input
              className={`border rounded-md p-3 border-[#3D3D3D]/40 focus:outline-none transition ${
                errors.username
                  ? "border-red-600 focus:border-red-600"
                  : "focus:border-primary-blue-500"
              }`}
              type="text"
              id="username"
              placeholder="Ingresa tu nombre de usuario"
              autoComplete="username"
              disabled={isSubmitting}
              {...register("username")}
            />
            {errors.username && (
              <span className="text-red-600 text-sm">
                {errors.username.message}
              </span>
            )}
          </div>

          {/* Password Input */}
          <div className="flex flex-col gap-1">
            <input
              className={`border rounded-md p-3 border-[#3D3D3D]/40 focus:outline-none transition ${
                errors.password
                  ? "border-red-600 focus:border-red-600"
                  : "focus:border-primary-blue-500"
              }`}
              type="password"
              id="password"
              placeholder="Ingresa tu contraseña"
              autoComplete="current-password"
              disabled={isSubmitting}
              {...register("password")}
            />
            {errors.password && (
              <span className="text-red-600 text-sm">
                {errors.password.message}
              </span>
            )}
          </div>

          {/* Submit Button */}
          <button
            className="p-3 rounded-md bg-yellow-400 hover:bg-yellow-500 text-white font-semibold transition disabled:opacity-50 disabled:cursor-not-allowed"
            type="submit"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Iniciando sesión..." : "Iniciar sesión"}
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
