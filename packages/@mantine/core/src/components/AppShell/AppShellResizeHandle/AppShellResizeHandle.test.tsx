import { useState } from 'react';
import { act, fireEvent } from '@testing-library/react';
import { hydrateRoot, type Root } from 'react-dom/client';
import { renderToString } from 'react-dom/server';
import { render, screen } from '@mantine-tests/core';
import { DirectionProvider, MantineProvider, rem } from '../../../core';
import { AppShell } from '../AppShell';
import type {
  AppShellResizeController,
  AppShellResizeSection,
  AppShellResizeSizes,
} from '../AppShell.types';
import { useAppShellResize } from '../use-app-shell-resize/use-app-shell-resize';

if (typeof PointerEvent === 'undefined') {
  (global as any).PointerEvent = class PointerEvent extends MouseEvent {
    pointerId: number;

    constructor(type: string, init: PointerEventInit & { pointerId?: number } = {}) {
      super(type, init);
      this.pointerId = init.pointerId ?? 0;
    }
  };
}

function Shell({ enabled = true }: { enabled?: boolean }) {
  const resize = useAppShellResize(enabled ? { navbar: { min: 100, max: 500 } } : {});
  return (
    <AppShell resize={resize} navbar={{ width: 300, breakpoint: 'sm' }} header={{ height: 60 }}>
      <AppShell.Navbar>navbar</AppShell.Navbar>
      <AppShell.Header>header</AppShell.Header>
    </AppShell>
  );
}

function MinimalShell() {
  const resize = useAppShellResize({ navbar: {} });
  return (
    <AppShell resize={resize} navbar={{ width: 300, breakpoint: 'sm' }}>
      <AppShell.Navbar>navbar</AppShell.Navbar>
    </AppShell>
  );
}

interface ResizeShellProps {
  min?: number;
  max?: number;
  collapseThreshold?: number;
  onResize?: (sizes: AppShellResizeSizes) => void;
  onResizeEnd?: (sizes: AppShellResizeSizes) => void;
  onCollapseChange?: (section: AppShellResizeSection, collapsed: boolean) => void;
}

function CallbackShell(props: ResizeShellProps) {
  const { min = 100, collapseThreshold, onResize, onResizeEnd, onCollapseChange } = props;
  const max = 'max' in props ? props.max : 500;
  const resize = useAppShellResize({
    navbar: { min, max, collapseThreshold },
    onResize,
    onResizeEnd,
    onCollapseChange,
  });

  return (
    <AppShell resize={resize} navbar={{ width: 300, breakpoint: 'sm' }}>
      <AppShell.Navbar>navbar</AppShell.Navbar>
    </AppShell>
  );
}

function AsideShell(props: ResizeShellProps) {
  const { min = 100, collapseThreshold, onResize, onResizeEnd, onCollapseChange } = props;
  const max = 'max' in props ? props.max : 500;
  const resize = useAppShellResize({
    aside: { min, max, collapseThreshold },
    onResize,
    onResizeEnd,
    onCollapseChange,
  });

  return (
    <AppShell resize={resize} aside={{ width: 300, breakpoint: 'sm' }}>
      <AppShell.Aside>aside</AppShell.Aside>
    </AppShell>
  );
}

function FooterShell(props: ResizeShellProps) {
  const { min = 100, collapseThreshold, onResize, onResizeEnd, onCollapseChange } = props;
  const max = 'max' in props ? props.max : 500;
  const resize = useAppShellResize({
    footer: { min, max, collapseThreshold },
    onResize,
    onResizeEnd,
    onCollapseChange,
  });

  return (
    <AppShell resize={resize} footer={{ height: 300 }}>
      <AppShell.Footer>footer</AppShell.Footer>
    </AppShell>
  );
}

function HeaderShell(props: ResizeShellProps) {
  const { min = 100, collapseThreshold, onResize, onResizeEnd, onCollapseChange } = props;
  const max = 'max' in props ? props.max : 500;
  const resize = useAppShellResize({
    header: { min, max, collapseThreshold },
    onResize,
    onResizeEnd,
    onCollapseChange,
  });

  return (
    <AppShell resize={resize} header={{ height: 60 }}>
      <AppShell.Header>header</AppShell.Header>
    </AppShell>
  );
}

interface ControllerRef {
  current: AppShellResizeController | null;
}

