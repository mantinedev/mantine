import { useState } from 'react';
import { fireEvent } from '@testing-library/react';
import { render, screen, tests } from '@mantine-tests/core';
import { FloatingWindow, FloatingWindowProps, FloatingWindowStylesNames } from './FloatingWindow';

const defaultProps: FloatingWindowProps = {};

const dimensions = {
  initialWidth: 200,
  minWidth: 100,
  maxWidth: 400,
  initialHeight: 150,
  minHeight: 80,
  maxHeight: 300,
};

// jsdom does not lay out elements, so `getBoundingClientRect` is mocked to
// reflect the sizes that the component assigns to the root element
function mockRootSize(width: number, height: number) {
  return jest
    .spyOn(HTMLElement.prototype, 'getBoundingClientRect')
    .mockImplementation(function (this: HTMLElement) {
      return {
        width: parseFloat(this.style.width) || width,
        height: parseFloat(this.style.height) || height,
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        x: 0,
        y: 0,
      } as any;
    });
}

describe('@mantine/core/FloatingWindow', () => {
  tests.itSupportsSystemProps<FloatingWindowProps, FloatingWindowStylesNames>({
    component: FloatingWindow,
    props: defaultProps,
    polymorphic: true,
    children: true,
    styleProps: false, // some style props are overridden internally
    displayName: '@mantine/core/FloatingWindow',
    stylesApiSelectors: ['root'],
  });

  it('renders ResizeHandle with correct ARIA attributes', () => {
    render(
      <FloatingWindow dimensions={{ initialWidth: 200, minWidth: 100, maxWidth: 400 }}>
        <FloatingWindow.ResizeHandle>
          <div>handle</div>
        </FloatingWindow.ResizeHandle>
      </FloatingWindow>
    );

    const handle = screen.getByRole('separator');
    expect(handle).toHaveAttribute('aria-valuenow', '200');
    expect(handle).toHaveAttribute('aria-valuemin', '100');
    expect(handle).toHaveAttribute('aria-valuemax', '400');
    expect(handle).toHaveAttribute('tabindex', '0');
  });

  it('renders ResizeHandle children', () => {
    render(
      <FloatingWindow dimensions={{ initialWidth: 200 }}>
        <FloatingWindow.ResizeHandle>
          <div data-testid="handle-content">grip</div>
        </FloatingWindow.ResizeHandle>
      </FloatingWindow>
    );

    expect(screen.getByTestId('handle-content')).toBeInTheDocument();
  });

  it('updates aria-valuenow on Home/End keyboard events', () => {
    const rect = mockRootSize(200, 150);

    render(
      <FloatingWindow
        dimensions={{ initialWidth: 200, minWidth: 100, maxWidth: 400 }}
        withinPortal={false}
      >
        <FloatingWindow.ResizeHandle>
          <div>handle</div>
        </FloatingWindow.ResizeHandle>
      </FloatingWindow>
    );

    const handle = screen.getByRole('separator');

    fireEvent.keyDown(handle, { key: 'End' });
    expect(handle).toHaveAttribute('aria-valuenow', '400');

    fireEvent.keyDown(handle, { key: 'Home' });
    expect(handle).toHaveAttribute('aria-valuenow', '100');

    rect.mockRestore();
  });

  it('supports height dimensions', () => {
    render(
      <FloatingWindow
        dimensions={{
          initialWidth: 200,
          initialHeight: 150,
          minHeight: 80,
          maxHeight: 300,
        }}
      >
        <FloatingWindow.ResizeHandle>
          <div>handle</div>
        </FloatingWindow.ResizeHandle>
      </FloatingWindow>
    );

    const handle = screen.getByRole('separator');
    expect(handle).toBeInTheDocument();
  });

  it('calls onResizeStart and onResizeEnd when the handle is dragged', () => {
    const onResizeStart = jest.fn();
    const onResizeEnd = jest.fn();

    render(
      <FloatingWindow
        dimensions={dimensions}
        onResizeStart={onResizeStart}
        onResizeEnd={onResizeEnd}
        withinPortal={false}
      >
        <FloatingWindow.ResizeHandle>
          <div>handle</div>
        </FloatingWindow.ResizeHandle>
      </FloatingWindow>
    );

    const handle = screen.getByRole('separator');

    fireEvent.mouseDown(handle, { button: 0, clientX: 0, clientY: 0 });
    expect(onResizeStart).toHaveBeenCalledTimes(1);
    expect(onResizeEnd).not.toHaveBeenCalled();

    fireEvent.mouseUp(document);
    expect(onResizeEnd).toHaveBeenCalledTimes(1);
  });

  it('does not call resize callbacks for non-left mouse button', () => {
    const onResizeStart = jest.fn();
    const onResizeEnd = jest.fn();

    render(
      <FloatingWindow
        dimensions={dimensions}
        onResizeStart={onResizeStart}
        onResizeEnd={onResizeEnd}
        withinPortal={false}
      >
        <FloatingWindow.ResizeHandle>
          <div>handle</div>
        </FloatingWindow.ResizeHandle>
      </FloatingWindow>
    );

    fireEvent.mouseDown(screen.getByRole('separator'), { button: 1 });
    fireEvent.mouseUp(document);

    expect(onResizeStart).not.toHaveBeenCalled();
    expect(onResizeEnd).not.toHaveBeenCalled();
  });

  it('calls onSizeChange with clamped dimensions while resizing', () => {
    const onSizeChange = jest.fn();
    const rect = mockRootSize(200, 150);

    render(
      <FloatingWindow dimensions={dimensions} onSizeChange={onSizeChange} withinPortal={false}>
        <FloatingWindow.ResizeHandle>
          <div>handle</div>
        </FloatingWindow.ResizeHandle>
      </FloatingWindow>
    );

    const handle = screen.getByRole('separator');

    fireEvent.mouseDown(handle, { button: 0, clientX: 0, clientY: 0 });
    fireEvent.mouseMove(document, { clientX: 50, clientY: 40 });
    expect(onSizeChange).toHaveBeenLastCalledWith({ width: 250, height: 190 });

    fireEvent.mouseMove(document, { clientX: 1000, clientY: 1000 });
    expect(onSizeChange).toHaveBeenLastCalledWith({ width: 400, height: 300 });

    fireEvent.mouseMove(document, { clientX: -1000, clientY: -1000 });
    expect(onSizeChange).toHaveBeenLastCalledWith({ width: 100, height: 80 });

    fireEvent.mouseUp(document);
    rect.mockRestore();
  });

  it('measures the axis that is not resizable after the resize is applied', () => {
    const onSizeChange = jest.fn();
    const rect = jest
      .spyOn(HTMLElement.prototype, 'getBoundingClientRect')
      .mockImplementation(function (this: HTMLElement) {
        const width = parseFloat(this.style.width) || 200;
        return { width, height: width < 200 ? 300 : 100, top: 0, left: 0 } as any;
      });

    render(
      <FloatingWindow
        dimensions={{ initialWidth: 200, minWidth: 100, maxWidth: 400 }}
        onSizeChange={onSizeChange}
        withinPortal={false}
      >
        <FloatingWindow.ResizeHandle>
          <div>handle</div>
        </FloatingWindow.ResizeHandle>
      </FloatingWindow>
    );

    fireEvent.mouseDown(screen.getByRole('separator'), { button: 0, clientX: 0, clientY: 0 });
    fireEvent.mouseMove(document, { clientX: -50, clientY: 0 });

    expect(onSizeChange).toHaveBeenLastCalledWith({ width: 150, height: 300 });

    fireEvent.mouseUp(document);
    rect.mockRestore();
  });

  it('calls onSizeChange on keyboard resize', () => {
    const onSizeChange = jest.fn();
    const rect = mockRootSize(200, 150);

    render(
      <FloatingWindow dimensions={dimensions} onSizeChange={onSizeChange} withinPortal={false}>
        <FloatingWindow.ResizeHandle>
          <div>handle</div>
        </FloatingWindow.ResizeHandle>
      </FloatingWindow>
    );

    const handle = screen.getByRole('separator');

    fireEvent.keyDown(handle, { key: 'ArrowRight' });
    expect(onSizeChange).toHaveBeenLastCalledWith({ width: 210, height: 150 });

    fireEvent.keyDown(handle, { key: 'ArrowDown' });
    expect(onSizeChange).toHaveBeenLastCalledWith({ width: 210, height: 160 });

    fireEvent.keyDown(handle, { key: 'End' });
    expect(onSizeChange).toHaveBeenLastCalledWith({ width: 400, height: 300 });

    onSizeChange.mockClear();
    fireEvent.keyDown(handle, { key: 'Enter' });
    expect(onSizeChange).not.toHaveBeenCalled();

    rect.mockRestore();
  });

  it('does not call resize callbacks when dimensions are not configured', () => {
    const onSizeChange = jest.fn();
    const onResizeStart = jest.fn();
    const onResizeEnd = jest.fn();

    render(
      <FloatingWindow
        onSizeChange={onSizeChange}
        onResizeStart={onResizeStart}
        onResizeEnd={onResizeEnd}
        withinPortal={false}
      >
        <FloatingWindow.ResizeHandle>
          <div>handle</div>
        </FloatingWindow.ResizeHandle>
      </FloatingWindow>
    );

    const handle = screen.getByRole('separator');

    fireEvent.mouseDown(handle, { button: 0, clientX: 0, clientY: 0 });
    fireEvent.mouseMove(document, { clientX: 50, clientY: 40 });
    fireEvent.keyDown(handle, { key: 'ArrowRight' });
    fireEvent.mouseUp(document);

    expect(onSizeChange).not.toHaveBeenCalled();
    expect(onResizeStart).not.toHaveBeenCalled();
    expect(onResizeEnd).not.toHaveBeenCalled();
  });

  it('keeps resizing when onSizeChange triggers a state update', () => {
    const rect = mockRootSize(200, 150);

    function Wrapper() {
      const [size, setSize] = useState({ width: 0, height: 0 });
      return (
        <FloatingWindow
          dimensions={{ initialWidth: 200, initialHeight: 150 }}
          onSizeChange={setSize}
          withinPortal={false}
        >
          <span data-testid="size">{`${size.width}x${size.height}`}</span>
          <FloatingWindow.ResizeHandle>
            <div>handle</div>
          </FloatingWindow.ResizeHandle>
        </FloatingWindow>
      );
    }

    render(<Wrapper />);

    fireEvent.mouseDown(screen.getByRole('separator'), { button: 0, clientX: 0, clientY: 0 });
    fireEvent.mouseMove(document, { clientX: 10, clientY: 10 });
    expect(screen.getByTestId('size')).toHaveTextContent('210x160');

    fireEvent.mouseMove(document, { clientX: 80, clientY: 90 });
    expect(screen.getByTestId('size')).toHaveTextContent('280x240');

    fireEvent.mouseUp(document);
    rect.mockRestore();
  });

  it('calls the latest resize callbacks after a re-render', () => {
    const first = jest.fn();
    const second = jest.fn();

    function Wrapper() {
      const [swapped, setSwapped] = useState(false);
      return (
        <>
          <button type="button" onClick={() => setSwapped(true)}>
            swap
          </button>
          <FloatingWindow
            dimensions={dimensions}
            onResizeStart={swapped ? second : first}
            withinPortal={false}
          >
            <FloatingWindow.ResizeHandle>
              <div>handle</div>
            </FloatingWindow.ResizeHandle>
          </FloatingWindow>
        </>
      );
    }

    render(<Wrapper />);

    fireEvent.click(screen.getByText('swap'));
    fireEvent.mouseDown(screen.getByRole('separator'), { button: 0, clientX: 0, clientY: 0 });
    fireEvent.mouseUp(document);

    expect(first).not.toHaveBeenCalled();
    expect(second).toHaveBeenCalledTimes(1);
  });

  it('keeps aria-valuenow in sync with the resized width after a re-render', () => {
    const rect = mockRootSize(200, 150);

    function Wrapper() {
      const [, setSize] = useState({ width: 0, height: 0 });
      return (
        <FloatingWindow dimensions={dimensions} onSizeChange={setSize} withinPortal={false}>
          <FloatingWindow.ResizeHandle>
            <div>handle</div>
          </FloatingWindow.ResizeHandle>
        </FloatingWindow>
      );
    }

    render(<Wrapper />);

    const handle = screen.getByRole('separator');
    expect(handle).toHaveAttribute('aria-valuenow', '200');

    fireEvent.keyDown(handle, { key: 'ArrowRight' });
    expect(handle).toHaveAttribute('aria-valuenow', '210');

    rect.mockRestore();
  });

  it('finishes an active resize on unmount', () => {
    const onResizeEnd = jest.fn();

    const { unmount } = render(
      <FloatingWindow dimensions={dimensions} onResizeEnd={onResizeEnd} withinPortal={false}>
        <FloatingWindow.ResizeHandle>
          <div>handle</div>
        </FloatingWindow.ResizeHandle>
      </FloatingWindow>
    );

    fireEvent.mouseDown(screen.getByRole('separator'), { button: 0, clientX: 0, clientY: 0 });
    expect(document.body.style.userSelect).toBe('none');

    unmount();

    expect(onResizeEnd).toHaveBeenCalledTimes(1);
    expect(document.body.style.userSelect).toBe('');
  });

  it('does not reset aria-valuenow to the initial width when dimension bounds change', () => {
    const rect = mockRootSize(200, 150);

    function Wrapper() {
      const [maxWidth, setMaxWidth] = useState(400);
      return (
        <>
          <button type="button" onClick={() => setMaxWidth(600)}>
            widen
          </button>
          <FloatingWindow dimensions={{ ...dimensions, maxWidth }} withinPortal={false}>
            <FloatingWindow.ResizeHandle>
              <div>handle</div>
            </FloatingWindow.ResizeHandle>
          </FloatingWindow>
        </>
      );
    }

    render(<Wrapper />);

    const handle = screen.getByRole('separator');
    fireEvent.keyDown(handle, { key: 'ArrowRight' });
    expect(handle).toHaveAttribute('aria-valuenow', '210');

    fireEvent.click(screen.getByText('widen'));

    expect(handle).toHaveAttribute('aria-valuenow', '210');
    expect(handle).toHaveAttribute('aria-valuemax', '600');

    rect.mockRestore();
  });

  it('removes aria-valuenow when width resizing is no longer configured', () => {
    const rect = mockRootSize(200, 150);

    function Wrapper() {
      const [widthEnabled, setWidthEnabled] = useState(true);
      return (
        <>
          <button type="button" onClick={() => setWidthEnabled(false)}>
            disable width
          </button>
          <FloatingWindow
            dimensions={
              widthEnabled ? dimensions : { initialHeight: 150, minHeight: 80, maxHeight: 300 }
            }
            withinPortal={false}
          >
            <FloatingWindow.ResizeHandle>
              <div>handle</div>
            </FloatingWindow.ResizeHandle>
          </FloatingWindow>
        </>
      );
    }

    render(<Wrapper />);

    const handle = screen.getByRole('separator');
    fireEvent.keyDown(handle, { key: 'ArrowRight' });
    expect(handle).toHaveAttribute('aria-valuenow', '210');

    fireEvent.click(screen.getByText('disable width'));
    expect(handle).not.toHaveAttribute('aria-valuenow');

    rect.mockRestore();
  });

  it('finishes an active resize on touchcancel', () => {
    const onResizeEnd = jest.fn();

    render(
      <FloatingWindow dimensions={dimensions} onResizeEnd={onResizeEnd} withinPortal={false}>
        <FloatingWindow.ResizeHandle>
          <div>handle</div>
        </FloatingWindow.ResizeHandle>
      </FloatingWindow>
    );

    fireEvent.touchStart(screen.getByRole('separator'), {
      touches: [{ clientX: 0, clientY: 0 }],
    });
    expect(document.body.style.userSelect).toBe('none');

    fireEvent.touchCancel(document);

    expect(onResizeEnd).toHaveBeenCalledTimes(1);
    expect(document.body.style.userSelect).toBe('');
  });

  it('keeps dragging when onPositionChange triggers a state update', () => {
    function Wrapper() {
      const [pos, setPos] = useState({ x: 0, y: 0 });
      return (
        <FloatingWindow withinPortal={false} onPositionChange={setPos} data-testid="window">
          <span data-testid="position">{`${pos.x},${pos.y}`}</span>
        </FloatingWindow>
      );
    }

    render(<Wrapper />);

    fireEvent.mouseDown(screen.getByTestId('window'), { button: 0, clientX: 0, clientY: 0 });
    fireEvent.mouseMove(document, { clientX: 50, clientY: 60 });
    expect(screen.getByTestId('position')).toHaveTextContent('50,60');

    fireEvent.mouseMove(document, { clientX: 120, clientY: 140 });
    expect(screen.getByTestId('position')).toHaveTextContent('120,140');

    fireEvent.mouseUp(document);
  });

  it('throws error when ResizeHandle is used outside FloatingWindow', () => {
    const spy = jest.spyOn(console, 'error').mockImplementation(() => {});

    expect(() =>
      render(
        <FloatingWindow.ResizeHandle>
          <div>handle</div>
        </FloatingWindow.ResizeHandle>
      )
    ).toThrow('FloatingWindow.ResizeHandle must be used within FloatingWindow');

    spy.mockRestore();
  });
});
