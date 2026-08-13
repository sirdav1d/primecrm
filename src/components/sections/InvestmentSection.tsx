import type { JSX } from 'react';
import { usePrefersReducedMotion } from '../../hooks/usePrefersReducedMotion';
import { CostComparisonChart } from '../diagrams/CostComparisonChart';
import { Button } from '../ui/Button';
import { SectionLabel } from '../ui/SectionLabel';

export function InvestmentSection(): JSX.Element {
  const reducedMotion = usePrefersReducedMotion();

  return (
    <section id="investimento" role="region" aria-labelledby="investment-title" className="border-t border-white/10 py-6">
      <div className="page-shell">
        <SectionLabel tone="light">INVESTIMENTO</SectionLabel>
        <h2 id="investment-title" className="mt-2 max-w-none text-3xl leading-tight font-semibold tracking-[-0.04em] text-white sm:text-4xl">Menos que um vendedor júnior. Trabalhando 24 horas por dia.</h2>
        <div className="mt-4 grid min-w-0 items-center gap-8 lg:grid-cols-[minmax(0,1.1fr)_minmax(300px,0.9fr)] lg:gap-12">
          <CostComparisonChart reducedMotion={reducedMotion} />
          <div className="border-t border-white/15 pt-7 lg:border-t-0 lg:border-l lg:py-4 lg:pl-12">
            <p className="text-3xl font-semibold tracking-[-0.04em] text-white sm:text-4xl">R$ 7.200/ano</p>
            <p className="mt-1 text-xl font-semibold text-gold">Incluído</p>
            <Button href="#demo" className="mt-6">Quero ver na minha operação</Button>
            <p className="mt-4 text-xs font-semibold tracking-[0.1em] text-white/70 uppercase">Garantia de 14 dias · Todo o risco é nosso</p>
          </div>
        </div>
      </div>
    </section>
  );
}