function ToggleNavbarShell({
  showNavbar,
  controllerRef,
}: {
  showNavbar: boolean;
  controllerRef: ControllerRef;
}) {
  const resize = useAppShellResize({ navbar: { min: 100, max: 500 } });
  controllerRef.current = resize;

  return (
    <AppShell resize={resize} navbar={{ width: 300, breakpoint: 'sm' }}>
      {showNavbar && <AppShell.Navbar>navbar</AppShell.Navbar>}
    </AppShell>
  );
}

function DualSectionShell({
  showNavbar,
  controllerRef,
}: {
  showNavbar: boolean;
  controllerRef: ControllerRef;
}) {
  const resize = useAppShellResize({
    navbar: { min: 100, max: 500 },
    aside: { min: 100, max: 500 },
  });
  controllerRef.current = resize;

  return (
    <AppShell
      resize={resize}
      navbar={{ width: 300, breakpoint: 'sm' }}
      aside={{ width: 300, breakpoint: 'sm' }}
    >
      {showNavbar && <AppShell.Navbar>navbar</AppShell.Navbar>}
      <AppShell.Aside>aside</AppShell.Aside>
    </AppShell>
  );
}

function mockSectionSize(width: number, height: number) {
  return jest
    .spyOn(HTMLElement.prototype, 'getBoundingClientRect')
    .mockReturnValue({ width, height, top: 0, left: 0, right: 0, bottom: 0, x: 0, y: 0 } as any);
}

function drag(handle: HTMLElement, deltaX: number, deltaY = 0) {
  fireEvent.pointerDown(handle, { button: 0, clientX: 0, clientY: 0 });
  fireEvent.pointerMove(document, { clientX: deltaX, clientY: deltaY });
  fireEvent.pointerUp(document, { clientX: deltaX, clientY: deltaY });
}

