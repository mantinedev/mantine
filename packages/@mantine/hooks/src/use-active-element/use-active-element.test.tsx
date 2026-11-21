import { act, renderHook } from '@testing-library/react';
import { useActiveElement } from './use-active-element';

function createInput(id?: string) {
  const input = document.createElement('input');
  if (id) {
    input.id = id;
  }
  document.body.appendChild(input);
  return input;
}

let observe: jest.Mock;
let disconnect: jest.Mock;
let observerCallback: MutationCallback;
let originalMutationObserver: typeof MutationObserver;

function triggerObserver(records: Partial<MutationRecord>[]) {
  observerCallback(records as MutationRecord[], {} as MutationObserver);
}

beforeEach(() => {
  observe = jest.fn();
  disconnect = jest.fn();
  observerCallback = () => {};
  originalMutationObserver = window.MutationObserver;

  window.MutationObserver = class {
    constructor(callback: MutationCallback) {
      observerCallback = callback;
    }

    observe = observe;
    disconnect = disconnect;
    takeRecords = () => [];
  } as unknown as typeof MutationObserver;
});

afterEach(() => {
  window.MutationObserver = originalMutationObserver;
  document.body.innerHTML = '';
});

describe('@mantine/hooks/use-active-element', () => {
  it('returns the currently focused element', () => {
    const input = createInput('test-input');
    const { result } = renderHook(() => useActiveElement());

    act(() => input.focus());

    expect(result.current).toBe(input);
  });

  it('updates when focus moves between elements', () => {
    const first = createInput('first');
    const second = createInput('second');
    const { result } = renderHook(() => useActiveElement());

    act(() => first.focus());
    expect(result.current).toBe(first);

    act(() => second.focus());
    expect(result.current).toBe(second);
  });

  it('updates when focus is lost', () => {
    const input = createInput();
    const { result } = renderHook(() => useActiveElement());

    act(() => input.focus());
    expect(result.current).toBe(input);

    act(() => input.blur());
    expect(result.current).toBe(document.body);
  });

  it('pierces shadow roots when deep is true (default)', () => {
    const host = document.createElement('div');
    document.body.appendChild(host);
    const shadow = host.attachShadow({ mode: 'open' });
    const input = document.createElement('input');
    shadow.appendChild(input);

    const { result } = renderHook(() => useActiveElement());

    act(() => input.focus());

    expect(result.current).toBe(input);
  });

  it('does not pierce shadow roots when deep is false', () => {
    const host = document.createElement('div');
    document.body.appendChild(host);
    const shadow = host.attachShadow({ mode: 'open' });
    const input = document.createElement('input');
    shadow.appendChild(input);

    const { result } = renderHook(() => useActiveElement({ deep: false }));

    act(() => input.focus());

    expect(result.current).toBe(host);
  });

  it('observes the shadow root of the active element for removals when deep', () => {
    const host = document.createElement('div');
    document.body.appendChild(host);
    const shadow = host.attachShadow({ mode: 'open' });
    const input = document.createElement('input');
    shadow.appendChild(input);

    renderHook(() => useActiveElement());

    act(() => input.focus());

    expect(observe).toHaveBeenCalledWith(shadow, { childList: true, subtree: true });
  });

  it('observes document.body and re-reads when the focused element is removed', () => {
    const input = createInput();
    const { result } = renderHook(() => useActiveElement());

    expect(observe).toHaveBeenCalledWith(document.body, { childList: true, subtree: true });

    act(() => input.focus());
    expect(result.current).toBe(input);

    act(() => {
      input.remove();
      triggerObserver([{ removedNodes: [input] as unknown as NodeList }]);
    });

    expect(result.current).toBe(document.body);
  });

  it('ignores mutations that do not remove nodes', () => {
    const input = createInput();
    const { result } = renderHook(() => useActiveElement());

    act(() => input.focus());
    expect(result.current).toBe(input);

    act(() => triggerObserver([{ removedNodes: [] as unknown as NodeList }]));

    expect(result.current).toBe(input);
  });

  it('does not observe removal when triggerOnRemoval is false', () => {
    renderHook(() => useActiveElement({ triggerOnRemoval: false }));
    expect(observe).not.toHaveBeenCalled();
  });

  it('removes listeners and disconnects observer on unmount', () => {
    const removeSpy = jest.spyOn(window, 'removeEventListener');
    const { unmount } = renderHook(() => useActiveElement());

    unmount();

    expect(removeSpy).toHaveBeenCalledWith('focusin', expect.any(Function));
    expect(removeSpy).toHaveBeenCalledWith('focusout', expect.any(Function));
    expect(removeSpy).toHaveBeenCalledWith('blur', expect.any(Function), true);
    expect(disconnect).toHaveBeenCalled();

    removeSpy.mockRestore();
  });
});
