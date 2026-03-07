import { act, renderHook } from '@testing-library/react';
import { useHotkeys } from './use-hotkeys';

const dispatchEvent = (data: any) => {
  const event = new KeyboardEvent('keydown', data);
  document.documentElement.dispatchEvent(event);
};

describe('@mantine/hooks/use-hotkey', () => {
  it('should listen to document events', () => {
    const handler = jest.fn();
    renderHook(() => useHotkeys([['shift+ctrl+S', handler]]));
    dispatchEvent({ shiftKey: true, ctrlKey: true, key: 'S' });
    expect(handler).toHaveBeenCalled();
  });

  it('should not fire when keys mismatch', () => {
    const handler = jest.fn();
    renderHook(() => useHotkeys([['alt+L', handler]]));
    dispatchEvent({ metaKey: true, key: 'L' });
    expect(handler).not.toHaveBeenCalled();
  });

  it('should not fire when event is no exact match', () => {
    const handler = jest.fn();
    renderHook(() => useHotkeys([['mod+P', handler]]));
    dispatchEvent({ metaKey: true, altKey: true, key: 'P' });
    expect(handler).not.toHaveBeenCalled();
  });

  it('correctly handles space key', () => {
    const handler = jest.fn();
    renderHook(() => useHotkeys([['shift+space', handler]]));
    dispatchEvent({ shiftKey: true, key: 'space' });
    expect(handler).toHaveBeenCalled();
  });

  it('correctly handles [plus] key', () => {
    const handler = jest.fn();
    renderHook(() => useHotkeys([['shift+[plus]', handler]]));
    dispatchEvent({ shiftKey: true, key: '+' });
    expect(handler).toHaveBeenCalled();
  });

  it('correctly handles physical key assignments like Digit1', () => {
    const handler = jest.fn();
    renderHook(() => useHotkeys([['Digit1', handler, { usePhysicalKeys: true }]]));
    dispatchEvent({ code: 'Digit1' });
    expect(handler).toHaveBeenCalled();
  });

  it('correctly ignores unclear numerical assignments when usePhyiscalKeys is true', () => {
    const handler = jest.fn();
    renderHook(() => useHotkeys([['1', handler, { usePhysicalKeys: true }]], [], true));
    dispatchEvent({ code: 'Numpad1' });
    expect(handler).not.toHaveBeenCalled();
  });

  it('correctly assumes physical keys when usePhysicalKeys is true', () => {
    const handler = jest.fn();
    renderHook(() => useHotkeys([['A', handler, { usePhysicalKeys: true }]], [], true));
    dispatchEvent({ code: 'KeyA' });
    expect(handler).toHaveBeenCalled();
  });

  it('does not re-register the listener when an inline array changes identity on rerender', () => {
    const addSpy = jest.spyOn(document.documentElement, 'addEventListener');
    const removeSpy = jest.spyOn(document.documentElement, 'removeEventListener');
    const handler = jest.fn();

    const { rerender } = renderHook(({ value }) => useHotkeys([['ctrl+S', handler]]), {
      initialProps: { value: 1 },
    });

    const initialAdds = addSpy.mock.calls.filter(([t]) => t === 'keydown').length;
    const initialRemoves = removeSpy.mock.calls.filter(([t]) => t === 'keydown').length;

    rerender({ value: 2 });
    rerender({ value: 3 });

    expect(addSpy.mock.calls.filter(([t]) => t === 'keydown').length).toBe(initialAdds);
    expect(removeSpy.mock.calls.filter(([t]) => t === 'keydown').length).toBe(initialRemoves);

    addSpy.mockRestore();
    removeSpy.mockRestore();
  });

  it('calls the latest handler after rerender (no stale closure)', () => {
    const first = jest.fn();
    const second = jest.fn();

    const { rerender } = renderHook(({ handler }) => useHotkeys([['ctrl+S', handler]]), {
      initialProps: { handler: first },
    });

    rerender({ handler: second });

    act(() => {
      dispatchEvent({ ctrlKey: true, key: 'S' });
    });

    expect(first).not.toHaveBeenCalled();
    expect(second).toHaveBeenCalledTimes(1);
  });

  it('removes the listener on unmount', () => {
    const handler = jest.fn();
    const { unmount } = renderHook(() => useHotkeys([['ctrl+S', handler]]));

    unmount();

    act(() => {
      dispatchEvent({ ctrlKey: true, key: 'S' });
    });

    expect(handler).not.toHaveBeenCalled();
  });
});
