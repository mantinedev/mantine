import { useRef } from 'react';
import { act, fireEvent } from '@testing-library/react';
import { render, screen } from '@mantine-tests/core';
import { useDrawerDrag, UseDrawerDragInput } from './use-drawer-drag';

const DRAWER_SIZE = 400;

interface ProbeProps extends Partial<UseDrawerDragInput> {
  onClose: () => void;
  scrollTop?: number;
}

/**
 * The scrollable element is resolved by walking up from the pointer-down target toward
 * `scrollRef` (the boundary). To exercise this, the scroll container is given an inline
 * `overflow-y: auto` and mocked scroll metrics (`scrollTop`/`scrollHeight`/`clientHeight`),
 * with the pointer-down target nested inside it.
 */
function applyScrollMetrics(node: HTMLElement, scrollTop: number, scrollHeight: number) {
  node.style.overflowY = 'auto';
  Object.defineProperty(node, 'scrollTop', { value: scrollTop, configurable: true });
  Object.defineProperty(node, 'scrollHeight', { value: scrollHeight, configurable: true });
  Object.defineProperty(node, 'clientHeight', { value: DRAWER_SIZE, configurable: true });
}

function Probe({ onClose, scrollTop = 0, ...rest }: ProbeProps) {
  const scrollRef = useRef<HTMLDivElement>(null);

  const drag = useDrawerDrag({
    position: 'bottom',
    dir: 'ltr',
    enabled: true,
    onClose,
    scrollRef,
    ...rest,
  });

  return (
    <div>
      <div
        data-testid="root"
        ref={(node) => {
          scrollRef.current = node;
          if (node) {
            node.getBoundingClientRect = () =>
              ({ width: DRAWER_SIZE, height: DRAWER_SIZE }) as DOMRect;
          }
        }}
        {...drag.getRootProps()}
      >
        <div
          data-testid="scroll"
          ref={(node) => {
            if (node) {
              applyScrollMetrics(node, scrollTop, scrollTop > 0 ? DRAWER_SIZE * 2 : DRAWER_SIZE);
            }
          }}
        >
          <div data-testid="inner" />
        </div>
      </div>
      <div data-testid="handle" {...drag.getHandleProps()} />
      <div data-testid="dragging">{drag.dragging ? 'yes' : 'no'}</div>
      <div data-testid="offset">{drag.offset}</div>
      <div data-testid="active-snap">{String(drag.activeSnapPoint)}</div>
    </div>
  );
}

function makePointerEvent(type: string, clientY: number, timeStamp?: number, clientX = 0) {
  const event = new MouseEvent(type, { clientX, clientY, bubbles: true });
  Object.defineProperty(event, 'pointerId', { value: 1, configurable: true });
  if (timeStamp !== undefined) {
    Object.defineProperty(event, 'timeStamp', { value: timeStamp, configurable: true });
  }
  return event as unknown as PointerEvent;
}

function pointerDown(testId: string, clientY: number) {
  act(() => {
    fireEvent(screen.getByTestId(testId), makePointerEvent('pointerdown', clientY));
  });
}

function pointerMove(clientY: number, timeStamp?: number) {
  act(() => {
    window.dispatchEvent(makePointerEvent('pointermove', clientY, timeStamp));
  });
}

function pointerMoveXY(clientX: number, clientY: number, timeStamp?: number) {
  act(() => {
    window.dispatchEvent(makePointerEvent('pointermove', clientY, timeStamp, clientX));
  });
}

function pointerUp(clientY: number, timeStamp?: number) {
  act(() => {
    window.dispatchEvent(makePointerEvent('pointerup', clientY, timeStamp));
  });
}

