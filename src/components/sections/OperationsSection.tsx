import type { JSX, ReactNode } from 'react';
import { usePrefersReducedMotion } from '../../hooks/usePrefersReducedMotion';
import { AiOperationsFlow } from '../diagrams/AiOperationsFlow';
import { CockpitChart } from '../diagrams/CockpitChart';
import { ConnectedNumbersFlow } from '../diagrams/ConnectedNumbersFlow';
import { Reveal } from '../ui/Reveal';

function OperationArticle({ children, delay, description, number, title }: { children: ReactNode; delay: number; description: string; number: string; title: string }): JSX.Element {
  return (
    <Reveal delay={delay} className="min-w-0">
      <article className="flex min-w-0 flex-col border-t border-white/15 pt-5 lg:border-t-0 lg:border-l lg:px-7 lg:pt-0 first:lg:border-l-0 first:lg:pl-0 last:lg:pr-0">
        <span className="text-sm font-bold tracking-[0.12em] text-gold tabular-nums">{number}</span>
        <h3 className="mt-2 text-xl font-semibold tracking-[-0.03em] text-white">{title}</h3>
        <p className="mt-2 min-h-12 max-w-sm text-sm leading-6 text-white/70">{description}</p>
        <div className="mt-4 min-w-0">{children}</div>
      </article>
    </Reveal>
  );
}

export function OperationsSection(): JSX.Element {
  const reducedMotion = usePrefersReducedMotion();
  return (
    <section id="casos-de-uso" aria-labelledby="operations-title" className="overflow-hidden py-8">
      <div className="page-shell">
        <Reveal><p className="text-xs font-bold tracking-[0.16em] text-gold uppercase">COMO FUNCIONA</p><h2 id="operations-title" className="sr-only">Como funciona</h2></Reveal>
        <div className="mt-6 grid min-w-0 grid-cols-1 gap-10 lg:grid-cols-3 lg:gap-0">
          <OperationArticle number="01" title="Conecte seus números" description="Uma única operação para todos os WhatsApps do seu time." delay={0.04}><ConnectedNumbersFlow reducedMotion={reducedMotion} /></OperationArticle>
          <OperationArticle number="02" title="A IA assume o operacional" description="Recebe, qualifica, responde, agenda e mantém cada oportunidade em movimento." delay={0.08}><AiOperationsFlow reducedMotion={reducedMotion} /></OperationArticle>
          <OperationArticle number="03" title="Você gerencia pelo cockpit" description="Acompanhe volume, velocidade e cobertura sem cobrar atualização manual." delay={0.12}><CockpitChart reducedMotion={reducedMotion} /></OperationArticle>
        </div>
      </div>
    </section>
  );
}
