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
import { NavItem } from "@/types/crm";

export const PRIMARY_NAV_ITEMS: NavItem[] = [
  {
    label: "Inicio",
    href: "/dashboard",
    icon: <HomeIcon className="h-5 w-5" />,
  },
  {
    label: "Mapa",
    href: "/mapa",
    icon: <MapIcon className="h-5 w-5" />,
  },
  {
    label: "Mis clientes",
    href: "/mis-clientes",
    icon: <UsersIcon className="h-5 w-5" />,
  },
  {
    label: "Charts",
    href: "/charts",
    icon: <ChartBarIcon className="h-5 w-5" />,
  },
  {
    label: "Agenda",
    href: "/agenda",
    icon: <CalendarDaysIcon className="h-5 w-5" />,
  },
  {
    label: "Documentos",
    href: "/documentos",
    icon: <DocumentTextIcon className="h-5 w-5" />,
  },
  {
    label: "Indicadores",
    href: "/indicadores",
    icon: <PresentationChartLineIcon className="h-5 w-5" />,
  },
  {
    label: "Herramientas",
    href: "/herramientas",
    icon: <WrenchScrewdriverIcon className="h-5 w-5" />,
  },
];

export const SECONDARY_NAV_ITEMS: NavItem[] = [
  {
    label: "Kapbot",
    href: "/kapbot",
    icon: <ChatBubbleBottomCenterTextIcon className="h-5 w-5" />,
  },
];

export const LOGOUT_ITEM: NavItem = {
  label: "Salir",
  href: "/login",
  icon: <ArrowRightOnRectangleIcon className="h-5 w-5" />,
};
