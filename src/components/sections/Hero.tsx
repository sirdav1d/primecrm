import { metrics } from '../../data/content';
import { CrmWorkspace } from '../product/CrmWorkspace';
import { Button } from '../ui/Button';
import { Metric } from '../ui/Metric';
import { SectionLabel } from '../ui/SectionLabel';

export function Hero(): React.JSX.Element {
  return (
    <section id="inicio" aria-labelledby="hero-title" className="pt-10 pb-2">
      <div className="page-shell text-center">
        <SectionLabel>PRIME CRM · MÓDULO DO ECOSSISTEMA CENTRAL_IA</SectionLabel>
        <h1 id="hero-title" className="mx-auto mt-4 max-w-5xl text-4xl leading-[1.05] font-semibold tracking-[-0.055em] text-balance sm:text-5xl">
          O CRM que se preenche <span className="text-gold-text">sozinho</span>
          <br className="hidden sm:block" /> e não deixa nenhum lead esfriar
        </h1>
        <p className="mx-auto mt-3 max-w-2xl text-base leading-7 text-ink">Pipeline Kanban, WhatsApp Inbox e IA de atendimento na mesma tela. Cada conversa vira card, cada card vira ação, sem depender da disciplina do vendedor.</p>
        <div className="mt-4 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center"><Button href="#demo">Agendar Demo Gratuita</Button><Button href="#produto" variant="secondary">Ver o CRM por dentro</Button></div>
        <div aria-label="Métricas do Prime CRM" className="mx-auto mt-6 grid max-w-3xl grid-cols-3 gap-3 sm:gap-8">{metrics.map((metric) => (<Metric key={metric.label} {...metric} />))}</div>
        <CrmWorkspace />
      </div>
    </section>
  );
}
