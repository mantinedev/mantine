import { act, renderHook } from '@testing-library/react';
import { useHovered } from './use-hovered';

describe('@mantine/utils/use-hovered', () => {
  it('works correctly', () => {
    const hook = renderHook(() => useHovered());
    expect(hook.result.current[0]).toBe(-1);

    act(() => hook.result.current[1].setHovered(5));
    expect(hook.result.current[0]).toBe(5);

    act(() => hook.result.current[1].resetHovered());
    expect(hook.result.current[0]).toBe(-1);
  });
});
