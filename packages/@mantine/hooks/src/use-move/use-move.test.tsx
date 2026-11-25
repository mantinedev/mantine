import { act, fireEvent, render, screen } from '@testing-library/react';
import { useMove, UseMoveHandlers, UseMovePosition } from './use-move';

function TestComponent({
  onChange,
  handlers,
}: {
  onChange: (position: UseMovePosition) => void;
  handlers: UseMoveHandlers;
}) {
  const { ref, active } = useMove(onChange, handlers);
  return <div ref={ref} data-testid="target" data-active={active} />;
}

describe('@mantine/hooks/use-move', () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.useRealTimers();
    jest.restoreAllMocks();
  });

  it.each(['touchend', 'touchcancel'])('ends scrubbing on %s and allows another drag', (event) => {
    const onChange = jest.fn();
    const onScrubStart = jest.fn();
    const onScrubEnd = jest.fn();
    render(<TestComponent onChange={onChange} handlers={{ onScrubStart, onScrubEnd }} />);
    const target = screen.getByTestId('target');
    jest.spyOn(target, 'getBoundingClientRect').mockReturnValue(new DOMRect(0, 0, 100, 100));

    fireEvent.touchStart(target, { changedTouches: [{ clientX: 25, clientY: 50 }] });
    act(() => jest.advanceTimersByTime(20));
    expect(target).toHaveAttribute('data-active', 'true');
    expect(onScrubStart).toHaveBeenCalledTimes(1);
    expect(onChange).toHaveBeenLastCalledWith({ x: 0.25, y: 0.5 });

    fireEvent(target, new Event(event, { bubbles: true }));
    act(() => jest.advanceTimersByTime(20));
    expect(target).toHaveAttribute('data-active', 'false');
    expect(onScrubEnd).toHaveBeenCalledTimes(1);

    fireEvent.touchMove(document, { changedTouches: [{ clientX: 75, clientY: 75 }] });
    fireEvent(target, new Event(event, { bubbles: true }));
    act(() => jest.advanceTimersByTime(20));
    expect(onChange).toHaveBeenCalledTimes(1);
    expect(onScrubEnd).toHaveBeenCalledTimes(1);

    fireEvent.touchStart(target, { changedTouches: [{ clientX: 50, clientY: 25 }] });
    act(() => jest.advanceTimersByTime(20));
    expect(target).toHaveAttribute('data-active', 'true');
    expect(onScrubStart).toHaveBeenCalledTimes(2);
    expect(onChange).toHaveBeenLastCalledWith({ x: 0.5, y: 0.25 });

    fireEvent.touchEnd(target);
    act(() => jest.advanceTimersByTime(20));
    expect(target).toHaveAttribute('data-active', 'false');
    expect(onScrubEnd).toHaveBeenCalledTimes(2);
  });

  it('removes touch cancellation listeners when unmounted during a drag', () => {
    const onScrubEnd = jest.fn();
    const { unmount } = render(<TestComponent onChange={jest.fn()} handlers={{ onScrubEnd }} />);
    fireEvent.touchStart(screen.getByTestId('target'), {
      changedTouches: [{ clientX: 25, clientY: 50 }],
    });
    unmount();
    fireEvent.touchCancel(document);
    act(() => jest.runAllTimers());
    expect(onScrubEnd).not.toHaveBeenCalled();
  });
  it('uses updated scrub handlers with a stable onChange callback', () => {
    const onChange = jest.fn();
    const previousStart = jest.fn();
    const previousEnd = jest.fn();
    const nextStart = jest.fn();
    const nextEnd = jest.fn();
    const { rerender } = render(
      <TestComponent
        onChange={onChange}
        handlers={{ onScrubStart: previousStart, onScrubEnd: previousEnd }}
      />
    );

    rerender(
      <TestComponent
        onChange={onChange}
        handlers={{ onScrubStart: nextStart, onScrubEnd: nextEnd }}
      />
    );
    fireEvent.mouseDown(screen.getByTestId('target'), { clientX: 25, clientY: 50 });
    fireEvent.mouseUp(document);
    act(() => jest.advanceTimersByTime(20));

    expect(nextStart).toHaveBeenCalledTimes(1);
    expect(nextEnd).toHaveBeenCalledTimes(1);
    expect(previousStart).not.toHaveBeenCalled();
    expect(previousEnd).not.toHaveBeenCalled();
  });

  it('uses the current onChange and scrub-end callbacks throughout an active drag', () => {
    const previousChange = jest.fn();
    const previousEnd = jest.fn();
    const nextChange = jest.fn();
    const nextEnd = jest.fn();
    const { rerender } = render(
      <TestComponent onChange={previousChange} handlers={{ onScrubEnd: previousEnd }} />
    );
    const target = screen.getByTestId('target');
    jest.spyOn(target, 'getBoundingClientRect').mockReturnValue(new DOMRect(0, 0, 100, 100));
    fireEvent.mouseDown(target, { clientX: 25, clientY: 50 });
    act(() => jest.advanceTimersByTime(20));
    expect(previousChange).toHaveBeenLastCalledWith({ x: 0.25, y: 0.5 });

    rerender(<TestComponent onChange={nextChange} handlers={{ onScrubEnd: nextEnd }} />);
    fireEvent.mouseMove(document, { clientX: 75, clientY: 25 });
    act(() => jest.advanceTimersByTime(20));
    fireEvent.mouseUp(document);
    act(() => jest.advanceTimersByTime(20));

    expect(nextChange).toHaveBeenLastCalledWith({ x: 0.75, y: 0.25 });
    expect(previousChange).toHaveBeenCalledTimes(1);
    expect(nextEnd).toHaveBeenCalledTimes(1);
    expect(previousEnd).not.toHaveBeenCalled();
    expect(target).toHaveAttribute('data-active', 'false');
  });
});
