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
});
