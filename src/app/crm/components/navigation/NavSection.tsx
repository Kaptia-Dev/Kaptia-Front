import React from "react";
import { NavItem } from "../../types";
import { NavLink } from "./NavLink";

interface NavSectionProps {
  items: NavItem[];
  title?: string;
  onItemClick?: () => void;
}

export const NavSection: React.FC<NavSectionProps> = ({
  items,
  title,
  onItemClick,
}) => {
  return (
    <div className="flex flex-col gap-1">
      {title && (
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
        />
      ))}
    </div>
  );
};
