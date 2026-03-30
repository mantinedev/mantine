import { act, renderHook } from '@testing-library/react';
import { useTextSelection } from './use-text-selection';

describe('@mantine/hooks/use-text-selection', () => {
  it('registers a selectionchange listener on mount', () => {
    const addSpy = jest.spyOn(document, 'addEventListener');
    renderHook(() => useTextSelection());
    expect(addSpy.mock.calls.some(([t]) => t === 'selectionchange')).toBe(true);
    addSpy.mockRestore();
  });

  it('removes the selectionchange listener on unmount', () => {
    const removeSpy = jest.spyOn(document, 'removeEventListener');
    const { unmount } = renderHook(() => useTextSelection());
    unmount();
    expect(removeSpy.mock.calls.some(([t]) => t === 'selectionchange')).toBe(true);
    removeSpy.mockRestore();
  });

  it('re-renders when selectionchange fires', () => {
    let renderCount = 0;
    renderHook(() => {
      renderCount += 1;
      return useTextSelection();
    });

    const countBefore = renderCount;

    act(() => {
      document.dispatchEvent(new Event('selectionchange'));
    });

    expect(renderCount).toBeGreaterThan(countBefore);
  });
});
