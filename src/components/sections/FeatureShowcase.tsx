import { useState, type KeyboardEvent } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { Clock3, KanbanSquare, MessageCircleMore } from 'lucide-react';
import { type FeatureId, featureOrder, features } from '../../data/content';
import { CadenceFeature } from '../product/CadenceFeature';
import { PipelineFeature } from '../product/PipelineFeature';
import { WhatsAppFeature } from '../product/WhatsAppFeature';
import { SectionLabel } from '../ui/SectionLabel';

const moduleIcons = { inbox: MessageCircleMore, pipeline: KanbanSquare, cadence: Clock3 };
const modulePanels = { inbox: WhatsAppFeature, pipeline: PipelineFeature, cadence: CadenceFeature };

export function FeatureShowcase(): React.JSX.Element {
  const [active, setActive] = useState<FeatureId>('inbox');
  const prefersReducedMotion = typeof window !== 'undefined' && typeof window.matchMedia === 'function' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const ActivePanel = modulePanels[active];

  function selectByKey(event: KeyboardEvent<HTMLButtonElement>, index: number) {
    const last = featureOrder.length - 1;
    const nextIndex = event.key === 'ArrowDown' || event.key === 'ArrowRight' ? (index + 1) % featureOrder.length : event.key === 'ArrowUp' || event.key === 'ArrowLeft' ? (index - 1 + featureOrder.length) % featureOrder.length : event.key === 'Home' ? 0 : event.key === 'End' ? last : index;
    if (nextIndex !== index) {
      event.preventDefault();
      const next = featureOrder[nextIndex];
      setActive(next);
      document.getElementById(`feature-tab-${next}`)?.focus();
      return;
    }
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      setActive(featureOrder[index]);
    }
  }

  return (
    <section id="modulos" aria-labelledby="features-title" className="py-8">
      <div className="page-shell">
        <SectionLabel>3 MOTORES INTEGRADOS</SectionLabel>
        <h2 id="features-title" className="mt-2 text-3xl leading-tight font-semibold tracking-[-0.04em] text-ink sm:text-4xl">Cada conversa vira card. Cada card vira ação.</h2>
        <div className="mt-4 grid items-stretch gap-5 lg:grid-cols-[290px_minmax(0,1fr)]">
          <div role="tablist" aria-label="Módulos do Prime CRM" aria-orientation="vertical" className="grid grid-cols-1 gap-2 lg:content-center">
            {featureOrder.map((featureId, index) => {
              const feature = features[featureId];
              const Icon = moduleIcons[featureId];
              const selected = active === featureId;
              return (
                <button key={featureId} id={`feature-tab-${featureId}`} type="button" role="tab" aria-selected={selected} aria-controls={`feature-panel-${featureId}`} tabIndex={selected ? 0 : -1} onClick={() => setActive(featureId)} onKeyDown={(event) => selectByKey(event, index)} className={`group relative flex min-h-[104px] items-start gap-3 rounded-lg border px-4 py-4 text-left transition-colors ${selected ? 'border-gold/50 bg-gold-soft/35 text-ink' : 'border-transparent bg-transparent text-slate hover:border-ink/10 hover:bg-paper'}`}>
                  <span className={`mt-0.5 rounded-md border p-2 ${selected ? 'border-gold/35 bg-paper text-gold' : 'border-ink/10 bg-paper text-slate'}`}><Icon aria-hidden="true" className="h-4 w-4" strokeWidth={1.8} /></span>
                  <span className="min-w-0"><strong className="block text-sm font-semibold text-current">{feature.title}</strong><span className="mt-1.5 block text-xs leading-5 text-slate">{feature.description}</span></span>
                  {selected ? <span aria-hidden="true" className="absolute inset-y-3 left-0 w-0.5 rounded-full bg-gold" /> : null}
                </button>
              );
            })}
          </div>
          <div className="min-w-0 overflow-x-auto overscroll-x-contain pb-2 [scrollbar-width:thin]">
            <AnimatePresence initial={false}>
              <motion.div key={active} id={`feature-panel-${active}`} role="tabpanel" aria-labelledby={`feature-tab-${active}`} tabIndex={0} initial={prefersReducedMotion ? false : { opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: prefersReducedMotion ? 0 : 0.22, ease: 'easeOut' }}><ActivePanel /></motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
