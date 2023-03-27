import { renderHook } from '@testing-library/react';
import { usePrevious } from './use-previous';

describe('@mantine/hooks/use-previous', () => {
  it('returns undefined on initial render', () => {
    const hook = renderHook(() => usePrevious(1));
    expect(hook.result.current).toBeUndefined();
  });

  it('returns the previous value after update', () => {
    const hook = renderHook(({ state }) => usePrevious(state), { initialProps: { state: 1 } });

    hook.rerender({ state: 2 });
    expect(hook.result.current).toBe(1);

    hook.rerender({ state: 4 });
    expect(hook.result.current).toBe(2);
  });
});
