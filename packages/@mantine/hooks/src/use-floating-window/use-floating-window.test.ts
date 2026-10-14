import { act, renderHook } from '@testing-library/react';
import { useFloatingWindow } from './use-floating-window';

describe('@mantine/hooks/use-floating-window', () => {
  it('keeps ref and setPosition stable when the options change', () => {
    const { result, rerender } = renderHook(
      ({ constrainOffset }: { constrainOffset: number }) =>
        useFloatingWindow<HTMLDivElement>({ constrainToViewport: true, constrainOffset }),
      { initialProps: { constrainOffset: 10 } }
    );

    const { ref, setPosition } = result.current;
    rerender({ constrainOffset: 20 });

    expect(result.current.ref).toBe(ref);
    expect(result.current.setPosition).toBe(setPosition);
  });

  it('setPosition reads the current options after they change', () => {
    const element = document.createElement('div');
    document.body.appendChild(element);

    const { result, rerender } = renderHook(
      ({ constrainOffset }: { constrainOffset: number }) =>
        useFloatingWindow<HTMLDivElement>({ constrainToViewport: true, constrainOffset }),
      { initialProps: { constrainOffset: 10 } }
    );

    act(() => result.current.ref(element));

    const { setPosition } = result.current;
    rerender({ constrainOffset: 40 });

    act(() => setPosition({ left: 0, top: 0 }));
    expect(element.style.left).toBe('40px');
    expect(element.style.top).toBe('40px');

    element.remove();
  });

  describe('viewport constraints', () => {
    const originalWidth = window.innerWidth;
    const originalHeight = window.innerHeight;

    function setup(size: { width: number; height: number }, constrainOffset = 0) {
      const element = document.createElement('div');
      document.body.appendChild(element);
      jest.spyOn(element, 'getBoundingClientRect').mockReturnValue({
        width: size.width,
        height: size.height,
        top: 0,
        left: 0,
      } as DOMRect);

      const hook = renderHook(() =>
        useFloatingWindow<HTMLDivElement>({ constrainToViewport: true, constrainOffset })
      );
      act(() => hook.result.current.ref(element));
      return { element, hook };
    }

    function setViewport(width: number, height: number) {
      Object.defineProperty(window, 'innerWidth', { configurable: true, value: width });
      Object.defineProperty(window, 'innerHeight', { configurable: true, value: height });
    }

    afterEach(() => {
      setViewport(originalWidth, originalHeight);
      Object.defineProperty(document.documentElement, 'clientWidth', {
        configurable: true,
        value: 0,
      });
      document.body.innerHTML = '';
    });

    it('re-clamps the position when the window is resized', () => {
      setViewport(1200, 1000);
      const { element, hook } = setup({ width: 100, height: 100 });

      act(() => hook.result.current.setPosition({ left: 1000, top: 800 }));
      expect(element.style.left).toBe('1000px');
      expect(element.style.top).toBe('800px');

      setViewport(800, 600);
      act(() => {
        window.dispatchEvent(new Event('resize'));
      });
      expect(element.style.left).toBe('700px');
      expect(element.style.top).toBe('500px');

      hook.unmount();
      setViewport(300, 300);
      act(() => {
        window.dispatchEvent(new Event('resize'));
      });
      expect(element.style.left).toBe('700px');
    });

    it('keeps the top-left edge reachable when the element is larger than the viewport', () => {
      setViewport(1024, 400);
      const { element, hook } = setup({ width: 1200, height: 500 }, 10);

      expect(element.style.left).toBe('10px');
      expect(element.style.top).toBe('10px');

      act(() => hook.result.current.setPosition({ bottom: 0, right: 0 }));
      expect(element.style.left).toBe('10px');
      expect(element.style.top).toBe('10px');
    });

    it('excludes the page scrollbar from the viewport size', () => {
      setViewport(1024, 768);
      Object.defineProperty(document.documentElement, 'clientWidth', {
        configurable: true,
        value: 1009,
      });
      const { element, hook } = setup({ width: 100, height: 100 });

      act(() => hook.result.current.setPosition({ left: 2000 }));
      expect(element.style.left).toBe('909px');

      act(() => hook.result.current.setPosition({ right: 9, top: 0 }));
      expect(element.style.left).toBe('900px');
    });
  });
});
