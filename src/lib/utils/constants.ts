/**
 * Navigation Routes
 */
export const CRM_ROUTES = {
  HOME: "/crm",
  MAPA: "/crm/mapa",
  CLIENTES: "/crm/mis-clientes",
  CHARTS: "/crm/charts",
  AGENDA: "/crm/agenda",
  DOCUMENTOS: "/crm/documentos",
  INDICADORES: "/crm/indicadores",
  HERRAMIENTAS: "/crm/herramientas",
  KAPBOT: "/crm/kapbot",
} as const;

/**
 * Progress Bar Colors
 */
export const PROGRESS_COLORS = {
  BLUE: "blue",
  EMERALD: "emerald",
  PURPLE: "purple",
  AMBER: "amber",
} as const;

/**
 * Alert Types
 */
export const ALERT_TYPES = {
  INFO: "info",
  WARNING: "warning",
  ERROR: "error",
  SUCCESS: "success",
} as const;
