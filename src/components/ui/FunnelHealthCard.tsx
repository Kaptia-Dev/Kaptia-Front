import React from "react";

interface FunnelItem {
  id: string;
  label: string;
  value: number;
  max?: number;
}

interface FunnelHealthCardProps {
  title: string;
  items: FunnelItem[];
  className?: string;
}

export const FunnelHealthCard: React.FC<FunnelHealthCardProps> = ({
  title,
  items,
  className = "",
}) => {
  return (
    <div className={`rounded-2xl bg-white p-6 shadow-sm ${className}`}>
      <h3 className="mb-4 text-sm text-slate-500">{title}</h3>
      <div className="space-y-4">
        {items.map((item) => {
          const percentage = ((item.value / (item.max || 100)) * 100).toFixed(
            0
          );
          return (
            <div key={item.id}>
              <div className="mb-2 flex items-center justify-between text-sm">
                <span className="text-slate-700">{item.label}</span>
                <span className="font-semibold text-slate-900">
                  {percentage}%
                </span>
              </div>
              <div className="h-2 w-full overflow-hidden rounded-full bg-slate-100">
                <div
                  className="h-full rounded-full bg-cyan-400 transition-all duration-300"
                  style={{ width: `${percentage}%` }}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
