import { act, render, screen } from '@testing-library/react';
import { useDrag, UseDragOptions, UseDragState } from './use-drag';

if (typeof PointerEvent === 'undefined') {
  (global as any).PointerEvent = class PointerEvent extends MouseEvent {
    pointerId: number;
    constructor(type: string, init: PointerEventInit & { pointerId?: number } = {}) {
      super(type, init);
      this.pointerId = init.pointerId ?? 0;
    }
  };
}

interface TestComponentProps {
  handler: (state: UseDragState) => void;
  options?: UseDragOptions;
}

function TestComponent({ handler, options }: TestComponentProps) {
  const { ref, active } = useDrag(handler, options);

  return (
    <div ref={ref} data-testid="target" data-active={active}>
      target
    </div>
  );
}

function pointerDown(
  el: Element,
  init: { clientX?: number; clientY?: number; pointerId?: number; button?: number } = {}
) {
  const event = new PointerEvent('pointerdown', {
    bubbles: true,
    clientX: init.clientX ?? 0,
    clientY: init.clientY ?? 0,
    pointerId: init.pointerId ?? 1,
    button: init.button ?? 0,
  });
  el.dispatchEvent(event);
}

function pointerMove(init: { clientX?: number; clientY?: number; pointerId?: number } = {}) {
  const event = new PointerEvent('pointermove', {
    bubbles: true,
    clientX: init.clientX ?? 0,
    clientY: init.clientY ?? 0,
    pointerId: init.pointerId ?? 1,
  });
  document.dispatchEvent(event);
}

function pointerUp(init: { clientX?: number; clientY?: number; pointerId?: number } = {}) {
  const event = new PointerEvent('pointerup', {
    bubbles: true,
    clientX: init.clientX ?? 0,
    clientY: init.clientY ?? 0,
    pointerId: init.pointerId ?? 1,
  });
  document.dispatchEvent(event);
}

function pointerCancel(init: { pointerId?: number } = {}) {
  const event = new PointerEvent('pointercancel', {
    bubbles: true,
    pointerId: init.pointerId ?? 1,
  });
  document.dispatchEvent(event);
}

