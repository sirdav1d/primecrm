import { describe, expect, it } from 'vitest';
import './styles.css';

describe('estilos globais de navegação', () => {
  it('compensa o header sticky ao navegar para uma âncora', () => {
    expect(getComputedStyle(document.documentElement).scrollPaddingTop).toBe('4rem');
  });
});
