import { renderHook } from '@testing-library/react';
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

  it('correctly handles [plus] key', () => {
    const handler = jest.fn();
    renderHook(() => useHotkeys([['shift+[plus]', handler]]));
    dispatchEvent({ shiftKey: true, key: '+' });
    expect(handler).toHaveBeenCalled();
  });

  it('correctly handles physical key assignments like Digit1', () => {
    const handler = jest.fn();
    renderHook(() => useHotkeys([['Digit1', handler]]));
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
});
