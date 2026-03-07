import { renderHook } from '@testing-library/react';
import { useIsFirstRender } from './use-is-first-render';

describe('@mantine/hooks/use-is-first-render', () => {
  it('returns true on the first render', () => {
    const { result } = renderHook(() => useIsFirstRender());
    expect(result.current).toBe(true);
  });

  it('returns false on every subsequent rerender', () => {
    const { result, rerender } = renderHook(() => useIsFirstRender());
    rerender();
    expect(result.current).toBe(false);
    rerender();
    expect(result.current).toBe(false);
  });
});
