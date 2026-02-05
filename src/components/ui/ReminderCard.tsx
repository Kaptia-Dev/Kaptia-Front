import React from "react";

interface Reminder {
  id: string;
  title: string;
  time: string;
  date: string;
  icon?: React.ReactNode;
}

interface ReminderCardProps {
  title: string;
  reminders: Reminder[];
  onViewDetails?: () => void;
  className?: string;
}

export const ReminderCard: React.FC<ReminderCardProps> = ({
  title,
  reminders,
  onViewDetails,
  className = "",
}) => {
  return (
    <div className={`rounded-2xl bg-white p-6 shadow-sm ${className}`}>
      <h3 className="mb-4 text-lg font-semibold text-slate-900">{title}</h3>
      <div className="space-y-3">
        {reminders.map((reminder) => (
          <div
            key={reminder.id}
            className="flex items-start gap-3 rounded-lg border border-slate-100 bg-slate-50 p-3"
          >
            {reminder.icon && (
              <div className="flex-shrink-0 text-slate-600">
                {reminder.icon}
              </div>
            )}
            <div className="flex-1">
              <p className="text-sm font-medium text-slate-900">
                {reminder.title}
              </p>
              <p className="text-xs text-slate-500">
                {reminder.time} • {reminder.date}
              </p>
            </div>
          </div>
        ))}
      </div>
      {onViewDetails && (
        <button
          onClick={onViewDetails}
          className="mt-4 w-full rounded-lg bg-yellow-400 px-4 py-2 text-sm font-semibold text-slate-900 transition hover:bg-yellow-500"
        >
          Ver detalles
        </button>
      )}
    </div>
  );
};