describe('@mantine/core/use-drawer-drag', () => {
  it('calls onClose when dragged past threshold (bottom drawer)', () => {
    const onClose = jest.fn();
    render(<Probe onClose={onClose} />);

    pointerDown('root', 0);
    pointerMove(200);
    pointerUp(200);

    expect(onClose).toHaveBeenCalledTimes(1);
  });

  it('springs back and does not call onClose on small slow drag', () => {
    const onClose = jest.fn();
    render(<Probe onClose={onClose} threshold={0.25} velocityThreshold={0.5} />);

    pointerDown('root', 0);
    pointerMove(20, 1000);
    pointerMove(30, 2000);
    pointerUp(30, 2000);

    expect(onClose).not.toHaveBeenCalled();
    expect(screen.getByTestId('offset')).toHaveTextContent('0');
    expect(screen.getByTestId('dragging')).toHaveTextContent('no');
  });

  it('does nothing when enabled is false', () => {
    const onClose = jest.fn();
    render(<Probe onClose={onClose} enabled={false} />);

    pointerDown('root', 0);
    pointerMove(300);
    pointerUp(300);

    expect(onClose).not.toHaveBeenCalled();
    expect(screen.getByTestId('dragging')).toHaveTextContent('no');
  });

  it('does not start root drag when the resolved scroll container is not at the edge', () => {
    const onClose = jest.fn();
    render(<Probe onClose={onClose} scrollTop={100} />);

    pointerDown('inner', 0);
    pointerMove(300);
    pointerUp(300);

    expect(onClose).not.toHaveBeenCalled();
  });

  it('starts root drag when the resolved scroll container is at the edge', () => {
    const onClose = jest.fn();
    render(<Probe onClose={onClose} scrollTop={0} />);

    pointerDown('inner', 0);
    pointerMove(300);
    pointerUp(300);

    expect(onClose).toHaveBeenCalledTimes(1);
  });

  it('treats areas with no scrollable ancestor as at edge', () => {
    const onClose = jest.fn();
    render(<Probe onClose={onClose} scrollTop={100} />);

    pointerDown('root', 0);
    pointerMove(300);
    pointerUp(300);

    expect(onClose).toHaveBeenCalledTimes(1);
  });

  it('starts handle drag regardless of scroll position', () => {
    const onClose = jest.fn();
    render(<Probe onClose={onClose} scrollTop={100} />);

    pointerDown('handle', 0);
    pointerMove(300);
    pointerUp(300);

    expect(onClose).toHaveBeenCalledTimes(1);
  });

  it('reports progress during drag', () => {
    const onClose = jest.fn();
    const onProgress = jest.fn();
    render(<Probe onClose={onClose} onProgress={onProgress} />);

    pointerDown('root', 0);
    pointerMove(100);

    expect(onProgress).toHaveBeenCalledWith(0.25);
  });

  it('does not drag the root on a cross-axis dominant move', () => {
    const onClose = jest.fn();
    render(<Probe onClose={onClose} />);

    pointerDown('root', 0);
    pointerMoveXY(100, 2);
    pointerUp(2);

    expect(onClose).not.toHaveBeenCalled();
    expect(screen.getByTestId('dragging')).toHaveTextContent('no');
    expect(screen.getByTestId('offset')).toHaveTextContent('0');
  });

  it('suppresses text selection while dragging and restores it on release', () => {
    const onClose = jest.fn();
    document.body.style.userSelect = 'auto';
    render(<Probe onClose={onClose} />);

    pointerDown('root', 0);
    pointerMove(100);

    expect(document.body.style.userSelect).toBe('none');

    pointerUp(100);

    expect(document.body.style.userSelect).toBe('auto');
    document.body.style.userSelect = '';
  });

  it('does not start a root drag when there is an existing text selection', () => {
    const onClose = jest.fn();
    const originalGetSelection = window.getSelection;
    window.getSelection = jest.fn(
      () =>
        ({
          isCollapsed: false,
          toString: () => 'selected text',
          removeAllRanges: jest.fn(),
        }) as unknown as Selection
    );

    try {
      render(<Probe onClose={onClose} />);

      pointerDown('root', 0);
      pointerMove(300);
      pointerUp(300);

      expect(onClose).not.toHaveBeenCalled();
      expect(screen.getByTestId('dragging')).toHaveTextContent('no');
    } finally {
      window.getSelection = originalGetSelection;
    }
  });

  it('starts a handle drag immediately even on a small move (bypassing the commit threshold)', () => {
    const onClose = jest.fn();
    render(<Probe onClose={onClose} velocityThreshold={0.5} />);

    pointerDown('handle', 0);

    expect(screen.getByTestId('dragging')).toHaveTextContent('yes');

    pointerMove(300, 1000);
    pointerUp(300, 1000);

    expect(onClose).toHaveBeenCalledTimes(1);
  });
});

