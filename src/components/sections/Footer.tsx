import type { JSX } from 'react';

export function Footer(): JSX.Element {
  return (
    <footer id="recursos" aria-labelledby="footer-title" className="border-t border-white/10 bg-transparent py-8 text-white">
      <div className="page-shell grid gap-7 text-left md:grid-cols-3 md:items-end">
        <h2 id="footer-title" className="sr-only">Recursos Prime CRM</h2>
        <div>
          <p className="text-lg font-semibold tracking-[-0.03em]">Prime CRM</p>
          <p className="mt-1 max-w-xs text-xs leading-5 text-white/65">Conversas viram dados. Dados viram ação.</p>
        </div>
        <p className="text-xs leading-5 text-white/70 md:text-center">© 2026 Prime CRM. Todos os direitos reservados.</p>
        <p className="text-xs leading-5 text-white/70 md:text-right">Método, conhecimento e IA integrada.</p>
      </div>
    </footer>
  );
}
