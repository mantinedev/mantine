import { renderHook } from '@testing-library/react';
import { useElementSize, useResizeObserver } from './use-resize-observer';

class MockResizeObserver {
  observe = jest.fn();
  disconnect = jest.fn();
}

let mockObserverInstance: MockResizeObserver;

const originalResizeObserver = global.ResizeObserver;
const originalRAF = window.requestAnimationFrame;
const originalCAF = window.cancelAnimationFrame;

describe('@mantine/hooks/use-resize-observer', () => {
  beforeEach(() => {
    global.ResizeObserver = jest.fn().mockImplementation(() => {
      mockObserverInstance = new MockResizeObserver();
      return mockObserverInstance;
    }) as any;

    window.requestAnimationFrame = (callback) => window.setTimeout(callback, 0) as any;
    window.cancelAnimationFrame = jest.fn();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  afterAll(() => {
    global.ResizeObserver = originalResizeObserver;
    window.requestAnimationFrame = originalRAF;
    window.cancelAnimationFrame = originalCAF;
  });

  it('returns reference and default dimensions', () => {
    const { result } = renderHook(() => useResizeObserver());
    const [ref, rect] = result.current;

    expect(ref.current).toBe(null);
    expect(rect).toEqual({
      x: 0,
      y: 0,
      width: 0,
      height: 0,
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
    });
  });

  it('calls observe on mount and disconnect on unmount', () => {
    const { unmount } = renderHook(() => useResizeObserver());

    expect(global.ResizeObserver).toHaveBeenCalled();

    unmount();

    expect(mockObserverInstance.disconnect).toHaveBeenCalled();
  });
});

describe('@mantine/hooks/use-element-size', () => {
  beforeEach(() => {
    global.ResizeObserver = jest.fn().mockImplementation(() => {
      mockObserverInstance = new MockResizeObserver();
      return mockObserverInstance;
    }) as any;

    window.requestAnimationFrame = (callback) => window.setTimeout(callback, 0);
    window.cancelAnimationFrame = jest.fn();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  afterAll(() => {
    global.ResizeObserver = originalResizeObserver;
    window.requestAnimationFrame = originalRAF;
    window.cancelAnimationFrame = originalCAF;
  });

  it('returns reference and default dimensions', () => {
    const { result } = renderHook(() => useElementSize());

    expect(result.current.ref.current).toBe(null);
    expect(result.current.width).toBe(0);
    expect(result.current.height).toBe(0);
  });
});
