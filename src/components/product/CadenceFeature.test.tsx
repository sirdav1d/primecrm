import { cleanup, render, screen } from '@testing-library/react';
import { afterEach, describe, expect, it } from 'vitest';
import { CadenceFeature } from './CadenceFeature';

afterEach(cleanup);

describe('CadenceFeature', () => {
  it('não captura a rolagem da página dentro do fluxo decorativo', () => {
    render(<CadenceFeature />);

    const pane = screen
      .getByRole('region', { name: /fluxo de cadência de reativação/i })
      .querySelector('.react-flow__pane');
    expect(pane).not.toBeNull();

    const wheel = new WheelEvent('wheel', { bubbles: true, cancelable: true, deltaY: 120 });
    pane!.dispatchEvent(wheel);

    expect(wheel.defaultPrevented).toBe(false);
  });
});
