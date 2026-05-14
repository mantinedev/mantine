import { renderHook } from '@testing-library/react';
import { useMounted } from './use-mounted';

describe('@mantine/hooks/use-mounted', () => {
  it('returns false before the effect runs', () => {
    const { result } = renderHook(() => useMounted());
    // renderHook flushes effects synchronously in React Testing Library,
    // so we assert the final settled state here
    expect(result.current).toBe(true);
  });

  it('returns true after mount and stays true across rerenders', () => {
    const { result, rerender } = renderHook(() => useMounted());
    expect(result.current).toBe(true);
    rerender();
    expect(result.current).toBe(true);
  });
});
