import { act, renderHook } from '@testing-library/react';
import { useIntersection } from './use-intersection';

describe('@mantine/hooks/use-intersection', () => {
  let lastCallback: IntersectionObserverCallback;
  const original = window.IntersectionObserver;

  beforeAll(() => {
    class MockIntersectionObserver {
      constructor(callback: IntersectionObserverCallback) {
        lastCallback = callback;
      }

      observe() {}
      unobserve() {}
      disconnect() {}
      takeRecords() {
        return [];
      }
    }

    window.IntersectionObserver = MockIntersectionObserver as any;
  });

  afterAll(() => {
    window.IntersectionObserver = original;
  });

  it('reports the latest entry when the observer delivers a batch of entries', () => {
    const hook = renderHook(() => useIntersection());

    act(() => {
      hook.result.current.ref(document.createElement('div'));
    });

    const stale = { isIntersecting: false, intersectionRatio: 0 } as IntersectionObserverEntry;
    const latest = { isIntersecting: true, intersectionRatio: 1 } as IntersectionObserverEntry;

    act(() => {
      lastCallback([stale, latest], {} as IntersectionObserver);
    });

    expect(hook.result.current.entry).toBe(latest);
    expect(hook.result.current.entry?.isIntersecting).toBe(true);
  });

  it('reports the single entry when the observer delivers one entry', () => {
    const hook = renderHook(() => useIntersection());

    act(() => {
      hook.result.current.ref(document.createElement('div'));
    });

    const entry = { isIntersecting: true, intersectionRatio: 1 } as IntersectionObserverEntry;

    act(() => {
      lastCallback([entry], {} as IntersectionObserver);
    });

    expect(hook.result.current.entry).toBe(entry);
  });
});
