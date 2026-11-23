import { createEvent, fireEvent, render, screen } from '@testing-library/react';
import { useScroller } from './use-scroller';

function Test({ onClick }: { onClick: () => void }) {
  const scroller = useScroller<HTMLDivElement>();
  return (
    <div ref={scroller.ref} data-testid="container" {...scroller.dragHandlers}>
      <button type="button" onClick={onClick}>
        Test button
      </button>
    </div>
  );
}

function ConditionalScroller({
  visible,
  containerKey = 'first',
  onScrollStateChange,
}: {
  visible: boolean;
  containerKey?: string;
  onScrollStateChange?: () => void;
}) {
  const scroller = useScroller<HTMLDivElement>({ onScrollStateChange });
  return (
    <>
      {visible && <div key={containerKey} ref={scroller.ref} data-testid="container" />}
      <button type="button" disabled={!scroller.canScrollStart}>
        Scroll start
      </button>
      <button type="button" disabled={!scroller.canScrollEnd}>
        Scroll end
      </button>
    </>
  );
}

function fireWithPageX(
  container: HTMLElement,
  create: (node: HTMLElement) => Event,
  pageX: number
) {
  const event = create(container);
  Object.defineProperty(event, 'pageX', { value: pageX });
  fireEvent(container, event);
}

function clickButton() {
  const button = screen.getByRole('button');
  fireEvent.mouseDown(button);
  fireEvent.mouseUp(button);
  fireEvent.click(button);
}

function drag(container: HTMLElement) {
  fireWithPageX(container, createEvent.mouseDown, 100);
  fireWithPageX(container, createEvent.mouseMove, 50);
}

describe('@mantine/hooks/use-scroller', () => {
  it.each([false, true])(
    'tracks scrolling when the container changes (initially visible: %s)',
    (initiallyVisible) => {
      const { rerender } = render(<ConditionalScroller visible={initiallyVisible} />);
      rerender(<ConditionalScroller visible containerKey="second" />);
      const container = screen.getByTestId('container');
      Object.defineProperties(container, {
        scrollWidth: { value: 300 },
        clientWidth: { value: 100 },
      });

      fireEvent.scroll(container, { target: { scrollLeft: 200 } });
      expect(screen.getByRole('button', { name: 'Scroll start' })).toBeEnabled();
      expect(screen.getByRole('button', { name: 'Scroll end' })).toBeDisabled();

      fireEvent.scroll(container, { target: { scrollLeft: 0 } });
      expect(screen.getByRole('button', { name: 'Scroll start' })).toBeDisabled();
      expect(screen.getByRole('button', { name: 'Scroll end' })).toBeEnabled();
    }
  );

  it('stops listening to a replaced container', () => {
    const onScrollStateChange = jest.fn();
    const { rerender } = render(
      <ConditionalScroller visible onScrollStateChange={onScrollStateChange} />
    );
    const previousContainer = screen.getByTestId('container');
    rerender(
      <ConditionalScroller
        visible
        containerKey="second"
        onScrollStateChange={onScrollStateChange}
      />
    );
    onScrollStateChange.mockClear();

    fireEvent.scroll(previousContainer);
    expect(onScrollStateChange).not.toHaveBeenCalled();
  });

  it('suppresses the click that ends a drag', () => {
    const spy = jest.fn();
    render(<Test onClick={spy} />);
    const container = screen.getByTestId('container');

    drag(container);
    fireEvent.mouseUp(container);
    fireEvent.click(screen.getByRole('button'));
    expect(spy).not.toHaveBeenCalled();

    clickButton();
    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('does not suppress the next click when a drag ends by leaving the container', () => {
    const spy = jest.fn();
    render(<Test onClick={spy} />);
    const container = screen.getByTestId('container');

    drag(container);
    fireEvent.mouseLeave(container);
    clickButton();
    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('suppresses the click when the pointer leaves, re-enters and releases inside', () => {
    const spy = jest.fn();
    render(<Test onClick={spy} />);
    const container = screen.getByTestId('container');

    drag(container);
    fireEvent.mouseLeave(container);
    fireEvent.mouseUp(container);
    fireEvent.click(screen.getByRole('button'));
    expect(spy).not.toHaveBeenCalled();

    clickButton();
    expect(spy).toHaveBeenCalledTimes(1);
  });
});
