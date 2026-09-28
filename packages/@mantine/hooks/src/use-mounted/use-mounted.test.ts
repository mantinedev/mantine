import { renderHook } from '@testing-library/react';
import { useMounted } from './use-mounted';

describe('@mantine/hooks/use-mounted', () => {
  it('returns false on the first render, before the effect runs', () => {
    const values: boolean[] = [];
    renderHook(() => {
      const mounted = useMounted();
      values.push(mounted);
      return mounted;
    });
    expect(values).toEqual([false, true]);
  });

  it('returns true after mount and stays true across rerenders', () => {
    const { result, rerender } = renderHook(() => useMounted());
    expect(result.current).toBe(true);
    rerender();
    expect(result.current).toBe(true);
  });
});
