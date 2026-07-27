import { useRef } from 'react';
import { act, render, renderHook } from '@testing-library/react';
import { useIntersection } from './use-intersection';

class MockIntersectionObserver {
  static instances: MockIntersectionObserver[] = [];

  callback: IntersectionObserverCallback;
  options?: IntersectionObserverInit;
  observed: Element[] = [];
  disconnected = false;

  constructor(callback: IntersectionObserverCallback, options?: IntersectionObserverInit) {
    this.callback = callback;
    this.options = options;
    MockIntersectionObserver.instances.push(this);
  }

  observe(element: Element) {
    this.observed.push(element);
  }

  unobserve() {}

  disconnect() {
    this.disconnected = true;
  }

  emit(entries: Partial<IntersectionObserverEntry>[]) {
    act(() => {
      this.callback(
        entries as IntersectionObserverEntry[],
        this as unknown as IntersectionObserver
      );
    });
  }
}

const originalIntersectionObserver = window.IntersectionObserver;

beforeEach(() => {
  MockIntersectionObserver.instances = [];
  window.IntersectionObserver = MockIntersectionObserver as any;
});

afterEach(() => {
  window.IntersectionObserver = originalIntersectionObserver;
});

function lastObserver() {
  return MockIntersectionObserver.instances[MockIntersectionObserver.instances.length - 1];
}

describe('@mantine/hooks/use-intersection', () => {
  it('returns null entry before an element is observed', () => {
    const { result } = renderHook(() => useIntersection());
    expect(result.current.entry).toBe(null);
  });

  it('observes the element attached with the returned ref', () => {
    const { result } = renderHook(() => useIntersection());
    const element = document.createElement('div');

    act(() => result.current.ref(element));

    expect(MockIntersectionObserver.instances).toHaveLength(1);
    expect(lastObserver().observed).toContain(element);
  });

  it('defaults root to the viewport when no root is provided', () => {
    const { result } = renderHook(() => useIntersection());
    act(() => result.current.ref(document.createElement('div')));
    expect(lastObserver().options?.root).toBeUndefined();
  });

  it('passes a resolved element root through unchanged', () => {
    const root = document.createElement('div');
    const { result } = renderHook(() => useIntersection({ root }));
    act(() => result.current.ref(document.createElement('div')));
    expect(lastObserver().options?.root).toBe(root);
  });

  it('resolves a ref object passed as root to its current element', () => {
    const root = document.createElement('div');
    const { result } = renderHook(() => useIntersection({ root: { current: root } }));

    act(() => result.current.ref(document.createElement('div')));

    expect(MockIntersectionObserver.instances).toHaveLength(1);
    expect(lastObserver().options?.root).toBe(root);
  });

  it('falls back to the viewport when the root ref current is null', () => {
    const { result } = renderHook(() => useIntersection({ root: { current: null } }));
    act(() => result.current.ref(document.createElement('div')));
    expect(lastObserver().options?.root).toBe(null);
  });

  it('forwards rootMargin and threshold to the observer', () => {
    const { result } = renderHook(() => useIntersection({ rootMargin: '10px', threshold: 0.5 }));
    act(() => result.current.ref(document.createElement('div')));
    expect(lastObserver().options?.rootMargin).toBe('10px');
    expect(lastObserver().options?.threshold).toBe(0.5);
  });

  it('updates entry when the observer callback fires', () => {
    const { result } = renderHook(() => useIntersection());
    act(() => result.current.ref(document.createElement('div')));

    lastObserver().emit([{ isIntersecting: true } as IntersectionObserverEntry]);
    expect(result.current.entry?.isIntersecting).toBe(true);
  });

  it('disconnects the observer and resets entry when the element is detached', () => {
    const { result } = renderHook(() => useIntersection());
    act(() => result.current.ref(document.createElement('div')));
    const observer = lastObserver();
    observer.emit([{ isIntersecting: true } as IntersectionObserverEntry]);
    expect(result.current.entry).not.toBe(null);

    act(() => result.current.ref(null));
    expect(observer.disconnected).toBe(true);
    expect(result.current.entry).toBe(null);
  });

  it('disconnects the observer on unmount', () => {
    const { result, unmount } = renderHook(() => useIntersection());
    act(() => result.current.ref(document.createElement('div')));
    const observer = lastObserver();
    unmount();
    expect(observer.disconnected).toBe(true);
  });

  it('roots to the container ref element even though child refs attach before parents', () => {
    function Demo() {
      const containerRef = useRef<HTMLDivElement>(null);
      const { ref } = useIntersection({ root: containerRef });
      return (
        <div ref={containerRef} data-testid="container">
          <div ref={ref} data-testid="target" />
        </div>
      );
    }

    const { getByTestId } = render(<Demo />);

    expect(MockIntersectionObserver.instances).toHaveLength(1);
    expect(lastObserver().options?.root).toBe(getByTestId('container'));
    expect(lastObserver().observed).toContain(getByTestId('target'));
  });
});
