import { createElement, useEffect } from 'react';
import { act, renderHook } from '@testing-library/react';
import { hydrateRoot } from 'react-dom/client';
import { renderToString } from 'react-dom/server.node';
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

  it('returns hidden from the first client render when the tab opens in the background', () => {
    setVisibilityState('hidden');
    const onVisibilityChange = jest.fn();
    const observedVisibility: DocumentVisibilityState[] = [];

    renderHook(() => {
      const visibility = useDocumentVisibility();
      observedVisibility.push(visibility);
      useEffect(() => onVisibilityChange(visibility), [visibility]);
    });

    expect(observedVisibility[0]).toBe('hidden');
    expect(onVisibilityChange.mock.calls).toEqual([['hidden']]);
  });

  it('uses the browser visibility instead of the server snapshot in client rendering', () => {
    const { result } = renderHook(() => useDocumentVisibility('hidden'));
    expect(result.current).toBe('visible');
  });

  it.each<DocumentVisibilityState>(['hidden', 'visible'])(
    'hydrates with a hidden fallback when the browser is %s',
    async (browserVisibility) => {
      setVisibilityState(browserVisibility);
      const onVisibilityChange = jest.fn();
      const onRecoverableError = jest.fn();
      const observedVisibility: DocumentVisibilityState[] = [];

      function TestComponent() {
        const visibility = useDocumentVisibility('hidden');
        observedVisibility.push(visibility);

        useEffect(() => onVisibilityChange(visibility), [visibility]);

        return createElement('span', null, visibility);
      }

      const container = document.createElement('div');
      container.innerHTML = renderToString(createElement(TestComponent));
      expect(container.textContent).toBe('hidden');
      observedVisibility.length = 0;

      let root: ReturnType<typeof hydrateRoot> | undefined;

      try {
        await act(async () => {
          root = hydrateRoot(container, createElement(TestComponent), { onRecoverableError });
        });

        expect(observedVisibility[0]).toBe('hidden');
        expect(container.textContent).toBe(browserVisibility);
        expect(onVisibilityChange.mock.calls).toEqual(
          browserVisibility === 'visible' ? [['hidden'], ['visible']] : [['hidden']]
        );
        expect(onRecoverableError).not.toHaveBeenCalled();
      } finally {
        act(() => root?.unmount());
      }
    }
  );

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
    const addSpy = jest.spyOn(document, 'addEventListener');
    const removeSpy = jest.spyOn(document, 'removeEventListener');
    const { unmount, rerender } = renderHook(() => useDocumentVisibility());

    try {
      const calls = addSpy.mock.calls.filter(([type]) => type === 'visibilitychange');
      expect(calls).toHaveLength(1);
      rerender();
      expect(addSpy.mock.calls.filter(([type]) => type === 'visibilitychange')).toHaveLength(1);
      unmount();
      expect(removeSpy).toHaveBeenCalledWith('visibilitychange', calls[0][1]);
    } finally {
      addSpy.mockRestore();
      removeSpy.mockRestore();
    }
  });
});
