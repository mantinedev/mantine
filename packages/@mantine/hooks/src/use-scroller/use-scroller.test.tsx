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

function fireWithPageX(
  container: HTMLElement,
  create: (node: HTMLElement) => Event,
  pageX: number
) {
  const event = create(container);
  Object.defineProperty(event, 'pageX', { value: pageX });
  fireEvent(container, event);
}

function drag(container: HTMLElement) {
  fireWithPageX(container, createEvent.mouseDown, 100);
  fireWithPageX(container, createEvent.mouseMove, 50);
}

describe('@mantine/hooks/use-scroller', () => {
  it('suppresses the click that ends a drag', () => {
    const spy = jest.fn();
    render(<Test onClick={spy} />);
    const container = screen.getByTestId('container');

    drag(container);
    fireEvent.mouseUp(container);
    fireEvent.click(screen.getByRole('button'));
    expect(spy).not.toHaveBeenCalled();

    fireEvent.click(screen.getByRole('button'));
    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('does not suppress the next click when a drag ends by leaving the container', () => {
    const spy = jest.fn();
    render(<Test onClick={spy} />);
    const container = screen.getByTestId('container');

    drag(container);
    fireEvent.mouseLeave(container);
    fireEvent.click(screen.getByRole('button'));
    expect(spy).toHaveBeenCalledTimes(1);
  });
});
