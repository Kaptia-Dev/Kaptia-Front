"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { XMarkIcon } from "@heroicons/react/24/solid";
import { NavItem } from "../../types";
import { NavSection } from "../navigation";

interface SidebarProps {
  primaryItems: NavItem[];
  secondaryItems: NavItem[];
  logoutItem: NavItem;
  isOpen: boolean;
  onClose: () => void;
}

export const Sidebar: React.FC<SidebarProps> = ({
  primaryItems,
  secondaryItems,
  logoutItem,
  isOpen,
  onClose,
}) => {
  return (
    <aside
      className={`fixed inset-y-0 left-0 z-30 flex w-64 flex-col bg-primary-blue-500 px-4 pb-6 pt-5 text-white shadow-xl transition-transform md:translate-x-0 ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      {/* Logo Header */}
      <div className="flex items-center justify-between px-2">
        <div className="flex items-center gap-3">
          <Image 
            src="/logoReduced.svg" 
            alt="Kaptia" 
            width={36} 
            height={36} 
          />
          <span className="text-xl font-semibold tracking-wide">Kaptia</span>
        </div>
        <button
          type="button"
          className="rounded-full p-2 text-white/80 hover:text-white md:hidden"
          onClick={onClose}
          aria-label="Cerrar menú"
        >
          <XMarkIcon className="h-6 w-6" />
        </button>
      </div>

      {/* Primary Navigation */}
      <nav className="mt-8 flex flex-1 flex-col gap-1 overflow-y-auto">
        <NavSection items={primaryItems} onItemClick={onClose} />

        {/* Secondary Navigation */}
        {secondaryItems.length > 0 && (
          <div className="mt-8 border-t border-white/20 pt-5">
            <NavSection items={secondaryItems} onItemClick={onClose} />
          </div>
        )}
      </nav>

      {/* Logout Button */}
      <div className="mt-6 border-t border-white/20 pt-4">
        <Link
          href={logoutItem.href}
          onClick={onClose}
          className="flex items-center gap-3 rounded-xl px-3 py-2 text-sm font-medium text-white/80 transition hover:bg-white/10 hover:text-white"
        >
          <span className="text-white">{logoutItem.icon}</span>
          {logoutItem.label}
        </Link>
      </div>
    </aside>
  );
};
