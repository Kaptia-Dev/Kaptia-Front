"use client";

import React, { useMemo, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  HomeIcon,
  MapIcon,
  UsersIcon,
  ChartBarIcon,
  CalendarDaysIcon,
  DocumentTextIcon,
  PresentationChartLineIcon,
  WrenchScrewdriverIcon,
  ChatBubbleBottomCenterTextIcon,
  ArrowRightOnRectangleIcon,
  Bars3BottomLeftIcon,
  XMarkIcon,
} from "@heroicons/react/24/solid";

type NavItem = {
  label: string;
  href: string;
  icon: React.ReactNode;
};

const primaryItems: NavItem[] = [
  {
    label: "Inicio",
    href: "/dashboard",
    icon: <HomeIcon className="h-5 w-5" />,
  },
  {
    label: "Mapa",
    href: "/dashboard/mapa",
    icon: <MapIcon className="h-5 w-5" />,
  },
  {
    label: "Mis clientes",
    href: "/dashboard/mis-clientes",
    icon: <UsersIcon className="h-5 w-5" />,
  },
  {
    label: "Charts",
    href: "/dashboard/charts",
    icon: <ChartBarIcon className="h-5 w-5" />,
  },
  {
    label: "Agenda",
    href: "/dashboard/agenda",
    icon: <CalendarDaysIcon className="h-5 w-5" />,
  },
  {
    label: "Documentos",
    href: "/dashboard/documentos",
    icon: <DocumentTextIcon className="h-5 w-5" />,
  },
  {
    label: "Indicadores",
    href: "/dashboard/indicadores",
    icon: <PresentationChartLineIcon className="h-5 w-5" />,
  },
  {
    label: "Herramientas",
    href: "/dashboard/herramientas",
    icon: <WrenchScrewdriverIcon className="h-5 w-5" />,
  },
];

const secondaryItems: NavItem[] = [
  {
    label: "Kapbot",
    href: "/dashboard/kapbot",
    icon: <ChatBubbleBottomCenterTextIcon className="h-5 w-5" />,
  },
];

const logoutItem: NavItem = {
  label: "Salir",
  href: "/auth",
  icon: <ArrowRightOnRectangleIcon className="h-5 w-5" />,
};

const getIsActive = (pathname: string, href: string) => {
  if (href === "/dashboard") {
    return pathname === href;
  }
  return pathname.startsWith(href);
};

const getTitleFromPath = (pathname: string) => {
  const lookup: Record<string, string> = {
    "/dashboard": "Inicio",
    "/dashboard/mapa": "Mapa",
    "/dashboard/mis-clientes": "Mis clientes",
    "/dashboard/charts": "Charts",
    "/dashboard/agenda": "Agenda",
    "/dashboard/documentos": "Documentos",
    "/dashboard/indicadores": "Indicadores",
    "/dashboard/herramientas": "Herramientas",
    "/dashboard/kapbot": "Kapbot",
  };

  return lookup[pathname] ?? "Dashboard";
};

export default function DashboardLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const pathname = usePathname();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const pageTitle = useMemo(() => getTitleFromPath(pathname), [pathname]);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <div
        className={`fixed inset-0 z-20 bg-slate-900/40 transition-opacity md:hidden ${
          isSidebarOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        onClick={() => setIsSidebarOpen(false)}
      />

      <aside
        className={`fixed inset-y-0 left-0 z-30 flex w-64 flex-col bg-primary-blue-500 px-4 pb-6 pt-5 text-white shadow-xl transition-transform md:translate-x-0 ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between px-2">
          <div className="flex items-center gap-3">
            <Image src="/logoReduced.svg" alt="Kaptia" width={36} height={36} />
            <span className="text-xl font-semibold tracking-wide">Kaptia</span>
          </div>
          <button
            type="button"
            className="rounded-full p-2 text-white/80 hover:text-white md:hidden"
            onClick={() => setIsSidebarOpen(false)}
            aria-label="Cerrar menú"
          >
            <XMarkIcon className="h-6 w-6" />
          </button>
        </div>

        <nav className="mt-8 flex flex-1 flex-col gap-1 overflow-y-auto">
          {primaryItems.map((item) => {
            const isActive = getIsActive(pathname, item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsSidebarOpen(false)}
                className={`flex items-center gap-3 rounded-xl px-3 py-2 text-sm font-medium transition ${
                  isActive
                    ? "bg-white/20 text-white"
                    : "text-white/80 hover:bg-white/10 hover:text-white"
                }`}
              >
                <span className="text-white">{item.icon}</span>
                {item.label}
              </Link>
            );
          })}

          <div className="mt-8 border-t border-white/20 pt-5">
            {secondaryItems.map((item) => {
              const isActive = getIsActive(pathname, item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsSidebarOpen(false)}
                  className={`flex items-center gap-3 rounded-xl px-3 py-2 text-sm font-medium transition ${
                    isActive
                      ? "bg-white/20 text-white"
                      : "text-white/80 hover:bg-white/10 hover:text-white"
                  }`}
                >
                  <span className="text-white">{item.icon}</span>
                  {item.label}
                </Link>
              );
            })}
          </div>
        </nav>

        <div className="mt-6 border-t border-white/20 pt-4">
          <Link
            href={logoutItem.href}
            onClick={() => setIsSidebarOpen(false)}
            className="flex items-center gap-3 rounded-xl px-3 py-2 text-sm font-medium text-white/80 transition hover:bg-white/10 hover:text-white"
          >
            <span className="text-white">{logoutItem.icon}</span>
            {logoutItem.label}
          </Link>
        </div>
      </aside>

      <div className="flex min-h-screen flex-col md:pl-64">
        <header className="sticky top-0 z-10 flex items-center justify-between border-b border-slate-200 bg-white/90 px-4 py-4 backdrop-blur md:px-6">
          <div className="flex items-center gap-3">
            <button
              type="button"
              className="rounded-lg border border-slate-200 p-2 text-slate-600 hover:text-slate-900 md:hidden"
              onClick={() => setIsSidebarOpen(true)}
              aria-label="Abrir menú"
            >
              <Bars3BottomLeftIcon className="h-5 w-5" />
            </button>
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-slate-400">
                Dashboard
              </p>
              <h1 className="text-lg font-semibold text-slate-900">
                {pageTitle}
              </h1>
            </div>
          </div>
          <button
            type="button"
            className="rounded-full border border-slate-200 px-4 py-2 text-sm font-medium text-slate-600 transition hover:border-slate-300 hover:text-slate-900"
          >
            Mi perfil
          </button>
        </header>

        <main className="flex-1 px-4 py-6 md:px-8">{children}</main>
      </div>
    </div>
  );
}
