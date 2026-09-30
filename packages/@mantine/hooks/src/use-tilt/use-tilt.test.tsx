import { act, fireEvent, render, renderHook, screen } from '@testing-library/react';
import { useTilt, UseTiltOptions } from './use-tilt';

function Target({ options }: { options?: UseTiltOptions }) {
  const { ref, roll, tilt, source } = useTilt<HTMLDivElement>(options);
  return (
    <div data-testid="target" ref={ref}>
      {`${source} ${roll} ${tilt}`}
    </div>
  );
}

function mockRect(node: HTMLElement) {
  node.getBoundingClientRect = () =>
    ({
      left: 0,
      top: 0,
      width: 200,
      height: 100,
      right: 200,
      bottom: 100,
      x: 0,
      y: 0,
      toJSON: () => {},
    }) as DOMRect;
}

function fireOrientation(beta: number | null, gamma: number | null) {
  const event = new Event('deviceorientation') as any;
  event.beta = beta;
  event.gamma = gamma;
  act(() => {
    window.dispatchEvent(event);
  });
}

describe('@mantine/hooks/use-tilt', () => {
  it('returns correct initial value', () => {
    const { result } = renderHook(() => useTilt());
    expect(result.current).toEqual({
      ref: expect.any(Function),
      roll: 0,
      tilt: 0,
      source: 'mouse',
    });
  });

  it('computes roll and tilt from the cursor position relative to the target center', () => {
    render(<Target />);
    const target = screen.getByTestId('target');
    mockRect(target);

    fireEvent.mouseMove(target, { clientX: 150, clientY: 25 });
    expect(target).toHaveTextContent('mouse 0.25 0.25');

    fireEvent.mouseMove(target, { clientX: 100, clientY: 50 });
    expect(target).toHaveTextContent('mouse 0 0');
  });

  it('applies mouse adjust functions to the raw values', () => {
    render(
      <Target
        options={{ mouseRollAdjust: (value) => value * 2, mouseTiltAdjust: (value) => value * 4 }}
      />
    );
    const target = screen.getByTestId('target');
    mockRect(target);

    fireEvent.mouseMove(target, { clientX: 150, clientY: 25 });
    expect(target).toHaveTextContent('mouse 0.5 1');
  });

  it('does not update when the target has no size', () => {
    render(<Target />);
    const target = screen.getByTestId('target');

    fireEvent.mouseMove(target, { clientX: 150, clientY: 25 });
    expect(target).toHaveTextContent('mouse 0 0');
  });

  it('resets roll and tilt to 0 when the pointer leaves the target by default', () => {
    render(<Target />);
    const target = screen.getByTestId('target');
    mockRect(target);

    fireEvent.mouseMove(target, { clientX: 150, clientY: 25 });
    expect(target).toHaveTextContent('mouse 0.25 0.25');

    fireEvent.mouseLeave(target);
    expect(target).toHaveTextContent('mouse 0 0');
  });

  it('does not reset on leave when resetOnLeave is false', () => {
    render(<Target options={{ resetOnLeave: false }} />);
    const target = screen.getByTestId('target');
    mockRect(target);

    fireEvent.mouseMove(target, { clientX: 150, clientY: 25 });
    expect(target).toHaveTextContent('mouse 0.25 0.25');

    fireEvent.mouseLeave(target);
    expect(target).toHaveTextContent('mouse 0.25 0.25');
  });

  it('reacts to pointer movement anywhere on the page when trackWindow is true', () => {
    render(<Target options={{ trackWindow: true }} />);
    const target = screen.getByTestId('target');
    mockRect(target);

    // Event dispatched on window, not over the target element
    fireEvent.mouseMove(window, { clientX: 150, clientY: 25 });
    expect(target).toHaveTextContent('mouse 0.25 0.25');
  });

  it('switches source to deviceOrientation and computes roll/tilt from beta/gamma', () => {
    render(<Target />);
    fireOrientation(45, -90);
    expect(screen.getByTestId('target')).toHaveTextContent('deviceOrientation -0.5 -1');
  });

  it('ignores empty or zero device orientation readings before the source is active', () => {
    render(<Target />);
    const target = screen.getByTestId('target');

    fireOrientation(null, null);
    expect(target).toHaveTextContent('mouse 0 0');

    fireOrientation(0, 0);
    expect(target).toHaveTextContent('mouse 0 0');
  });

  it('processes neutral readings once device orientation is active', () => {
    render(<Target />);
    const target = screen.getByTestId('target');

    fireOrientation(45, 90);
    expect(target).toHaveTextContent('deviceOrientation -0.5 1');

    // Device returned to a neutral position resets roll and tilt to 0
    fireOrientation(0, 0);
    expect(target).toHaveTextContent('deviceOrientation 0 0');
  });

  it('gives device orientation priority over the mouse once it is available', () => {
    render(<Target />);
    const target = screen.getByTestId('target');
    mockRect(target);

    fireOrientation(90, 90);
    expect(target).toHaveTextContent('deviceOrientation -1 1');

    fireEvent.mouseMove(target, { clientX: 150, clientY: 25 });
    expect(target).toHaveTextContent('deviceOrientation -1 1');
  });

  it('applies device orientation adjust functions', () => {
    render(
      <Target
        options={{
          deviceOrientationRollAdjust: (value) => value * 2,
          deviceOrientationTiltAdjust: (value) => value + 1,
        }}
      />
    );
    fireOrientation(45, 45);
    expect(screen.getByTestId('target')).toHaveTextContent('deviceOrientation -1 1.5');
  });

  it('removes the deviceorientation listener on unmount', () => {
    const removeSpy = jest.spyOn(window, 'removeEventListener');
    const { unmount } = render(<Target />);
    unmount();
    expect(removeSpy).toHaveBeenCalledWith('deviceorientation', expect.any(Function));
    removeSpy.mockRestore();
  });

  it('removes mousemove and mouseleave listeners from the target on unmount', () => {
    const { unmount } = render(<Target />);
    const target = screen.getByTestId('target');
    const removeSpy = jest.spyOn(target, 'removeEventListener');

    unmount();

    expect(removeSpy).toHaveBeenCalledWith('mousemove', expect.any(Function));
    expect(removeSpy).toHaveBeenCalledWith('mouseleave', expect.any(Function));
  });

  it('rebinds mousemove listener when trackWindow changes', () => {
    const { rerender } = render(<Target />);
    const target = screen.getByTestId('target');
    mockRect(target);

    rerender(<Target options={{ trackWindow: true }} />);
    fireEvent.mouseMove(window, { clientX: 150, clientY: 25 });
    expect(target).toHaveTextContent('mouse 0.25 0.25');

    rerender(<Target options={{ trackWindow: false }} />);
    fireEvent.mouseMove(window, { clientX: 100, clientY: 50 });
    expect(target).toHaveTextContent('mouse 0.25 0.25');

    fireEvent.mouseMove(target, { clientX: 100, clientY: 50 });
    expect(target).toHaveTextContent('mouse 0 0');
  });
});
