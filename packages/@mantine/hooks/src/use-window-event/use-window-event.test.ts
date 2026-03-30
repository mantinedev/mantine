import { act, renderHook } from '@testing-library/react';
import { useWindowEvent } from './use-window-event';

describe('@mantine/hooks/use-window-event', () => {
  it('calls listener when the event fires', () => {
    const handler = jest.fn();
    renderHook(() => useWindowEvent('click', handler));

    act(() => {
      window.dispatchEvent(new MouseEvent('click'));
    });

    expect(handler).toHaveBeenCalledTimes(1);
  });

  it('calls the latest listener after rerender (no stale closure)', () => {
    const first = jest.fn();
    const second = jest.fn();

    const { rerender } = renderHook(({ cb }) => useWindowEvent('click', cb), {
      initialProps: { cb: first },
    });

    rerender({ cb: second });

    act(() => {
      window.dispatchEvent(new MouseEvent('click'));
    });

    expect(first).not.toHaveBeenCalled();
    expect(second).toHaveBeenCalledTimes(1);
  });

  it('does not re-register the listener when an inline callback changes identity', () => {
    const addSpy = jest.spyOn(window, 'addEventListener');
    const removeSpy = jest.spyOn(window, 'removeEventListener');

    const { rerender } = renderHook(({ value }) => useWindowEvent('click', () => value), {
      initialProps: { value: 1 },
    });

    const initialAddCalls = addSpy.mock.calls.filter(([t]) => t === 'click').length;
    const initialRemoveCalls = removeSpy.mock.calls.filter(([t]) => t === 'click').length;

    rerender({ value: 2 });
    rerender({ value: 3 });

    expect(addSpy.mock.calls.filter(([t]) => t === 'click').length).toBe(initialAddCalls);
    expect(removeSpy.mock.calls.filter(([t]) => t === 'click').length).toBe(initialRemoveCalls);

    addSpy.mockRestore();
    removeSpy.mockRestore();
  });

  it('re-registers when event type changes', () => {
    const handler = jest.fn();
    const addSpy = jest.spyOn(window, 'addEventListener');
    const removeSpy = jest.spyOn(window, 'removeEventListener');

    const { rerender } = renderHook(({ type }) => useWindowEvent(type, handler), {
      initialProps: { type: 'click' },
    });

    const clickAdds = () => addSpy.mock.calls.filter(([t]) => t === 'click').length;
    const keydownAdds = () => addSpy.mock.calls.filter(([t]) => t === 'keydown').length;
    const clickRemoves = () => removeSpy.mock.calls.filter(([t]) => t === 'click').length;

    expect(clickAdds()).toBe(1);
    expect(keydownAdds()).toBe(0);

    rerender({ type: 'keydown' });

    expect(clickRemoves()).toBe(1);
    expect(keydownAdds()).toBe(1);

    addSpy.mockRestore();
    removeSpy.mockRestore();
  });

  it('removes the listener on unmount', () => {
    const handler = jest.fn();
    const { unmount } = renderHook(() => useWindowEvent('click', handler));

    unmount();

    act(() => {
      window.dispatchEvent(new MouseEvent('click'));
    });

    expect(handler).not.toHaveBeenCalled();
  });
});
