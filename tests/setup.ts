import '@testing-library/jest-dom/vitest';

if (!globalThis.ResizeObserver) {
  globalThis.ResizeObserver = class implements ResizeObserver {
    disconnect() {}
    observe() {}
    unobserve() {}
  };
}
