"use client";

import React from "react";
import { Bars3BottomLeftIcon } from "@heroicons/react/24/solid";

interface HeaderProps {
  title: string;
  subtitle?: string;
  onMenuClick: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  title,
  subtitle = "Dashboard",
  onMenuClick,
}) => {
  return (
    <header className="sticky top-0 z-10 flex items-center justify-between border-b border-slate-200 bg-white/90 px-4 py-4 backdrop-blur md:px-6">
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
          <p className="text-xs uppercase tracking-[0.2em] text-slate-400">
            {subtitle}
          </p>
          <h1 className="text-lg font-semibold text-slate-900">{title}</h1>
        </div>
      </div>
      <button
        type="button"
        className="rounded-full border border-slate-200 px-4 py-2 text-sm font-medium text-slate-600 transition hover:border-slate-300 hover:text-slate-900"
      >
        Mi perfil
      </button>
    </header>
  );
};
