import { act, renderHook } from '@testing-library/react';
import { useViewportSize } from './use-viewport-size';

function setWindowSize(width: number, height: number) {
  Object.defineProperty(window, 'innerWidth', { writable: true, configurable: true, value: width });
  Object.defineProperty(window, 'innerHeight', {
    writable: true,
    configurable: true,
    value: height,
  });
}

describe('@mantine/hooks/use-viewport-size', () => {
  beforeEach(() => {
    setWindowSize(1024, 768);
  });

  it('returns initial viewport dimensions from window', () => {
    const { result } = renderHook(() => useViewportSize());
    expect(result.current.width).toBe(1024);
    expect(result.current.height).toBe(768);
  });

  it('updates when a resize event fires', () => {
    const { result } = renderHook(() => useViewportSize());

    act(() => {
      setWindowSize(1280, 900);
      window.dispatchEvent(new Event('resize'));
    });

    expect(result.current.width).toBe(1280);
    expect(result.current.height).toBe(900);
  });

  it('updates when an orientationchange event fires', () => {
    const { result } = renderHook(() => useViewportSize());

    act(() => {
      setWindowSize(768, 1024);
      window.dispatchEvent(new Event('orientationchange'));
    });

    expect(result.current.width).toBe(768);
    expect(result.current.height).toBe(1024);
  });

  it('shares a single set of window listeners across multiple instances', () => {
    const addSpy = jest.spyOn(window, 'addEventListener');

    const hook1 = renderHook(() => useViewportSize());
    const hook2 = renderHook(() => useViewportSize());

    const resizeCalls = addSpy.mock.calls.filter(([type]) => type === 'resize');
    expect(resizeCalls).toHaveLength(1);

    hook1.unmount();
    hook2.unmount();
    addSpy.mockRestore();
  });

  it('removes window listeners when the last instance unmounts', () => {
    const removeSpy = jest.spyOn(window, 'removeEventListener');

    const hook1 = renderHook(() => useViewportSize());
    const hook2 = renderHook(() => useViewportSize());

    hook1.unmount();
    expect(removeSpy.mock.calls.filter(([type]) => type === 'resize')).toHaveLength(0);

    hook2.unmount();
    expect(removeSpy.mock.calls.filter(([type]) => type === 'resize')).toHaveLength(1);

    removeSpy.mockRestore();
  });
});
