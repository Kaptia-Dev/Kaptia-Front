"use client";

import React, { useState } from "react";
import { Sidebar } from "./Sidebar";
import { Header } from "./Header";
import { usePageTitle } from "../../hooks";
import { PRIMARY_NAV_ITEMS, SECONDARY_NAV_ITEMS, LOGOUT_ITEM } from "../../config";

interface MainLayoutProps {
  children: React.ReactNode;
}

export const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const pageTitle = usePageTitle();

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      {/* Mobile Overlay */}
      <div
        className={`fixed inset-0 z-20 bg-slate-900/40 transition-opacity md:hidden ${
          isSidebarOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        onClick={() => setIsSidebarOpen(false)}
      />

      {/* Sidebar */}
      <Sidebar
        primaryItems={PRIMARY_NAV_ITEMS}
        secondaryItems={SECONDARY_NAV_ITEMS}
        logoutItem={LOGOUT_ITEM}
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
      />

      {/* Main Content Area */}
      <div className="flex min-h-screen flex-col md:pl-64">
        <Header
          title={pageTitle}
          subtitle="Dashboard"
          onMenuClick={() => setIsSidebarOpen(true)}
        />

        <main className="flex-1 px-4 py-6 md:px-8">{children}</main>
      </div>
    </div>
  );
};
