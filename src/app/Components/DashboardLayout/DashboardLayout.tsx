"use client";
import React from "react";
import { LateralNavbarType } from "@/app/Types/LateralNavbarType";
import LateralNavbarComponent from "@/app/Components/LateralNavbarComponent/LateralNavbarComponent";
import TopNavbarComponent from "@/app/Components/TopNavbarComponent/TopNavbarComponent";
import {
  HomeFilled,
  MapFilled,
  CalendarAgendaFilled,
  DocumentSignatureFilled,
  SettingsFilled,
  BookDefaultFilled
} from "@fluentui/react-icons";
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
    { title: "Home", link: "/dashboard", icon: <HomeFilled /> }, // Visible to all
    { title: "Mapa", link: "/map", icon: <MapFilled /> }, // Visible to all
    { title: "Mis clientes", link: "/clients", icon: <BookDefaultFilled /> }, // Only admin and owner
    { title: "Agenda", link: "/agenda", icon: <CalendarAgendaFilled /> }, // Only admin and owner
    { title: "Documentos", link: "/documents", icon: <DocumentSignatureFilled /> }, // Only owner
    { title: "Configuración", link: "/settings", icon: <SettingsFilled /> }, // Only owner
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
