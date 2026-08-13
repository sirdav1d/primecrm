import { render, screen, waitFor } from '@testing-library/react';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import { Button } from './Button';
import { Reveal } from './Reveal';

describe('Button', () => {
  it('renderiza um link acessível para a demonstração por padrão', () => {
    render(<Button>Agendar demo</Button>);

    const link = screen.getByRole('link', { name: 'Agendar demo' });
    expect(link).toHaveAttribute('href', '#demo');
    expect(link).toHaveStyle({ minHeight: '44px', minWidth: '44px' });
  });
});

describe('Reveal', () => {
  beforeEach(() => {
    window.matchMedia = vi.fn().mockReturnValue({
      matches: true,
      addEventListener: vi.fn(),
      removeEventListener: vi.fn(),
    });
  });

  it('mantém o conteúdo visível quando o movimento reduzido está ativo', async () => {
    const { container } = render(
      <Reveal>
        <h2>Conteúdo importante</h2>
      </Reveal>,
    );

    expect(screen.getByRole('heading', { name: 'Conteúdo importante' })).toBeVisible();

    await waitFor(() => {
      expect(container.firstElementChild).not.toHaveStyle({ opacity: '0' });
    });
  });

  it('limita a entrada vertical a 16 pixels quando há movimento', () => {
    window.matchMedia = vi.fn().mockReturnValue({
      matches: false,
      addEventListener: vi.fn(),
      removeEventListener: vi.fn(),
    });

    const { container } = render(
      <Reveal>
        <h2>Conteúdo em movimento</h2>
      </Reveal>,
    );

    expect(container.firstElementChild).toHaveStyle({ transform: 'translateY(16px)' });
  });
});