describe('useDrag', () => {
  afterEach(() => {
    document.body.style.userSelect = '';
  });

  describe('basic lifecycle', () => {
    it('fires handler with first: true on pointerdown when threshold is 0', () => {
      const handler = jest.fn();
      render(<TestComponent handler={handler} />);
      const el = screen.getByTestId('target');

      act(() => {
        pointerDown(el, { clientX: 100, clientY: 200 });
      });

      expect(handler).toHaveBeenCalledTimes(1);
      expect(handler).toHaveBeenCalledWith(
        expect.objectContaining({
          first: true,
          last: false,
          active: true,
          movement: [0, 0],
          xy: [100, 200],
          initial: [100, 200],
        })
      );
    });

    it('fires handler on pointermove with correct movement and delta', () => {
      const handler = jest.fn();
      render(<TestComponent handler={handler} />);
      const el = screen.getByTestId('target');

      act(() => pointerDown(el, { clientX: 100, clientY: 100 }));
      handler.mockClear();

      act(() => pointerMove({ clientX: 130, clientY: 110 }));

      expect(handler).toHaveBeenCalledTimes(1);
      expect(handler).toHaveBeenCalledWith(
        expect.objectContaining({
          first: false,
          last: false,
          active: true,
          movement: [30, 10],
          delta: [30, 10],
          distance: [30, 10],
          direction: [1, 1],
        })
      );
    });

    it('fires handler with last: true on pointerup', () => {
      const handler = jest.fn();
      render(<TestComponent handler={handler} />);
      const el = screen.getByTestId('target');

      act(() => pointerDown(el, { clientX: 0, clientY: 0 }));
      act(() => pointerMove({ clientX: 50, clientY: 0 }));
      handler.mockClear();

      act(() => pointerUp({ clientX: 50, clientY: 0 }));

      expect(handler).toHaveBeenCalledTimes(1);
      expect(handler).toHaveBeenCalledWith(
        expect.objectContaining({
          first: false,
          last: true,
          active: false,
          movement: [50, 0],
        })
      );
    });

    it('sets active state during drag and resets on release', () => {
      const handler = jest.fn();
      render(<TestComponent handler={handler} />);
      const el = screen.getByTestId('target');

      expect(el.dataset.active).toBe('false');

      act(() => pointerDown(el));
      expect(el.dataset.active).toBe('true');

      act(() => pointerUp());
      expect(el.dataset.active).toBe('false');
    });

    it('sets user-select: none on body during drag', () => {
      const handler = jest.fn();
      render(<TestComponent handler={handler} />);
      const el = screen.getByTestId('target');

      act(() => pointerDown(el));
      expect(document.body.style.userSelect).toBe('none');

      act(() => pointerUp());
      expect(document.body.style.userSelect).toBe('');
    });
  });

  describe('multiple sequential drags', () => {
    it('handles two separate drag gestures correctly', () => {
      const handler = jest.fn();
      render(<TestComponent handler={handler} />);
      const el = screen.getByTestId('target');

      act(() => pointerDown(el, { clientX: 0, clientY: 0 }));
      act(() => pointerMove({ clientX: 20, clientY: 0 }));
      act(() => pointerUp({ clientX: 20, clientY: 0 }));

      handler.mockClear();

      act(() => pointerDown(el, { clientX: 50, clientY: 50 }));
      act(() => pointerMove({ clientX: 80, clientY: 60 }));

      expect(handler).toHaveBeenCalledWith(
        expect.objectContaining({
          initial: [50, 50],
          movement: [30, 10],
        })
      );
    });
  });

  describe('delta accumulation across moves', () => {
    it('computes delta relative to previous move, not start', () => {
      const handler = jest.fn();
      render(<TestComponent handler={handler} />);
      const el = screen.getByTestId('target');

      act(() => pointerDown(el, { clientX: 0, clientY: 0 }));
      act(() => pointerMove({ clientX: 10, clientY: 0 }));
      handler.mockClear();

      act(() => pointerMove({ clientX: 25, clientY: 0 }));

      expect(handler).toHaveBeenCalledWith(
        expect.objectContaining({
          movement: [25, 0],
          delta: [15, 0],
        })
      );
    });
  });

  describe('direction', () => {
    it('reports negative direction for leftward movement', () => {
      const handler = jest.fn();
      render(<TestComponent handler={handler} />);
      const el = screen.getByTestId('target');

      act(() => pointerDown(el, { clientX: 100, clientY: 100 }));
      act(() => pointerMove({ clientX: 80, clientY: 120 }));

      const moveCall = handler.mock.calls[1][0];
      expect(moveCall.direction).toEqual([-1, 1]);
    });
  });

  describe('threshold', () => {
    it('does not fire handler until threshold is exceeded', () => {
      const handler = jest.fn();
      render(<TestComponent handler={handler} options={{ threshold: 20 }} />);
      const el = screen.getByTestId('target');

      act(() => pointerDown(el, { clientX: 0, clientY: 0 }));
      expect(handler).not.toHaveBeenCalled();

      act(() => pointerMove({ clientX: 10, clientY: 0 }));
      expect(handler).not.toHaveBeenCalled();

      act(() => pointerMove({ clientX: 25, clientY: 0 }));
      expect(handler).toHaveBeenCalledTimes(1);
      expect(handler).toHaveBeenCalledWith(expect.objectContaining({ first: true, active: true }));
    });

    it('does not set active state before threshold is met', () => {
      const handler = jest.fn();
      render(<TestComponent handler={handler} options={{ threshold: 20 }} />);
      const el = screen.getByTestId('target');

      act(() => pointerDown(el, { clientX: 0, clientY: 0 }));
      expect(el.dataset.active).toBe('false');

      act(() => pointerMove({ clientX: 10, clientY: 0 }));
      expect(el.dataset.active).toBe('false');

      act(() => pointerMove({ clientX: 25, clientY: 0 }));
      expect(el.dataset.active).toBe('true');
    });

    it('accepts [x, y] tuple threshold', () => {
      const handler = jest.fn();
      render(<TestComponent handler={handler} options={{ threshold: [30, 10] }} />);
      const el = screen.getByTestId('target');

      act(() => pointerDown(el, { clientX: 0, clientY: 0 }));
      act(() => pointerMove({ clientX: 0, clientY: 15 }));
      expect(handler).toHaveBeenCalledTimes(1);
    });
  });

  describe('filterTaps', () => {
    it('reports tap: true when released with no movement and filterTaps is enabled', () => {
      const handler = jest.fn();
      render(<TestComponent handler={handler} options={{ filterTaps: true, threshold: 5 }} />);
      const el = screen.getByTestId('target');

      act(() => pointerDown(el, { clientX: 100, clientY: 100 }));
      act(() => pointerUp({ clientX: 100, clientY: 100 }));

      expect(handler).toHaveBeenCalledTimes(1);
      expect(handler).toHaveBeenCalledWith(
        expect.objectContaining({
          first: true,
          last: true,
          tap: true,
          active: false,
          movement: [0, 0],
          distance: [0, 0],
        })
      );
    });

    it('reports tap: false when pre-threshold movement exceeds tapThreshold', () => {
      const handler = jest.fn();
      render(
        <TestComponent
          handler={handler}
          options={{ filterTaps: true, threshold: 20, tapThreshold: 3 }}
        />
      );
      const el = screen.getByTestId('target');

      act(() => pointerDown(el, { clientX: 0, clientY: 0 }));
      act(() => pointerMove({ clientX: 10, clientY: 0 }));
      act(() => pointerUp({ clientX: 10, clientY: 0 }));

      expect(handler).toHaveBeenCalledTimes(1);
      expect(handler).toHaveBeenCalledWith(
        expect.objectContaining({
          tap: false,
          movement: [10, 0],
          distance: [10, 0],
        })
      );
    });

    it('does not fire handler on pre-threshold release when filterTaps is disabled', () => {
      const handler = jest.fn();
      render(<TestComponent handler={handler} options={{ filterTaps: false, threshold: 20 }} />);
      const el = screen.getByTestId('target');

      act(() => pointerDown(el, { clientX: 0, clientY: 0 }));
      act(() => pointerMove({ clientX: 5, clientY: 0 }));
      act(() => pointerUp({ clientX: 5, clientY: 0 }));

      expect(handler).not.toHaveBeenCalled();
    });
  });

  describe('axis constraint', () => {
    it('constrains movement to x axis', () => {
      const handler = jest.fn();
      render(<TestComponent handler={handler} options={{ axis: 'x' }} />);
      const el = screen.getByTestId('target');

      act(() => pointerDown(el, { clientX: 0, clientY: 0 }));
      act(() => pointerMove({ clientX: 30, clientY: 50 }));

      expect(handler).toHaveBeenLastCalledWith(
        expect.objectContaining({ movement: [30, 0], delta: [30, 0] })
      );
    });

    it('constrains movement to y axis', () => {
      const handler = jest.fn();
      render(<TestComponent handler={handler} options={{ axis: 'y' }} />);
      const el = screen.getByTestId('target');

      act(() => pointerDown(el, { clientX: 0, clientY: 0 }));
      act(() => pointerMove({ clientX: 30, clientY: 50 }));

      expect(handler).toHaveBeenLastCalledWith(
        expect.objectContaining({ movement: [0, 50], delta: [0, 50] })
      );
    });

    it('locks to dominant axis after axisThreshold', () => {
      const handler = jest.fn();
      render(<TestComponent handler={handler} options={{ axis: 'lock', axisThreshold: 5 }} />);
      const el = screen.getByTestId('target');

      act(() => pointerDown(el, { clientX: 0, clientY: 0 }));
      act(() => pointerMove({ clientX: 10, clientY: 2 }));

      const moveCall = handler.mock.calls[1][0];
      expect(moveCall.movement).toEqual([10, 0]);

      act(() => pointerMove({ clientX: 20, clientY: 15 }));

      const secondMoveCall = handler.mock.calls[2][0];
      expect(secondMoveCall.movement).toEqual([20, 0]);
    });

    it('locks to y when vertical movement dominates', () => {
      const handler = jest.fn();
      render(<TestComponent handler={handler} options={{ axis: 'lock', axisThreshold: 5 }} />);
      const el = screen.getByTestId('target');

      act(() => pointerDown(el, { clientX: 0, clientY: 0 }));
      act(() => pointerMove({ clientX: 2, clientY: 10 }));

      const moveCall = handler.mock.calls[1][0];
      expect(moveCall.movement).toEqual([0, 10]);
    });
  });

  describe('pointer filtering', () => {
    it('ignores non-primary button', () => {
      const handler = jest.fn();
      render(<TestComponent handler={handler} />);
      const el = screen.getByTestId('target');

      act(() => pointerDown(el, { button: 2 }));

      expect(handler).not.toHaveBeenCalled();
    });

    it('ignores pointermove from a different pointerId', () => {
      const handler = jest.fn();
      render(<TestComponent handler={handler} />);
      const el = screen.getByTestId('target');

      act(() => pointerDown(el, { pointerId: 1 }));
      handler.mockClear();

      act(() => pointerMove({ pointerId: 2, clientX: 50, clientY: 50 }));

      expect(handler).not.toHaveBeenCalled();
    });

    it('ignores second pointerdown while drag is active', () => {
      const handler = jest.fn();
      render(<TestComponent handler={handler} />);
      const el = screen.getByTestId('target');

      act(() => pointerDown(el, { pointerId: 1, clientX: 0, clientY: 0 }));
      act(() => pointerMove({ pointerId: 1, clientX: 20, clientY: 0 }));

      const callCountBefore = handler.mock.calls.length;

      act(() => pointerDown(el, { pointerId: 2, clientX: 100, clientY: 100 }));

      expect(handler.mock.calls.length).toBe(callCountBefore);

      act(() => pointerMove({ pointerId: 1, clientX: 40, clientY: 0 }));

      expect(handler).toHaveBeenLastCalledWith(
        expect.objectContaining({
          initial: [0, 0],
          movement: [40, 0],
        })
      );
    });
  });

  describe('pointercancel', () => {
    it('fires handler with canceled: true and last: true', () => {
      const handler = jest.fn();
      render(<TestComponent handler={handler} />);
      const el = screen.getByTestId('target');

      act(() => pointerDown(el, { clientX: 0, clientY: 0 }));
      act(() => pointerMove({ clientX: 20, clientY: 10 }));
      handler.mockClear();

      act(() => pointerCancel({ pointerId: 1 }));

      expect(handler).toHaveBeenCalledTimes(1);
      expect(handler).toHaveBeenCalledWith(
        expect.objectContaining({
          last: true,
          active: false,
          canceled: true,
        })
      );
    });

    it('resets active state after cancel', () => {
      const handler = jest.fn();
      render(<TestComponent handler={handler} />);
      const el = screen.getByTestId('target');

      act(() => pointerDown(el));
      expect(el.dataset.active).toBe('true');

      act(() => pointerCancel());
      expect(el.dataset.active).toBe('false');
    });
  });

  describe('enabled option', () => {
    it('does not start drag when enabled is false', () => {
      const handler = jest.fn();
      render(<TestComponent handler={handler} options={{ enabled: false }} />);
      const el = screen.getByTestId('target');

      act(() => pointerDown(el));

      expect(handler).not.toHaveBeenCalled();
      expect(el.dataset.active).toBe('false');
    });
  });

  describe('velocity', () => {
    it('computes velocity as absolute delta / time', () => {
      const handler = jest.fn();
      render(<TestComponent handler={handler} />);
      const el = screen.getByTestId('target');

      act(() => pointerDown(el, { clientX: 0, clientY: 0 }));
      act(() => pointerMove({ clientX: 50, clientY: 0 }));

      const moveCall = handler.mock.calls[1][0];
      expect(moveCall.velocity[0]).toBeGreaterThanOrEqual(0);
      expect(moveCall.velocity[1]).toBe(0);
    });
  });

  describe('cleanup on unmount', () => {
    it('does not fire handler after unmount', () => {
      const handler = jest.fn();
      const { unmount } = render(<TestComponent handler={handler} />);
      const el = screen.getByTestId('target');

      act(() => pointerDown(el, { clientX: 0, clientY: 0 }));
      handler.mockClear();

      unmount();

      act(() => pointerMove({ clientX: 50, clientY: 0 }));
      act(() => pointerUp({ clientX: 50, clientY: 0 }));

      expect(handler).not.toHaveBeenCalled();
    });

    it('restores body user-select on unmount during active drag', () => {
      const handler = jest.fn();
      const { unmount } = render(<TestComponent handler={handler} />);
      const el = screen.getByTestId('target');

      act(() => pointerDown(el));
      expect(document.body.style.userSelect).toBe('none');

      unmount();
      expect(document.body.style.userSelect).toBe('');
    });
  });

  describe('cancel function', () => {
    it('cancel() in handler stops the gesture and resets state', () => {
      const handler = jest.fn((state: UseDragState) => {
        if (state.distance[0] > 30) {
          state.cancel();
        }
      });
      render(<TestComponent handler={handler} />);
      const el = screen.getByTestId('target');

      act(() => pointerDown(el, { clientX: 0, clientY: 0 }));
      act(() => pointerMove({ clientX: 50, clientY: 0 }));

      expect(el.dataset.active).toBe('false');

      handler.mockClear();
      act(() => pointerMove({ clientX: 80, clientY: 0 }));

      expect(handler).not.toHaveBeenCalled();
    });
  });
});
