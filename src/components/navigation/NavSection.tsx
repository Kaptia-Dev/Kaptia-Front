import React from "react";
import { NavItem } from "@/types/crm";
import { NavLink } from "./NavLink";

interface NavSectionProps {
  items: NavItem[];
  title?: string;
  onItemClick?: () => void;
  isCollapsed?: boolean;
}

export const NavSection: React.FC<NavSectionProps> = ({
  items,
  title,
  onItemClick,
  isCollapsed = false,
}) => {
  return (
    <div className="flex flex-col gap-1">
      {title && !isCollapsed && (
        <p className="mb-2 px-3 text-xs font-semibold uppercase tracking-wider text-white/60">
          {title}
        </p>
      )}
      {items.map((item) => (
        <NavLink
          key={item.href}
          href={item.href}
          label={item.label}
          icon={item.icon}
          onClick={onItemClick}
          isCollapsed={isCollapsed}
        />
      ))}
    </div>
  );
};
