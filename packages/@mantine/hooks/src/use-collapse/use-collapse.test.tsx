import { act, render, renderHook, screen, waitFor } from '@testing-library/react';
import { useCollapse, UseCollapseInput } from './use-collapse';

function TestCollapse(props: UseCollapseInput) {
  const collapse = useCollapse({ transitionDuration: 200, ...props });
  return (
    <div data-testid="target" {...collapse.getCollapseProps()}>
      {collapse.state}
    </div>
  );
}

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

  it('settles in `entered` state when expanding an element that cannot be measured', async () => {
    const onTransitionEnd = jest.fn();
    const { rerender } = render(
      <TestCollapse expanded={false} onTransitionEnd={onTransitionEnd} />
    );

    rerender(<TestCollapse expanded onTransitionEnd={onTransitionEnd} />);

    await waitFor(() => expect(screen.getByTestId('target')).toHaveTextContent('entered'));
    expect(screen.getByTestId('target')).not.toHaveStyle({ height: '0px', overflow: 'hidden' });
    expect(onTransitionEnd).toHaveBeenCalledTimes(1);
  });

  it('settles in `exited` state when collapsing an element that cannot be measured', async () => {
    const onTransitionEnd = jest.fn();
    const { rerender } = render(<TestCollapse expanded onTransitionEnd={onTransitionEnd} />);

    rerender(<TestCollapse expanded={false} onTransitionEnd={onTransitionEnd} />);

    await waitFor(() => expect(screen.getByTestId('target')).toHaveTextContent('exited'));
    expect(screen.getByTestId('target')).toHaveStyle({ height: '0px', overflow: 'hidden' });
    expect(onTransitionEnd).toHaveBeenCalledTimes(1);
  });

  it('ignores frames from a transition that was superseded before it settled', async () => {
    const onTransitionEnd = jest.fn();
    const { rerender } = render(
      <TestCollapse expanded={false} onTransitionEnd={onTransitionEnd} />
    );

    rerender(<TestCollapse expanded onTransitionEnd={onTransitionEnd} />);
    rerender(<TestCollapse expanded={false} onTransitionEnd={onTransitionEnd} />);

    await waitFor(() => expect(screen.getByTestId('target')).toHaveTextContent('exited'));
    await act(() => new Promise((resolve) => setTimeout(resolve, 50)));

    expect(screen.getByTestId('target')).toHaveTextContent('exited');
    expect(screen.getByTestId('target')).toHaveStyle({ height: '0px', overflow: 'hidden' });
    expect(onTransitionEnd).toHaveBeenCalledTimes(1);
  });

  it('does not call onTransitionEnd for a transition aborted by unmount', async () => {
    const onTransitionEnd = jest.fn();
    const { rerender, unmount } = render(
      <TestCollapse expanded={false} onTransitionEnd={onTransitionEnd} />
    );

    rerender(<TestCollapse expanded onTransitionEnd={onTransitionEnd} />);
    unmount();

    await act(() => new Promise((resolve) => setTimeout(resolve, 50)));

    expect(onTransitionEnd).not.toHaveBeenCalled();
  });
});
