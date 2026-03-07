import { act, renderHook } from '@testing-library/react';
import { useDocumentVisibility } from './use-document-visibility';

function setVisibilityState(value: DocumentVisibilityState) {
  Object.defineProperty(document, 'visibilityState', {
    get: () => value,
    configurable: true,
  });
}

afterEach(() => {
  setVisibilityState('visible');
});

describe('@mantine/hooks/use-document-visibility', () => {
  it('returns visible as the initial state', () => {
    const { result } = renderHook(() => useDocumentVisibility());
    expect(result.current).toBe('visible');
  });

  it('updates to hidden when visibilitychange fires', () => {
    const { result } = renderHook(() => useDocumentVisibility());

    act(() => {
      setVisibilityState('hidden');
      document.dispatchEvent(new Event('visibilitychange'));
    });

    expect(result.current).toBe('hidden');
  });

  it('updates back to visible on subsequent visibilitychange', () => {
    const { result } = renderHook(() => useDocumentVisibility());

    act(() => {
      setVisibilityState('hidden');
      document.dispatchEvent(new Event('visibilitychange'));
    });

    act(() => {
      setVisibilityState('visible');
      document.dispatchEvent(new Event('visibilitychange'));
    });

    expect(result.current).toBe('visible');
  });

  it('removes the listener on unmount', () => {
    const removeSpy = jest.spyOn(document, 'removeEventListener');
    const { unmount } = renderHook(() => useDocumentVisibility());
    unmount();
    expect(removeSpy.mock.calls.some(([t]) => t === 'visibilitychange')).toBe(true);
    removeSpy.mockRestore();
  });
});
