import { fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { useEventListener } from './use-event-listener';

function Test({ spy }: { spy: () => void }) {
  const ref = useEventListener('click', () => spy());
  return (
    <button ref={ref} type="button">
      Test button
    </button>
  );
}

describe('@mantine/hooks/use-event-listener', () => {
  it('calls given function when event is fired', async () => {
    const spy = jest.fn();
    render(<Test spy={spy} />);
    await userEvent.click(screen.getByRole('button'));
    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('removes the listener on unmount', async () => {
    const spy = jest.fn();
    const { unmount } = render(<Test spy={spy} />);
    unmount();
    // Firing after unmount — listener should be gone
    document.dispatchEvent(new MouseEvent('click', { bubbles: true }));
    expect(spy).not.toHaveBeenCalled();
  });

  it('removes listener from the previous node when ref moves to a new node', () => {
    const spy = jest.fn();

    function Swappable({ useFirst }: { useFirst: boolean }) {
      const ref = useEventListener('click', spy);
      const node1 = useFirst ? (
        <button ref={ref} type="button" data-testid="btn1">
          one
        </button>
      ) : null;
      const node2 = !useFirst ? (
        <button ref={ref} type="button" data-testid="btn2">
          two
        </button>
      ) : null;
      return (
        <>
          {node1}
          {node2}
        </>
      );
    }

    const { rerender } = render(<Swappable useFirst />);
    rerender(<Swappable useFirst={false} />);

    // Old node is gone from DOM, new node should fire
    fireEvent.click(screen.getByTestId('btn2'));
    expect(spy).toHaveBeenCalledTimes(1);
  });
});
