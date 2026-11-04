import { act, fireEvent, render, renderHook, screen } from '@testing-library/react';
import { useHover } from './use-hover';

const Target: React.FunctionComponent<any> = () => {
  const { ref, hovered } = useHover();

  return (
    <div data-testid="target" ref={ref}>
      {hovered ? 'true' : 'false'}
    </div>
  );
};

describe('@mantine/hooks/use-hover', () => {
  it('stops tracking hover when the ref is detached (ref called with null)', () => {
    const { result } = renderHook(() => useHover());

    const node = document.createElement('div');
    act(() => result.current.ref(node));
    act(() => result.current.ref(null));

    // After detach, events on the old node no longer update hovered
    act(() => node.dispatchEvent(new MouseEvent('mouseenter')));
    expect(result.current.hovered).toBe(false);
  });

  it('removes old listeners and attaches new ones when ref moves to a different node', () => {
    const { result } = renderHook(() => useHover());

    const node1 = document.createElement('div');
    const node2 = document.createElement('div');

    act(() => result.current.ref(node1));
    act(() => result.current.ref(node2));

    // node1 no longer controls hovered
    act(() => node1.dispatchEvent(new MouseEvent('mouseenter')));
    expect(result.current.hovered).toBe(false);

    // node2 does
    act(() => node2.dispatchEvent(new MouseEvent('mouseenter')));
    expect(result.current.hovered).toBe(true);
  });

  it('changes `hovered` on mouseenter/mouseleave correctly', () => {
    render(<Target />);
    const target = screen.getByTestId('target');

    expect(target).toHaveTextContent('false');

    fireEvent.mouseEnter(target);
    expect(target).toHaveTextContent('true');

    fireEvent.mouseLeave(target);
    expect(target).toHaveTextContent('false');
  });

  it('removes listeners when React detaches the ref', () => {
    function Switch({ show }: { show: boolean }) {
      const { ref, hovered } = useHover();

      return (
        <>
          {show ? <div data-testid="target" ref={ref} /> : null}
          <div data-testid="state">{hovered ? 'true' : 'false'}</div>
        </>
      );
    }

    const { rerender } = render(<Switch show />);
    const target = screen.getByTestId('target');

    fireEvent.mouseEnter(target);
    expect(screen.getByTestId('state')).toHaveTextContent('true');

    rerender(<Switch show={false} />);
    expect(screen.getByTestId('state')).toHaveTextContent('false');

    fireEvent.mouseEnter(target);
    expect(screen.getByTestId('state')).toHaveTextContent('false');
  });

  it('stops updating from the previous node when the ref moves to another element', () => {
    function Move({ which }: { which: 'a' | 'b' }) {
      const { ref, hovered } = useHover();

      return (
        <>
          <div data-testid="a" ref={which === 'a' ? ref : undefined} />
          <div data-testid="b" ref={which === 'b' ? ref : undefined} />
          <div data-testid="state">{hovered ? 'true' : 'false'}</div>
        </>
      );
    }

    const { rerender } = render(<Move which="a" />);
    const first = screen.getByTestId('a');

    fireEvent.mouseEnter(first);
    expect(screen.getByTestId('state')).toHaveTextContent('true');

    rerender(<Move which="b" />);
    expect(screen.getByTestId('state')).toHaveTextContent('false');

    fireEvent.mouseEnter(first);
    expect(screen.getByTestId('state')).toHaveTextContent('false');

    fireEvent.mouseEnter(screen.getByTestId('b'));
    expect(screen.getByTestId('state')).toHaveTextContent('true');
  });
});
