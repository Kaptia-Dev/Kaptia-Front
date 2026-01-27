"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavLinkProps {
  href: string;
  label: string;
  icon: React.ReactNode;
  onClick?: () => void;
}

export const NavLink: React.FC<NavLinkProps> = ({
  href,
  label,
  icon,
  onClick,
}) => {
  const pathname = usePathname();
  
  const isActive = href === "/crm" 
    ? pathname === href 
    : pathname.startsWith(href);

  return (
    <Link
      href={href}
      onClick={onClick}
      className={`flex items-center gap-3 rounded-xl px-3 py-2 text-sm font-medium transition ${
        isActive
          ? "bg-white/20 text-white"
          : "text-white/80 hover:bg-white/10 hover:text-white"
      }`}
    >
      <span className="text-white">{icon}</span>
      {label}
    </Link>
  );
};
