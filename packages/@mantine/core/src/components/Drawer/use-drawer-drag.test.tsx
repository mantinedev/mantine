import { useRef } from 'react';
import { act, fireEvent, waitFor } from '@testing-library/react';
import { render, screen } from '@mantine-tests/core';
import { ColorPicker } from '../ColorPicker';
import { RangeSlider, Slider } from '../Slider';
import { Drawer } from './Drawer';
import { useDrawerDrag, UseDrawerDragInput } from './use-drawer-drag';

const DRAWER_SIZE = 400;

interface ProbeProps extends Partial<UseDrawerDragInput> {
  onClose: () => void | Promise<boolean>;
  scrollTop?: number;
  children?: React.ReactNode;
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

function Probe({ onClose, scrollTop = 0, children, ...rest }: ProbeProps) {
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
          {children}
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

interface PointerInit {
  x?: number;
  y?: number;
  t?: number;
  button?: number;
  isPrimary?: boolean;
}

function makeEvent(type: string, { x = 0, y = 0, t, button = 0, isPrimary }: PointerInit = {}) {
  const event = new MouseEvent(type, { clientX: x, clientY: y, button, bubbles: true });
  Object.defineProperty(event, 'pointerId', { value: 1, configurable: true });
  if (t !== undefined) {
    Object.defineProperty(event, 'timeStamp', { value: t, configurable: true });
  }
  if (isPrimary !== undefined) {
    Object.defineProperty(event, 'isPrimary', { value: isPrimary, configurable: true });
  }
  return event as unknown as PointerEvent;
}

function fireOn(target: HTMLElement, type: string, init?: PointerInit) {
  act(() => {
    fireEvent(target, makeEvent(type, init));
  });
}

function fireOnWindow(type: string, init?: PointerInit) {
  act(() => {
    window.dispatchEvent(makeEvent(type, init));
  });
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

  it('resets the uncontrolled active snap point to defaultActiveSnapPoint on every open without calling onSnapPointChange', () => {
    const onClose = jest.fn();
    const onSnapPointChange = jest.fn();
    const props = {
      onClose,
      onSnapPointChange,
      snapPoints: [0.5, 1],
      defaultActiveSnapPoint: 0.5,
    };
    const { rerender } = render(<Probe {...props} opened />);

    pointerDown('handle', 0);
    pointerMove(-250, 1000);
    pointerUp(-250, 1000);

    expect(screen.getByTestId('active-snap')).toHaveTextContent('1');
    expect(onSnapPointChange).toHaveBeenCalledTimes(1);

    rerender(<Probe {...props} opened={false} />);
    expect(screen.getByTestId('active-snap')).toHaveTextContent('1');

    rerender(<Probe {...props} opened />);
    expect(screen.getByTestId('active-snap')).toHaveTextContent('0.5');
    expect(screen.getByTestId('offset')).toHaveTextContent('200');
    expect(onSnapPointChange).toHaveBeenCalledTimes(1);
  });

  it('resets the uncontrolled active snap point to the largest snap point on open when defaultActiveSnapPoint is not set', () => {
    const onClose = jest.fn();
    const { rerender } = render(<Probe onClose={onClose} snapPoints={[0.5, 1]} opened />);

    pointerDown('handle', 0);
    pointerMove(250, 1000);
    pointerUp(250, 1000);
    expect(screen.getByTestId('active-snap')).toHaveTextContent('0.5');

    rerender(<Probe onClose={onClose} snapPoints={[0.5, 1]} opened={false} />);
    rerender(<Probe onClose={onClose} snapPoints={[0.5, 1]} opened />);

    expect(screen.getByTestId('active-snap')).toHaveTextContent('1');
    expect(screen.getByTestId('offset')).toHaveTextContent('0');
  });

  it('does not reset a controlled activeSnapPoint on open', () => {
    const onClose = jest.fn();
    const onSnapPointChange = jest.fn();
    const props = { onClose, onSnapPointChange, snapPoints: [0.5, 1], activeSnapPoint: 1 };
    const { rerender } = render(<Probe {...props} defaultActiveSnapPoint={0.5} opened />);

    rerender(<Probe {...props} defaultActiveSnapPoint={0.5} opened={false} />);
    rerender(<Probe {...props} defaultActiveSnapPoint={0.5} opened />);

    expect(screen.getByTestId('active-snap')).toHaveTextContent('1');
    expect(screen.getByTestId('offset')).toHaveTextContent('0');
    expect(onSnapPointChange).not.toHaveBeenCalled();
  });

  it('normalizes absolute size snap points using the measured size', () => {
    const onClose = jest.fn();
    render(<Probe onClose={onClose} snapPoints={[200, 400]} defaultActiveSnapPoint={200} />);

    expect(screen.getByTestId('offset')).toHaveTextContent('200');
  });
});

describe('@mantine/core/use-drawer-drag gesture ownership', () => {
  const originalGetComputedStyle = window.getComputedStyle;

  beforeEach(() => {
    jest.spyOn(window, 'getComputedStyle').mockImplementation((element, pseudo) => {
      const computed = originalGetComputedStyle(element, pseudo);
      const touchAction = (element as HTMLElement).style?.touchAction;
      return touchAction
        ? new Proxy(computed, {
            get: (target, key) =>
              key === 'touchAction' ? touchAction : Reflect.get(target, key, target),
          })
        : computed;
    });
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  function renderLeftDrawer(children: React.ReactNode) {
    const onClose = jest.fn();
    render(
      <Drawer opened onClose={onClose} position="left" transitionProps={{ duration: 0 }}>
        {children}
      </Drawer>
    );
    const content = screen.getByRole('dialog');
    content.getBoundingClientRect = () => ({ width: DRAWER_SIZE, height: DRAWER_SIZE }) as DOMRect;
    return { onClose, content };
  }

  function swipeLeft(target: HTMLElement) {
    fireOn(target, 'pointerdown', { x: 300, t: 0 });
    fireOnWindow('pointermove', { x: 250, t: 10 });
    fireOnWindow('pointermove', { x: 150, t: 20 });
    fireOnWindow('pointerup', { x: 150, t: 30 });
  }

  it('does not move or close a left drawer when a Slider thumb is dragged', () => {
    const { onClose } = renderLeftDrawer(<Slider defaultValue={80} />);
    swipeLeft(screen.getByRole('slider'));
    expect(onClose).not.toHaveBeenCalled();
  });

  it('does not move or close a left drawer when RangeSlider or ColorPicker sliders are dragged', () => {
    const { onClose } = renderLeftDrawer(
      <>
        <RangeSlider defaultValue={[20, 80]} />
        <ColorPicker />
      </>
    );

    screen.getAllByRole('slider').forEach((slider) => swipeLeft(slider));
    expect(onClose).not.toHaveBeenCalled();
  });

  it('still closes a left drawer when plain content next to a Slider is swiped', () => {
    const { onClose } = renderLeftDrawer(
      <>
        <p>Plain content</p>
        <Slider defaultValue={80} />
      </>
    );
    swipeLeft(screen.getByText('Plain content'));
    expect(onClose).toHaveBeenCalledTimes(1);
  });

  it('does not close a left drawer when swiping inside a horizontal carousel viewport (touch-action: pan-y pinch-zoom)', () => {
    const { onClose } = renderLeftDrawer(
      <div style={{ touchAction: 'pan-y pinch-zoom' }}>
        <span>Slide</span>
      </div>
    );
    swipeLeft(screen.getByText('Slide'));
    expect(onClose).not.toHaveBeenCalled();
  });

  it('still closes a bottom drawer when swiping down inside a horizontal carousel viewport', () => {
    const onClose = jest.fn();
    render(
      <Probe onClose={onClose}>
        <div style={{ touchAction: 'pan-y pinch-zoom' }}>
          <span data-testid="target" />
        </div>
      </Probe>
    );

    fireOn(screen.getByTestId('target'), 'pointerdown', { y: 0 });
    fireOnWindow('pointermove', { y: 300 });
    fireOnWindow('pointerup', { y: 300 });

    expect(onClose).toHaveBeenCalledTimes(1);
  });

  it.each([
    ['role="slider"', { role: 'slider' }],
    ['role="scrollbar"', { role: 'scrollbar' }],
    ['role="separator"', { role: 'separator' }],
    ['draggable="true"', { draggable: true }],
    ['touch-action: none', { style: { touchAction: 'none' } }],
  ])('does not start a root drag from inside an element with %s', (_, props) => {
    const onClose = jest.fn();
    render(
      <Probe onClose={onClose}>
        <div {...(props as any)}>
          <span data-testid="target" />
        </div>
      </Probe>
    );

    fireOn(screen.getByTestId('target'), 'pointerdown', { y: 0 });
    fireOnWindow('pointermove', { y: 300 });
    fireOnWindow('pointerup', { y: 300 });

    expect(onClose).not.toHaveBeenCalled();
    expect(screen.getByTestId('dragging')).toHaveTextContent('no');
  });

  it('does not start a root drag from an element with data-drawer-no-swipe', () => {
    const onClose = jest.fn();
    render(
      <Probe onClose={onClose}>
        <div data-drawer-no-swipe data-testid="target" />
      </Probe>
    );

    fireOn(screen.getByTestId('target'), 'pointerdown', { y: 0 });
    fireOnWindow('pointermove', { y: 300 });
    fireOnWindow('pointerup', { y: 300 });

    expect(onClose).not.toHaveBeenCalled();
    expect(screen.getByTestId('dragging')).toHaveTextContent('no');
  });

  it('does not start a root drag from a descendant of an element with data-drawer-no-swipe', () => {
    const onClose = jest.fn();
    render(
      <Probe onClose={onClose}>
        <div data-drawer-no-swipe>
          <p>
            <span data-testid="target" />
          </p>
        </div>
      </Probe>
    );

    fireOn(screen.getByTestId('target'), 'pointerdown', { y: 0 });
    fireOnWindow('pointermove', { y: 300 });
    fireOnWindow('pointerup', { y: 300 });

    expect(onClose).not.toHaveBeenCalled();
    expect(screen.getByTestId('dragging')).toHaveTextContent('no');
  });

  it('starts a root drag from a sibling of an element with data-drawer-no-swipe', () => {
    const onClose = jest.fn();
    render(
      <Probe onClose={onClose}>
        <div data-drawer-no-swipe />
        <div data-testid="target" />
      </Probe>
    );

    fireOn(screen.getByTestId('target'), 'pointerdown', { y: 0 });
    fireOnWindow('pointermove', { y: 300 });
    fireOnWindow('pointerup', { y: 300 });

    expect(onClose).toHaveBeenCalledTimes(1);
  });

  it('does not close a Drawer when swiping inside an element with data-drawer-no-swipe', () => {
    const { onClose } = renderLeftDrawer(
      <div data-drawer-no-swipe>
        <span>No swipe</span>
      </div>
    );
    swipeLeft(screen.getByText('No swipe'));
    expect(onClose).not.toHaveBeenCalled();
  });

  it('does not start a root drag when a descendant prevented the pointerdown default', () => {
    const onClose = jest.fn();
    render(
      <Probe onClose={onClose}>
        <div data-testid="target" onPointerDown={(event) => event.preventDefault()} />
      </Probe>
    );

    fireOn(screen.getByTestId('target'), 'pointerdown', { y: 0 });
    fireOnWindow('pointermove', { y: 300 });
    fireOnWindow('pointerup', { y: 300 });

    expect(onClose).not.toHaveBeenCalled();
  });

  it('starts a root drag inside an element whose touch-action allows panning along the drag axis', () => {
    const onClose = jest.fn();
    render(
      <Probe onClose={onClose}>
        <div style={{ touchAction: 'pan-y' }}>
          <span data-testid="target" />
        </div>
      </Probe>
    );

    fireOn(screen.getByTestId('target'), 'pointerdown', { y: 0 });
    fireOnWindow('pointermove', { y: 300 });
    fireOnWindow('pointerup', { y: 300 });

    expect(onClose).toHaveBeenCalledTimes(1);
  });

  it('does not start a root drag inside an element whose touch-action only pans the cross axis', () => {
    const onClose = jest.fn();
    render(
      <Probe onClose={onClose}>
        <div style={{ touchAction: 'pan-x' }}>
          <span data-testid="target" />
        </div>
      </Probe>
    );

    fireOn(screen.getByTestId('target'), 'pointerdown', { y: 0 });
    fireOnWindow('pointermove', { y: 300 });
    fireOnWindow('pointerup', { y: 300 });

    expect(onClose).not.toHaveBeenCalled();
  });
});

describe('@mantine/core/use-drawer-drag release velocity', () => {
  it('does not treat a flick as fast when the pointer was held still before release', () => {
    const onClose = jest.fn();
    render(<Probe onClose={onClose} />);

    fireOn(screen.getByTestId('root'), 'pointerdown', { y: 0, t: 0 });
    fireOnWindow('pointermove', { y: 10, t: 10 });
    fireOnWindow('pointermove', { y: 40, t: 20 });
    fireOnWindow('pointerup', { y: 40, t: 5000 });

    expect(onClose).not.toHaveBeenCalled();
    expect(screen.getByTestId('offset')).toHaveTextContent('0');
  });

  it('still dismisses on a fast flick released immediately', () => {
    const onClose = jest.fn();
    render(<Probe onClose={onClose} />);

    fireOn(screen.getByTestId('root'), 'pointerdown', { y: 0, t: 0 });
    fireOnWindow('pointermove', { y: 10, t: 10 });
    fireOnWindow('pointermove', { y: 40, t: 20 });
    fireOnWindow('pointerup', { y: 40, t: 30 });

    expect(onClose).toHaveBeenCalledTimes(1);
  });

  it('dismisses a slow drag held past the threshold', () => {
    const onClose = jest.fn();
    render(<Probe onClose={onClose} />);

    fireOn(screen.getByTestId('root'), 'pointerdown', { y: 0, t: 0 });
    fireOnWindow('pointermove', { y: 10, t: 1000 });
    fireOnWindow('pointermove', { y: 150, t: 3000 });
    fireOnWindow('pointerup', { y: 150, t: 8000 });

    expect(onClose).toHaveBeenCalledTimes(1);
  });

  it('does not project a held flick onto another snap point', () => {
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

    fireOn(screen.getByTestId('handle'), 'pointerdown', { y: 0, t: 0 });
    fireOnWindow('pointermove', { y: 10, t: 10 });
    fireOnWindow('pointermove', { y: 60, t: 20 });
    fireOnWindow('pointerup', { y: 60, t: 5000 });

    expect(onClose).not.toHaveBeenCalled();
    expect(onSnapPointChange).not.toHaveBeenCalled();
    expect(screen.getByTestId('offset')).toHaveTextContent('0');
  });
});

describe('@mantine/core/use-drawer-drag pointercancel', () => {
  it('returns to rest without closing when the gesture is cancelled', () => {
    const onClose = jest.fn();
    const onProgress = jest.fn();
    render(<Probe onClose={onClose} onProgress={onProgress} />);

    fireOn(screen.getByTestId('root'), 'pointerdown', { y: 0, t: 0 });
    fireOnWindow('pointermove', { y: 10, t: 10 });
    fireOnWindow('pointermove', { y: 150, t: 200 });
    fireOnWindow('pointercancel', { y: 150, t: 210 });

    expect(onClose).not.toHaveBeenCalled();
    expect(onProgress).toHaveBeenLastCalledWith(0);
    expect(screen.getByTestId('offset')).toHaveTextContent('0');
    expect(screen.getByTestId('dragging')).toHaveTextContent('no');
  });

  it('keeps the active snap point when a snap gesture is cancelled', () => {
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

    fireOn(screen.getByTestId('handle'), 'pointerdown', { y: 0, t: 0 });
    fireOnWindow('pointermove', { y: -200, t: 200 });
    fireOnWindow('pointercancel', { y: -200, t: 210 });

    expect(onClose).not.toHaveBeenCalled();
    expect(onSnapPointChange).not.toHaveBeenCalled();
    expect(screen.getByTestId('offset')).toHaveTextContent('200');
    expect(screen.getByTestId('active-snap')).toHaveTextContent('0.5');
  });
});

describe('@mantine/core/use-drawer-drag pointer buttons', () => {
  it.each([
    ['root', { button: 2 }],
    ['root', { button: 1 }],
    ['handle', { button: 2 }],
    ['root', { isPrimary: false }],
    ['handle', { isPrimary: false }],
  ])('ignores a non-primary pointerdown on %s (%o)', (testId, init) => {
    const onClose = jest.fn();
    render(<Probe onClose={onClose} />);

    fireOn(screen.getByTestId(testId), 'pointerdown', { y: 0, ...init });
    fireOnWindow('pointermove', { y: 300 });
    fireOnWindow('pointerup', { y: 300 });

    expect(onClose).not.toHaveBeenCalled();
    expect(screen.getByTestId('dragging')).toHaveTextContent('no');
  });
});

describe('@mantine/core/use-drawer-drag snap point change', () => {
  it('does not call onSnapPointChange when the gesture settles on the active snap point', () => {
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

    fireOn(screen.getByTestId('handle'), 'pointerdown', { y: 0, t: 0 });
    fireOnWindow('pointermove', { y: 20, t: 1000 });
    fireOnWindow('pointerup', { y: 20, t: 1000 });

    expect(onClose).not.toHaveBeenCalled();
    expect(onSnapPointChange).not.toHaveBeenCalled();
    expect(screen.getByTestId('offset')).toHaveTextContent('200');
  });
});

describe('@mantine/core/use-drawer-drag viewport resize', () => {
  it('re-measures the snap point rest offset when the viewport is resized', () => {
    const onClose = jest.fn();
    let size = DRAWER_SIZE;

    function ResizeProbe() {
      const scrollRef = useRef<HTMLDivElement>(null);
      const drag = useDrawerDrag({
        position: 'bottom',
        dir: 'ltr',
        enabled: true,
        onClose,
        scrollRef,
        snapPoints: [0.5, 1],
        defaultActiveSnapPoint: 0.5,
      });

      return (
        <div>
          <div
            ref={(node) => {
              scrollRef.current = node;
              if (node) {
                node.getBoundingClientRect = () => ({ width: size, height: size }) as DOMRect;
              }
            }}
          />
          <div data-testid="offset">{drag.offset}</div>
        </div>
      );
    }

    render(<ResizeProbe />);
    expect(screen.getByTestId('offset')).toHaveTextContent('200');

    size = 200;
    act(() => {
      window.dispatchEvent(new Event('resize'));
    });

    expect(screen.getByTestId('offset')).toHaveTextContent('100');
  });
});

describe('@mantine/core/use-drawer-drag release boundaries', () => {
  const cases: [UseDrawerDragInput['position'], UseDrawerDragInput['dir'], number, number][] = [
    ['bottom', 'ltr', 0, 1],
    ['top', 'ltr', 0, -1],
    ['right', 'ltr', 1, 0],
    ['left', 'ltr', -1, 0],
    ['left', 'rtl', 1, 0],
    ['right', 'rtl', -1, 0],
  ];

  function drag(dx: number, dy: number, distance: number, releaseDelay: number) {
    fireOn(screen.getByTestId('root'), 'pointerdown', { x: 0, y: 0, t: 0 });
    fireOnWindow('pointermove', { x: dx * 10, y: dy * 10, t: 1000 });
    fireOnWindow('pointermove', { x: dx * distance, y: dy * distance, t: 2000 });
    fireOnWindow('pointerup', { x: dx * distance, y: dy * distance, t: 2000 + releaseDelay });
  }

  it.each(cases)('%s/%s: dismisses at exactly the threshold', (position, dir, dx, dy) => {
    const onClose = jest.fn();
    render(<Probe onClose={onClose} position={position} dir={dir} />);
    drag(dx, dy, DRAWER_SIZE * 0.25, 0);
    expect(onClose).toHaveBeenCalledTimes(1);
  });

  it.each(cases)('%s/%s: springs back just below the threshold', (position, dir, dx, dy) => {
    const onClose = jest.fn();
    render(<Probe onClose={onClose} position={position} dir={dir} />);
    drag(dx, dy, DRAWER_SIZE * 0.25 - 1, 0);
    expect(onClose).not.toHaveBeenCalled();
  });

  it.each(cases)('%s/%s: ignores a drag in the opening direction', (position, dir, dx, dy) => {
    const onClose = jest.fn();
    render(<Probe onClose={onClose} position={position} dir={dir} />);
    drag(-dx, -dy, 300, 0);
    expect(onClose).not.toHaveBeenCalled();
    expect(screen.getByTestId('dragging')).toHaveTextContent('no');
  });

  it.each(cases)('%s/%s: dismisses a quick flick', (position, dir, dx, dy) => {
    const onClose = jest.fn();
    render(<Probe onClose={onClose} position={position} dir={dir} />);
    fireOn(screen.getByTestId('root'), 'pointerdown', { x: 0, y: 0, t: 0 });
    fireOnWindow('pointermove', { x: dx * 10, y: dy * 10, t: 10 });
    fireOnWindow('pointermove', { x: dx * 40, y: dy * 40, t: 20 });
    fireOnWindow('pointerup', { x: dx * 40, y: dy * 40, t: 40 });
    expect(onClose).toHaveBeenCalledTimes(1);
  });

  it.each(cases)(
    '%s/%s: does not dismiss a flick held still before release',
    (position, dir, dx, dy) => {
      const onClose = jest.fn();
      render(<Probe onClose={onClose} position={position} dir={dir} />);
      fireOn(screen.getByTestId('root'), 'pointerdown', { x: 0, y: 0, t: 0 });
      fireOnWindow('pointermove', { x: dx * 10, y: dy * 10, t: 10 });
      fireOnWindow('pointermove', { x: dx * 40, y: dy * 40, t: 20 });
      fireOnWindow('pointerup', { x: dx * 40, y: dy * 40, t: 500 });
      expect(onClose).not.toHaveBeenCalled();
    }
  );

  it('does not commit a tiny drag below the commit threshold', () => {
    const onClose = jest.fn();
    render(<Probe onClose={onClose} />);
    fireOn(screen.getByTestId('root'), 'pointerdown', { y: 0, t: 0 });
    fireOnWindow('pointermove', { y: 5, t: 5 });
    fireOnWindow('pointerup', { y: 5, t: 6 });
    expect(onClose).not.toHaveBeenCalled();
    expect(screen.getByTestId('dragging')).toHaveTextContent('no');
  });

  it('snaps to a larger snap point on a quick upward flick', () => {
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
    fireOn(screen.getByTestId('handle'), 'pointerdown', { y: 0, t: 0 });
    fireOnWindow('pointermove', { y: -10, t: 10 });
    fireOnWindow('pointermove', { y: -80, t: 20 });
    fireOnWindow('pointerup', { y: -80, t: 30 });
    expect(onSnapPointChange).toHaveBeenCalledWith(1);
  });

  it('restores the snap point offset and progress when a swipe to close is denied', async () => {
    const onClose = jest.fn(() => Promise.resolve(false));
    const onProgress = jest.fn();
    render(
      <Probe
        onClose={onClose}
        onProgress={onProgress}
        snapPoints={[0.5, 1]}
        defaultActiveSnapPoint={1}
      />
    );
    fireOn(screen.getByTestId('handle'), 'pointerdown', { y: 0, t: 0 });
    fireOnWindow('pointermove', { y: 10, t: 10 });
    fireOnWindow('pointermove', { y: 300, t: 20 });
    fireOnWindow('pointerup', { y: 300, t: 30 });

    expect(onClose).toHaveBeenCalledTimes(1);
    expect(onProgress).toHaveBeenLastCalledWith(1);

    await waitFor(() => expect(onProgress).toHaveBeenLastCalledWith(0));
    expect(screen.getByTestId('offset')).toHaveTextContent('0');
  });

  it('keeps the dismissal progress when a swipe to close is allowed', async () => {
    const onClose = jest.fn(() => Promise.resolve(true));
    const onProgress = jest.fn();
    render(
      <Probe
        onClose={onClose}
        onProgress={onProgress}
        snapPoints={[0.5, 1]}
        defaultActiveSnapPoint={1}
      />
    );
    fireOn(screen.getByTestId('handle'), 'pointerdown', { y: 0, t: 0 });
    fireOnWindow('pointermove', { y: 10, t: 10 });
    fireOnWindow('pointermove', { y: 300, t: 20 });
    fireOnWindow('pointerup', { y: 300, t: 30 });

    await act(async () => {
      await Promise.resolve();
    });

    expect(onClose).toHaveBeenCalledTimes(1);
    expect(onProgress).toHaveBeenLastCalledWith(1);
  });
});
