import { Columns3, List, SlidersHorizontal } from 'lucide-react';
import type { Lead } from '../../data/content';

const riskClasses: Record<Lead['risk'], string> = {
  Baixo: 'bg-emerald-50 text-emerald-700 ring-emerald-600/15',
  Médio: 'bg-amber-50 text-amber-700 ring-amber-600/15',
  Alto: 'bg-rose-50 text-rose-700 ring-rose-600/15',
};

export function LeadsTable({ leads }: { leads: Lead[] }): React.JSX.Element {
  return (
    <section
      aria-label="Funil de vendas"
      className="hidden min-w-0 flex-col bg-paper text-left sm:flex"
    >
      <header className="flex min-h-[104px] items-start justify-between gap-3 border-b border-[rgba(15,23,42,0.10)] px-4 pt-4 pb-3">
        <div>
          <h2 className="text-[13px] font-semibold tracking-[-0.02em] text-ink">Leads do funil</h2>
          <div className="mt-3 flex items-center gap-1.5">
            <button type="button" aria-label="Visualização Kanban" aria-pressed="false" className="inline-flex items-center gap-1 rounded-md border border-ink/10 px-2 py-1 text-[11px] text-slate">
              <Columns3 aria-hidden="true" className="h-3 w-3" /> Kanban
            </button>
            <button type="button" aria-label="Visualização em lista" aria-pressed="true" className="inline-flex items-center gap-1 rounded-md bg-ink px-2 py-1 text-[11px] text-white">
              <List aria-hidden="true" className="h-3 w-3" /> Lista
            </button>
          </div>
        </div>
        <button type="button" className="mt-8 inline-flex items-center gap-1 rounded-md border border-ink/10 px-2 py-1 text-[11px] text-ink">
          <SlidersHorizontal aria-hidden="true" className="h-3 w-3" /> Filtros
        </button>
      </header>
      <div className="min-w-0 flex-1 overflow-hidden">
        <table aria-label="Leads do funil" className="w-full table-fixed border-collapse text-[11px]">
          <colgroup>
            <col style={{ width: '20%' }} /><col className="hidden xl:table-column" style={{ width: '18%' }} /><col style={{ width: '20%' }} /><col style={{ width: '14%' }} /><col style={{ width: '12%' }} /><col className="hidden xl:table-column" style={{ width: '16%' }} />
          </colgroup>
          <thead><tr className="border-b border-ink/[0.08] text-left text-[11px] font-medium text-slate"><th scope="col" className="px-3 py-2.5 font-medium">Lead</th><th scope="col" className="hidden px-3 py-2.5 font-medium xl:table-cell">Empresa</th><th scope="col" className="px-3 py-2.5 font-medium">Etapa</th><th scope="col" className="px-3 py-2.5 font-medium">Resposta</th><th scope="col" className="px-3 py-2.5 font-medium">Risco</th><th scope="col" className="hidden px-3 py-2.5 font-medium xl:table-cell">Responsável</th></tr></thead>
          <tbody className="divide-y divide-ink/[0.07]">
            {leads.map((lead) => (
              <tr key={`${lead.name}-${lead.company}`} className="h-[43px] text-ink hover:bg-gold-soft/20">
                <th scope="row" className="truncate px-3 py-2 text-left font-semibold">{lead.name}</th><td className="hidden truncate px-3 py-2 text-slate xl:table-cell">{lead.company}</td><td className="truncate px-3 py-2"><span className="rounded-md bg-canvas px-1.5 py-1 text-[11px] text-ink/80">{lead.stage}</span></td><td className="truncate px-3 py-2 tabular-nums text-slate">{lead.response}</td><td className="px-3 py-2"><span className={`inline-flex rounded-full px-1.5 py-0.5 text-[11px] font-medium ring-1 ring-inset ${riskClasses[lead.risk]}`}>{lead.risk}</span></td><td className="hidden truncate px-3 py-2 text-slate xl:table-cell">{lead.owner}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex items-center justify-between border-t border-[rgba(15,23,42,0.10)] px-4 py-3 text-[11px]"><span className="text-slate">Total: <strong className="font-semibold text-ink">128 leads</strong></span><span className="text-slate">Resposta média <strong className="ml-1 font-semibold text-ink">4m 36s</strong></span></div>
    </section>
  );
}
