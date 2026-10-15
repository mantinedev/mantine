import { act, renderHook } from '@testing-library/react';
import { MantineProvider } from '@mantine/core';
import { useLightboxLockScroll } from './use-lightbox-lock-scroll';

const wrapper = ({ children }: { children: React.ReactNode }) => (
  <MantineProvider>{children}</MantineProvider>
);

describe('@mantine/lightbox/use-lightbox-lock-scroll', () => {
  beforeEach(() => jest.useFakeTimers());
  afterEach(() => jest.useRealTimers());

  it('keeps the lock during the exit transition on the first close after mount', () => {
    const { result, rerender } = renderHook(
      (opened: boolean) =>
        useLightboxLockScroll({ opened, exitDuration: 200, exitDelay: 0, reduceMotion: false }),
      { initialProps: false, wrapper }
    );
    expect(result.current).toBe(false);

    act(() => jest.advanceTimersByTime(1000));
    rerender(true);
    act(() => jest.advanceTimersByTime(1000));
    expect(result.current).toBe(true);

    rerender(false);
    expect(result.current).toBe(true);

    act(() => jest.advanceTimersByTime(199));
    expect(result.current).toBe(true);

    act(() => jest.advanceTimersByTime(1));
    expect(result.current).toBe(false);
  });

  it('keeps the lock when reopened during the exit transition and releases it on unmount', () => {
    const { result, rerender, unmount } = renderHook(
      (opened: boolean) =>
        useLightboxLockScroll({ opened, exitDuration: 200, exitDelay: 50, reduceMotion: false }),
      { initialProps: true, wrapper }
    );

    rerender(false);
    act(() => jest.advanceTimersByTime(100));
    rerender(true);
    act(() => jest.advanceTimersByTime(1000));
    expect(result.current).toBe(true);

    rerender(false);
    act(() => jest.advanceTimersByTime(249));
    expect(result.current).toBe(true);
    act(() => jest.advanceTimersByTime(1));
    expect(result.current).toBe(false);

    rerender(true);
    rerender(false);
    unmount();
    expect(jest.getTimerCount()).toBe(0);
  });

  it('releases the lock at once when there is no exit transition', () => {
    const { result, rerender } = renderHook(
      (opened: boolean) =>
        useLightboxLockScroll({ opened, exitDuration: 0, exitDelay: 0, reduceMotion: false }),
      { initialProps: true, wrapper }
    );

    rerender(false);
    expect(result.current).toBe(false);
  });
});
