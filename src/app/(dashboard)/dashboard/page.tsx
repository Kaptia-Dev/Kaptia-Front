"use client";

import React from "react";
import {
  StatCard,
  ProgressBar,
  MetricCard,
  ReminderCard,
  FunnelHealthCard,
  ChartCard,
} from "@/components/ui";
import { VideoCameraIcon } from "@heroicons/react/24/solid";

export default function DashboardPage() {
  const reminders = [
    {
      id: "1",
      title: "Zoom con cliente x (CDMX)",
      time: "9:00 hrs",
      date: "Vie 14 mar",
      icon: <VideoCameraIcon className="h-5 w-5" />,
    },
    {
      id: "2",
      title: "Zoom con cliente x (CDMX)",
      time: "9:00 hrs",
      date: "Vie 14 mar",
      icon: <VideoCameraIcon className="h-5 w-5" />,
    },
    {
      id: "3",
      title: "Zoom con cliente x (CDMX)",
      time: "9:00 hrs",
      date: "Vie 14 mar",
      icon: <VideoCameraIcon className="h-5 w-5" />,
    },
    {
      id: "4",
      title: "Zoom con cliente x (CDMX)",
      time: "9:00 hrs",
      date: "Vie 14 mar",
      icon: <VideoCameraIcon className="h-5 w-5" />,
    },
  ];

  const funnelItems = [
    {
      id: "1",
      label: "Item 1",
      value: 100,
      max: 100,
    },
    {
      id: "2",
      label: "Item 2",
      value: 85,
      max: 100,
    },
  ];

  const alertsData = [
    {
      id: "1",
      title: "Titulo alerta",
      description: "Breve descripción de la alerta que se previsualiza.",
    },
    {
      id: "2",
      title: "Titulo alerta",
      description: "Breve descripción de la alerta que se previsualiza.",
    },
    {
      id: "3",
      title: "Titulo alerta",
      description: "Breve descripción de la alerta que se previsualiza.",
    },
  ];

  return (
    <div className="grid gap-6 lg:grid-cols-3">
      {/* Columna 1 - Tarjetas pequeñas apiladas */}
      <div className="space-y-6">
        {/* Tasa de Conversión Global */}
        <MetricCard label="Tasa de Conversión Global" value="75%" />

        {/* Efectividad de Prospección */}
        <div className="rounded-2xl bg-white p-5 shadow-sm">
          <p className="mb-3 text-sm text-slate-500">
            Efectividad de Prospección
          </p>
          <div className="space-y-2">
            <div className="flex justify-between text-xs text-slate-600">
              <span>Baja</span>
              <span>Alta</span>
            </div>
            <div className="h-3 w-full overflow-hidden rounded-full bg-gradient-to-r from-red-500 via-yellow-400 to-emerald-400">
              <div className="relative h-full">
                <div
                  className="absolute top-1/2 h-5 w-5 -translate-y-1/2 rounded-full border-2 border-white bg-white shadow-md"
                  style={{ left: "50%" }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Ticket Promedio de Venta */}
        <MetricCard label="Ticket Promedio de Venta" value="5" />

        {/* Salud del Embudo */}
        <FunnelHealthCard title="Salud del Embudo" items={funnelItems} />
      </div>

      {/* Columna 2 - Tarjetas pequeñas apiladas */}
      <div className="space-y-6">
        {/* Penetración de Mercado DENUE */}
        <div className="rounded-2xl bg-white p-5 shadow-sm">
          <p className="text-sm text-slate-500">Penetración de Mercado DENUE</p>
          <ProgressBar
            value={52}
            showPercentage
            color="blue"
            className="mt-3"
          />
        </div>

        {/* Valor Total del Pipeline */}
        <MetricCard label="Valor Total del Pipeline" value="$15,320" />

        {/* Velocidad del Ciclo de Venta */}
        <MetricCard label="Velocidad del Ciclo de Venta" value="14 días" />

        {/* Envejecimiento del Lead */}
        <ChartCard title="Envejecimiento del Lead">
          <div className="flex h-full items-end justify-center gap-4">
            {/* Simple placeholder chart */}
            <div className="flex h-full w-full items-end justify-around gap-2">
              <div className="h-1/4 w-full rounded-t-md bg-cyan-400"></div>
              <div className="h-2/4 w-full rounded-t-md bg-cyan-400"></div>
              <div className="h-3/4 w-full rounded-t-md bg-cyan-400"></div>
              <div className="h-full w-full rounded-t-md bg-cyan-400"></div>
            </div>
          </div>
        </ChartCard>
      </div>

      {/* Columna 3 - Tarjetas grandes */}
      <div className="space-y-6">
        {/* Alertas de seguimiento */}
        <div className="rounded-2xl bg-white p-5 shadow-sm">
          <h3 className="mb-3 text-base font-semibold text-slate-900">
            Alertas de seguimiento
          </h3>
          <div className="space-y-2">
            {alertsData.map((alert) => (
              <div key={alert.id} className="space-y-1">
                <p className="text-sm font-semibold text-slate-900">
                  {alert.title}
                </p>
                <p className="text-xs text-slate-500">{alert.description}</p>
                <button className="rounded-lg bg-yellow-400 px-3 py-1 text-xs font-semibold text-slate-900 transition hover:bg-yellow-500">
                  Ver detalles
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Recordatorios */}
        <ReminderCard
          title="Recordatorios"
          reminders={reminders}
          onViewDetails={() => console.log("Ver detalles")}
        />
      </div>
    </div>
  );
}
