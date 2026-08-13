import { TriangleAlert } from 'lucide-react';
import { problems } from '../../data/content';
import { SectionLabel } from '../ui/SectionLabel';

export function ProblemSection(): React.JSX.Element {
  return (
    <section aria-labelledby="problem-title" className="border-y border-ink/10 py-10">
      <div className="page-shell">
        <SectionLabel>VOCÊ RECONHECE ESSE CENÁRIO?</SectionLabel>
        <div className="mt-4 grid items-end gap-10 lg:grid-cols-[minmax(0,2fr)_minmax(280px,1fr)] lg:gap-16">
          <div>
            <h2 id="problem-title" className="max-w-3xl text-3xl leading-tight font-semibold tracking-[-0.04em] text-ink sm:text-4xl">O funil está bonito. Mas a venda acontece no WhatsApp — <span className="text-gold-text">fora dele.</span></h2>
            <ol className="mt-4 space-y-1.5">{problems.map((problem, index) => (<li key={problem} className="grid grid-cols-[36px_1fr] items-start gap-3 rounded-lg border border-ink/10 bg-paper px-4 py-2.5 sm:grid-cols-[44px_1fr] sm:gap-4 sm:px-5"><span aria-hidden="true" className="text-xl leading-6 font-semibold tabular-nums text-gold-text">{index + 1}</span><p className="text-sm leading-6 text-ink/80">“{problem}”</p></li>))}</ol>
          </div>
          <aside className="rounded-xl bg-navy px-6 py-7 text-white shadow-[0_18px_45px_rgba(7,26,54,0.16)] sm:px-7"><TriangleAlert aria-hidden="true" className="h-5 w-5 text-gold" strokeWidth={1.8} /><h3 className="mt-4 text-lg font-semibold text-gold">Esse é o problema real:</h3><p className="mt-3 text-sm leading-6 text-white/85">CRM tradicional depende de disciplina humana. O Prime CRM inverte a lógica: a conversa alimenta o funil, a IA cuida da ação, e você enxerga o jogo inteiro em uma tela.</p></aside>
        </div>
      </div>
    </section>
  );
}
