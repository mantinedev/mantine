import { act, createEvent, fireEvent, render, renderHook, screen } from '@testing-library/react';
import { useHoldRepeatHandlers, UseHoldRepeatHandlersOptions } from './use-hold-repeat-handlers';

interface TestComponentProps {
  onTrigger: () => void;
  options?: UseHoldRepeatHandlersOptions;
}

function TestComponent({ onTrigger, options }: TestComponentProps) {
  const handlers = useHoldRepeatHandlers(onTrigger, options);
  return (
    <button type="button" data-testid="target" {...handlers}>
      press
    </button>
  );
}

describe('@mantine/hooks/use-hold-repeat-handlers', () => {
  beforeAll(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.clearAllTimers();
  });

  afterAll(() => {
    jest.useRealTimers();
  });

  it('only produces handlers for the requested events', () => {
    const { result } = renderHook(() => useHoldRepeatHandlers(() => {}, { events: ['pointer'] }));

    expect(result.current.onPointerDown).toBeDefined();
    expect(result.current.onPointerUp).toBeDefined();
    expect(result.current.onPointerLeave).toBeDefined();
    expect(result.current.onMouseDown).toBeUndefined();
    expect(result.current.onTouchStart).toBeUndefined();
    expect(result.current.onKeyDown).toBeUndefined();

    expect(typeof result.current.start).toBe('function');
    expect(typeof result.current.stop).toBe('function');
  });

  it('produces keyboard handlers only when requested', () => {
    const { result } = renderHook(() => useHoldRepeatHandlers(() => {}, { events: ['keyboard'] }));

    expect(result.current.onKeyDown).toBeDefined();
    expect(result.current.onKeyUp).toBeDefined();
    expect(result.current.onPointerDown).toBeUndefined();
  });

  it('starts repeating on pointer down and stops on pointer up', () => {
    const onTrigger = jest.fn();
    render(<TestComponent onTrigger={onTrigger} options={{ delay: 500, interval: 100 }} />);
    const target = screen.getByTestId('target');

    fireEvent.pointerDown(target);
    expect(onTrigger).toHaveBeenCalledTimes(1);

    act(() => {
      jest.advanceTimersByTime(500);
    });
    expect(onTrigger).toHaveBeenCalledTimes(2);

    fireEvent.pointerUp(target);
    act(() => {
      jest.advanceTimersByTime(500);
    });
    expect(onTrigger).toHaveBeenCalledTimes(2);
  });

  it('stops repeating on pointer cancel', () => {
    const onTrigger = jest.fn();
    render(<TestComponent onTrigger={onTrigger} options={{ delay: 500, interval: 100 }} />);
    const target = screen.getByTestId('target');

    fireEvent.pointerDown(target);
    act(() => {
      jest.advanceTimersByTime(500);
    });
    expect(onTrigger).toHaveBeenCalledTimes(2);

    fireEvent.pointerCancel(target);
    act(() => {
      jest.advanceTimersByTime(500);
    });
    expect(onTrigger).toHaveBeenCalledTimes(2);
  });

  it('stops repeating on pointer leave', () => {
    const onTrigger = jest.fn();
    render(<TestComponent onTrigger={onTrigger} options={{ delay: 500, interval: 100 }} />);
    const target = screen.getByTestId('target');

    fireEvent.pointerDown(target);
    act(() => {
      jest.advanceTimersByTime(500);
    });
    expect(onTrigger).toHaveBeenCalledTimes(2);

    fireEvent.pointerLeave(target);
    act(() => {
      jest.advanceTimersByTime(500);
    });
    expect(onTrigger).toHaveBeenCalledTimes(2);
  });

  it('supports mouse events', () => {
    const onTrigger = jest.fn();
    render(
      <TestComponent
        onTrigger={onTrigger}
        options={{ events: ['mouse'], delay: 500, interval: 100 }}
      />
    );
    const target = screen.getByTestId('target');

    fireEvent.mouseDown(target);
    expect(onTrigger).toHaveBeenCalledTimes(1);
    act(() => {
      jest.advanceTimersByTime(500);
    });
    expect(onTrigger).toHaveBeenCalledTimes(2);

    fireEvent.mouseUp(target);
    act(() => {
      jest.advanceTimersByTime(500);
    });
    expect(onTrigger).toHaveBeenCalledTimes(2);
  });

  it('supports touch events', () => {
    const onTrigger = jest.fn();
    render(
      <TestComponent
        onTrigger={onTrigger}
        options={{ events: ['touch'], delay: 500, interval: 100 }}
      />
    );
    const target = screen.getByTestId('target');

    fireEvent.touchStart(target);
    expect(onTrigger).toHaveBeenCalledTimes(1);
    act(() => {
      jest.advanceTimersByTime(500);
    });
    expect(onTrigger).toHaveBeenCalledTimes(2);

    fireEvent.touchEnd(target);
    act(() => {
      jest.advanceTimersByTime(500);
    });
    expect(onTrigger).toHaveBeenCalledTimes(2);
  });

  it('ignores the emulated mousedown after a touch, even after a long hold', () => {
    const onTrigger = jest.fn();
    render(
      <TestComponent
        onTrigger={onTrigger}
        options={{ events: ['mouse', 'touch'], delay: 500, interval: 100 }}
      />
    );
    const target = screen.getByTestId('target');

    // Hold for longer than MOUSE_EMULATION_TIMEOUT so the touchstart timestamp is stale
    fireEvent.touchStart(target);
    act(() => {
      jest.advanceTimersByTime(1000);
    });
    fireEvent.touchEnd(target);
    const callsAfterTouch = onTrigger.mock.calls.length;
    expect(callsAfterTouch).toBeGreaterThan(1);

    // Emulated mousedown dispatched right after touchend is ignored
    fireEvent.mouseDown(target);
    fireEvent.mouseUp(target);
    expect(onTrigger).toHaveBeenCalledTimes(callsAfterTouch);

    // A genuine mouse interaction later still works
    act(() => {
      jest.advanceTimersByTime(600);
    });
    fireEvent.mouseDown(target);
    expect(onTrigger).toHaveBeenCalledTimes(callsAfterTouch + 1);
    fireEvent.mouseUp(target);
  });

  it('keyboard start reacts only to matching keys', () => {
    const onTrigger = jest.fn();
    render(
      <TestComponent
        onTrigger={onTrigger}
        options={{ events: ['keyboard'], keys: ['ArrowUp'], delay: 500, interval: 100 }}
      />
    );
    const target = screen.getByTestId('target');

    fireEvent.keyDown(target, { key: 'ArrowDown' });
    expect(onTrigger).not.toHaveBeenCalled();

    fireEvent.keyDown(target, { key: 'ArrowUp' });
    expect(onTrigger).toHaveBeenCalledTimes(1);

    fireEvent.keyUp(target, { key: 'ArrowUp' });
    act(() => {
      jest.advanceTimersByTime(500);
    });
    expect(onTrigger).toHaveBeenCalledTimes(1);
  });

  it('keyboard ignores OS auto-repeat keydown events', () => {
    const onTrigger = jest.fn();
    render(
      <TestComponent
        onTrigger={onTrigger}
        options={{ events: ['keyboard'], delay: 500, interval: 100 }}
      />
    );
    const target = screen.getByTestId('target');

    fireEvent.keyDown(target, { key: 'ArrowUp', repeat: true });
    expect(onTrigger).not.toHaveBeenCalled();

    fireEvent.keyDown(target, { key: 'ArrowUp' });
    expect(onTrigger).toHaveBeenCalledTimes(1);

    fireEvent.keyUp(target, { key: 'ArrowUp' });
  });

  it('stops a keyboard hold when the element loses focus before keyup', () => {
    const onTrigger = jest.fn();
    render(
      <TestComponent
        onTrigger={onTrigger}
        options={{ events: ['keyboard'], delay: 500, interval: 100 }}
      />
    );
    const target = screen.getByTestId('target');

    fireEvent.keyDown(target, { key: 'ArrowUp' });
    act(() => {
      jest.advanceTimersByTime(500);
    });
    expect(onTrigger).toHaveBeenCalledTimes(2);

    fireEvent.blur(target);
    act(() => {
      jest.advanceTimersByTime(1000);
    });
    expect(onTrigger).toHaveBeenCalledTimes(2);
  });

  it('still calls preventDefault on auto-repeat keydowns so the default is suppressed while held', () => {
    render(
      <TestComponent
        onTrigger={jest.fn()}
        options={{ events: ['keyboard'], keys: ['ArrowUp'], delay: 500, interval: 100 }}
      />
    );
    const target = screen.getByTestId('target');

    const event = createEvent.keyDown(target, { key: 'ArrowUp', repeat: true });
    fireEvent(target, event);
    expect(event.defaultPrevented).toBe(true);
  });

  it('does not call preventDefault for keys that are filtered out', () => {
    render(
      <TestComponent onTrigger={jest.fn()} options={{ events: ['keyboard'], keys: ['ArrowUp'] }} />
    );
    const target = screen.getByTestId('target');

    const event = createEvent.keyDown(target, { key: 'ArrowDown' });
    fireEvent(target, event);
    expect(event.defaultPrevented).toBe(false);
  });

  it('calls preventDefault on the start event by default', () => {
    render(<TestComponent onTrigger={jest.fn()} options={{ events: ['keyboard'] }} />);
    const target = screen.getByTestId('target');

    const event = createEvent.keyDown(target, { key: 'ArrowUp' });
    fireEvent(target, event);
    expect(event.defaultPrevented).toBe(true);
  });

  it('does not call preventDefault when preventDefault is false', () => {
    render(
      <TestComponent
        onTrigger={jest.fn()}
        options={{ events: ['keyboard'], preventDefault: false }}
      />
    );
    const target = screen.getByTestId('target');

    const event = createEvent.keyDown(target, { key: 'ArrowUp' });
    fireEvent(target, event);
    expect(event.defaultPrevented).toBe(false);
  });

  it('exposes start/stop passthrough for custom wiring', () => {
    const onTrigger = jest.fn();
    const { result } = renderHook(() =>
      useHoldRepeatHandlers(onTrigger, { delay: 500, interval: 100 })
    );

    act(() => result.current.start());
    expect(onTrigger).toHaveBeenCalledTimes(1);

    act(() => {
      jest.advanceTimersByTime(500);
    });
    expect(onTrigger).toHaveBeenCalledTimes(2);

    act(() => result.current.stop());
    act(() => {
      jest.advanceTimersByTime(500);
    });
    expect(onTrigger).toHaveBeenCalledTimes(2);
  });

  it('does not leak start/stop as enumerable props so spreading onto a DOM node is safe', () => {
    const { result } = renderHook(() => useHoldRepeatHandlers(() => {}, { events: ['pointer'] }));

    expect(Object.keys(result.current)).not.toContain('start');
    expect(Object.keys(result.current)).not.toContain('stop');
    expect({ ...result.current }).not.toHaveProperty('start');
    expect(typeof result.current.start).toBe('function');
    expect(typeof result.current.stop).toBe('function');
  });

  it('keeps the handlers bundle identity stable across rerenders', () => {
    const { result, rerender } = renderHook(({ cb }) => useHoldRepeatHandlers(cb), {
      initialProps: { cb: () => {} },
    });
    const first = result.current;

    rerender({ cb: () => {} });
    expect(result.current).toBe(first);
  });
});
