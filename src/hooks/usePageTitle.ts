"use client";

import { useMemo } from "react";
import { usePathname } from "next/navigation";

const PAGE_TITLES: Record<string, string> = {
  "/crm": "Inicio",
  "/crm/mapa": "Mapa",
  "/crm/mis-clientes": "Mis clientes",
  "/crm/charts": "Charts",
  "/crm/agenda": "Agenda",
  "/crm/documentos": "Documentos",
  "/crm/indicadores": "Indicadores",
  "/crm/herramientas": "Herramientas",
  "/crm/kapbot": "Kapbot",
};

export const usePageTitle = (): string => {
  const pathname = usePathname();
  
  return useMemo(() => {
    return PAGE_TITLES[pathname] ?? "CRM";
  }, [pathname]);
};
