import { act, renderHook } from '@testing-library/react';
import { isFixed, isPinned, isPinnedOrReleased, isReleased, useHeadroom } from './use-headroom';

function simulateScroll(y: number) {
  Object.defineProperty(window, 'scrollY', { value: y, configurable: true, writable: true });
  act(() => {
    window.dispatchEvent(new Event('scroll'));
  });
}

describe('@mantine/hooks/use-headroom', () => {
  afterEach(() => {
    Object.defineProperty(window, 'scrollY', { value: 0, configurable: true, writable: true });
  });

  describe('isFixed', () => {
    it('returns true when position is within the fixed zone', () => {
      expect(isFixed(0, 100)).toBe(true);
      expect(isFixed(50, 100)).toBe(true);
      expect(isFixed(100, 100)).toBe(true);
    });

    it('returns false when position exceeds fixedAt', () => {
      expect(isFixed(101, 100)).toBe(false);
      expect(isFixed(200, 100)).toBe(false);
    });
  });

  describe('isPinned', () => {
    it('returns true when current position is at or above previous', () => {
      expect(isPinned(50, 100)).toBe(true);
      expect(isPinned(100, 100)).toBe(true);
    });

    it('returns false when current position is below previous', () => {
      expect(isPinned(101, 100)).toBe(false);
    });
  });

  describe('isReleased', () => {
    it('returns true when scrolled down and not in fixed position', () => {
      expect(isReleased(200, 100, 50)).toBe(true);
    });

    it('returns false when scrolled up (pinned)', () => {
      expect(isReleased(50, 100, 150)).toBe(false);
    });

    it('returns false when in the fixed zone', () => {
      expect(isReleased(50, 100, 200)).toBe(false);
    });
  });

  describe('isPinnedOrReleased', () => {
    it('calls onPin when entering the fixed zone and not already pinned', () => {
      const ref = { current: false } as React.RefObject<boolean>;
      const onPin = jest.fn();
      isPinnedOrReleased(50, 100, ref, false, onPin, undefined);
      expect(onPin).toHaveBeenCalledTimes(1);
      expect(ref.current).toBe(true);
    });

    it('calls onPin when scrolling up outside the fixed zone and not already pinned', () => {
      const ref = { current: false } as React.RefObject<boolean>;
      const onPin = jest.fn();
      isPinnedOrReleased(200, 100, ref, true, onPin, undefined);
      expect(onPin).toHaveBeenCalledTimes(1);
      expect(ref.current).toBe(true);
    });

    it('calls onRelease when scrolling down and was previously pinned', () => {
      const ref = { current: true } as React.RefObject<boolean>;
      const onRelease = jest.fn();
      isPinnedOrReleased(200, 100, ref, false, undefined, onRelease);
      expect(onRelease).toHaveBeenCalledTimes(1);
      expect(ref.current).toBe(false);
    });

    it('does not call onPin when already pinned', () => {
      const ref = { current: true } as React.RefObject<boolean>;
      const onPin = jest.fn();
      isPinnedOrReleased(50, 100, ref, false, onPin, undefined);
      expect(onPin).not.toHaveBeenCalled();
    });

    it('does not call onRelease when not pinned', () => {
      const ref = { current: false } as React.RefObject<boolean>;
      const onRelease = jest.fn();
      isPinnedOrReleased(200, 100, ref, false, undefined, onRelease);
      expect(onRelease).not.toHaveBeenCalled();
    });

    it('does not call onRelease when scrolling up and pinned (rapid-toggle regression)', () => {
      const ref = { current: true } as React.RefObject<boolean>;
      const onRelease = jest.fn();
      isPinnedOrReleased(200, 100, ref, true, undefined, onRelease);
      expect(onRelease).not.toHaveBeenCalled();
      expect(ref.current).toBe(true);
    });
  });

  describe('useHeadroom / scrollProgress', () => {
    it('starts fully visible at the top of the page', () => {
      const { result } = renderHook(() => useHeadroom());
      expect(result.current.scrollProgress).toBe(1);
      expect(result.current.pinned).toBe(true);
    });

    it('stays fully visible while inside the fixed zone', () => {
      const { result } = renderHook(() => useHeadroom({ fixedAt: 100 }));
      simulateScroll(50);
      expect(result.current.scrollProgress).toBe(1);
      expect(result.current.pinned).toBe(true);
    });

    it('gradually hides as the page scrolls past fixedAt', () => {
      const { result } = renderHook(() => useHeadroom({ fixedAt: 0, scrollDistance: 100 }));
      simulateScroll(50);
      expect(result.current.scrollProgress).toBe(0.5);
    });

    it('reaches fully hidden after scrollDistance pixels past fixedAt', () => {
      const { result } = renderHook(() => useHeadroom({ fixedAt: 0, scrollDistance: 100 }));
      simulateScroll(100);
      expect(result.current.scrollProgress).toBe(0);
      expect(result.current.pinned).toBe(false);
    });

    it('gradually reveals as the page scrolls back up', () => {
      const { result } = renderHook(() => useHeadroom({ fixedAt: 0, scrollDistance: 100 }));
      simulateScroll(100);
      simulateScroll(50);
      expect(result.current.scrollProgress).toBe(0.5);
    });

    it('returns to fully visible when scrolling back into the fixed zone', () => {
      const { result } = renderHook(() => useHeadroom({ fixedAt: 0, scrollDistance: 100 }));
      simulateScroll(200);
      simulateScroll(100);
      simulateScroll(0);
      expect(result.current.scrollProgress).toBe(1);
      expect(result.current.pinned).toBe(true);
    });

    it('continues from the saved progress when reversing direction mid-scroll', () => {
      const { result } = renderHook(() => useHeadroom({ fixedAt: 0, scrollDistance: 100 }));

      simulateScroll(75);
      simulateScroll(50);
      simulateScroll(75);

      expect(result.current.scrollProgress).toBe(0.75);
    });

    it('clamps scrollProgress to 0 when scrolled far past fixedAt', () => {
      const { result } = renderHook(() => useHeadroom({ fixedAt: 0, scrollDistance: 100 }));
      simulateScroll(500);
      expect(result.current.scrollProgress).toBe(0);
    });

    it('clamps scrollProgress to 1 when scrolled far up', () => {
      const { result } = renderHook(() => useHeadroom({ fixedAt: 0, scrollDistance: 100 }));
      simulateScroll(200);
      simulateScroll(100);
      simulateScroll(0);
      expect(result.current.scrollProgress).toBe(1);
    });

    it('starts hidden when the page loads already scrolled past fixedAt', () => {
      Object.defineProperty(window, 'scrollY', { value: 500, configurable: true, writable: true });
      const { result } = renderHook(() => useHeadroom({ fixedAt: 0, scrollDistance: 100 }));
      expect(result.current.scrollProgress).toBe(0);
      expect(result.current.pinned).toBe(false);
    });
  });

  describe('useHeadroom / callbacks', () => {
    it('calls onFix on mount when starting within the fixed zone', () => {
      const onFix = jest.fn();
      renderHook(() => useHeadroom({ fixedAt: 100, onFix }));
      expect(onFix).toHaveBeenCalled();
    });

    it('calls onPin when scroll direction changes to up outside the fixed zone', () => {
      const onPin = jest.fn();
      renderHook(() => useHeadroom({ fixedAt: 0, onPin }));
      jest.clearAllMocks();
      simulateScroll(100);
      simulateScroll(50);
      expect(onPin).toHaveBeenCalledTimes(1);
    });

    it('calls onRelease when scroll direction changes to down after being pinned', () => {
      const onRelease = jest.fn();
      renderHook(() => useHeadroom({ fixedAt: 0, onRelease }));
      simulateScroll(100);
      simulateScroll(50);
      jest.clearAllMocks();
      simulateScroll(100);
      expect(onRelease).toHaveBeenCalledTimes(1);
    });

    it('does not call onPin more than once while continuously scrolling up', () => {
      const onPin = jest.fn();
      renderHook(() => useHeadroom({ fixedAt: 0, onPin }));
      jest.clearAllMocks();
      simulateScroll(100);
      simulateScroll(75);
      simulateScroll(50);
      simulateScroll(25);
      expect(onPin).toHaveBeenCalledTimes(1);
    });

    it('does not call onRelease more than once while continuously scrolling down', () => {
      const onRelease = jest.fn();
      renderHook(() => useHeadroom({ fixedAt: 0, onRelease }));
      simulateScroll(100);
      simulateScroll(50);
      jest.clearAllMocks();
      simulateScroll(100);
      simulateScroll(150);
      simulateScroll(200);
      expect(onRelease).toHaveBeenCalledTimes(1);
    });

    it('always calls the latest callback version with no stale closure', () => {
      let callCount = 0;
      const { rerender } = renderHook(
        ({ onPin }: { onPin: () => void }) => useHeadroom({ fixedAt: 0, onPin }),
        {
          initialProps: {
            onPin: () => {
              callCount += 1;
            },
          },
        }
      );
      callCount = 0;
      simulateScroll(100);

      rerender({
        onPin: () => {
          callCount += 10;
        },
      });

      simulateScroll(50);
      expect(callCount).toBe(10);
    });
  });
});
