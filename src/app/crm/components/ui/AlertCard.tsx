import React from "react";
import { AlertCardProps } from "../../types";

const alertTypeStyles = {
  info: "border-blue-200 bg-blue-50 text-blue-700",
  warning: "border-amber-200 bg-amber-50 text-amber-700",
  error: "border-red-200 bg-red-50 text-red-700",
  success: "border-emerald-200 bg-emerald-50 text-emerald-700",
};

export const AlertCard: React.FC<AlertCardProps> = ({
  label,
  alerts,
  className = "",
}) => {
  return (
    <div className={`rounded-2xl bg-white p-5 shadow-sm ${className}`}>
      <p className="text-sm text-slate-500">{label}</p>
      <div className="mt-4 space-y-3 text-sm">
        {alerts.map((alert) => (
          <div
            key={alert.id}
            className={`rounded-xl border p-3 ${
              alert.type
                ? alertTypeStyles[alert.type]
                : "border-slate-100 bg-slate-50 text-slate-600"
            }`}
          >
            {alert.message}
          </div>
        ))}
      </div>
    </div>
  );
};
