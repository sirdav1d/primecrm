import { useEffect, useState } from 'react';

function captureRequestsReducedMotion(): boolean {
  return (
    import.meta.env.DEV &&
    typeof window !== 'undefined' &&
    new URLSearchParams(window.location.search).get('qa-motion') === 'reduce'
  );
}

export function usePrefersReducedMotion(): boolean {
  const [reduced, setReduced] = useState(() =>
    captureRequestsReducedMotion() ||
    (typeof window !== 'undefined' &&
      typeof window.matchMedia === 'function' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches),
  );

  useEffect(() => {
    if (typeof window.matchMedia !== 'function') return;

    const query = window.matchMedia('(prefers-reduced-motion: reduce)');
    const update = () => setReduced(captureRequestsReducedMotion() || query.matches);

    update();
    query.addEventListener('change', update);
    return () => query.removeEventListener('change', update);
  }, []);

  return reduced;
}
