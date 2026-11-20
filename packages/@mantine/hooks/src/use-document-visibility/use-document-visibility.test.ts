import { createElement, useEffect } from 'react';
import { act, render, renderHook } from '@testing-library/react';
import { renderToString } from 'react-dom/server';
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

  it('reports hidden to the first consumer effect when mounted in a hidden tab', () => {
    setVisibilityState('hidden');
    const observed = jest.fn();

    renderHook(() => {
      const visibility = useDocumentVisibility();
      useEffect(() => {
        observed(visibility);
      }, [visibility]);
    });

    expect(observed.mock.calls).toEqual([['hidden']]);
  });

  it('renders visible on the server and updates to the browser state after hydration', () => {
    setVisibilityState('hidden');
    function Visibility() {
      return createElement('span', null, useDocumentVisibility());
    }

    const container = document.createElement('div');
    container.innerHTML = renderToString(createElement(Visibility));
    const serverElement = container.firstChild;
    expect(container.textContent).toBe('visible');

    render(createElement(Visibility), { container, hydrate: true });
    expect(container.firstChild).toBe(serverElement);
    expect(container.textContent).toBe('hidden');
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
