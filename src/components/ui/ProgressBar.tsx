import React from "react";
import { ProgressBarProps } from "../../types";

const colorClasses = {
  blue: "bg-primary-blue-500",
  emerald: "bg-emerald-400",
  purple: "bg-purple-500",
  amber: "bg-amber-400",
};

export const ProgressBar: React.FC<ProgressBarProps> = ({
  value,
  max = 100,
  label,
  showPercentage = false,
  color = "blue",
  className = "",
}) => {
  const percentage = Math.min((value / max) * 100, 100);
  const colorClass = colorClasses[color];

  return (
    <div className={className}>
      {label && <p className="mb-2 text-sm text-slate-500">{label}</p>}
      <div className="h-3 w-full rounded-full bg-slate-100">
        <div
          className={`h-3 rounded-full transition-all duration-300 ${colorClass}`}
          style={{ width: `${percentage}%` }}
        />
      </div>
      {showPercentage && (
        <p className="mt-2 text-sm font-semibold text-slate-700">
          {percentage.toFixed(0)}%
        </p>
      )}
    </div>
  );
};
