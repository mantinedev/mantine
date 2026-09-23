import { renderHook } from '@testing-library/react';
import { useMediaQuery } from './use-media-query';

describe('@mantine/hooks/use-media-query', () => {
  const original = window.matchMedia;

  afterEach(() => {
    window.matchMedia = original;
  });

  it('does not crash on render when matchMedia returns null and the value is read synchronously', () => {
    window.matchMedia = (() => null) as any;

    const hook = renderHook(() =>
      useMediaQuery('(min-width: 200px)', undefined, { getInitialValueInEffect: false })
    );

    expect(hook.result.current).toBe(false);
  });

  it('reads the initial value synchronously when matchMedia works', () => {
    window.matchMedia = ((query: string) =>
      ({
        matches: true,
        media: query,
        onchange: null,
        addEventListener: () => {},
        removeEventListener: () => {},
        addListener: () => {},
        removeListener: () => {},
        dispatchEvent: () => false,
      }) as MediaQueryList) as any;

    const hook = renderHook(() =>
      useMediaQuery('(min-width: 200px)', undefined, { getInitialValueInEffect: false })
    );

    expect(hook.result.current).toBe(true);
  });
});
