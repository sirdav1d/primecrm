import { cleanup, render, screen, within } from '@testing-library/react';
import { afterEach, describe, expect, it } from 'vitest';
import { App } from './App';

afterEach(cleanup);

describe('Prime CRM landing page', () => {
  it('preserva os destinos navy durante o carregamento sob demanda', () => {
    render(<App />);

    const operations = screen.getByRole('region', { name: /como funciona/i });
    expect(operations).toHaveAttribute('id', 'casos-de-uso');
    expect(operations).toHaveAttribute('aria-busy', 'true');

    const investment = screen.getByRole('region', { name: /menos que um vendedor júnior/i });
    expect(investment).toHaveAttribute('id', 'investimento');
    expect(investment).toHaveAttribute('aria-busy', 'true');

    const demo = screen.getByRole('region', { name: /conectamos um número seu/i });
    expect(demo).toHaveAttribute('id', 'demo');
    expect(demo).toHaveAttribute('aria-busy', 'true');
  });

  it('reserva nos fallbacks a altura final das seções compactas no desktop', () => {
    render(<App />);

    const operations = screen.getByRole('region', { name: /como funciona/i });
    expect(operations).toHaveClass('min-h-[1120px]', 'lg:min-h-[472px]');
    expect(operations).not.toHaveClass('sm:min-h-[680px]');

    const investment = screen.getByRole('region', { name: /menos que um vendedor júnior/i });
    expect(investment).toHaveClass('min-h-[620px]', 'lg:min-h-[338px]');
    expect(investment).not.toHaveClass('sm:min-h-[560px]');
  });

  it('possui um único h1 e todas as seções essenciais', async () => {
    render(<App />);
    expect(screen.getAllByRole('heading', { level: 1 })).toHaveLength(1);
    expect(screen.getByRole('main')).toBeInTheDocument();
    expect(screen.getByRole('contentinfo')).toBeInTheDocument();
    expect(await screen.findByRole('region', { name: /conectamos um número seu/i })).toBeInTheDocument();
  });

  it('mantém todos os CTAs de demonstração ligados à seção demo', async () => {
    render(<App />);
    await screen.findByRole('link', { name: /quero ver na minha operação/i });
    const links = screen.getAllByRole('link', { name: /demo|operação/i });
    expect(links.length).toBeGreaterThanOrEqual(3);
    links.forEach((link) => expect(link).toHaveAttribute('href', '#demo'));
  });

  it('mantém os destinos da navegação principal disponíveis na página', () => {
    render(<App />);
    const navigation = screen.getByRole('navigation', { name: /navegação principal/i });

    within(navigation)
      .getAllByRole('link')
      .forEach((link) => {
        const target = link.getAttribute('href');
        expect(target).toMatch(/^#/);
        expect(document.getElementById(target!.slice(1))).toBeInTheDocument();
      });
  });
});
