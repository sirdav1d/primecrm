import { useId } from 'react';
import { Check, ChevronDown, Sparkles } from 'lucide-react';
import { cn } from '../../lib/cn';
import { Avatar } from '../ui/Avatar';

export function LeadContextPanel({ compact = false }: { compact?: boolean }): React.JSX.Element {
  const suggestionTitleId = useId();

  return (
    <aside
      aria-label="Contexto do lead Marcos Lima"
      className="flex min-h-0 min-w-0 flex-col border-l border-[rgba(15,23,42,0.10)] bg-paper text-left"
    >
      <header className={cn('flex items-center gap-2.5 border-b border-[rgba(15,23,42,0.10)]', compact ? 'min-h-[55px] px-3 py-2' : 'min-h-[71px] px-4 py-3')}>
        <Avatar src="/avatars/marcos-lima.png" alt="Marcos Lima" size="sm" />
        <div className="min-w-0 flex-1">
          <strong className="block truncate text-[12px] font-semibold text-ink">Marcos Lima</strong>
          <span className="mt-0.5 block truncate text-[11px] text-slate">Construtora Atlas</span>
        </div>
        <span className="inline-flex items-center gap-1 text-[11px] font-medium text-success-text">
          <span className="h-1.5 w-1.5 rounded-full bg-success" aria-hidden="true" /> Online
        </span>
      </header>

      <div className={cn('border-b border-[rgba(15,23,42,0.10)]', compact ? 'px-3 pt-2' : 'px-4 pt-3')}>
        <span className="text-[11px] text-slate">Negociação</span>
        <nav aria-label="Detalhes do lead" className={cn('flex items-end gap-5', compact ? 'mt-1' : 'mt-2')}>
          {['Resumo', 'Atividades', 'Arquivos'].map((tab, index) => (
            <button
              key={tab}
              type="button"
              aria-current={index === 0 ? 'page' : undefined}
              className={`border-b-2 pb-2 text-[11px] font-medium ${
                index === 0 ? 'border-ink text-ink' : 'border-transparent text-slate'
              }`}
            >
              {tab}
            </button>
          ))}
          <button type="button" aria-label="Mais detalhes" className="ml-auto pb-2 text-slate">
            <ChevronDown aria-hidden="true" className="h-3 w-3" />
          </button>
        </nav>
      </div>

      <div className={cn('flex min-h-0 flex-1 flex-col', compact ? 'gap-1.5 p-2' : 'gap-3 p-4')}>
        <section className={cn('rounded-lg border border-ink/10 bg-white/55', compact ? 'p-1.5' : 'p-3')}>
          <p className="text-[11px] font-medium text-slate">Última mensagem</p>
          <p className="mt-2 text-[11px] leading-[1.55] text-ink">
            Tenho interesse no plano Profissional para 15 usuários.
          </p>
          <p className="mt-1 text-[11px] text-slate">Hoje, 09:42</p>
        </section>

        <section aria-labelledby={suggestionTitleId} className={cn('rounded-lg border border-gold/25 bg-gold-soft/35', compact ? 'p-1.5' : 'p-3')}>
          <div className="flex items-center gap-1.5">
            <Sparkles aria-hidden="true" className="h-3.5 w-3.5 text-gold" />
            <h3 id={suggestionTitleId} className="text-[11px] font-semibold text-ink">IA de Atendimento</h3>
            <span className="ml-auto rounded bg-gold px-1 py-0.5 text-[11px] font-bold tracking-wide text-ink">SUGESTÃO</span>
          </div>
          <p className="mt-2 text-[11px] leading-[1.55] text-ink/80">
            Enviar proposta do plano Profissional com 15% de desconto e agendar demonstração.
          </p>
          <button
            type="button"
            className={cn('inline-flex min-h-8 items-center gap-1 rounded-md border border-ink/10 bg-paper px-2.5 text-[11px] font-semibold text-ink', compact ? 'mt-2' : 'mt-3')}
          >
            <Check aria-hidden="true" className="h-3 w-3" /> Aplicar sugestão
          </button>
        </section>

        <section className={cn('mt-auto rounded-lg border border-ink/10', compact ? 'p-1.5' : 'p-3')}>
          <p className="text-[11px] text-slate">Próximo passo sugerido</p>
          <p className="mt-1.5 text-[11px] font-medium text-ink">Enviar proposta + agendar demo</p>
          <button
            type="button"
            className="mt-3 min-h-8 w-full rounded-md bg-ink px-3 text-[11px] font-semibold text-white"
          >
            Executar ação
          </button>
        </section>
      </div>
    </aside>
  );
}
