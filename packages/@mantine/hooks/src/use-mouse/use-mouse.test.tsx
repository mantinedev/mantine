import { fireEvent, render, renderHook, screen } from '@testing-library/react';
import { useMouse } from './use-mouse';

const Target: React.FunctionComponent<any> = () => {
  const { ref, x, y } = useMouse();

  return (
    <div data-testid="target" ref={ref}>
      {`{ x: ${x}, y: ${y} }`}
    </div>
  );
};

describe('@mantine/hook/use-mouse', () => {
  it('returns correct initial position (0, 0)', () => {
    const { result } = renderHook(() => useMouse());

    expect(result.current).toEqual({ ref: expect.any(Object), x: 0, y: 0 });
  });

  it('updates the position without a ref', () => {
    const { result } = renderHook(() => useMouse());

    fireEvent.mouseMove(document, { clientX: 123, clientY: 456 });

    expect(result.current).toEqual({ ref: expect.any(Object), x: 123, y: 456 });
  });

  it('updates the position', () => {
    render(<Target />);
    const target = screen.getByTestId('target');

    // Work around to pass pageX and pageY to the event
    const customEvent = new MouseEvent('mousemove', {
      clientX: 123,
      clientY: 456,
      bubbles: true,
    }) as MouseEvent & { pageX: number; pageY: number };

    customEvent.pageX = 123;
    customEvent.pageY = 456;

    fireEvent(target, customEvent);

    expect(target).toHaveTextContent('{ x: 123, y: 456 }');
  });

  it('resets the position on mouse leave when resetOnExit is enabled', () => {
    const { result } = renderHook(() => useMouse({ resetOnExit: true }));

    fireEvent.mouseMove(document, { clientX: 123, clientY: 456 });

    expect(result.current).toEqual({ ref: expect.any(Object), x: 123, y: 456 });

    fireEvent.mouseLeave(document);

    expect(result.current).toEqual({ ref: expect.any(Object), x: 0, y: 0 });
  });
});
