"use client";

import React from "react";
import { Bars3BottomLeftIcon, UserCircleIcon } from "@heroicons/react/24/solid";
import { SearchBar } from "../ui/SearchBar";

interface HeaderProps {
  title: string;
  subtitle?: string;
  onMenuClick: () => void;
  userName?: string;
}

export const Header: React.FC<HeaderProps> = ({
  title,
  subtitle = "Dashboard",
  onMenuClick,
  userName = "Usuario",
}) => {
  return (
    <header className="sticky top-0 z-10 border-b border-slate-200 bg-white/90 px-4 py-4 backdrop-blur md:px-6">
      <div className="flex items-center justify-between gap-4">
        {/* Left Section */}
        <div className="flex items-center gap-3">
          <button
            type="button"
            className="rounded-lg border border-slate-200 p-2 text-slate-600 hover:text-slate-900 md:hidden"
            onClick={onMenuClick}
            aria-label="Abrir menú"
          >
            <Bars3BottomLeftIcon className="h-5 w-5" />
          </button>
          <div>
            <h1 className="text-xl font-semibold text-slate-900">
              Bienvenido {userName}
            </h1>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-4">
          {/* Search Bar */}
          <div className="hidden md:block">
            <SearchBar placeholder="Buscar" className="w-64" />
          </div>

          {/* Profile Button */}
          <button
            type="button"
            className="flex items-center gap-2 rounded-full border border-slate-200 px-4 py-2 text-sm font-medium text-slate-600 transition hover:border-slate-300 hover:text-slate-900"
          >
            <UserCircleIcon className="h-5 w-5" />
            <span className="hidden sm:inline">Mi perfil</span>
          </button>
        </div>
      </div>
    </header>
  );
};
