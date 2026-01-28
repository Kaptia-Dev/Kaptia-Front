import React from "react";

interface ChartCardProps {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  className?: string;
}

export const ChartCard: React.FC<ChartCardProps> = ({
  title,
  subtitle,
  children,
  className = "",
}) => {
  return (
    <div className={`rounded-2xl bg-white p-6 shadow-sm ${className}`}>
      <div className="mb-4">
        <h3 className="text-sm text-slate-500">{title}</h3>
        {subtitle && (
          <p className="mt-1 text-xs text-slate-400">{subtitle}</p>
        )}
      </div>
      <div className="h-48">{children}</div>
    </div>
  );
};
