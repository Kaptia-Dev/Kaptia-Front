"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { XMarkIcon, ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";
import { NavItem } from "../../types";
import { NavSection } from "../navigation";

interface SidebarProps {
  primaryItems: NavItem[];
  secondaryItems: NavItem[];
  logoutItem: NavItem;
  isOpen: boolean;
  isCollapsed: boolean;
  onClose: () => void;
  onToggleCollapse: () => void;
}

export const Sidebar: React.FC<SidebarProps> = ({
  primaryItems,
  secondaryItems,
  logoutItem,
  isOpen,
  isCollapsed,
  onClose,
  onToggleCollapse,
}) => {
  return (
    <aside
      className={`fixed inset-y-0 left-0 z-30 flex flex-col bg-primary-blue-500 px-4 pb-6 pt-5 text-white shadow-xl transition-all duration-300 md:translate-x-0 ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } ${isCollapsed ? "md:w-20" : "md:w-64"} w-64`}
    >
      {/* Logo Header */}
      <div className="flex items-center justify-between px-2">
        <div className={`flex items-center gap-3 transition-opacity duration-300 ${isCollapsed ? "md:opacity-0" : "opacity-100"}`}>
          <Image 
            src="/logoReduced.svg" 
            alt="Kaptia" 
            width={36} 
            height={36} 
          />
          {!isCollapsed && (
            <span className="text-xl font-semibold tracking-wide">Kaptia</span>
          )}
        </div>
        {isCollapsed && (
          <div className="hidden md:flex md:items-center md:justify-center md:w-full">
            <Image 
              src="/logoReduced.svg" 
              alt="Kaptia" 
              width={36} 
              height={36} 
            />
          </div>
        )}
        <button
          type="button"
          className="rounded-full p-2 text-white/80 hover:text-white md:hidden"
          onClick={onClose}
          aria-label="Cerrar menú"
        >
          <XMarkIcon className="h-6 w-6" />
        </button>
      </div>

      {/* Collapse Toggle Button (Desktop only) */}
      <button
        type="button"
        onClick={onToggleCollapse}
        className="absolute -right-3 top-8 hidden h-6 w-6 items-center justify-center rounded-full bg-white text-primary-blue-500 shadow-md transition-all hover:bg-slate-100 md:flex"
        aria-label={isCollapsed ? "Expandir menú" : "Contraer menú"}
      >
        {isCollapsed ? (
          <ChevronRightIcon className="h-4 w-4" />
        ) : (
          <ChevronLeftIcon className="h-4 w-4" />
        )}
      </button>

      {/* Primary Navigation */}
      <nav className="mt-8 flex flex-1 flex-col gap-1 overflow-y-auto">
        <NavSection 
          items={primaryItems} 
          onItemClick={onClose} 
          isCollapsed={isCollapsed}
        />

        {/* Secondary Navigation */}
        {secondaryItems.length > 0 && (
          <div className="mt-8 border-t border-white/20 pt-5">
            <NavSection 
              items={secondaryItems} 
              onItemClick={onClose}
              isCollapsed={isCollapsed}
            />
          </div>
        )}
      </nav>

      {/* Logout Button */}
      <div className="mt-6 border-t border-white/20 pt-4">
        <Link
          href={logoutItem.href}
          onClick={onClose}
          className={`flex items-center gap-3 rounded-xl px-3 py-2 text-sm font-medium text-white/80 transition hover:bg-white/10 hover:text-white ${
            isCollapsed ? "md:justify-center" : ""
          }`}
          title={isCollapsed ? logoutItem.label : undefined}
        >
          <span className="text-white">{logoutItem.icon}</span>
          <span className={isCollapsed ? "md:hidden" : ""}>{logoutItem.label}</span>
        </Link>
      </div>
    </aside>
  );
};
