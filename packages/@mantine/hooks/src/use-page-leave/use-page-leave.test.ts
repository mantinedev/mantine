import { act, renderHook } from '@testing-library/react';
import { usePageLeave } from './use-page-leave';

describe('@mantine/hooks/use-page-leave', () => {
  it('calls onPageLeave when mouseleave fires on documentElement', () => {
    const handler = jest.fn();
    renderHook(() => usePageLeave(handler));

    act(() => {
      document.documentElement.dispatchEvent(new MouseEvent('mouseleave'));
    });

    expect(handler).toHaveBeenCalledTimes(1);
  });

  it('calls the latest onPageLeave after rerender (no stale closure)', () => {
    const first = jest.fn();
    const second = jest.fn();

    const { rerender } = renderHook(({ cb }) => usePageLeave(cb), {
      initialProps: { cb: first },
    });

    rerender({ cb: second });

    act(() => {
      document.documentElement.dispatchEvent(new MouseEvent('mouseleave'));
    });

    expect(first).not.toHaveBeenCalled();
    expect(second).toHaveBeenCalledTimes(1);
  });

  it('removes the listener on unmount', () => {
    const handler = jest.fn();
    const { unmount } = renderHook(() => usePageLeave(handler));

    unmount();

    act(() => {
      document.documentElement.dispatchEvent(new MouseEvent('mouseleave'));
    });

    expect(handler).not.toHaveBeenCalled();
  });
});
