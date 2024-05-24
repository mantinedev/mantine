import { renderHook } from '@testing-library/react';
import { useMemoWithDeepComparison } from './use-memo-with-deep-comparison';

describe('@mantine/hooks/use-memo-with-deep-comparison', () => {
  it('should return the same value for equal dependencies', () => {
    const { result, rerender } = renderHook(
      ({ deps }) => useMemoWithDeepComparison(() => ({}), deps),
      { initialProps: { deps: ['a', 'b', ['c']] } }
    );
    const firstRenderResult = result.current;
    rerender({ deps: ['a', 'b', ['c']] });
    expect(result.current).toBe(firstRenderResult);
  });

  it('should return a new value for unequal dependencies', () => {
    const { result, rerender } = renderHook(
      ({ deps }) => useMemoWithDeepComparison(() => ({}), deps),
      { initialProps: { deps: ['a', 'b'] } }
    );
    const firstRenderResult = result.current;
    rerender({ deps: ['a', 'c'] });
    expect(result.current).not.toBe(firstRenderResult);
  });
});
