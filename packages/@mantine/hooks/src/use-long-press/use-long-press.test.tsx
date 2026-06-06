import React from 'react';
import { act, fireEvent, render, screen } from '@testing-library/react';
import { useLongPress, UseLongPressOptions } from './use-long-press';

// Test component that uses the hook
interface TestComponentProps {
  onLongPress: (event: React.MouseEvent | React.TouchEvent) => void;
  options?: UseLongPressOptions;
  testId?: string;
}

function TestComponent({ onLongPress, options = {}, testId = 'test-element' }: TestComponentProps) {
  const longPressHandlers = useLongPress(onLongPress, options);

  return (
    <div
      data-testid={testId}
      {...longPressHandlers}
      style={{ width: 100, height: 100, background: 'gray' }}
    >
      Press Me
    </div>
  );
}

describe('useLongPress', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    jest.clearAllTimers();
  });

  beforeAll(() => {
    jest.useFakeTimers();
  });

  afterAll(() => {
    jest.useRealTimers();
  });

  it('should call onLongPress after default threshold', () => {
    const onLongPress = jest.fn();
    render(<TestComponent onLongPress={onLongPress} />);

    const element = screen.getByTestId('test-element');
    fireEvent.mouseDown(element);

    // Assert onLongPress not called immediately
    expect(onLongPress).not.toHaveBeenCalled();

    // Fast-forward time by default threshold (400ms)
    act(() => {
      jest.advanceTimersByTime(400);
    });

    // Assert onLongPress called after threshold
    expect(onLongPress).toHaveBeenCalledTimes(1);

    // Cleanup
    fireEvent.mouseUp(element);
  });

  it('should call onLongPress after custom threshold', () => {
    const onLongPress = jest.fn();
    const customThreshold = 1000;

    render(<TestComponent onLongPress={onLongPress} options={{ threshold: customThreshold }} />);

    const element = screen.getByTestId('test-element');
    fireEvent.mouseDown(element);

    // Fast-forward time but not enough to trigger
    act(() => {
      jest.advanceTimersByTime(500);
    });
    expect(onLongPress).not.toHaveBeenCalled();

    // Fast-forward remaining time
    act(() => {
      jest.advanceTimersByTime(500);
    });
    expect(onLongPress).toHaveBeenCalledTimes(1);

    // Cleanup
    fireEvent.mouseUp(element);
  });

  it('should not call onLongPress if released before threshold', () => {
    const onLongPress = jest.fn();
    render(<TestComponent onLongPress={onLongPress} />);

    const element = screen.getByTestId('test-element');
    fireEvent.mouseDown(element);

    // Fast-forward time but not enough to trigger
    act(() => {
      jest.advanceTimersByTime(300);
    });

    // Release before threshold is met
    fireEvent.mouseUp(element);

    // Complete the threshold time
    act(() => {
      jest.advanceTimersByTime(100);
    });

    expect(onLongPress).not.toHaveBeenCalled();
  });

  it('should call onStart callback on press start', () => {
    const onLongPress = jest.fn();
    const onStart = jest.fn();

    render(<TestComponent onLongPress={onLongPress} options={{ onStart }} />);

    const element = screen.getByTestId('test-element');
    fireEvent.mouseDown(element);

    expect(onStart).toHaveBeenCalledTimes(1);

    // Cleanup
    fireEvent.mouseUp(element);
  });

  it('should call onFinish callback after long press is completed', () => {
    const onLongPress = jest.fn();
    const onFinish = jest.fn();

    render(<TestComponent onLongPress={onLongPress} options={{ onFinish }} />);

    const element = screen.getByTestId('test-element');
    fireEvent.mouseDown(element);

    // Fast-forward time to trigger long press
    act(() => {
      jest.advanceTimersByTime(400);
    });

    // Complete the press
    fireEvent.mouseUp(element);

    expect(onLongPress).toHaveBeenCalledTimes(1);
    expect(onFinish).toHaveBeenCalledTimes(1);
  });

  it('should call onCancel callback if press is canceled before threshold', () => {
    const onLongPress = jest.fn();
    const onCancel = jest.fn();

    render(<TestComponent onLongPress={onLongPress} options={{ onCancel }} />);

    const element = screen.getByTestId('test-element');
    fireEvent.mouseDown(element);

    // Release before threshold
    fireEvent.mouseUp(element);

    expect(onLongPress).not.toHaveBeenCalled();
    expect(onCancel).toHaveBeenCalledTimes(1);
  });

  it('should cancel long press when mouse leaves element', () => {
    const onLongPress = jest.fn();
    const onCancel = jest.fn();

    render(<TestComponent onLongPress={onLongPress} options={{ onCancel }} />);

    const element = screen.getByTestId('test-element');
    fireEvent.mouseDown(element);

    // Mouse leaves element before threshold
    fireEvent.mouseLeave(element);

    // Fast-forward past the threshold
    act(() => {
      jest.advanceTimersByTime(400);
    });

    expect(onLongPress).not.toHaveBeenCalled();
    expect(onCancel).toHaveBeenCalledTimes(1);
  });

  it('should handle touch events', () => {
    const onLongPress = jest.fn();

    render(<TestComponent onLongPress={onLongPress} />);

    const element = screen.getByTestId('test-element');
    fireEvent.touchStart(element);

    // Fast-forward time
    act(() => {
      jest.advanceTimersByTime(400);
    });

    expect(onLongPress).toHaveBeenCalledTimes(1);

    // Cleanup
    fireEvent.touchEnd(element);
  });

  it('should handle touch events being canceled', () => {
    const onLongPress = jest.fn();
    const onCancel = jest.fn();

    render(<TestComponent onLongPress={onLongPress} options={{ onCancel }} />);

    const element = screen.getByTestId('test-element');
    fireEvent.touchStart(element);

    // End touch before threshold
    fireEvent.touchEnd(element);

    // Fast-forward past the threshold
    act(() => {
      jest.advanceTimersByTime(400);
    });

    expect(onLongPress).not.toHaveBeenCalled();
    expect(onCancel).toHaveBeenCalledTimes(1);
  });

  it('should return empty object if onLongPress is not a function', () => {
    // We need to suppress the TypeScript error for this test
    // @ts-ignore - Intentionally passing invalid prop for testing
    render(<TestComponent onLongPress="not a function" />);

    // Just checking that it renders without crashing
    expect(screen.getByTestId('test-element')).toBeInTheDocument();
  });

  it('should clean up timeout on unmount', () => {
    const onLongPress = jest.fn();

    const { unmount } = render(<TestComponent onLongPress={onLongPress} />);

    const element = screen.getByTestId('test-element');
    fireEvent.mouseDown(element);

    // Unmount component before threshold
    unmount();

    // Fast-forward time
    act(() => {
      jest.advanceTimersByTime(400);
    });

    expect(onLongPress).not.toHaveBeenCalled();
    // Note: With Jest's fake timers, timers are cleared automatically on unmount
    // so we can't easily test if clearTimeout was called correctly
  });

  it('should handle multiple presses correctly', () => {
    const onLongPress = jest.fn();

    render(<TestComponent onLongPress={onLongPress} />);

    const element = screen.getByTestId('test-element');

    // First press
    fireEvent.mouseDown(element);
    act(() => {
      jest.advanceTimersByTime(400);
    });
    fireEvent.mouseUp(element);

    // Second press
    fireEvent.mouseDown(element);
    act(() => {
      jest.advanceTimersByTime(400);
    });
    fireEvent.mouseUp(element);

    expect(onLongPress).toHaveBeenCalledTimes(2);
  });

  it('only triggers on touch when events is ["touch"]', () => {
    const onLongPress = jest.fn();
    render(<TestComponent onLongPress={onLongPress} options={{ events: ['touch'] }} />);

    const element = screen.getByTestId('test-element');

    fireEvent.mouseDown(element);
    act(() => {
      jest.advanceTimersByTime(400);
    });
    expect(onLongPress).not.toHaveBeenCalled();

    fireEvent.touchStart(element);
    act(() => {
      jest.advanceTimersByTime(400);
    });
    expect(onLongPress).toHaveBeenCalledTimes(1);

    fireEvent.touchEnd(element);
  });

  it('only triggers on mouse when events is ["mouse"]', () => {
    const onLongPress = jest.fn();
    render(<TestComponent onLongPress={onLongPress} options={{ events: ['mouse'] }} />);

    const element = screen.getByTestId('test-element');

    fireEvent.touchStart(element);
    act(() => {
      jest.advanceTimersByTime(400);
    });
    expect(onLongPress).not.toHaveBeenCalled();

    fireEvent.mouseDown(element);
    act(() => {
      jest.advanceTimersByTime(400);
    });
    expect(onLongPress).toHaveBeenCalledTimes(1);

    fireEvent.mouseUp(element);
  });

  it('cancels long press when touch moves beyond threshold with cancelOnMove', () => {
    const onLongPress = jest.fn();
    const onCancel = jest.fn();
    render(<TestComponent onLongPress={onLongPress} options={{ cancelOnMove: true, onCancel }} />);

    const element = screen.getByTestId('test-element');

    fireEvent.touchStart(element, { touches: [{ clientX: 0, clientY: 0 }] });
    fireEvent.touchMove(element, { touches: [{ clientX: 0, clientY: 40 }] });

    act(() => {
      jest.advanceTimersByTime(400);
    });

    expect(onLongPress).not.toHaveBeenCalled();
    expect(onCancel).toHaveBeenCalledTimes(1);
  });

  it('does not cancel long press when touch moves within threshold with cancelOnMove', () => {
    const onLongPress = jest.fn();
    render(<TestComponent onLongPress={onLongPress} options={{ cancelOnMove: true }} />);

    const element = screen.getByTestId('test-element');

    fireEvent.touchStart(element, { touches: [{ clientX: 0, clientY: 0 }] });
    fireEvent.touchMove(element, { touches: [{ clientX: 3, clientY: 3 }] });

    act(() => {
      jest.advanceTimersByTime(400);
    });

    expect(onLongPress).toHaveBeenCalledTimes(1);

    fireEvent.touchEnd(element);
  });

  it('respects a custom numeric cancelOnMove threshold', () => {
    const onLongPress = jest.fn();
    render(<TestComponent onLongPress={onLongPress} options={{ cancelOnMove: 50 }} />);

    const element = screen.getByTestId('test-element');

    fireEvent.touchStart(element, { touches: [{ clientX: 0, clientY: 0 }] });
    fireEvent.touchMove(element, { touches: [{ clientX: 0, clientY: 30 }] });

    act(() => {
      jest.advanceTimersByTime(400);
    });

    expect(onLongPress).toHaveBeenCalledTimes(1);

    fireEvent.touchEnd(element);
  });

  it('cancels on any movement when cancelOnMove is 0', () => {
    const onLongPress = jest.fn();
    render(<TestComponent onLongPress={onLongPress} options={{ cancelOnMove: 0 }} />);

    const element = screen.getByTestId('test-element');

    fireEvent.touchStart(element, { touches: [{ clientX: 0, clientY: 0 }] });
    fireEvent.touchMove(element, { touches: [{ clientX: 2, clientY: 0 }] });

    act(() => {
      jest.advanceTimersByTime(400);
    });

    expect(onLongPress).not.toHaveBeenCalled();
  });

  it('still fires with cancelOnMove 0 when there is no movement', () => {
    const onLongPress = jest.fn();
    render(<TestComponent onLongPress={onLongPress} options={{ cancelOnMove: 0 }} />);

    const element = screen.getByTestId('test-element');

    fireEvent.touchStart(element, { touches: [{ clientX: 5, clientY: 5 }] });

    act(() => {
      jest.advanceTimersByTime(400);
    });

    expect(onLongPress).toHaveBeenCalledTimes(1);

    fireEvent.touchEnd(element);
  });

  it('does not cancel on move when cancelOnMove is not set', () => {
    const onLongPress = jest.fn();
    render(<TestComponent onLongPress={onLongPress} />);

    const element = screen.getByTestId('test-element');

    fireEvent.touchStart(element, { touches: [{ clientX: 0, clientY: 0 }] });
    fireEvent.touchMove(element, { touches: [{ clientX: 0, clientY: 200 }] });

    act(() => {
      jest.advanceTimersByTime(400);
    });

    expect(onLongPress).toHaveBeenCalledTimes(1);

    fireEvent.touchEnd(element);
  });
});