describe('@mantine/core/AppShellResizeHandle', () => {
  afterEach(() => {
    jest.restoreAllMocks();
    document.body.style.cssText = '';
  });

  it('renders a handle only for configured sections', () => {
    render(<Shell />);
    const handles = screen.getAllByRole('separator');
    expect(handles).toHaveLength(1);
    expect(handles[0]).toHaveAttribute('data-section', 'navbar');
  });

  it('renders no handle when the section is not configured', () => {
    render(<Shell enabled={false} />);
    expect(screen.queryByRole('separator')).not.toBeInTheDocument();
  });

  it('sets accessibility attributes from the section options', () => {
    render(<Shell />);
    const handle = screen.getByRole('separator');
    expect(handle).toHaveAttribute('aria-orientation', 'vertical');
    expect(handle).toHaveAttribute('aria-valuemin', '100');
    expect(handle).toHaveAttribute('aria-valuemax', '500');
    expect(handle).toHaveAttribute('tabindex', '0');
    expect(handle).toHaveAccessibleName();
  });

  it('defaults aria-valuemin to 0 and seeds aria-valuenow from the measured size when never resized', () => {
    mockSectionSize(300, 800);
    render(<MinimalShell />);
    const handle = screen.getByRole('separator');

    expect(handle).toHaveAttribute('aria-valuemin', '0');
    expect(handle).toHaveAttribute('aria-valuenow', '300');
  });

  it('exposes aria-valuemax as the viewport bound when it is smaller than the configured max', () => {
    mockSectionSize(300, 800);
    const originalInnerWidth = window.innerWidth;
    window.innerWidth = 400;

    try {
      render(<CallbackShell max={5000} />);
      expect(screen.getByRole('separator')).toHaveAttribute('aria-valuemax', '400');
    } finally {
      window.innerWidth = originalInnerWidth;
    }
  });

  it('updates aria-valuemax when the window is resized', () => {
    mockSectionSize(300, 800);
    const originalInnerWidth = window.innerWidth;
    window.innerWidth = 1000;

    try {
      render(<CallbackShell max={5000} />);
      const handle = screen.getByRole('separator');
      expect(handle).toHaveAttribute('aria-valuemax', '1000');

      window.innerWidth = 400;
      fireEvent(window, new Event('resize'));

      expect(handle).toHaveAttribute('aria-valuemax', '400');
    } finally {
      window.innerWidth = originalInnerWidth;
    }
  });

  it('updates aria-valuemax when options.max changes', () => {
    mockSectionSize(300, 800);
    const { rerender } = render(<CallbackShell max={400} />);
    const handle = screen.getByRole('separator');

    expect(handle).toHaveAttribute('aria-valuemax', '400');

    rerender(
      <>
        <CallbackShell max={800} />
      </>
    );

    expect(handle).toHaveAttribute('aria-valuemax', '800');
  });

  it('commits the dragged size and calls the callbacks', () => {
    mockSectionSize(300, 800);
    const onResize = jest.fn();
    const onResizeEnd = jest.fn();
    render(<CallbackShell onResize={onResize} onResizeEnd={onResizeEnd} />);

    drag(screen.getByRole('separator'), 50);

    expect(onResize).toHaveBeenCalledWith({ navbar: 350 });
    expect(onResizeEnd).toHaveBeenCalledTimes(1);
    expect(onResizeEnd).toHaveBeenCalledWith({ navbar: 350 });
  });

  it('does not commit a size when the pointer is pressed and released without moving', () => {
    mockSectionSize(300, 800);
    const onResizeEnd = jest.fn();
    render(<CallbackShell onResizeEnd={onResizeEnd} />);
    const handle = screen.getByRole('separator');
    const valueBeforeClick = handle.getAttribute('aria-valuenow');

    fireEvent.pointerDown(handle, { button: 0, clientX: 0, clientY: 0 });
    fireEvent.pointerUp(document, { clientX: 0, clientY: 0 });

    expect(onResizeEnd).not.toHaveBeenCalled();
    expect(handle.getAttribute('aria-valuenow')).toBe(valueBeforeClick);
  });

  it('clamps the dragged size to min and max', () => {
    mockSectionSize(300, 800);
    const onResizeEnd = jest.fn();
    render(<CallbackShell onResizeEnd={onResizeEnd} />);

    drag(screen.getByRole('separator'), 5000);

    expect(onResizeEnd).toHaveBeenCalledWith({ navbar: 500 });
  });

  it('ignores pointer events from a different pointer id mid-drag', () => {
    mockSectionSize(300, 800);
    const onResizeEnd = jest.fn();
    const { container } = render(<CallbackShell onResizeEnd={onResizeEnd} />);
    const root = container.querySelector('.mantine-AppShell-root') as HTMLElement;
    const handle = screen.getByRole('separator');

    fireEvent.pointerDown(handle, { button: 0, clientX: 0, clientY: 0, pointerId: 1 });
    fireEvent.pointerMove(document, { clientX: 50, clientY: 0, pointerId: 2 });

    expect(root.style.getPropertyValue('--app-shell-navbar-width')).toBe('');

    fireEvent.pointerUp(document, { clientX: 50, clientY: 0, pointerId: 2 });

    expect(onResizeEnd).not.toHaveBeenCalled();

    fireEvent.pointerMove(document, { clientX: 50, clientY: 0, pointerId: 1 });
    fireEvent.pointerUp(document, { clientX: 50, clientY: 0, pointerId: 1 });

    expect(onResizeEnd).toHaveBeenCalledWith({ navbar: 350 });
  });

  it('ignores a second pointerdown while a drag is already active on the handle', () => {
    mockSectionSize(300, 800);
    const onResizeEnd = jest.fn();
    render(<CallbackShell onResizeEnd={onResizeEnd} />);
    const handle = screen.getByRole('separator');

    document.body.style.setProperty('user-select', 'text');

    fireEvent.pointerDown(handle, { button: 0, clientX: 0, clientY: 0, pointerId: 1 });
    fireEvent.pointerMove(document, { clientX: 50, clientY: 0, pointerId: 1 });

    fireEvent.pointerDown(handle, { button: 0, clientX: 30, clientY: 0, pointerId: 2 });

    expect(document.body.style.getPropertyValue('user-select')).toBe('none');

    fireEvent.pointerMove(document, { clientX: 80, clientY: 0, pointerId: 2 });
    fireEvent.pointerUp(document, { clientX: 80, clientY: 0, pointerId: 2 });

    expect(onResizeEnd).not.toHaveBeenCalled();

    fireEvent.pointerUp(document, { clientX: 50, clientY: 0, pointerId: 1 });

    expect(onResizeEnd).toHaveBeenCalledTimes(1);
    expect(onResizeEnd).toHaveBeenCalledWith({ navbar: 350 });
    expect(document.body.style.getPropertyValue('user-select')).toBe('text');
    expect(document.body.style.getPropertyValue('cursor')).toBe('');
  });

  it('inverts the delta for the aside', () => {
    mockSectionSize(300, 800);
    const onResizeEnd = jest.fn();
    render(<AsideShell onResizeEnd={onResizeEnd} />);

    drag(screen.getByRole('separator'), -50);

    expect(onResizeEnd).toHaveBeenCalledWith({ aside: 350 });
  });

  it('clears the inline fast path variables after the commit', () => {
    mockSectionSize(300, 800);
    const { container } = render(<CallbackShell />);
    const root = container.querySelector('.mantine-AppShell-root') as HTMLElement;
    const handle = screen.getByRole('separator');

    fireEvent.pointerDown(handle, { button: 0, clientX: 0, clientY: 0 });
    fireEvent.pointerMove(document, { clientX: 50, clientY: 0 });

    expect(root.style.getPropertyValue('--app-shell-navbar-width')).not.toBe('');
    expect(root.style.getPropertyValue('--app-shell-navbar-offset')).not.toBe('');

    fireEvent.pointerUp(document, { clientX: 50, clientY: 0 });

    expect(root.style.getPropertyValue('--app-shell-navbar-width')).toBe('');
    expect(root.style.getPropertyValue('--app-shell-navbar-offset')).toBe('');
  });

  it('sets the body cursor during a drag and restores the prior inline style after', () => {
    mockSectionSize(300, 800);
    render(<CallbackShell />);
    const handle = screen.getByRole('separator');

    document.body.style.setProperty('user-select', 'text');

    fireEvent.pointerDown(handle, { button: 0, clientX: 0, clientY: 0 });
    fireEvent.pointerMove(document, { clientX: 50, clientY: 0 });

    expect(document.body.style.getPropertyValue('user-select')).toBe('none');
    expect(document.body.style.getPropertyValue('cursor')).toBe('col-resize');

    fireEvent.pointerUp(document, { clientX: 50, clientY: 0 });

    expect(document.body.style.getPropertyValue('user-select')).toBe('text');
    expect(document.body.style.getPropertyValue('cursor')).toBe('');
  });

  it('cancels an in-progress drag when the handle unmounts mid-drag', () => {
    mockSectionSize(300, 800);
    const controllerRef: ControllerRef = { current: null };
    const { rerender } = render(<ToggleNavbarShell showNavbar controllerRef={controllerRef} />);

    fireEvent.pointerDown(screen.getByRole('separator'), { button: 0, clientX: 0, clientY: 0 });
    fireEvent.pointerMove(document, { clientX: 50, clientY: 0 });

    expect(controllerRef.current?.activeSection).toBe('navbar');

    rerender(
      <>
        <ToggleNavbarShell showNavbar={false} controllerRef={controllerRef} />
      </>
    );

    expect(controllerRef.current?.activeSection).toBeNull();
  });

  it('does not cancel another section drag when an idle handle unmounts', () => {
    mockSectionSize(300, 800);
    const controllerRef: ControllerRef = { current: null };
    const { rerender } = render(<DualSectionShell showNavbar controllerRef={controllerRef} />);

    const asideHandle = screen
      .getAllByRole('separator')
      .find((handle) => handle.getAttribute('data-section') === 'aside')!;

    fireEvent.pointerDown(asideHandle, { button: 0, clientX: 0, clientY: 0 });
    fireEvent.pointerMove(document, { clientX: -50, clientY: 0 });

    expect(controllerRef.current?.activeSection).toBe('aside');

    rerender(
      <>
        <DualSectionShell showNavbar={false} controllerRef={controllerRef} />
      </>
    );

    expect(controllerRef.current?.activeSection).toBe('aside');
  });

  it('cancels the drag on Escape and restores the starting size', () => {
    mockSectionSize(300, 800);
    const onResizeEnd = jest.fn();
    const { container } = render(<CallbackShell onResizeEnd={onResizeEnd} />);
    const root = container.querySelector('.mantine-AppShell-root') as HTMLElement;
    const handle = screen.getByRole('separator');

    fireEvent.pointerDown(handle, { button: 0, clientX: 0, clientY: 0 });
    fireEvent.pointerMove(document, { clientX: 60, clientY: 0 });
    fireEvent.keyDown(document, { key: 'Escape' });

    expect(onResizeEnd).not.toHaveBeenCalled();
    expect(root.style.getPropertyValue('--app-shell-navbar-width')).toBe('');
    expect(handle).toHaveAttribute('aria-valuenow', '300');
  });

  it('restores the committed aria-valuenow when Escape cancels a second drag', () => {
    const sizeMock = mockSectionSize(300, 800);
    const onResizeEnd = jest.fn();
    render(<CallbackShell onResizeEnd={onResizeEnd} />);
    const handle = screen.getByRole('separator');

    drag(handle, 50);
    expect(handle).toHaveAttribute('aria-valuenow', '350');

    sizeMock.mockReturnValue({
      width: 350,
      height: 800,
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      x: 0,
      y: 0,
    } as any);

    fireEvent.pointerDown(handle, { button: 0, clientX: 0, clientY: 0 });
    fireEvent.pointerMove(document, { clientX: 60, clientY: 0 });
    fireEvent.keyDown(document, { key: 'Escape' });

    expect(onResizeEnd).toHaveBeenCalledTimes(1);
    expect(handle).toHaveAttribute('aria-valuenow', '350');
  });

  it('resizes with the keyboard', () => {
    mockSectionSize(300, 800);
    const onResizeEnd = jest.fn();
    render(<CallbackShell onResizeEnd={onResizeEnd} />);
    const handle = screen.getByRole('separator');

    fireEvent.keyDown(handle, { key: 'ArrowRight' });
    expect(onResizeEnd).toHaveBeenLastCalledWith({ navbar: 310 });

    fireEvent.keyDown(handle, { key: 'ArrowLeft', shiftKey: true });
    expect(onResizeEnd).toHaveBeenLastCalledWith({ navbar: 260 });

    fireEvent.keyDown(handle, { key: 'Home' });
    expect(onResizeEnd).toHaveBeenLastCalledWith({ navbar: 100 });

    fireEvent.keyDown(handle, { key: 'End' });
    expect(onResizeEnd).toHaveBeenLastCalledWith({ navbar: 500 });
  });

  it('ignores keys on the other axis', () => {
    mockSectionSize(300, 800);
    const onResizeEnd = jest.fn();
    render(<CallbackShell onResizeEnd={onResizeEnd} />);

    fireEvent.keyDown(screen.getByRole('separator'), { key: 'ArrowDown' });

    expect(onResizeEnd).not.toHaveBeenCalled();
  });

  it('resets the section on double click', () => {
    mockSectionSize(300, 800);
    render(<CallbackShell />);
    const handle = screen.getByRole('separator');

    drag(handle, 50);
    expect(handle).toHaveAttribute('aria-valuenow', '350');

    fireEvent.doubleClick(handle);
    expect(handle).toHaveAttribute('aria-valuenow', '300');
  });

  it('remeasures aria-valuenow after reset instead of keeping the stale mount-time value', () => {
    const sizeMock = mockSectionSize(300, 800);
    render(<CallbackShell />);
    const handle = screen.getByRole('separator');
    expect(handle).toHaveAttribute('aria-valuenow', '300');

    drag(handle, 50);
    expect(handle).toHaveAttribute('aria-valuenow', '350');

    sizeMock.mockReturnValue({
      width: 420,
      height: 800,
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      x: 0,
      y: 0,
    } as any);

    fireEvent.doubleClick(handle);
    expect(handle).toHaveAttribute('aria-valuenow', '420');
  });

  it('does not commit a size from either click of a full double-click sequence', () => {
    mockSectionSize(300, 800);
    const onResizeEnd = jest.fn();
    render(<CallbackShell onResizeEnd={onResizeEnd} />);
    const handle = screen.getByRole('separator');

    drag(handle, 50);
    expect(onResizeEnd).toHaveBeenCalledTimes(1);
    expect(handle).toHaveAttribute('aria-valuenow', '350');

    fireEvent.pointerDown(handle, { button: 0, clientX: 0, clientY: 0 });
    fireEvent.pointerUp(document, { clientX: 0, clientY: 0 });
    fireEvent.pointerDown(handle, { button: 0, clientX: 0, clientY: 0 });
    fireEvent.pointerUp(document, { clientX: 0, clientY: 0 });
    fireEvent.doubleClick(handle);

    expect(onResizeEnd).toHaveBeenCalledTimes(1);
    expect(handle).toHaveAttribute('aria-valuenow', '300');
  });

  it('reports collapse threshold crossings once per direction', () => {
    mockSectionSize(300, 800);
    const onCollapseChange = jest.fn();
    render(<CallbackShell collapseThreshold={120} min={0} onCollapseChange={onCollapseChange} />);

    fireEvent.pointerDown(screen.getByRole('separator'), { button: 0, clientX: 0, clientY: 0 });
    fireEvent.pointerMove(document, { clientX: -250 });
    fireEvent.pointerMove(document, { clientX: -260 });
    fireEvent.pointerMove(document, { clientX: 0 });
    fireEvent.pointerUp(document, { clientX: 0 });

    expect(onCollapseChange).toHaveBeenCalledTimes(2);
    expect(onCollapseChange).toHaveBeenNthCalledWith(1, 'navbar', true);
    expect(onCollapseChange).toHaveBeenNthCalledWith(2, 'navbar', false);
  });

  it('reports collapse using the unclamped size, not the clamped size', () => {
    mockSectionSize(300, 800);
    const onCollapseChange = jest.fn();
    render(<CallbackShell collapseThreshold={120} min={130} onCollapseChange={onCollapseChange} />);

    drag(screen.getByRole('separator'), -260);

    expect(onCollapseChange).toHaveBeenCalledTimes(1);
    expect(onCollapseChange).toHaveBeenCalledWith('navbar', true);
  });

  it('does not report a collapse change when the drag never crosses the threshold', () => {
    mockSectionSize(300, 800);
    const onCollapseChange = jest.fn();
    render(<CallbackShell collapseThreshold={120} min={0} onCollapseChange={onCollapseChange} />);

    drag(screen.getByRole('separator'), 10);

    expect(onCollapseChange).not.toHaveBeenCalled();
  });

  it('clamps to the viewport when max is not set', () => {
    mockSectionSize(300, 800);
    const originalInnerWidth = window.innerWidth;
    window.innerWidth = 700;

    try {
      const onResizeEnd = jest.fn();
      render(<CallbackShell max={undefined} onResizeEnd={onResizeEnd} />);

      drag(screen.getByRole('separator'), 5000);

      expect(onResizeEnd).toHaveBeenCalledWith({ navbar: 700 });
    } finally {
      window.innerWidth = originalInnerWidth;
    }
  });

  it('commits sizes in configuration units under a custom theme scale', () => {
    mockSectionSize(600, 800);
    const onResizeEnd = jest.fn();
    render(
      <MantineProvider theme={{ scale: 2 }}>
        <CallbackShell max={1000} onResizeEnd={onResizeEnd} />
      </MantineProvider>
    );

    drag(screen.getByRole('separator'), 100);

    expect(onResizeEnd).toHaveBeenCalledWith({ navbar: 350 });
  });

  it('subtracts the footer safe-area inset from the measured size when dragging', () => {
    mockSectionSize(800, 300);
    const onResizeEnd = jest.fn();
    render(<FooterShell onResizeEnd={onResizeEnd} />);
    const handle = screen.getByRole('separator');
    const footerElement = handle.parentElement as HTMLElement;
    footerElement.style.setProperty('--app-shell-footer-safe-area', '20px');

    drag(handle, 0, -50);

    expect(onResizeEnd).toHaveBeenCalledWith({ footer: 330 });
  });

  it('subtracts the footer safe-area inset from the measured size when stepping via keyboard', () => {
    mockSectionSize(800, 300);
    const onResizeEnd = jest.fn();
    render(<FooterShell onResizeEnd={onResizeEnd} />);
    const handle = screen.getByRole('separator');
    const footerElement = handle.parentElement as HTMLElement;
    footerElement.style.setProperty('--app-shell-footer-safe-area', '20px');

    fireEvent.keyDown(handle, { key: 'ArrowUp' });

    expect(onResizeEnd).toHaveBeenCalledWith({ footer: 290 });
  });

  it('renders the same aria-valuemax on the server and during hydration', async () => {
    const originalInnerWidth = window.innerWidth;
    const container = document.createElement('div');
    document.body.appendChild(container);
    const errorSpy = jest.spyOn(console, 'error').mockImplementation(() => {});
    const ui = (
      <MantineProvider>
        <CallbackShell max={5000} />
      </MantineProvider>
    );
    let root: Root | null = null;

    try {
      window.innerWidth = 0;
      container.innerHTML = renderToString(ui);
      expect(container.querySelector('[role="separator"]')).toHaveAttribute('aria-valuemax', '0');

      window.innerWidth = 400;
      await act(async () => {
        root = hydrateRoot(container, ui);
      });

      expect(errorSpy).not.toHaveBeenCalled();
      expect(container.querySelector('[role="separator"]')).toHaveAttribute('aria-valuemax', '400');
    } finally {
      await act(async () => {
        root?.unmount();
      });
      window.innerWidth = originalInnerWidth;
      errorSpy.mockRestore();
      container.remove();
    }
  });

  it('calls the latest onResizeEnd when the callback changes during a drag', () => {
    mockSectionSize(300, 800);
    const spy = jest.fn();

    function StatefulShell() {
      const [label, setLabel] = useState('a');
      const resize = useAppShellResize({
        navbar: { min: 100, max: 500 },
        onResizeEnd: (sizes) => spy(label, sizes),
      });

      return (
        <>
          <button type="button" onClick={() => setLabel('b')}>
            relabel
          </button>
          <AppShell resize={resize} navbar={{ width: 300, breakpoint: 'sm' }}>
            <AppShell.Navbar>navbar</AppShell.Navbar>
          </AppShell>
        </>
      );
    }

    render(<StatefulShell />);

    fireEvent.pointerDown(screen.getByRole('separator'), { button: 0, clientX: 0, clientY: 0 });
    fireEvent.click(screen.getByText('relabel'));
    fireEvent.pointerMove(document, { clientX: 50, clientY: 0 });
    fireEvent.pointerUp(document, { clientX: 50, clientY: 0 });

    expect(spy).toHaveBeenCalledTimes(1);
    expect(spy).toHaveBeenCalledWith('b', { navbar: 350 });
  });

  it('reports collapse when a keyboard step crosses the threshold', () => {
    mockSectionSize(300, 800);
    const onCollapseChange = jest.fn();
    render(<CallbackShell collapseThreshold={120} min={0} onCollapseChange={onCollapseChange} />);
    const handle = screen.getByRole('separator');

    fireEvent.keyDown(handle, { key: 'ArrowLeft' });
    expect(onCollapseChange).not.toHaveBeenCalled();

    fireEvent.keyDown(handle, { key: 'Home' });
    expect(onCollapseChange).toHaveBeenCalledTimes(1);
    expect(onCollapseChange).toHaveBeenCalledWith('navbar', true);

    fireEvent.keyDown(handle, { key: 'End' });
    expect(onCollapseChange).toHaveBeenCalledTimes(2);
    expect(onCollapseChange).toHaveBeenLastCalledWith('navbar', false);
  });

  it('reports keyboard collapse using the unclamped size', () => {
    mockSectionSize(125, 800);
    const onResizeEnd = jest.fn();
    const onCollapseChange = jest.fn();
    render(
      <CallbackShell
        collapseThreshold={120}
        min={130}
        onResizeEnd={onResizeEnd}
        onCollapseChange={onCollapseChange}
      />
    );

    fireEvent.keyDown(screen.getByRole('separator'), { key: 'ArrowLeft' });

    expect(onResizeEnd).toHaveBeenCalledWith({ navbar: 130 });
    expect(onCollapseChange).toHaveBeenCalledTimes(1);
    expect(onCollapseChange).toHaveBeenCalledWith('navbar', true);
  });

  it('remeasures aria-valuenow when the window is resized', () => {
    const sizeMock = mockSectionSize(300, 800);
    const originalInnerWidth = window.innerWidth;
    window.innerWidth = 1000;

    try {
      render(<MinimalShell />);
      const handle = screen.getByRole('separator');
      expect(handle).toHaveAttribute('aria-valuenow', '300');

      sizeMock.mockReturnValue({
        width: 375,
        height: 800,
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        x: 0,
        y: 0,
      } as any);
      window.innerWidth = 500;
      fireEvent(window, new Event('resize'));

      expect(handle).toHaveAttribute('aria-valuenow', '375');
    } finally {
      window.innerWidth = originalInnerWidth;
    }
  });

  it('uses the label option as the accessible name and links the handle to its section', () => {
    function LabelShell() {
      const resize = useAppShellResize({ navbar: { label: 'Sidebar width' } });
      return (
        <AppShell resize={resize} navbar={{ width: 300, breakpoint: 'sm' }}>
          <AppShell.Navbar id="test-navbar">navbar</AppShell.Navbar>
        </AppShell>
      );
    }

    render(<LabelShell />);
    const handle = screen.getByRole('separator', { name: 'Sidebar width' });

    expect(handle).toHaveAttribute('aria-controls', 'test-navbar');
    expect(handle.parentElement).toHaveAttribute('id', 'test-navbar');
  });

  it('generates a section id for aria-controls when the section has none', () => {
    render(<Shell />);
    const handle = screen.getByRole('separator', { name: 'Resize navbar' });
    const controls = handle.getAttribute('aria-controls');

    expect(controls).toBeTruthy();
    expect(handle.parentElement).toHaveAttribute('id', controls!);
  });

  it('inverts the pointer delta in rtl direction', () => {
    mockSectionSize(300, 800);
    const onResizeEnd = jest.fn();
    render(
      <DirectionProvider initialDirection="rtl" detectDirection={false}>
        <CallbackShell onResizeEnd={onResizeEnd} />
      </DirectionProvider>
    );

    drag(screen.getByRole('separator'), 50);

    expect(onResizeEnd).toHaveBeenCalledWith({ navbar: 250 });
  });

  it('inverts the arrow keys in rtl direction', () => {
    mockSectionSize(300, 800);
    const onResizeEnd = jest.fn();
    render(
      <DirectionProvider initialDirection="rtl" detectDirection={false}>
        <CallbackShell onResizeEnd={onResizeEnd} />
      </DirectionProvider>
    );

    fireEvent.keyDown(screen.getByRole('separator'), { key: 'ArrowRight' });

    expect(onResizeEnd).toHaveBeenCalledWith({ navbar: 290 });
  });

  it('resizes the header vertically', () => {
    mockSectionSize(1000, 60);
    const onResizeEnd = jest.fn();
    render(<HeaderShell min={40} max={500} onResizeEnd={onResizeEnd} />);
    const handle = screen.getByRole('separator');

    expect(handle).toHaveAttribute('data-section', 'header');
    expect(handle).toHaveAttribute('aria-orientation', 'horizontal');

    drag(handle, 0, 30);

    expect(onResizeEnd).toHaveBeenCalledWith({ header: 90 });
  });

  it('applies classNames and styles to the resizeHandle selector', () => {
    function StyledShell() {
      const resize = useAppShellResize({ navbar: { min: 100, max: 500 } });
      return (
        <AppShell
          resize={resize}
          navbar={{ width: 300, breakpoint: 'sm' }}
          classNames={{ resizeHandle: 'test-handle' }}
          styles={{ resizeHandle: { opacity: 0.5 } }}
        >
          <AppShell.Navbar>navbar</AppShell.Navbar>
        </AppShell>
      );
    }

    render(<StyledShell />);
    const handle = screen.getByRole('separator');

    expect(handle).toHaveClass('test-handle');
    expect(handle).toHaveClass('mantine-AppShell-resizeHandle');
    expect(handle).toHaveStyle({ opacity: '0.5' });
  });

  it('sets data-orientation and toggles data-active during a drag', () => {
    mockSectionSize(300, 800);
    render(<CallbackShell />);
    const handle = screen.getByRole('separator');

    expect(handle).toHaveAttribute('data-orientation', 'vertical');
    expect(handle).not.toHaveAttribute('data-active');

    fireEvent.pointerDown(handle, { button: 0, clientX: 0, clientY: 0 });
    expect(handle).toHaveAttribute('data-active');

    fireEvent.pointerMove(document, { clientX: 50, clientY: 0 });
    fireEvent.pointerUp(document, { clientX: 50, clientY: 0 });
    expect(handle).not.toHaveAttribute('data-active');
  });

  it('does not write the offset variable during a drag when the section offset is disabled', () => {
    mockSectionSize(1000, 60);

    function OffsetShell() {
      const resize = useAppShellResize({ header: { min: 40, max: 500 } });
      return (
        <AppShell resize={resize} header={{ height: 60, offset: false }}>
          <AppShell.Header>header</AppShell.Header>
        </AppShell>
      );
    }

    const { container } = render(<OffsetShell />);
    const root = container.querySelector('.mantine-AppShell-root') as HTMLElement;
    const handle = screen.getByRole('separator');

    fireEvent.pointerDown(handle, { button: 0, clientX: 0, clientY: 0 });
    fireEvent.pointerMove(document, { clientX: 0, clientY: 30 });

    expect(root.style.getPropertyValue('--app-shell-header-height')).toBe(rem(90));
    expect(root.style.getPropertyValue('--app-shell-header-offset')).toBe('');

    fireEvent.pointerUp(document, { clientX: 0, clientY: 30 });
  });

  it('measures the section element rather than the handle when a drag starts', () => {
    const onResizeEnd = jest.fn();
    render(<CallbackShell onResizeEnd={onResizeEnd} />);
    const handle = screen.getByRole('separator');
    const sectionSpy = jest
      .spyOn(handle.parentElement as HTMLElement, 'getBoundingClientRect')
      .mockReturnValue({
        width: 300,
        height: 800,
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        x: 0,
        y: 0,
      } as any);

    drag(handle, 50);

    expect(sectionSpy).toHaveBeenCalled();
    expect(onResizeEnd).toHaveBeenCalledWith({ navbar: 350 });
  });
});
