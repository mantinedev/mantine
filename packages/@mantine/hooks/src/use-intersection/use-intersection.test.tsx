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
  beforeEach(() => {
    jest.spyOn(window, 'IntersectionObserver').mockImplementation((cb) => {
      callback = cb;
      return { observe: jest.fn(), disconnect: jest.fn(), unobserve: jest.fn() } as any;
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

  it('preserves the entry when rerendering with an equivalent inline threshold array', () => {
    const { container, rerender } = render(<Demo />);
    const target = container.firstElementChild!;

    intersect(target, true);
    expect(screen.getByText('true')).toBeInTheDocument();

    rerender(<Demo />);
    expect(screen.getByText('true')).toBeInTheDocument();

    intersect(target, false);
    expect(screen.getByText('false')).toBeInTheDocument();
  });

  it('resets the stale entry and receives new entries when threshold values change', () => {
    const { container, rerender } = render(<Demo threshold={[0, 1]} />);
    const target = container.firstElementChild!;

    intersect(target, true);
    expect(screen.getByText('true')).toBeInTheDocument();

    rerender(<Demo threshold={[0, 0.25, 1]} />);
    expect(screen.getByText('no-entry')).toBeInTheDocument();

    intersect(target, false);
    expect(screen.getByText('false')).toBeInTheDocument();
  });

  it('supports a number threshold', () => {
    const { container, rerender } = render(<Demo threshold={0.5} />);
    intersect(container.firstElementChild!, false);
    rerender(<Demo threshold={0.5} />);

    expect(screen.getByText('false')).toBeInTheDocument();
  });
});
