import { act, cleanup, render, screen } from '@testing-library/react';
import { useElementSize, useResizeObserver } from './use-resize-observer';

function Demo({ box = 'border-box' }: { box?: ResizeObserverBoxOptions }) {
  const [ref, rect] = useResizeObserver({ box });
  return <div ref={ref}>{rect.width}</div>;
}

function ElementSizeDemo() {
  const { ref, width } = useElementSize({ box: 'border-box' });
  return <div ref={ref}>{width}</div>;
}

describe('@mantine/hooks/use-resize-observer', () => {
  let callback: ResizeObserverCallback;
  const observe = jest.fn();
  const disconnect = jest.fn();
  const observer = { observe, disconnect, unobserve: jest.fn() };

  beforeEach(() => {
    jest.useFakeTimers();
    jest.spyOn(window, 'ResizeObserver').mockImplementation((cb) => {
      callback = cb;
      return observer;
    });
  });

  afterEach(() => {
    cleanup();
    jest.restoreAllMocks();
    jest.clearAllMocks();
    jest.useRealTimers();
  });

  it.each([Demo, ElementSizeDemo])(
    'does not reconnect after a size update with inline options (%p)',
    (Component) => {
      const { container, unmount } = render(<Component />);
      const target = container.firstElementChild!;

      act(() => {
        callback(
          [
            {
              target,
              contentRect: new DOMRectReadOnly(0, 0, 100, 50),
              borderBoxSize: [{ inlineSize: 100, blockSize: 50 }],
              contentBoxSize: [{ inlineSize: 100, blockSize: 50 }],
              devicePixelContentBoxSize: [{ inlineSize: 100, blockSize: 50 }],
            },
          ],
          observer
        );
        jest.advanceTimersToNextFrame();
      });

      expect(screen.getByText('100')).toBeInTheDocument();
      expect(observe).toHaveBeenCalledTimes(1);
      expect(disconnect).not.toHaveBeenCalled();

      unmount();
      expect(disconnect).toHaveBeenCalledTimes(1);
    }
  );

  it('reconnects when the box option changes', () => {
    const { container, rerender } = render(<Demo />);
    const target = container.firstElementChild;
    expect(observe).toHaveBeenLastCalledWith(target, { box: 'border-box' });

    rerender(<Demo box="content-box" />);

    expect(disconnect).toHaveBeenCalledTimes(1);
    expect(observe).toHaveBeenCalledTimes(2);
    expect(observe).toHaveBeenLastCalledWith(target, { box: 'content-box' });
  });
});
