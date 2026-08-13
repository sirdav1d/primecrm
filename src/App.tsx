import { lazy, Suspense } from 'react';
import { Header } from './components/sections/Header';
import { Hero } from './components/sections/Hero';
import { FeatureShowcase } from './components/sections/FeatureShowcase';
import { ProblemSection } from './components/sections/ProblemSection';
import { Footer } from './components/sections/Footer';
import { demoCtaMinHeightStyle } from './components/sections/demoCtaLayout';

const OperationsSection = lazy(() =>
  import('./components/sections/OperationsSection').then((module) => ({ default: module.OperationsSection })),
);
const InvestmentSection = lazy(() =>
  import('./components/sections/InvestmentSection').then((module) => ({ default: module.InvestmentSection })),
);
const DemoCta = lazy(() =>
  import('./components/sections/DemoCta').then((module) => ({ default: module.DemoCta })),
);

function OperationsFallback() {
  return (
    <section
      id="casos-de-uso"
      aria-busy="true"
      aria-labelledby="operations-title"
      className="min-h-[1120px] lg:min-h-[472px]"
    >
      <h2 id="operations-title" className="sr-only">Como funciona</h2>
    </section>
  );
}

function InvestmentFallback() {
  return (
    <section
      id="investimento"
      aria-busy="true"
      aria-labelledby="investment-title"
      className="min-h-[620px] border-t border-white/10 lg:min-h-[338px]"
      role="region"
    >
      <h2 id="investment-title" className="sr-only">
        Menos que um vendedor júnior. Trabalhando 24 horas por dia.
      </h2>
    </section>
  );
}

function DemoFallback() {
  return (
    <section
      id="demo"
      aria-busy="true"
      aria-labelledby="demo-title"
      className="border-t border-white/10"
      data-min-height="80vh"
      data-section="demo"
      role="region"
      style={demoCtaMinHeightStyle}
    >
      <h2 id="demo-title" className="sr-only">
        Conectamos um número seu e você vê o funil se preencher sozinho.
      </h2>
    </section>
  );
}

export function App() {
  return (
    <>
      <Header />
      <div className="bg-[#071A36]">
        <main>
          <div className="bg-canvas">
            <Hero />
            <ProblemSection />
            <FeatureShowcase />
          </div>
          <Suspense fallback={<OperationsFallback />}>
            <OperationsSection />
          </Suspense>
          <Suspense fallback={<InvestmentFallback />}>
            <InvestmentSection />
          </Suspense>
          <Suspense fallback={<DemoFallback />}>
            <DemoCta />
          </Suspense>
        </main>
        <Footer />
      </div>
    </>
  );
}
