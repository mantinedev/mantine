import { act, fireEvent } from '@testing-library/react';
import { render, screen, tests } from '@mantine-tests/core';
import { rem } from '../../core';
import { AppShell, AppShellProps, AppShellStylesNames } from './AppShell';
import type { AppShellResizeController } from './AppShell.types';
import { useAppShellResize } from './use-app-shell-resize/use-app-shell-resize';

if (typeof PointerEvent === 'undefined') {
  (global as any).PointerEvent = class PointerEvent extends MouseEvent {
    pointerId: number;

    constructor(type: string, init: PointerEventInit & { pointerId?: number } = {}) {
      super(type, init);
      this.pointerId = init.pointerId ?? 0;
    }
  };
}

const defaultProps: AppShellProps = {};

function TestShell(props: Partial<AppShellProps>) {
  const resize = useAppShellResize({ navbar: { min: 100, max: 500 } });
  return <AppShell resize={resize} navbar={{ width: 300, breakpoint: 'sm' }} {...props} />;
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

function getInlineStyles() {
  return Array.from(document.querySelectorAll('style[data-mantine-styles="inline"]'))
    .map((element) => element.innerHTML)
    .join('');
}

describe('@mantine/core/AppShell', () => {
  afterEach(() => {
    jest.restoreAllMocks();
  });

  tests.itSupportsSystemProps<AppShellProps, AppShellStylesNames>({
    component: AppShell,
    props: defaultProps,
    varsResolver: true,
    children: true,
    displayName: '@mantine/core/AppShell',
    stylesApiSelectors: ['root'],
  });

  it('sets data-layout attribute based on layout prop', () => {
    const { container } = render(<AppShell layout="alt" />);
    expect(container.querySelector('.mantine-AppShell-root')).toHaveAttribute('data-layout', 'alt');
  });

  it('sets data-disabled attribute based on disabled prop', () => {
    const { container, rerender } = render(<AppShell disabled />);
    expect(container.querySelector('.mantine-AppShell-root')).toHaveAttribute('data-disabled');

    rerender(<AppShell disabled={false} />);
    expect(container.querySelector('.mantine-AppShell-root')).not.toHaveAttribute('data-disabled');
  });

  it('scopes generated styles to the shell id when a resize controller is given', () => {
    const { container } = render(<TestShell />);
    const shellId = container.querySelector('.mantine-AppShell-root')!.getAttribute('id');
    const styles = Array.from(document.querySelectorAll('style[data-mantine-styles="inline"]'))
      .map((element) => element.innerHTML)
      .join('');

    expect(styles).toContain(`#${shellId}`);
  });

  it('sets data-resizing while a section is being resized', () => {
    jest.useFakeTimers();

    function ActiveShell() {
      const resize = useAppShellResize({ navbar: {} });
      return (
        <>
          <button type="button" onClick={() => resize.startResize('navbar')}>
            start
          </button>
          <AppShell resize={resize} navbar={{ width: 300, breakpoint: 'sm' }} />
        </>
      );
    }

    try {
      const { container } = render(<ActiveShell />);

      act(() => {
        jest.advanceTimersByTime(300);
      });

      expect(container.querySelector('.mantine-AppShell-root')).not.toHaveAttribute(
        'data-resizing'
      );

      fireEvent.click(screen.getByText('start'));
      expect(container.querySelector('.mantine-AppShell-root')).toHaveAttribute('data-resizing');
    } finally {
      jest.useRealTimers();
    }
  });

  it('escapes the shell id in the generated stylesheet selector', () => {
    render(<TestShell id="app:shell" />);
    expect(getInlineStyles()).toContain('#app\\:shell{');
  });

  it('escapes the shell id in the generated stylesheet selector in static mode', () => {
    render(<AppShell id="app.shell" mode="static" navbar={{ width: 300, breakpoint: 'sm' }} />);
    expect(getInlineStyles()).toContain('#app\\.shell{');
  });

  it('writes the committed size to the generated stylesheet', () => {
    mockSectionSize(300, 800);
    render(
      <TestShell>
        <AppShell.Navbar>navbar</AppShell.Navbar>
      </TestShell>
    );

    expect(getInlineStyles()).toContain(`--app-shell-navbar-width:${rem(300)}`);

    drag(screen.getByRole('separator'), 50);

    const styles = getInlineStyles();
    expect(styles).toContain(`--app-shell-navbar-width:min(${rem(350)}`);
    expect(styles).not.toContain(`--app-shell-navbar-width:${rem(300)}`);
  });

  it('writes initialSizes to the generated stylesheet and the handle', () => {
    mockSectionSize(300, 800);

    function InitialSizesShell() {
      const resize = useAppShellResize({
        navbar: { min: 100, max: 500 },
        initialSizes: { navbar: 420 },
      });

      return (
        <AppShell resize={resize} navbar={{ width: 300, breakpoint: 'sm' }}>
          <AppShell.Navbar>navbar</AppShell.Navbar>
        </AppShell>
      );
    }

    render(<InitialSizesShell />);

    expect(getInlineStyles()).toContain(`--app-shell-navbar-width:min(${rem(420)}`);
    expect(screen.getByRole('separator')).toHaveAttribute('aria-valuenow', '420');
  });

  it('hides the resize handle below the navbar breakpoint in the generated stylesheet', () => {
    render(
      <TestShell>
        <AppShell.Navbar>navbar</AppShell.Navbar>
      </TestShell>
    );

    expect(getInlineStyles()).toMatch(
      /@media\(max-width:[^)]+\)\{#[^{]+\{[^}]*--app-shell-navbar-resize-handle-display:none/
    );
  });

  it('sets data-resizing while a keyboard or programmatic size commit settles', () => {
    jest.useFakeTimers();
    mockSectionSize(300, 800);
    const controllerRef: { current: AppShellResizeController | null } = { current: null };

    function SettlingShell() {
      const resize = useAppShellResize({ navbar: { min: 100, max: 500 } });
      controllerRef.current = resize;

      return (
        <AppShell resize={resize} navbar={{ width: 300, breakpoint: 'sm' }}>
          <AppShell.Navbar>navbar</AppShell.Navbar>
        </AppShell>
      );
    }

    try {
      const { container } = render(<SettlingShell />);
      const root = container.querySelector('.mantine-AppShell-root') as HTMLElement;

      act(() => {
        jest.advanceTimersByTime(300);
      });
      expect(root).not.toHaveAttribute('data-resizing');

      fireEvent.keyDown(screen.getByRole('separator'), { key: 'ArrowRight' });
      expect(root).toHaveAttribute('data-resizing');
      expect(getInlineStyles()).toContain(`--app-shell-navbar-width:min(${rem(310)}`);

      act(() => {
        jest.advanceTimersByTime(300);
      });
      expect(root).not.toHaveAttribute('data-resizing');

      act(() => controllerRef.current!.resetAll());
      expect(root).toHaveAttribute('data-resizing');
      expect(getInlineStyles()).toContain(`--app-shell-navbar-width:${rem(300)}`);

      act(() => {
        jest.advanceTimersByTime(300);
      });
      expect(root).not.toHaveAttribute('data-resizing');
    } finally {
      jest.useRealTimers();
    }
  });
});
