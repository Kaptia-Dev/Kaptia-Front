import React from "react";
import { StatCardProps } from "../../types";

export const StatCard: React.FC<StatCardProps> = ({
  label,
  value,
  icon,
  trend,
  className = "",
}) => {
  return (
    <div className={`rounded-2xl bg-white p-5 shadow-sm ${className}`}>
      <div className="flex items-start justify-between">
        <p className="text-sm text-slate-500">{label}</p>
        {icon && <span className="text-slate-400">{icon}</span>}
      </div>
      <div className="mt-4 flex items-end justify-between">
        <p className="text-3xl font-semibold text-slate-900">{value}</p>
        {trend && (
          <span
            className={`text-sm font-medium ${
              trend.isPositive ? "text-emerald-600" : "text-red-600"
            }`}
          >
            {trend.isPositive ? "+" : ""}
            {trend.value}%
          </span>
        )}
      </div>
    </div>
  );
};
