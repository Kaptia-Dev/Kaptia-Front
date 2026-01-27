import React from "react";
import { MetricCardProps } from "../../types";

export const MetricCard: React.FC<MetricCardProps> = ({
  label,
  value,
  className = "",
}) => {
  return (
    <div className={`rounded-2xl bg-white p-5 shadow-sm ${className}`}>
      <p className="text-sm text-slate-500">{label}</p>
      <p className="mt-4 text-2xl font-semibold text-slate-900">{value}</p>
    </div>
  );
};
