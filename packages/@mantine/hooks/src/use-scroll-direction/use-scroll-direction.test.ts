import { act, renderHook } from '@testing-library/react';
import { useScrollDirection } from './use-scroll-direction';

function simulateScroll(y: number) {
  Object.defineProperty(window, 'scrollY', { value: y, configurable: true, writable: true });
  act(() => {
    window.dispatchEvent(new Event('scroll'));
  });
}

describe('@mantine/hooks/use-scroll-direction', () => {
  afterEach(() => {
    Object.defineProperty(window, 'scrollY', { value: 0, configurable: true, writable: true });
  });

  it('returns "unknown" initially', () => {
    const { result } = renderHook(() => useScrollDirection());
    expect(result.current).toBe('unknown');
  });

  it('returns "down" after the first scroll down event', () => {
    const { result } = renderHook(() => useScrollDirection());
    simulateScroll(100);
    expect(result.current).toBe('down');
  });

  it('returns "up" after scrolling up', () => {
    const { result } = renderHook(() => useScrollDirection());
    simulateScroll(100);
    simulateScroll(50);
    expect(result.current).toBe('up');
  });

  it('returns "down" again after reversing back down', () => {
    const { result } = renderHook(() => useScrollDirection());
    simulateScroll(100);
    simulateScroll(50);
    simulateScroll(150);
    expect(result.current).toBe('down');
  });

  it('uses the scroll position at mount as the starting point', () => {
    Object.defineProperty(window, 'scrollY', { value: 1000, configurable: true, writable: true });
    const { result } = renderHook(() => useScrollDirection());
    simulateScroll(900);
    expect(result.current).toBe('up');
  });

  it('keeps the current direction when the vertical scroll position does not change', () => {
    const { result } = renderHook(() => useScrollDirection());
    simulateScroll(100);
    simulateScroll(50);
    simulateScroll(50);
    expect(result.current).toBe('up');
  });

  it('tracks the scroll position while resizing', () => {
    jest.useFakeTimers();
    const { result } = renderHook(() => useScrollDirection());
    simulateScroll(1000);

    act(() => {
      window.dispatchEvent(new Event('resize'));
    });
    simulateScroll(1500);
    expect(result.current).toBe('down');

    act(() => {
      jest.advanceTimersByTime(300);
    });
    simulateScroll(1450);
    expect(result.current).toBe('up');
    jest.useRealTimers();
  });
});
