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
} from "@heroicons/react/24/solid";
import { NavItem } from "../types";

export const PRIMARY_NAV_ITEMS: NavItem[] = [
  {
    label: "Inicio",
    href: "/crm",
    icon: <HomeIcon className="h-5 w-5" />,
  },
  {
    label: "Mapa",
    href: "/crm/mapa",
    icon: <MapIcon className="h-5 w-5" />,
  },
  {
    label: "Mis clientes",
    href: "/crm/mis-clientes",
    icon: <UsersIcon className="h-5 w-5" />,
  },
  {
    label: "Charts",
    href: "/crm/charts",
    icon: <ChartBarIcon className="h-5 w-5" />,
  },
  {
    label: "Agenda",
    href: "/crm/agenda",
    icon: <CalendarDaysIcon className="h-5 w-5" />,
  },
  {
    label: "Documentos",
    href: "/crm/documentos",
    icon: <DocumentTextIcon className="h-5 w-5" />,
  },
  {
    label: "Indicadores",
    href: "/crm/indicadores",
    icon: <PresentationChartLineIcon className="h-5 w-5" />,
  },
  {
    label: "Herramientas",
    href: "/crm/herramientas",
    icon: <WrenchScrewdriverIcon className="h-5 w-5" />,
  },
];

export const SECONDARY_NAV_ITEMS: NavItem[] = [
  {
    label: "Kapbot",
    href: "/crm/kapbot",
    icon: <ChatBubbleBottomCenterTextIcon className="h-5 w-5" />,
  },
];

export const LOGOUT_ITEM: NavItem = {
  label: "Salir",
  href: "/auth",
  icon: <ArrowRightOnRectangleIcon className="h-5 w-5" />,
};
