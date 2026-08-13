import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { Button } from '../ui/Button';

const navigation = [
  { href: '#modulos', label: 'Módulos' },
  { href: '#casos-de-uso', label: 'Casos de uso' },
  { href: '#investimento', label: 'Investimento' },
  { href: '#recursos', label: 'Recursos' },
];

export function Header(): React.JSX.Element {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-black/10 bg-canvas/95 backdrop-blur-sm">
      <div className="page-shell flex h-16 items-center justify-between gap-4">
        <a href="#inicio" className="inline-flex min-h-11 shrink-0 items-center text-lg font-semibold tracking-[-0.03em]">Prime CRM</a>
        <nav aria-label="Navegação principal" className="hidden items-center gap-7 min-[769px]:flex">
          {navigation.map((item) => (<a key={item.href} href={item.href} className="text-sm font-medium text-ink/70 transition-colors hover:text-ink">{item.label}</a>))}
        </nav>
        <div className="hidden shrink-0 items-center gap-5 min-[769px]:flex"><a href="#produto" className="text-sm font-medium text-ink/70 transition-colors hover:text-ink">Entrar</a><Button href="#demo">Agendar Demo</Button></div>
        <button type="button" aria-label={open ? 'Fechar menu' : 'Abrir menu'} aria-controls="mobile-navigation" aria-expanded={open} onClick={() => setOpen((value) => !value)} className="grid size-11 shrink-0 cursor-pointer place-items-center rounded-full transition-colors hover:bg-black/5 min-[769px]:hidden">{open ? <X aria-hidden="true" size={22} /> : <Menu aria-hidden="true" size={22} />}</button>
      </div>
      {open && (<nav id="mobile-navigation" aria-label="Navegação móvel" className="page-shell grid max-w-full gap-1 border-t border-black/10 py-4 min-[769px]:hidden">{navigation.map((item) => (<a key={item.href} href={item.href} onClick={() => setOpen(false)} className="rounded-lg px-3 py-3 text-base font-medium transition-colors hover:bg-black/5">{item.label}</a>))}<a href="#produto" onClick={() => setOpen(false)} className="rounded-lg px-3 py-3 text-base font-medium transition-colors hover:bg-black/5">Entrar</a><Button href="#demo" onClick={() => setOpen(false)} className="mt-3 w-full">Agendar Demo</Button></nav>)}
    </header>
  );
}
