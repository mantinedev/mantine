import { act, renderHook } from '@testing-library/react';
import { useCollapse } from './use-collapse';

describe('@mantine/hooks/use-collapse', () => {
  it('starts in entered state when expanded=true', () => {
    const { result } = renderHook(() => useCollapse({ expanded: true }));
    expect(result.current.state).toBe('entered');
  });

  it('starts in exited state when expanded=false', () => {
    const { result } = renderHook(() => useCollapse({ expanded: false }));
    expect(result.current.state).toBe('exited');
  });

  it('calls onTransitionStart when expanded changes', () => {
    const onTransitionStart = jest.fn();
    const { rerender } = renderHook(
      ({ expanded }) => useCollapse({ expanded, onTransitionStart }),
      { initialProps: { expanded: false } }
    );

    expect(onTransitionStart).not.toHaveBeenCalled();

    act(() => {
      rerender({ expanded: true });
    });

    expect(onTransitionStart).toHaveBeenCalledTimes(1);
  });

  it('does not call onTransitionStart when only its identity changes (no stale re-run)', () => {
    const first = jest.fn();
    const second = jest.fn();

    const { rerender } = renderHook(
      ({ expanded, onTransitionStart }) => useCollapse({ expanded, onTransitionStart }),
      { initialProps: { expanded: false, onTransitionStart: first } }
    );

    act(() => {
      rerender({ expanded: false, onTransitionStart: second });
    });

    expect(first).not.toHaveBeenCalled();
    expect(second).not.toHaveBeenCalled();
  });

  it('calls the latest onTransitionStart after callback identity changes', () => {
    const first = jest.fn();
    const second = jest.fn();

    const { rerender } = renderHook(
      ({ expanded, onTransitionStart }) => useCollapse({ expanded, onTransitionStart }),
      { initialProps: { expanded: false, onTransitionStart: first } }
    );

    act(() => {
      rerender({ expanded: false, onTransitionStart: second });
    });

    act(() => {
      rerender({ expanded: true, onTransitionStart: second });
    });

    expect(first).not.toHaveBeenCalled();
    expect(second).toHaveBeenCalledTimes(1);
  });
});
