"use client";
import React from "react";
import { LateralNavbarType } from "@/app/types/LateralNavbarType";
import LateralNavbarComponent from "@/app/components/LateralNavbarComponent/LateralNavbarComponent";
import TopNavbarComponent from "@/app/components/TopNavbarComponent/TopNavbarComponent";
import {
  HomeIcon,
  MapIcon,
  UsersIcon,
  CalendarDaysIcon,
  DocumentIcon,
  Cog6ToothIcon,
} from "@heroicons/react/24/solid";
import styles from "./DashboardLayout.module.css";
export interface DashboardLayoutProps {
  children: React.ReactNode;
  userIsAdmin?: boolean;
  userIsOwner?: boolean;
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({
  children,
  userIsAdmin = false,
  userIsOwner = false,
}) => {
  const lateralNavItems: LateralNavbarType[] = [
    { title: "Home", link: "/dashboard", icon: <HomeIcon className="h-6 w-6" /> }, // Visible to all
    { title: "Mapa", link: "/map", icon: <MapIcon className="h-6 w-6" /> }, // Visible to all
    { title: "Mis clientes", link: "/clients", icon: <UsersIcon className="h-6 w-6" /> }, // Only admin and owner
    { title: "Agenda", link: "/agenda", icon: <CalendarDaysIcon className="h-6 w-6" /> }, // Only admin and owner
    { title: "Documentos", link: "/documents", icon: <DocumentIcon className="h-6 w-6" /> }, // Only owner
    { title: "Configuración", link: "/settings", icon: <Cog6ToothIcon className="h-6 w-6" /> }, // Only owner
  ];

  const handleNotificationClick = () => {
    console.log("Notifications clicked");
  };

  const handleUserMenuClick = () => {
    console.log("User menu clicked");
  };

  return (
    <div className={styles.dashboardLayout}>
      <TopNavbarComponent
        title="Kaptia"
        userInfo={{
          name: "John Doe",
          role: userIsOwner
            ? "Propietario"
            : userIsAdmin
            ? "Administrador"
            : "Usuario",
        }}
        onNotificationClick={handleNotificationClick}
        onUserMenuClick={handleUserMenuClick}
        notificationCount={3}
      />
      <LateralNavbarComponent
        items={lateralNavItems}
        userIsAdmin={userIsAdmin}
        userIsOwner={userIsOwner}
      />
      <main className={styles.mainContent}>
        <div className={styles.contentWrapper}>{children}</div>
      </main>
    </div>
  );
};

export default DashboardLayout;