describe('@mantine/core/use-drawer-drag snap points', () => {
  it('settles to the nearest snap point on release without closing', () => {
    const onClose = jest.fn();
    const onSnapPointChange = jest.fn();
    render(
      <Probe
        onClose={onClose}
        snapPoints={[0.5, 1]}
        defaultActiveSnapPoint={1}
        onSnapPointChange={onSnapPointChange}
      />
    );

    expect(screen.getByTestId('offset')).toHaveTextContent('0');

    pointerDown('handle', 0);
    pointerMove(250, 1000);
    pointerUp(250, 1000);

    expect(onClose).not.toHaveBeenCalled();
    expect(onSnapPointChange).toHaveBeenCalledWith(0.5);
    expect(screen.getByTestId('offset')).toHaveTextContent('200');
    expect(screen.getByTestId('active-snap')).toHaveTextContent('0.5');
  });

  it('reflects the active snap point rest offset when idle', () => {
    const onClose = jest.fn();
    render(<Probe onClose={onClose} snapPoints={[0.5, 1]} defaultActiveSnapPoint={0.5} />);

    expect(screen.getByTestId('offset')).toHaveTextContent('200');
    expect(screen.getByTestId('active-snap')).toHaveTextContent('0.5');
  });

  it('expands to a larger snap point when the body is dragged toward open', () => {
    const onClose = jest.fn();
    const onSnapPointChange = jest.fn();
    render(
      <Probe
        onClose={onClose}
        snapPoints={[0.5, 1]}
        defaultActiveSnapPoint={0.5}
        onSnapPointChange={onSnapPointChange}
      />
    );

    expect(screen.getByTestId('offset')).toHaveTextContent('200');

    pointerDown('root', 300);
    pointerMove(100, 1000);
    pointerUp(100, 1000);

    expect(onClose).not.toHaveBeenCalled();
    expect(onSnapPointChange).toHaveBeenCalledWith(1);
    expect(screen.getByTestId('offset')).toHaveTextContent('0');
    expect(screen.getByTestId('active-snap')).toHaveTextContent('1');
  });

  it('closes when dragged past the smallest snap point beyond threshold', () => {
    const onClose = jest.fn();
    const onSnapPointChange = jest.fn();
    render(
      <Probe
        onClose={onClose}
        snapPoints={[0.5, 1]}
        defaultActiveSnapPoint={0.5}
        onSnapPointChange={onSnapPointChange}
      />
    );

    pointerDown('handle', 0);
    pointerMove(150, 1000);
    pointerUp(150, 1000);

    expect(onClose).toHaveBeenCalledTimes(1);
  });

  it('respects a controlled activeSnapPoint without internal state changes', () => {
    const onClose = jest.fn();
    const onSnapPointChange = jest.fn();
    render(
      <Probe
        onClose={onClose}
        snapPoints={[0.5, 1]}
        activeSnapPoint={0.5}
        onSnapPointChange={onSnapPointChange}
      />
    );

    expect(screen.getByTestId('offset')).toHaveTextContent('200');

    pointerDown('handle', 0);
    pointerMove(-250, 1000);
    pointerUp(-250, 1000);

    expect(onSnapPointChange).toHaveBeenCalledWith(1);
    expect(screen.getByTestId('offset')).toHaveTextContent('200');
    expect(screen.getByTestId('active-snap')).toHaveTextContent('0.5');
  });

  it('normalizes absolute size snap points using the measured size', () => {
    const onClose = jest.fn();
    render(<Probe onClose={onClose} snapPoints={[200, 400]} defaultActiveSnapPoint={200} />);

    expect(screen.getByTestId('offset')).toHaveTextContent('200');
  });
});
