import { renderHook } from '@testing-library/react';
import { useLatestRef } from './use-latest-ref';

describe('@mantine/hooks/use-latest-ref', () => {
  it('keeps the same ref and updates its value on rerender', () => {
    const hook = renderHook(({ value }) => useLatestRef(value), { initialProps: { value: 1 } });
    const ref = hook.result.current;

    hook.rerender({ value: 2 });
    expect(hook.result.current).toBe(ref);
    expect(ref.current).toBe(2);
  });

  it('exposes the current render value to functions called during the same render', () => {
    const reads: number[] = [];
    const hook = renderHook(
      ({ value }) => {
        const ref = useLatestRef(value);
        reads.push(ref.current);
        return ref;
      },
      { initialProps: { value: 1 } }
    );

    hook.rerender({ value: 2 });
    expect(reads).toEqual([1, 2]);
  });
});
