import { act, renderHook } from '@testing-library/react';
import { useOverlayStackState } from './use-overlay-stack-state';

describe('@mantine/core/OverlayStack/use-overlay-stack-state', () => {
  it('closes every overlay with closeAll', () => {
    const hook = renderHook(() => useOverlayStackState(['first', 'second']));

    act(() => hook.result.current.open('first'));
    act(() => hook.result.current.open('second'));
    expect(hook.result.current.state).toEqual({ first: true, second: true });

    act(() => hook.result.current.closeAll());
    expect(hook.result.current.state).toEqual({ first: false, second: false });
  });

  it('keeps overlays added after the first render in state when closeAll is called', () => {
    const hook = renderHook(({ overlays }) => useOverlayStackState(overlays), {
      initialProps: { overlays: ['first'] as string[] },
    });

    hook.rerender({ overlays: ['first', 'second'] });
    act(() => hook.result.current.open('second'));
    expect(hook.result.current.register('second').opened).toBe(true);

    act(() => hook.result.current.closeAll());
    expect(hook.result.current.state).toEqual({ first: false, second: false });
    expect(hook.result.current.register('second').opened).toBe(false);
  });
});
