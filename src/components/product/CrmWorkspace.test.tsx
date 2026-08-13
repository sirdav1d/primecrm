import { cleanup, render, screen, within } from '@testing-library/react';
import { afterEach, describe, expect, it } from 'vitest';
import { conversations, leads } from '../../data/content';
import { CrmWorkspace } from './CrmWorkspace';
import { LeadContextPanel } from './LeadContextPanel';
import { LeadsTable } from './LeadsTable';
import { WhatsAppFeature } from './WhatsAppFeature';
import { WhatsAppInbox } from './WhatsAppInbox';

afterEach(cleanup);

function arbitraryFontSizes(container: HTMLElement): number[] {
  return Array.from(container.querySelectorAll<HTMLElement>('[class]')).flatMap((element) =>
    Array.from(element.classList).flatMap((className) => {
      const match = className.match(/^text-\[(\d+)px\]$/);
      return match ? [Number(match[1])] : [];
    }),
  );
}

describe('WhatsAppInbox', () => {
  it('oferece busca, filtros e as cinco conversas do atendimento', () => {
    render(<WhatsAppInbox conversations={conversations} />);

    expect(screen.getByRole('searchbox', { name: /buscar conversa/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /todas as conversas/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /minhas conversas/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /conversas não lidas/i })).toBeInTheDocument();
    expect(within(screen.getByRole('list', { name: /conversas recentes/i })).getAllByRole('listitem')).toHaveLength(5);
    expect(screen.getByRole('button', { name: /marcos lima.*tenho interesse/i })).toBeInTheDocument();
  });

  it('usa token opaco com contraste AA nos contadores inativos', () => {
    render(<WhatsAppInbox conversations={conversations} />);

    for (const count of ['4', '5']) {
      const counter = within(
        screen.getByRole('button', { name: new RegExp(`conversas.*, ${count}`, 'i') }),
      ).getByText(count);

      expect(counter).toHaveClass('text-slate');
      expect(counter.className).not.toMatch(/text-\S+\/\d+/);
    }
  });
});

describe('LeadsTable', () => {
  it('apresenta os oito leads em uma tabela semântica com riscos legíveis', () => {
    render(<LeadsTable leads={leads} />);

    const table = screen.getByRole('table', { name: /leads do funil/i });
    expect(within(table).getAllByRole('columnheader').map((header) => header.textContent)).toEqual([
      'Lead',
      'Empresa',
      'Etapa',
      'Resposta',
      'Risco',
      'Responsável',
    ]);
    expect(within(table).getAllByRole('row')).toHaveLength(9);
    expect(within(table).getAllByText('Baixo')).toHaveLength(4);
    expect(within(table).getAllByText('Médio')).toHaveLength(2);
    expect(within(table).getAllByText('Alto')).toHaveLength(2);
  });

  it('distribui as seis colunas xl em exatamente 100% da tabela', () => {
    render(<LeadsTable leads={leads} />);

    const table = screen.getByRole('table', { name: /leads do funil/i });
    const widths = Array.from(table.querySelectorAll('col')).map((column) =>
      Number(column.style.width.replace('%', '')),
    );

    expect(widths).toEqual([20, 18, 20, 14, 12, 16]);
    expect(widths.reduce((total, width) => total + width, 0)).toBe(100);
    expect(widths.at(-1)).toBeGreaterThanOrEqual(16);
  });
});

describe('LeadContextPanel', () => {
  it('expõe contexto, navegação e ações da sugestão de IA', () => {
    render(<LeadContextPanel />);

    const panel = screen.getByRole('complementary', { name: /contexto do lead marcos lima/i });
    expect(within(panel).getByRole('img', { name: 'Marcos Lima' })).toHaveAttribute(
      'src',
      '/avatars/marcos-lima.png',
    );
    expect(within(panel).getByRole('navigation', { name: /detalhes do lead/i })).toBeInTheDocument();
    expect(within(panel).getByRole('button', { name: 'Resumo' })).toHaveAttribute(
      'aria-current',
      'page',
    );
    expect(within(panel).getByRole('button', { name: /aplicar sugestão/i })).toBeInTheDocument();
    expect(within(panel).getByRole('button', { name: /executar ação/i })).toBeInTheDocument();
  });

  it('usa o foreground verde AA para o status online sobre papel claro', () => {
    render(<LeadContextPanel />);

    expect(screen.getByText('Online')).toHaveClass('text-success-text');
    expect(screen.getByText('Online')).not.toHaveClass('text-success');
  });

  it('gera relações aria-labelledby únicas quando há mais de um painel', () => {
    render(
      <>
        <LeadContextPanel />
        <LeadContextPanel compact />
      </>,
    );

    const headings = screen.getAllByRole('heading', { name: 'IA de Atendimento' });
    const ids = headings.map((heading) => heading.id);

    expect(new Set(ids).size).toBe(2);
    headings.forEach((heading) => {
      expect(heading.closest('section')).toHaveAttribute('aria-labelledby', heading.id);
    });
  });
});

describe('foregrounds de status', () => {
  it('usa o foreground verde AA para o status conectado sobre papel claro', () => {
    render(<WhatsAppInbox conversations={conversations} />);

    expect(screen.getByText('Conectado')).toHaveClass('text-success-text');
    expect(screen.getByText('Conectado')).not.toHaveClass('text-success');
  });
});

describe('WhatsAppFeature', () => {
  it('preserva a ação final dentro do painel compacto sem recorte por overflow', () => {
    render(<WhatsAppFeature />);

    const panel = screen.getByRole('complementary', { name: /contexto do lead marcos lima/i });
    const grid = panel.parentElement;
    const illustration = grid?.parentElement;

    expect(within(panel).getByRole('button', { name: /executar ação/i })).toBeInTheDocument();
    expect(panel).not.toHaveClass('overflow-hidden');
    expect(grid).toHaveClass('grid-rows-[minmax(0,1fr)]');
    expect(illustration).toHaveClass('h-[460px]', '[@media(max-width:640px)]:h-[520px]');
    expect(illustration).not.toHaveClass('max-sm:h-[520px]');
  });
});

describe('CrmWorkspace', () => {
  it('mantém as três áreas do CRM dentro da região do produto', () => {
    render(<CrmWorkspace />);

    const workspace = screen.getByRole('region', { name: /workspace do prime crm/i });
    expect(within(workspace).getByText('WhatsApp Inbox')).toBeInTheDocument();
    expect(within(workspace).getByRole('table', { name: /leads do funil/i })).toBeInTheDocument();
    expect(
      within(workspace).getByRole('complementary', { name: /contexto do lead/i }),
    ).toBeInTheDocument();
  });

  it('mantém toda tipografia dos painéis entre 11 e 14 pixels', () => {
    render(<CrmWorkspace />);

    const workspace = screen.getByRole('region', { name: /workspace do prime crm/i });
    const fontSizes = arbitraryFontSizes(workspace);

    expect(fontSizes.length).toBeGreaterThan(0);
    expect(Math.min(...fontSizes)).toBeGreaterThanOrEqual(11);
    expect(Math.max(...fontSizes)).toBeLessThanOrEqual(14);
  });
});
