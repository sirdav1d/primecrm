import { CalendarClock, CircleDollarSign, MoreHorizontal } from 'lucide-react';

const columns = [
  {
    title: 'Descoberta',
    count: 3,
    leads: [
      { name: 'Rafael S.', company: 'RS Logística', value: 'R$ 8.400', next: 'Responder hoje' },
      { name: 'Juliana R.', company: 'JR Marketing', value: 'R$ 4.200', next: 'Qualificar amanhã' },
    ],
  },
  {
    title: 'Qualificação',
    count: 5,
    leads: [
      { name: 'Dra. Paula', company: 'Clínica Vita', value: 'R$ 12.600', next: 'Enviar caso' },
      { name: 'Fernanda M.', company: 'FM Consultoria', value: 'R$ 6.900', next: 'Reunião às 15h' },
    ],
  },
  {
    title: 'Apresentação',
    count: 4,
    leads: [
      { name: 'André Costa', company: 'AC Engenharia', value: 'R$ 18.000', next: 'Demo hoje' },
      { name: 'Lucas T.', company: 'TechSolutions', value: 'R$ 9.800', next: 'Retorno em 2 dias' },
    ],
  },
  {
    title: 'Negociação',
    count: 2,
    leads: [
      { name: 'Marcos Lima', company: 'Construtora Atlas', value: 'R$ 24.000', next: 'Enviar proposta' },
      { name: 'Carla Mendes', company: 'Mendes Imóveis', value: 'R$ 14.400', next: 'Aprovação final' },
    ],
  },
];

export function PipelineFeature(): React.JSX.Element {
  return (
    <section aria-label="Quadro do pipeline" className="min-w-[900px] rounded-xl border border-ink/10 bg-[#f2efe8] p-4 shadow-[0_20px_55px_rgba(15,23,42,0.09)]">
      <header className="mb-4 flex items-center justify-between rounded-lg border border-ink/10 bg-paper px-4 py-3">
        <div>
          <h3 className="text-sm font-semibold text-ink">Pipeline comercial</h3>
          <p className="mt-0.5 text-[11px] text-slate">14 oportunidades · R$ 98.300 em aberto</p>
        </div>
        <button type="button" aria-label="Opções do pipeline" className="rounded-md p-2 text-slate hover:bg-ink/5">
          <MoreHorizontal aria-hidden="true" className="h-4 w-4" />
        </button>
      </header>

      <div className="grid grid-cols-4 gap-3">
        {columns.map((column) => (
          <section key={column.title} aria-labelledby={`pipeline-${column.title}`} className="min-w-0">
            <header className="mb-2.5 flex items-center justify-between px-1">
              <h4 id={`pipeline-${column.title}`} className="text-xs font-semibold text-ink">{column.title}</h4>
              <span className="rounded-full bg-ink/7 px-2 py-0.5 text-[11px] font-semibold text-slate">{column.count}</span>
            </header>
            <ol className="space-y-2.5">
              {column.leads.map((lead) => (
                <li key={lead.name} className="rounded-lg border border-ink/10 bg-paper p-3.5 shadow-sm">
                  <strong className="block truncate text-xs font-semibold text-ink">{lead.name}</strong>
                  <span className="mt-1 block truncate text-[11px] text-slate">{lead.company}</span>
                  <span className="mt-4 flex items-center gap-1.5 text-[11px] font-medium text-ink">
                    <CircleDollarSign aria-hidden="true" className="h-3.5 w-3.5 text-success" />
                    {lead.value}
                  </span>
                  <span className="mt-2 flex items-center gap-1.5 rounded-md bg-gold-soft/45 px-2 py-1.5 text-[11px] font-medium text-ink/80">
                    <CalendarClock aria-hidden="true" className="h-3.5 w-3.5 text-gold" />
                    {lead.next}
                  </span>
                </li>
              ))}
            </ol>
          </section>
        ))}
      </div>
    </section>
  );
}
