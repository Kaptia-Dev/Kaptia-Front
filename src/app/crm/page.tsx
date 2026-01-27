import React from "react";
import { StatCard, ProgressBar, AlertCard, MetricCard } from "./components/ui";

export default function CRMDashboard() {
  const alerts = [
    {
      id: "1",
      message: "Revisión de pipeline orgánico",
    },
    {
      id: "2",
      message: "Clientes con venta postergada",
    },
  ];

  return (
    <section className="grid gap-6 lg:grid-cols-3">
      {/* Tasa de Conversión Global */}
      <StatCard label="Tasa de Conversión Global" value="75%" />

      {/* Penetración de Mercado */}
      <div className="rounded-2xl bg-white p-5 shadow-sm">
        <p className="text-sm text-slate-500">Penetración de Mercado</p>
        <ProgressBar
          value={52}
          showPercentage
          color="blue"
          className="mt-4"
        />
      </div>

      {/* Alertas de seguimiento */}
      <AlertCard label="Alertas de seguimiento" alerts={alerts} />

      {/* Efectividad de Prospección */}
      <div className="rounded-2xl bg-white p-5 shadow-sm">
        <p className="text-sm text-slate-500">Efectividad de Prospección</p>
        <ProgressBar value={50} color="emerald" className="mt-5" />
      </div>

      {/* Valor total del pipeline */}
      <MetricCard label="Valor total del pipeline" value="$15,320" />

      {/* Velocidad del ciclo de venta */}
      <MetricCard label="Velocidad del ciclo de venta" value="14 días" />
    </section>
  );
}
