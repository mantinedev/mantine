import { useState } from 'react';
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
    const button = screen.getByRole('button');
    unmount();
    button.dispatchEvent(new MouseEvent('click', { bubbles: true }));
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
    const btn1 = screen.getByTestId('btn1');
    rerender(<Swappable useFirst={false} />);

    fireEvent.click(btn1);
    expect(spy).not.toHaveBeenCalled();

    fireEvent.click(screen.getByTestId('btn2'));
    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('keeps the listener attached across re-renders when options are passed inline', async () => {
    function InlineOptions() {
      const [count, setCount] = useState(0);
      const ref = useEventListener('click', () => setCount((c) => c + 1), { passive: true });
      return (
        <button ref={ref} type="button">
          {count}
        </button>
      );
    }

    render(<InlineOptions />);
    await userEvent.click(screen.getByRole('button'));
    await userEvent.click(screen.getByRole('button'));
    await userEvent.click(screen.getByRole('button'));
    expect(screen.getByRole('button')).toHaveTextContent('3');
  });

  it('removes the listener for the previous event type when type changes', () => {
    const spy = jest.fn();

    function TypeSwitch({ type }: { type: 'click' | 'mousedown' }) {
      const ref = useEventListener(type, () => spy());
      return (
        <button ref={ref} type="button">
          Test button
        </button>
      );
    }

    const { rerender } = render(<TypeSwitch type="click" />);
    rerender(
      <>
        <TypeSwitch type="mousedown" />
      </>
    );

    fireEvent.click(screen.getByRole('button'));
    expect(spy).not.toHaveBeenCalled();

    fireEvent.mouseDown(screen.getByRole('button'));
    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('removes the listener with the options it was registered with when options change', () => {
    const spy = jest.fn();

    function CaptureSwitch({ capture }: { capture: boolean }) {
      const ref = useEventListener('click', () => spy(), { capture });
      return (
        <button ref={ref} type="button">
          Test button
        </button>
      );
    }

    const { rerender } = render(<CaptureSwitch capture />);
    rerender(<CaptureSwitch capture={false} />);

    fireEvent.click(screen.getByRole('button'));
    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('removes the listener when the target element unmounts while the hook stays mounted', () => {
    const spy = jest.fn();

    function Toggle({ show }: { show: boolean }) {
      const ref = useEventListener('click', () => spy());
      return show ? (
        <button ref={ref} type="button">
          Test button
        </button>
      ) : null;
    }

    const { rerender } = render(<Toggle show />);
    const detached = screen.getByRole('button');

    rerender(<Toggle show={false} />);
    fireEvent.click(detached);
    expect(spy).not.toHaveBeenCalled();

    rerender(<Toggle show />);
    fireEvent.click(screen.getByRole('button'));
    expect(spy).toHaveBeenCalledTimes(1);
  });
});
