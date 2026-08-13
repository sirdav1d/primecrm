import type { JSX } from 'react';
import { metrics } from '../../data/content';
import { usePrefersReducedMotion } from '../../hooks/usePrefersReducedMotion';
import { GrowthCurve } from '../diagrams/GrowthCurve';
import { Button } from '../ui/Button';
import { Metric } from '../ui/Metric';
import { SectionLabel } from '../ui/SectionLabel';
import { demoCtaMinHeightStyle } from './demoCtaLayout';

export function DemoCta(): JSX.Element {
  const reducedMotion = usePrefersReducedMotion();
  return (
    <section id="demo" data-section="demo" data-min-height="80vh" role="region" aria-labelledby="demo-title" className="relative isolate overflow-hidden border-t border-white/10" style={demoCtaMinHeightStyle}>
      <div className="page-shell relative z-10 grid min-h-[80vh] content-center gap-14 py-24">
        <div className="max-w-2xl">
          <SectionLabel tone="light">DEMO AO VIVO · 20 MINUTOS</SectionLabel>
          <h2 id="demo-title" className="mt-4 text-4xl leading-[1.08] font-semibold tracking-[-0.05em] text-white text-balance sm:text-5xl">Conectamos um número seu e você vê o funil se preencher sozinho.</h2>
          <p className="mt-5 max-w-xl text-base leading-7 text-white/80">Sem slides, sem promessas. Uma carteira real, na tela, durante a call.</p>
          <Button href="#demo" className="mt-7">Agendar Demo Gratuita</Button>
          <p className="mt-3 text-xs font-semibold tracking-[0.1em] text-white/70 uppercase">99% risco · Quero ver no WhatsApp</p>
        </div>
        <div aria-label="Resultados operacionais" role="list" className="grid max-w-3xl grid-cols-1 gap-7 border-t border-white/15 pt-8 sm:grid-cols-3 sm:gap-8">
          {metrics.map((metric) => (<div key={metric.label} role="listitem"><Metric {...metric} tone="light" /></div>))}
        </div>
      </div>
      <GrowthCurve reducedMotion={reducedMotion} />
    </section>
  );
}
