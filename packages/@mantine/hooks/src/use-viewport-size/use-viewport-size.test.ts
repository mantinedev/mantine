import { act, renderHook } from '@testing-library/react';
import { useViewportSize } from './use-viewport-size';

describe('@mantine/hooks/use-viewport-size', () => {
  it('returns width and height reflecting window dimensions after mount', () => {
    Object.defineProperty(window, 'innerWidth', {
      writable: true,
      configurable: true,
      value: 1100,
    });
    Object.defineProperty(window, 'innerHeight', {
      writable: true,
      configurable: true,
      value: 700,
    });
    const { result } = renderHook(() => useViewportSize());
    expect(result.current).toEqual({ width: 1100, height: 700 });
  });

  it('updates after a resize event', () => {
    const { result } = renderHook(() => useViewportSize());

    act(() => {
      Object.defineProperty(window, 'innerWidth', {
        writable: true,
        configurable: true,
        value: 1280,
      });
      Object.defineProperty(window, 'innerHeight', {
        writable: true,
        configurable: true,
        value: 800,
      });
      window.dispatchEvent(new Event('resize'));
    });

    expect(result.current.width).toBe(1280);
    expect(result.current.height).toBe(800);
  });

  it('updates after an orientationchange event', () => {
    const { result } = renderHook(() => useViewportSize());

    act(() => {
      Object.defineProperty(window, 'innerWidth', {
        writable: true,
        configurable: true,
        value: 390,
      });
      Object.defineProperty(window, 'innerHeight', {
        writable: true,
        configurable: true,
        value: 844,
      });
      window.dispatchEvent(new Event('orientationchange'));
    });

    expect(result.current.width).toBe(390);
    expect(result.current.height).toBe(844);
  });
});
