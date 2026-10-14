import { act, fireEvent, render, screen } from '@testing-library/react';
import { useScroller, UseScrollerOptions } from './use-scroller';

interface Metrics {
  scrollLeft: number;
  scrollWidth: number;
  clientWidth: number;
}

function stubMetrics(node: HTMLElement, metrics: Metrics) {
  Object.defineProperty(node, 'scrollLeft', {
    configurable: true,
    writable: true,
    value: metrics.scrollLeft,
  });
  Object.defineProperty(node, 'scrollWidth', { configurable: true, value: metrics.scrollWidth });
  Object.defineProperty(node, 'clientWidth', { configurable: true, value: metrics.clientWidth });
}

interface TestProps {
  metrics?: Metrics;
  options?: UseScrollerOptions;
  mounted?: boolean;
  rtl?: boolean;
  onChildClick?: () => void;
  onOutsideClick?: () => void;
}

const defaultMetrics: Metrics = { scrollLeft: 0, scrollWidth: 1000, clientWidth: 300 };

function Test({
  metrics = defaultMetrics,
  options,
  mounted = true,
  rtl = false,
  onChildClick,
  onOutsideClick,
}: TestProps) {
  const scroller = useScroller<HTMLDivElement>(options);

  return (
    <div>
      <div data-testid="state">
        {`${scroller.canScrollStart}:${scroller.canScrollEnd}:${scroller.isDragging}`}
      </div>
      <button type="button" onClick={scroller.scrollStart}>
        start
      </button>
      <button type="button" onClick={scroller.scrollEnd}>
        end
      </button>
      {mounted && (
        <div
          data-testid="container"
          style={{ direction: rtl ? 'rtl' : 'ltr' }}
          ref={(node) => {
            if (node && !Object.hasOwn(node, 'scrollWidth')) {
              stubMetrics(node, metrics);
            }
            return scroller.ref(node);
          }}
          {...scroller.dragHandlers}
        >
          <button type="button" onClick={onChildClick}>
            child
          </button>
          <a href="#link">link</a>
        </div>
      )}
      <button type="button" onClick={onOutsideClick}>
        outside
      </button>
    </div>
  );
}

const getState = () => screen.getByTestId('state').textContent;
const getContainer = () => screen.getByTestId('container');

function setScrollLeft(value: number) {
  getContainer().scrollLeft = value;
  fireEvent.scroll(getContainer());
}

function drag(from: number, to: number) {
  fireEvent.mouseDown(screen.getByText('child'), { clientX: from, button: 0 });
  fireEvent.mouseMove(screen.getByText('child'), { clientX: to, buttons: 1 });
}

