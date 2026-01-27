export default function Dashboard() {
  return (
    <section className="grid gap-6 lg:grid-cols-3">
      <div className="rounded-2xl bg-white p-5 shadow-sm">
        <p className="text-sm text-slate-500">Tasa de Conversión Global</p>
        <p className="mt-4 text-3xl font-semibold text-slate-900">75%</p>
      </div>
      <div className="rounded-2xl bg-white p-5 shadow-sm">
        <p className="text-sm text-slate-500">Penetración de Mercado</p>
        <div className="mt-4 h-3 w-full rounded-full bg-slate-100">
          <div className="h-3 w-2/3 rounded-full bg-primary-blue-500" />
        </div>
        <p className="mt-3 text-sm font-semibold text-slate-700">52%</p>
      </div>
      <div className="rounded-2xl bg-white p-5 shadow-sm">
        <p className="text-sm text-slate-500">Alertas de seguimiento</p>
        <div className="mt-4 space-y-3 text-sm text-slate-600">
          <div className="rounded-xl border border-slate-100 bg-slate-50 p-3">
            Revisión de pipeline orgánico
          </div>
          <div className="rounded-xl border border-slate-100 bg-slate-50 p-3">
            Clientes con venta postergada
          </div>
        </div>
      </div>
      <div className="rounded-2xl bg-white p-5 shadow-sm">
        <p className="text-sm text-slate-500">Efectividad de Prospección</p>
        <div className="mt-5 h-2 w-full rounded-full bg-slate-100">
          <div className="h-2 w-1/2 rounded-full bg-emerald-400" />
        </div>
      </div>
      <div className="rounded-2xl bg-white p-5 shadow-sm">
        <p className="text-sm text-slate-500">Valor total del pipeline</p>
        <p className="mt-4 text-2xl font-semibold text-slate-900">$15,320</p>
      </div>
      <div className="rounded-2xl bg-white p-5 shadow-sm">
        <p className="text-sm text-slate-500">Velocidad del ciclo de venta</p>
        <p className="mt-4 text-2xl font-semibold text-slate-900">14 días</p>
      </div>
    </section>
  );
}
