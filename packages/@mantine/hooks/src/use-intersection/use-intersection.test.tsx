import { act, cleanup, render, screen } from '@testing-library/react';
import { useIntersection } from './use-intersection';

function Demo({ threshold = [0, 0.5, 1] }: { threshold?: number | number[] }) {
  const { ref, entry } = useIntersection({
    threshold: Array.isArray(threshold) ? [...threshold] : threshold,
  });
  return <div ref={ref}>{entry ? String(entry.isIntersecting) : 'no-entry'}</div>;
}

describe('@mantine/hooks/use-intersection', () => {
  let callback: IntersectionObserverCallback;
  const observe = jest.fn();
  const disconnect = jest.fn();

  beforeEach(() => {
    jest.spyOn(window, 'IntersectionObserver').mockImplementation((cb) => {
      callback = cb;
      return { observe, disconnect, unobserve: jest.fn() } as any;
    });
  });

  afterEach(() => {
    cleanup();
    jest.restoreAllMocks();
    jest.clearAllMocks();
  });

  function intersect(target: Element, isIntersecting: boolean) {
    act(() => {
      callback(
        [{ target, isIntersecting } as IntersectionObserverEntry],
        {} as IntersectionObserver
      );
    });
  }

  it('keeps the observer and entry after an update with an inline threshold array', () => {
    const { container } = render(<Demo />);
    const target = container.firstElementChild!;

    intersect(target, true);

    expect(screen.getByText('true')).toBeInTheDocument();
    expect(window.IntersectionObserver).toHaveBeenCalledTimes(1);
    expect(disconnect).not.toHaveBeenCalled();
  });

  it('reconnects when threshold values change', () => {
    const { rerender } = render(<Demo threshold={[0, 1]} />);
    rerender(<Demo threshold={[0, 0.25, 1]} />);

    expect(window.IntersectionObserver).toHaveBeenCalledTimes(2);
    expect(window.IntersectionObserver).toHaveBeenLastCalledWith(expect.any(Function), {
      threshold: [0, 0.25, 1],
    });
    expect(disconnect).toHaveBeenCalledTimes(1);
  });

  it('supports a number threshold', () => {
    const { container, rerender } = render(<Demo threshold={0.5} />);
    intersect(container.firstElementChild!, false);
    rerender(<Demo threshold={0.5} />);

    expect(screen.getByText('false')).toBeInTheDocument();
    expect(window.IntersectionObserver).toHaveBeenCalledTimes(1);
  });

  it('disconnects the observer on unmount', () => {
    const { container, unmount } = render(<Demo />);
    intersect(container.firstElementChild!, true);
    unmount();

    expect(disconnect).toHaveBeenCalledTimes(1);
  });
});