describe('@mantine/hooks/use-scroller', () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    act(() => jest.runOnlyPendingTimers());
    jest.useRealTimers();
  });

  it('computes scroll state in LTR', () => {
    render(<Test />);
    expect(getState()).toBe('false:true:false');

    setScrollLeft(350);
    expect(getState()).toBe('true:true:false');

    setScrollLeft(700);
    expect(getState()).toBe('true:false:false');
  });

  it('computes scroll state in RTL', () => {
    render(<Test rtl />);
    expect(getState()).toBe('false:true:false');

    setScrollLeft(-350);
    expect(getState()).toBe('true:true:false');

    setScrollLeft(-700);
    expect(getState()).toBe('true:false:false');
  });

  it('reports no scroll in either direction when content fits', () => {
    render(<Test metrics={{ scrollLeft: 0, scrollWidth: 300, clientWidth: 300 }} />);
    expect(getState()).toBe('false:false:false');
  });

  it('scrolls by scrollAmount with direction-aware sign', () => {
    const { rerender } = render(<Test options={{ scrollAmount: 150 }} />);
    const scrollBy = jest.fn();
    getContainer().scrollBy = scrollBy;

    fireEvent.click(screen.getByText('end'));
    fireEvent.click(screen.getByText('start'));
    expect(scrollBy.mock.calls.map(([arg]) => arg.left)).toEqual([150, -150]);

    rerender(<Test options={{ scrollAmount: 150 }} rtl />);
    scrollBy.mockClear();
    fireEvent.click(screen.getByText('end'));
    fireEvent.click(screen.getByText('start'));
    expect(scrollBy.mock.calls.map(([arg]) => arg.left)).toEqual([-150, 150]);
  });

  it('scrolls the content when dragged with the primary button', () => {
    render(<Test metrics={{ scrollLeft: 200, scrollWidth: 1000, clientWidth: 300 }} />);
    drag(100, 40);
    expect(getContainer().scrollLeft).toBe(260);
    expect(getState()).toBe('true:true:true');
    expect(getContainer().style.cursor).toBe('');
    expect(getContainer().style.userSelect).toBe('');

    fireEvent.mouseUp(document);
    expect(getState()).toBe('true:true:false');
  });

  it('keeps dragging after the pointer leaves the container', () => {
    render(<Test metrics={{ scrollLeft: 200, scrollWidth: 1000, clientWidth: 300 }} />);
    drag(100, 80);
    fireEvent.mouseLeave(getContainer());
    fireEvent.mouseMove(document, { clientX: 0, buttons: 1 });
    expect(getContainer().scrollLeft).toBe(300);
    fireEvent.mouseUp(document);
    fireEvent.mouseMove(document, { clientX: -100, buttons: 1 });
    expect(getContainer().scrollLeft).toBe(300);
  });

  it('does not drag with non-primary mouse buttons', () => {
    render(<Test metrics={{ scrollLeft: 200, scrollWidth: 1000, clientWidth: 300 }} />);
    fireEvent.mouseDown(screen.getByText('child'), { clientX: 100, button: 2 });
    fireEvent.mouseMove(document, { clientX: 20, buttons: 1 });
    expect(getContainer().scrollLeft).toBe(200);
    expect(getState()).toBe('true:true:false');
  });

  it('does not drag when draggable is false', () => {
    render(
      <Test
        options={{ draggable: false }}
        metrics={{ scrollLeft: 200, scrollWidth: 1000, clientWidth: 300 }}
      />
    );
    drag(100, 20);
    expect(getContainer().scrollLeft).toBe(200);
    expect(getState()).toBe('true:true:false');
  });

  it('suppresses only the click that ends a drag', () => {
    const onChildClick = jest.fn();
    render(<Test onChildClick={onChildClick} />);

    drag(100, 40);
    fireEvent.mouseUp(document);
    fireEvent.click(screen.getByText('child'));
    expect(onChildClick).toHaveBeenCalledTimes(0);

    act(() => jest.runAllTimers());
    fireEvent.click(screen.getByText('child'));
    expect(onChildClick).toHaveBeenCalledTimes(1);
  });

  it('does not suppress clicks without drag movement', () => {
    const onChildClick = jest.fn();
    render(<Test onChildClick={onChildClick} />);
    drag(100, 98);
    fireEvent.mouseUp(document);
    fireEvent.click(screen.getByText('child'));
    expect(onChildClick).toHaveBeenCalledTimes(1);
  });

  it('does not swallow the next click after a drag released outside the container', () => {
    const onChildClick = jest.fn();
    render(<Test onChildClick={onChildClick} />);
    drag(100, 40);
    fireEvent.mouseLeave(getContainer());
    fireEvent.mouseUp(document.body);
    act(() => jest.runAllTimers());
    fireEvent.click(screen.getByText('child'));
    expect(onChildClick).toHaveBeenCalledTimes(1);
  });

  it('ends the drag without swallowing the next click when a native drag starts', () => {
    const onOutsideClick = jest.fn();
    render(
      <Test
        onOutsideClick={onOutsideClick}
        metrics={{ scrollLeft: 200, scrollWidth: 1000, clientWidth: 300 }}
      />
    );
    const link = screen.getByText('link');
    fireEvent.mouseDown(link, { clientX: 100, button: 0 });
    fireEvent.mouseMove(document, { clientX: 90, buttons: 1 });
    fireEvent.dragStart(link);
    fireEvent.dragEnd(link);
    fireEvent.mouseMove(document, { clientX: 40, buttons: 1 });

    expect(getContainer().scrollLeft).toBe(210);
    expect(getState()).toBe('true:true:false');
    expect(fireEvent(document.body, new Event('selectstart', { cancelable: true }))).toBe(true);

    const outside = screen.getByText('outside');
    fireEvent.mouseDown(outside, { button: 0 });
    fireEvent.mouseUp(outside);
    fireEvent.click(outside);
    expect(onOutsideClick).toHaveBeenCalledTimes(1);
  });

  it('keeps scrolling when a native drag starts on an element that was not pressed', () => {
    render(<Test metrics={{ scrollLeft: 200, scrollWidth: 1000, clientWidth: 300 }} />);
    fireEvent.mouseDown(getContainer(), { clientX: 100, button: 0 });
    fireEvent.mouseMove(document, { clientX: 80, buttons: 1 });
    const dragStartEvent = new Event('dragstart', { bubbles: true, cancelable: true });
    fireEvent(screen.getByText('link'), dragStartEvent);
    fireEvent.mouseMove(document, { clientX: 40, buttons: 1 });

    expect(dragStartEvent.defaultPrevented).toBe(true);
    expect(getContainer().scrollLeft).toBe(260);
    expect(getState()).toBe('true:true:true');
  });

  it('ends the drag when a mousemove reports the primary button released', () => {
    const onOutsideClick = jest.fn();
    render(
      <Test
        onOutsideClick={onOutsideClick}
        metrics={{ scrollLeft: 200, scrollWidth: 1000, clientWidth: 300 }}
      />
    );
    drag(100, 40);
    expect(getContainer().scrollLeft).toBe(260);

    fireEvent.mouseMove(document, { clientX: 10, buttons: 0 });
    expect(getContainer().scrollLeft).toBe(260);
    expect(getState()).toBe('true:true:false');

    fireEvent.mouseMove(document, { clientX: 0, buttons: 1 });
    expect(getContainer().scrollLeft).toBe(260);
    fireEvent.click(screen.getByText('outside'));
    expect(onOutsideClick).toHaveBeenCalledTimes(1);
  });

  it('ends the drag when the window loses focus', () => {
    const onOutsideClick = jest.fn();
    render(
      <Test
        onOutsideClick={onOutsideClick}
        metrics={{ scrollLeft: 200, scrollWidth: 1000, clientWidth: 300 }}
      />
    );
    drag(100, 40);
    fireEvent.blur(window);
    expect(getState()).toBe('true:true:false');

    fireEvent.mouseMove(document, { clientX: 0, buttons: 1 });
    expect(getContainer().scrollLeft).toBe(260);
    fireEvent.mouseUp(document);
    fireEvent.click(screen.getByText('outside'));
    expect(onOutsideClick).toHaveBeenCalledTimes(1);
  });

  it('calls onScrollStateChange only when the state changes', () => {
    const spy = jest.fn();
    render(<Test options={{ onScrollStateChange: spy }} />);
    expect(spy).toHaveBeenCalledTimes(1);
    expect(spy).toHaveBeenLastCalledWith({ canScrollStart: false, canScrollEnd: true });

    setScrollLeft(0);
    expect(spy).toHaveBeenCalledTimes(1);

    setScrollLeft(350);
    setScrollLeft(360);
    expect(spy).toHaveBeenCalledTimes(2);
    expect(spy).toHaveBeenLastCalledWith({ canScrollStart: true, canScrollEnd: true });
  });

  it('subscribes to an element mounted after the first render', () => {
    const { rerender } = render(<Test mounted={false} />);
    expect(getState()).toBe('false:false:false');

    rerender(<Test />);
    expect(getState()).toBe('false:true:false');

    setScrollLeft(300);
    expect(getState()).toBe('true:true:false');
  });

  it('recalculates when children are added', async () => {
    render(<Test metrics={{ scrollLeft: 0, scrollWidth: 300, clientWidth: 300 }} />);
    expect(getState()).toBe('false:false:false');

    Object.defineProperty(getContainer(), 'scrollWidth', { configurable: true, value: 600 });
    await act(async () => {
      getContainer().appendChild(document.createElement('span'));
    });
    expect(getState()).toBe('false:true:false');
  });

  it('recalculates when nested children are added', async () => {
    render(<Test metrics={{ scrollLeft: 0, scrollWidth: 300, clientWidth: 300 }} />);
    expect(getState()).toBe('false:false:false');

    Object.defineProperty(getContainer(), 'scrollWidth', { configurable: true, value: 600 });
    await act(async () => {
      screen.getByText('child').appendChild(document.createElement('span'));
    });
    expect(getState()).toBe('false:true:false');
  });

  it('removes listeners on unmount', () => {
    const { rerender } = render(<Test />);
    const container = getContainer();
    const removeSpy = jest.spyOn(container, 'removeEventListener');
    const documentRemoveSpy = jest.spyOn(document, 'removeEventListener');
    drag(100, 40);

    rerender(<Test mounted={false} />);
    expect(removeSpy).toHaveBeenCalledWith('scroll', expect.any(Function));
    expect(documentRemoveSpy).toHaveBeenCalledWith('mousemove', expect.any(Function));
    expect(documentRemoveSpy).toHaveBeenCalledWith('mouseup', expect.any(Function));
    documentRemoveSpy.mockRestore();
  });
});
