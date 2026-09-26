import { useState } from 'react';
import { act, fireEvent, waitFor } from '@testing-library/react';
import {
  createContextContainer,
  mockMatchMedia,
  render,
  screen,
  tests,
  userEvent,
} from '@mantine-tests/core';
import { Modal } from '../Modal';
import { Drawer, DrawerProps, DrawerStylesNames } from './Drawer';
import { DrawerBody, DrawerBodyProps } from './DrawerBody';
import { DrawerCloseButton, DrawerCloseButtonProps } from './DrawerCloseButton';
import { DrawerContent, DrawerContentProps } from './DrawerContent';
import { DrawerFooter, DrawerFooterProps } from './DrawerFooter';
import { DrawerHeader, DrawerHeaderProps } from './DrawerHeader';
import { DrawerOverlay, DrawerOverlayProps } from './DrawerOverlay';
import { DrawerRoot, DrawerRootProps } from './DrawerRoot';
import { DrawerTitle, DrawerTitleProps } from './DrawerTitle';
import { useDrawersStack } from './use-drawers-stack';

const defaultProps: DrawerProps = {
  opened: true,
  onClose: () => {},
  title: 'test-title',
  withinPortal: false,
};

const createDrawerContextContainer = (component: any) =>
  createContextContainer(component, DrawerRoot, defaultProps);

const BodyContainer = createDrawerContextContainer(DrawerBody);
const CloseButtonContainer = createDrawerContextContainer(DrawerCloseButton);
const ContentContainer = createDrawerContextContainer(DrawerContent);
const HeaderContainer = createDrawerContextContainer(DrawerHeader);
const FooterContainer = createDrawerContextContainer(DrawerFooter);
const OverlayContainer = createDrawerContextContainer(DrawerOverlay);
const TitleContainer = createDrawerContextContainer(DrawerTitle);

describe('@mantine/core/Drawer', () => {
  tests.itSupportsSystemProps<DrawerProps, DrawerStylesNames>({
    component: Drawer,
    props: defaultProps,
    children: true,
    displayName: '@mantine/core/Drawer',
    stylesApiSelectors: ['root', 'body', 'close', 'content', 'header', 'inner', 'overlay', 'title'],
    selector: '.mantine-Drawer-root',
    variantSelector: '.mantine-Drawer-root',
    sizeSelector: '.mantine-Drawer-root',
  });

  it('does not render overlay when withOverlay is false', () => {
    const { container, rerender } = render(<Drawer {...defaultProps} withOverlay={false} />);
    expect(container.querySelector('.mantine-Drawer-overlay')).not.toBeInTheDocument();

    rerender(<Drawer {...defaultProps} withOverlay />);
    expect(container.querySelector('.mantine-Drawer-overlay')).toBeInTheDocument();
  });

  it('does not render header if title and withCloseButton are not provided', () => {
    const { container, rerender } = render(
      <Drawer {...defaultProps} title={null} withCloseButton />
    );
    expect(container.querySelector('.mantine-Drawer-header')).toBeInTheDocument();

    rerender(<Drawer {...defaultProps} withCloseButton={false} title="test-title" />);
    expect(container.querySelector('.mantine-Drawer-header')).toBeInTheDocument();

    rerender(<Drawer {...defaultProps} withCloseButton={false} title={null} />);
    expect(container.querySelector('.mantine-Drawer-header')).not.toBeInTheDocument();
  });

  it('renders given title', () => {
    const { container } = render(<Drawer {...defaultProps} title="test-title" />);
    expect(container.querySelector('.mantine-Drawer-title')).toHaveTextContent('test-title');
  });

  it('renders Drawer.Footer content', () => {
    render(
      <Drawer opened onClose={() => {}} withinPortal={false}>
        <Drawer.Footer>footer-content</Drawer.Footer>
      </Drawer>
    );
    expect(screen.getByText('footer-content')).toBeInTheDocument();
  });

  it('sets data-sticky on header by default and removes it when stickyHeader is false', () => {
    const { container, rerender } = render(
      <Drawer.Root opened onClose={() => {}} withinPortal={false}>
        <Drawer.Content>
          <Drawer.Header>header</Drawer.Header>
          <Drawer.Body>body</Drawer.Body>
        </Drawer.Content>
      </Drawer.Root>
    );
    expect(container.querySelector('.mantine-Drawer-header')).toHaveAttribute('data-sticky');

    rerender(
      <Drawer.Root opened onClose={() => {}} withinPortal={false} stickyHeader={false}>
        <Drawer.Content>
          <Drawer.Header>header</Drawer.Header>
          <Drawer.Body>body</Drawer.Body>
        </Drawer.Content>
      </Drawer.Root>
    );
    expect(container.querySelector('.mantine-Drawer-header')).not.toHaveAttribute('data-sticky');
  });

  it('sets data-sticky on footer by default and removes it when stickyFooter is false', () => {
    const { container, rerender } = render(
      <Drawer.Root opened onClose={() => {}} withinPortal={false}>
        <Drawer.Content>
          <Drawer.Body>body</Drawer.Body>
          <Drawer.Footer>footer</Drawer.Footer>
        </Drawer.Content>
      </Drawer.Root>
    );
    expect(container.querySelector('.mantine-Drawer-footer')).toHaveAttribute('data-sticky');

    rerender(
      <Drawer.Root opened onClose={() => {}} withinPortal={false} stickyFooter={false}>
        <Drawer.Content>
          <Drawer.Body>body</Drawer.Body>
          <Drawer.Footer>footer</Drawer.Footer>
        </Drawer.Content>
      </Drawer.Root>
    );
    expect(container.querySelector('.mantine-Drawer-footer')).not.toHaveAttribute('data-sticky');
  });

  it('exposes compound components', () => {
    expect(Drawer.Root).toBe(DrawerRoot);
    expect(Drawer.Overlay).toBe(DrawerOverlay);
    expect(Drawer.Content).toBe(DrawerContent);
    expect(Drawer.Body).toBe(DrawerBody);
    expect(Drawer.Header).toBe(DrawerHeader);
    expect(Drawer.Footer).toBe(DrawerFooter);
    expect(Drawer.Title).toBe(DrawerTitle);
    expect(Drawer.CloseButton).toBe(DrawerCloseButton);
  });

  it('applies display: none style when keepMountedMode is display-none and opened is false (transitionDuration is 0)', () => {
    const { container } = render(
      <Drawer
        {...defaultProps}
        opened={false}
        keepMounted
        keepMountedMode="display-none"
        transitionProps={{ duration: 0 }}
      />,
      undefined,
      { env: 'default' }
    );

    expect(container.querySelector('.mantine-Drawer-panel')).toHaveStyle({
      display: 'none',
    });
  });

  it('does not apply display: none style when keepMountedMode is activity and opened is false (transitionDuration is 0)', () => {
    const { container } = render(
      <Drawer
        {...defaultProps}
        opened={false}
        keepMounted
        keepMountedMode="activity"
        transitionProps={{ duration: 0 }}
      />,
      undefined,
      { env: 'default' }
    );

    expect(container.querySelector('.mantine-Drawer-panel')).not.toHaveStyle({
      display: 'none',
    });
  });
});

describe('@mantine/core/DrawerRoot', () => {
  tests.itSupportsSystemProps<DrawerRootProps, 'root'>({
    component: DrawerRoot,
    props: defaultProps,
    varsResolver: true,
    children: true,
    displayName: '@mantine/core/DrawerRoot',
    stylesApiSelectors: ['root'],
    selector: '.mantine-Drawer-root',
    variantSelector: '.mantine-Drawer-root',
    sizeSelector: '.mantine-Drawer-root',
    stylesApiName: 'Drawer',
  });
});

describe('@mantine/core/DrawerBody', () => {
  tests.itSupportsSystemProps<DrawerBodyProps>({
    component: BodyContainer,
    props: {},
    children: true,
    displayName: '@mantine/core/DrawerBody',
    selector: '.mantine-Drawer-body',
    variantSelector: '.mantine-Drawer-body',
    sizeSelector: '.mantine-Drawer-body',
  });
});

describe('@mantine/core/DrawerCloseButton', () => {
  tests.itSupportsSystemProps<DrawerCloseButtonProps>({
    component: CloseButtonContainer,
    props: {},
    children: true,
    displayName: '@mantine/core/DrawerCloseButton',
    selector: '.mantine-Drawer-close',
    variantSelector: '.mantine-Drawer-close',
    sizeSelector: '.mantine-Drawer-close',
  });
});

describe('@mantine/core/DrawerContent', () => {
  tests.itSupportsSystemProps<DrawerContentProps>({
    component: ContentContainer,
    props: {},
    children: true,
    displayName: '@mantine/core/DrawerContent',
    selector: '.mantine-Drawer-content',
    variantSelector: '.mantine-Drawer-content',
    sizeSelector: '.mantine-Drawer-content',
  });
});

describe('@mantine/core/DrawerHeader', () => {
  tests.itSupportsSystemProps<DrawerHeaderProps>({
    component: HeaderContainer,
    props: {},
    children: true,
    displayName: '@mantine/core/DrawerHeader',
    selector: '.mantine-Drawer-header',
    variantSelector: '.mantine-Drawer-header',
    sizeSelector: '.mantine-Drawer-header',
  });
});

describe('@mantine/core/DrawerFooter', () => {
  tests.itSupportsSystemProps<DrawerFooterProps>({
    component: FooterContainer,
    props: {},
    children: true,
    displayName: '@mantine/core/DrawerFooter',
    selector: '.mantine-Drawer-footer',
    variantSelector: '.mantine-Drawer-footer',
    sizeSelector: '.mantine-Drawer-footer',
  });
});

describe('@mantine/core/DrawerOverlay', () => {
  tests.itSupportsSystemProps<DrawerOverlayProps>({
    component: OverlayContainer,
    props: {},
    children: true,
    displayName: '@mantine/core/DrawerOverlay',
    selector: '.mantine-Drawer-overlay',
    variantSelector: '.mantine-Drawer-overlay',
    sizeSelector: '.mantine-Drawer-overlay',
  });
});

describe('@mantine/core/DrawerTitle', () => {
  tests.itSupportsSystemProps<DrawerTitleProps>({
    component: TitleContainer,
    props: {},
    children: true,
    displayName: '@mantine/core/DrawerTitle',
    selector: '.mantine-Drawer-title',
    variantSelector: '.mantine-Drawer-title',
    sizeSelector: '.mantine-Drawer-title',
  });
});

describe('@mantine/core/DrawerStack', () => {
  function StackDemo({ maxDepth }: { maxDepth?: number }) {
    const stack = useDrawersStack(['a', 'b', 'c']);
    return (
      <Drawer.Stack maxDepth={maxDepth}>
        <Drawer {...stack.register('a')} withinPortal={false}>
          drawer-a
        </Drawer>
        <Drawer {...stack.register('b')} withinPortal={false}>
          drawer-b
        </Drawer>
        <Drawer {...stack.register('c')} withinPortal={false}>
          drawer-c
        </Drawer>
        <button
          type="button"
          onClick={() => {
            stack.open('a');
            stack.open('b');
            stack.open('c');
          }}
        >
          open
        </button>
      </Drawer.Stack>
    );
  }

  it('keeps non-top stacked drawers mounted and visible', async () => {
    render(<StackDemo />);
    await userEvent.click(screen.getByText('open'));
    expect(screen.getByText('drawer-a')).toBeInTheDocument();
    expect(screen.getByText('drawer-b')).toBeInTheDocument();
    expect(screen.getByText('drawer-a').closest('[data-stack-hidden]')).toBeNull();
  });

  it('shifts and scales stacked drawer panels instead of the viewport layer', async () => {
    const { container } = render(<StackDemo />);
    await userEvent.click(screen.getByText('open'));

    const panels = Array.from(container.querySelectorAll<HTMLElement>('.mantine-Drawer-panel'));
    expect(panels).toHaveLength(3);

    expect(panels[2].style.translate).toBe('0px 0px');
    expect(panels[2].style.scale).toBe('1');
    expect(panels[1].style.translate).toBe('9px 0px');
    expect(panels[0].style.translate).toBe('18px 0px');
    expect(panels[0].style.transformOrigin).toBe('right center');

    const inners = Array.from(container.querySelectorAll<HTMLElement>('.mantine-Drawer-inner'));
    inners.forEach((inner) => expect(inner.style.transform).toBe(''));

    const contents = Array.from(container.querySelectorAll<HTMLElement>('.mantine-Drawer-content'));
    expect(contents[0].style.overflow).toBe('hidden');
    expect(contents[2].style.overflow).toBe('');
  });

  it('hides stacked items beyond maxDepth', async () => {
    const { container } = render(<StackDemo maxDepth={1} />);
    await userEvent.click(screen.getByText('open'));
    const inners = container.querySelectorAll('.mantine-Drawer-inner');
    const hidden = Array.from(inners).filter(
      (el) => el.hasAttribute('data-stack-hidden') || (el as HTMLElement).style.display === 'none'
    );
    expect(hidden.length).toBe(1);
  });
});

describe('@mantine/core/Drawer swipe', () => {
  const DRAWER_SIZE = 400;

  function makePointerEvent(type: string, clientY: number) {
    const event = new MouseEvent(type, { clientX: 0, clientY, bubbles: true });
    Object.defineProperty(event, 'pointerId', { value: 1, configurable: true });
    return event as unknown as PointerEvent;
  }

  function prepareContent(scrollTop = 0) {
    const content = screen.getByRole('dialog');
    Object.defineProperty(content, 'scrollTop', { value: scrollTop, configurable: true });
    content.getBoundingClientRect = () => ({ width: DRAWER_SIZE, height: DRAWER_SIZE }) as DOMRect;
    return content;
  }

  function swipe(target: HTMLElement, distance: number) {
    act(() => {
      fireEvent(target, makePointerEvent('pointerdown', 0));
    });
    act(() => {
      window.dispatchEvent(makePointerEvent('pointermove', distance));
    });
    act(() => {
      window.dispatchEvent(makePointerEvent('pointerup', distance));
    });
  }

  it('does not animate stacked panels while the top drawer is swiped', async () => {
    function SwipeStackDemo() {
      const stack = useDrawersStack(['a', 'b']);
      return (
        <Drawer.Stack>
          <Drawer {...stack.register('a')} withinPortal={false} position="bottom">
            drawer-a
          </Drawer>
          <Drawer {...stack.register('b')} withinPortal={false} position="bottom">
            drawer-b
          </Drawer>
          <button
            type="button"
            onClick={() => {
              stack.open('a');
              stack.open('b');
            }}
          >
            open
          </button>
        </Drawer.Stack>
      );
    }

    const { container } = render(<SwipeStackDemo />);
    await userEvent.click(screen.getByText('open'));

    const backPanel = () => container.querySelector<HTMLElement>('.mantine-Drawer-panel')!;
    expect(backPanel().style.translate).toBe('0px -9px');
    expect(backPanel().style.transitionProperty).toContain('translate');

    const top = screen.getByText('drawer-b').closest<HTMLElement>('[role="dialog"]')!;
    Object.defineProperty(top, 'scrollTop', { value: 0, configurable: true });
    top.getBoundingClientRect = () => ({ width: DRAWER_SIZE, height: DRAWER_SIZE }) as DOMRect;

    act(() => {
      fireEvent(top, makePointerEvent('pointerdown', 0));
    });
    act(() => {
      window.dispatchEvent(makePointerEvent('pointermove', 40));
    });

    expect(backPanel().style.translate).toBe('0px -8.1px');
    expect(backPanel().style.transitionProperty).not.toContain('translate');

    act(() => {
      window.dispatchEvent(makePointerEvent('pointerup', 40));
    });

    expect(backPanel().style.transitionProperty).toContain('translate');
  });

  it('closes when content is dragged past threshold (bottom position)', () => {
    const onClose = jest.fn();
    render(
      <Drawer opened onClose={onClose} withinPortal={false} position="bottom">
        content
      </Drawer>
    );

    const content = prepareContent(0);
    swipe(content, 200);

    expect(onClose).toHaveBeenCalledTimes(1);
  });

  it('closes on swipe even when trapFocus is false', () => {
    const onClose = jest.fn();
    render(
      <Drawer opened onClose={onClose} withinPortal={false} position="bottom" trapFocus={false}>
        content
      </Drawer>
    );

    const content = prepareContent(0);
    swipe(content, 200);

    expect(onClose).toHaveBeenCalledTimes(1);
  });

  it('does not close when withSwipe is false', () => {
    const onClose = jest.fn();
    render(
      <Drawer opened onClose={onClose} withinPortal={false} position="bottom" withSwipe={false}>
        content
      </Drawer>
    );

    const content = prepareContent(0);
    swipe(content, 200);

    expect(onClose).not.toHaveBeenCalled();
  });

  it('does not render the handle without withHandle', () => {
    const { container } = render(
      <Drawer opened onClose={() => {}} withinPortal={false} position="bottom">
        content
      </Drawer>
    );

    expect(container.querySelector('.mantine-Drawer-handle')).not.toBeInTheDocument();
  });

  it('renders the handle on the overlay as a sibling of the content when withHandle is set', () => {
    const { container } = render(
      <Drawer opened onClose={() => {}} withinPortal={false} position="bottom" withHandle>
        content
      </Drawer>
    );

    const handle = container.querySelector('.mantine-Drawer-handle') as HTMLElement;
    expect(handle).toBeInTheDocument();
    expect(handle).toHaveAttribute('data-position', 'bottom');

    const content = screen.getByRole('dialog');
    expect(handle.contains(content)).toBe(false);
    expect(content.contains(handle)).toBe(false);
  });

  it('closes when the handle is dragged past threshold even when scrolled', () => {
    const onClose = jest.fn();
    const { container } = render(
      <Drawer opened onClose={onClose} withinPortal={false} position="bottom" withHandle>
        content
      </Drawer>
    );

    prepareContent(100);
    swipe(container.querySelector('.mantine-Drawer-handle') as HTMLElement, 200);

    expect(onClose).toHaveBeenCalledTimes(1);
  });
});

describe('@mantine/core/Drawer snap points', () => {
  const DRAWER_SIZE = 400;

  it('renders the active snap point rest translate on the inner element when idle', () => {
    const originalGetBoundingClientRect = HTMLElement.prototype.getBoundingClientRect;
    HTMLElement.prototype.getBoundingClientRect = function getBoundingClientRect() {
      return { width: DRAWER_SIZE, height: DRAWER_SIZE } as DOMRect;
    };

    try {
      const { container } = render(
        <Drawer
          opened
          onClose={() => {}}
          withinPortal={false}
          position="bottom"
          snapPoints={[0.5, 1]}
          defaultActiveSnapPoint={0.5}
        >
          content
        </Drawer>
      );

      const inner = container.querySelector('.mantine-Drawer-inner') as HTMLElement;
      expect(inner.style.transform).toContain('translateY(200px)');
    } finally {
      HTMLElement.prototype.getBoundingClientRect = originalGetBoundingClientRect;
    }
  });
});

describe('@mantine/core/Drawer uncontrolled snap point reset', () => {
  const DRAWER_SIZE = 400;
  const originalGetBoundingClientRect = HTMLElement.prototype.getBoundingClientRect;

  beforeEach(() => {
    HTMLElement.prototype.getBoundingClientRect = function getBoundingClientRect() {
      return { width: DRAWER_SIZE, height: DRAWER_SIZE } as DOMRect;
    };
  });

  afterEach(() => {
    HTMLElement.prototype.getBoundingClientRect = originalGetBoundingClientRect;
  });

  function makePointerEvent(type: string, clientY: number, timeStamp: number) {
    const event = new MouseEvent(type, { clientY, button: 0, bubbles: true });
    Object.defineProperty(event, 'pointerId', { value: 1 });
    Object.defineProperty(event, 'timeStamp', { value: timeStamp });
    return event;
  }

  it.each([false, true])(
    'restores defaultActiveSnapPoint when reopened after dragging to another snap point (keepMounted: %s)',
    (keepMounted) => {
      const onSnapPointChange = jest.fn();
      const props = {
        onClose: () => {},
        withinPortal: false,
        position: 'bottom' as const,
        snapPoints: [0.5, 1],
        defaultActiveSnapPoint: 0.5,
        withHandle: true,
        keepMounted,
        onSnapPointChange,
        transitionProps: { duration: 0 },
      };

      const { container, rerender } = render(
        <Drawer {...props} opened>
          content
        </Drawer>
      );

      const inner = () => container.querySelector('.mantine-Drawer-inner') as HTMLElement;
      expect(inner().style.transform).toContain('translateY(200px)');

      const handle = container.querySelector('.mantine-Drawer-handle') as HTMLElement;
      act(() => {
        fireEvent(handle, makePointerEvent('pointerdown', 0, 0));
      });
      act(() => {
        window.dispatchEvent(makePointerEvent('pointermove', -250, 1000));
      });
      act(() => {
        window.dispatchEvent(makePointerEvent('pointerup', -250, 1000));
      });

      expect(onSnapPointChange).toHaveBeenCalledWith(1);
      expect(inner().style.transform).toBe('');

      rerender(
        <Drawer {...props} opened={false}>
          content
        </Drawer>
      );

      rerender(
        <Drawer {...props} opened>
          content
        </Drawer>
      );

      expect(inner().style.transform).toContain('translateY(200px)');
      expect(onSnapPointChange).toHaveBeenCalledTimes(1);
    }
  );
});

describe('@mantine/core/Drawer theme.overlayStack', () => {
  function SharedStackDemo() {
    const [a, setA] = useState(false);
    const [b, setB] = useState(false);

    return (
      <>
        <Drawer opened={a} onClose={() => setA(false)} withinPortal={false}>
          drawer-a
        </Drawer>
        <Drawer opened={b} onClose={() => setB(false)} withinPortal={false}>
          drawer-b
        </Drawer>
        <button
          type="button"
          onClick={() => {
            setA(true);
            setB(true);
          }}
        >
          open
        </button>
      </>
    );
  }

  it('stacks all drawers without Drawer.Stack and stackId when theme.overlayStack is set', async () => {
    const { container } = render(<SharedStackDemo />, { overlayStack: true });
    await userEvent.click(screen.getByText('open'));

    const panels = Array.from(container.querySelectorAll<HTMLElement>('.mantine-Drawer-panel'));
    expect(panels[0].style.translate).toBe('9px 0px');
    expect(panels[1].style.translate).toBe('0px 0px');
    expect(container.querySelectorAll('.mantine-Drawer-overlay')).toHaveLength(1);
  });

  it('does not stack drawers when theme.overlayStack is not set', async () => {
    const { container } = render(<SharedStackDemo />);
    await userEvent.click(screen.getByText('open'));

    const panels = Array.from(container.querySelectorAll<HTMLElement>('.mantine-Drawer-panel'));
    expect(panels[0].style.translate).toBe('');
    expect(container.querySelectorAll('.mantine-Drawer-overlay')).toHaveLength(2);
  });

  it('keeps modals and drawers in separate stacks', () => {
    const { container } = render(
      <>
        <Drawer.Stack>
          <Modal opened onClose={() => {}} withinPortal={false}>
            modal-in-drawer-stack
          </Modal>
        </Drawer.Stack>
        <Modal.Stack>
          <Drawer opened onClose={() => {}} withinPortal={false}>
            drawer-in-modal-stack
          </Drawer>
        </Modal.Stack>
      </>
    );

    expect(container.querySelector('.mantine-Modal-content')).not.toHaveAttribute('data-stacked');
    expect(container.querySelector('.mantine-Drawer-content')).not.toHaveAttribute('data-stacked');
  });

  it('places a modal opened above a drawer on top and closes only the modal on Escape, even with the same stackId', async () => {
    const onCloseDrawer = jest.fn();
    const onCloseModal = jest.fn();

    function MixedDemo() {
      const [drawer, setDrawer] = useState(false);
      const [modal, setModal] = useState(false);
      return (
        <>
          <Modal
            opened={modal}
            onClose={() => {
              setModal(false);
              onCloseModal();
            }}
            withinPortal={false}
            stackId="same-id"
          >
            modal-content
          </Modal>
          <Drawer
            opened={drawer}
            onClose={() => {
              setDrawer(false);
              onCloseDrawer();
            }}
            withinPortal={false}
            stackId="same-id"
          >
            drawer-content
            <button type="button" onClick={() => setModal(true)}>
              open-modal
            </button>
          </Drawer>
          <button type="button" onClick={() => setDrawer(true)}>
            open-drawer
          </button>
        </>
      );
    }

    const { container } = render(<MixedDemo />, { overlayStack: true });
    await userEvent.click(screen.getByText('open-drawer'));
    await userEvent.click(screen.getByText('open-modal'));

    const zIndex = (selector: string) =>
      container.querySelector<HTMLElement>(selector)!.style.getPropertyValue('--mb-z-index');
    expect(zIndex('.mantine-Drawer-root')).toBe('calc(200 + 0 + 1)');
    expect(zIndex('.mantine-Modal-root')).toBe('calc(200 + 1 + 1)');

    await userEvent.keyboard('{Escape}');
    expect(onCloseModal).toHaveBeenCalledTimes(1);
    expect(onCloseDrawer).not.toHaveBeenCalled();
    expect(screen.getByText('drawer-content')).toBeInTheDocument();

    await userEvent.keyboard('{Escape}');
    expect(onCloseDrawer).toHaveBeenCalledTimes(1);
  });
});

describe('@mantine/core/Drawer and Modal in theme.overlayStack', () => {
  function MixedDemo({ order }: { order: 'modal-first' | 'drawer-first' }) {
    const [modal, setModal] = useState(false);
    const [drawer, setDrawer] = useState(false);
    const [drawer2, setDrawer2] = useState(false);

    return (
      <>
        <Modal opened={modal} onClose={() => setModal(false)} withinPortal={false} title="modal">
          modal-content
          <button type="button" onClick={() => setDrawer(true)}>
            open-drawer-from-modal
          </button>
        </Modal>
        <Drawer opened={drawer} onClose={() => setDrawer(false)} withinPortal={false} title="d1">
          drawer-content
          <button type="button" onClick={() => setDrawer2(true)}>
            open-second-drawer
          </button>
          <button type="button" onClick={() => setModal(true)}>
            open-modal-from-drawer
          </button>
        </Drawer>
        <Drawer opened={drawer2} onClose={() => setDrawer2(false)} withinPortal={false} title="d2">
          drawer-2-content
          <button type="button" onClick={() => setModal(true)}>
            open-modal-from-drawer-2
          </button>
        </Drawer>
        <button
          type="button"
          onClick={() => (order === 'modal-first' ? setModal(true) : setDrawer(true))}
        >
          open-first
        </button>
      </>
    );
  }

  const zIndex = (element: Element | null) =>
    (element as HTMLElement).style.getPropertyValue('--mb-z-index');
  const overlayZIndex = (element: Element | null) =>
    (element as HTMLElement).style.getPropertyValue('--overlay-z-index');
  const isInert = (element: Element | null) =>
    (element as HTMLElement).style.pointerEvents === 'none';
  const getOverlays = (container: HTMLElement) =>
    Array.from(container.querySelectorAll('.mantine-Modal-overlay, .mantine-Drawer-overlay'));

  it('dims and disables the modal below a drawer opened above it', async () => {
    const { container } = render(<MixedDemo order="modal-first" />, { overlayStack: true });
    await userEvent.click(screen.getByText('open-first'));
    await userEvent.click(screen.getByText('open-drawer-from-modal'));

    const modalContent = container.querySelector('.mantine-Modal-content');
    const drawerContent = container.querySelector('.mantine-Drawer-content');
    expect(zIndex(container.querySelector('.mantine-Modal-root'))).toBe('calc(200 + 0 + 1)');
    expect(zIndex(container.querySelector('.mantine-Drawer-root'))).toBe('calc(200 + 1 + 1)');

    expect(isInert(modalContent)).toBe(true);
    expect(isInert(drawerContent)).toBe(false);

    const overlays = getOverlays(container);
    expect(overlays).toHaveLength(1);
    expect(overlays[0]).toHaveClass('mantine-Drawer-overlay');
    expect(overlayZIndex(overlays[0])).toBe('calc(200 + 1 + 1)');
  });

  it('dims and disables drawers below a modal opened above them', async () => {
    const { container } = render(<MixedDemo order="drawer-first" />, { overlayStack: true });
    await userEvent.click(screen.getByText('open-first'));
    await userEvent.click(screen.getByText('open-second-drawer'));
    await userEvent.click(screen.getByText('open-modal-from-drawer-2'));

    const drawerContents = container.querySelectorAll('.mantine-Drawer-content');
    expect(isInert(drawerContents[0])).toBe(true);
    expect(isInert(drawerContents[1])).toBe(true);
    expect(isInert(container.querySelector('.mantine-Modal-content'))).toBe(false);

    const overlays = getOverlays(container);
    expect(overlays).toHaveLength(1);
    expect(overlays[0]).toHaveClass('mantine-Modal-overlay');
    expect(overlayZIndex(overlays[0])).toBe('calc(200 + 2 + 1)');
  });

  it('keeps ids of separate Drawer.Stack instances apart in the shared stack', async () => {
    const onCloseOuter = jest.fn();

    function InnerStack() {
      const stack = useDrawersStack(['first']);
      return (
        <Drawer.Stack>
          <button type="button" onClick={() => stack.open('first')}>
            open-inner
          </button>
          <Drawer {...stack.register('first')} withinPortal={false} title="inner">
            inner-content
          </Drawer>
        </Drawer.Stack>
      );
    }

    function OuterStack() {
      const stack = useDrawersStack(['first']);
      return (
        <Drawer.Stack>
          <button type="button" onClick={() => stack.open('first')}>
            open-outer
          </button>
          <Drawer
            {...stack.register('first')}
            onClose={() => {
              stack.close('first');
              onCloseOuter();
            }}
            withinPortal={false}
            title="outer"
          >
            outer-content
            <InnerStack />
          </Drawer>
        </Drawer.Stack>
      );
    }

    const { container } = render(<OuterStack />, { overlayStack: true });
    await userEvent.click(screen.getByText('open-outer'));
    await userEvent.click(screen.getByText('open-inner'));

    const zIndexes = Array.from(
      container.querySelectorAll<HTMLElement>('.mantine-Drawer-root')
    ).map((root) => zIndex(root));
    expect(zIndexes).toStrictEqual(['calc(200 + 0 + 1)', 'calc(200 + 1 + 1)']);

    const closeButtons = container.querySelectorAll<HTMLButtonElement>('.mantine-Drawer-close');
    fireEvent.click(closeButtons[1]);
    await waitFor(() => expect(screen.queryByText('inner-content')).not.toBeInTheDocument());

    await userEvent.keyboard('{Escape}');
    expect(onCloseOuter).toHaveBeenCalledTimes(1);
  });

  it('closes only the active overlay on overlay click in a mixed stack', async () => {
    const { container } = render(<MixedDemo order="modal-first" />, { overlayStack: true });
    await userEvent.click(screen.getByText('open-first'));
    await userEvent.click(screen.getByText('open-drawer-from-modal'));

    await userEvent.click(getOverlays(container)[0]);
    await waitFor(() => expect(screen.queryByText('drawer-content')).not.toBeInTheDocument());
    expect(screen.getByText('modal-content')).toBeInTheDocument();
    expect(isInert(container.querySelector('.mantine-Modal-content'))).toBe(false);
  });
});

describe('@mantine/core/Drawer fullScreen', () => {
  const isMinWidthQuery = (query: string) => query.startsWith('(min-width');
  const getRoot = (container: HTMLElement) =>
    container.querySelector<HTMLElement>('.mantine-Drawer-root')!;
  const getSize = (container: HTMLElement) =>
    getRoot(container).style.getPropertyValue('--drawer-size');
  let media: ReturnType<typeof mockMatchMedia> | undefined;

  afterEach(() => {
    media?.restore();
    media = undefined;
  });

  it('fills the viewport and sets data-full-screen when fullScreen is set', () => {
    const { container } = render(<Drawer {...defaultProps} size="sm" fullScreen />);
    expect(getSize(container)).toBe('100%');
    expect(getRoot(container)).toHaveAttribute('data-full-screen');
  });

  it('clears offset when fullScreen is set', () => {
    const { container } = render(<Drawer {...defaultProps} offset={8} fullScreen />);
    expect(getRoot(container).style.getPropertyValue('--drawer-offset')).toBe('');
  });

  it('keeps offset when the viewport is at or above fullScreenBelow breakpoint', () => {
    media = mockMatchMedia(true, { filter: isMinWidthQuery });
    const { container } = render(<Drawer {...defaultProps} offset={8} fullScreenBelow="sm" />);
    expect(getRoot(container).style.getPropertyValue('--drawer-offset')).toBe(
      'calc(0.5rem * var(--mantine-scale))'
    );
  });

  it('ignores fullScreen when snapPoints are set', () => {
    const { container } = render(
      <Drawer {...defaultProps} offset={8} snapPoints={[0.5, 1]} fullScreen />
    );
    expect(getRoot(container)).not.toHaveAttribute('data-full-screen');
    expect(getRoot(container).style.getPropertyValue('--drawer-offset')).toBe(
      'calc(0.5rem * var(--mantine-scale))'
    );
  });

  it('uses the size prop when fullScreen is not set', () => {
    const { container } = render(<Drawer {...defaultProps} size="sm" />);
    expect(getSize(container)).toBe('var(--drawer-size-sm)');
    expect(getRoot(container)).not.toHaveAttribute('data-full-screen');
  });

  it('fills the viewport when the viewport is below fullScreenBelow breakpoint', () => {
    media = mockMatchMedia(false, { filter: isMinWidthQuery });
    const { container } = render(<Drawer {...defaultProps} size="sm" fullScreenBelow="sm" />);
    expect(getSize(container)).toBe('100%');
    expect(getRoot(container)).toHaveAttribute('data-full-screen');
    expect(media.queries).toEqual(['(min-width: 48em)']);
  });

  it('keeps the size prop when the viewport is at or above fullScreenBelow breakpoint', () => {
    media = mockMatchMedia(true, { filter: isMinWidthQuery });
    const { container } = render(<Drawer {...defaultProps} size="sm" fullScreenBelow="sm" />);
    expect(getSize(container)).toBe('var(--drawer-size-sm)');
    expect(getRoot(container)).not.toHaveAttribute('data-full-screen');
  });

  it('switches to full screen while opened when the viewport shrinks below the breakpoint', () => {
    media = mockMatchMedia(true, { filter: isMinWidthQuery });
    const { container } = render(<Drawer {...defaultProps} size="sm" fullScreenBelow="md" />);
    expect(getSize(container)).toBe('var(--drawer-size-sm)');

    act(() => media!.setMatches(false));
    expect(getSize(container)).toBe('100%');

    act(() => media!.setMatches(true));
    expect(getSize(container)).toBe('var(--drawer-size-sm)');
  });
});

describe('@mantine/core/Drawer focus return', () => {
  function ExplicitStackDemo() {
    const stack = useDrawersStack(['a', 'b', 'c']);
    return (
      <Drawer.Stack>
        <Drawer {...stack.register('a')} withinPortal={false} title="drawer-a">
          <button type="button" onClick={() => stack.open('b')}>
            open-b
          </button>
        </Drawer>
        <Drawer {...stack.register('b')} withinPortal={false} title="drawer-b">
          <button type="button" onClick={() => stack.open('c')}>
            open-c
          </button>
        </Drawer>
        <Drawer {...stack.register('c')} withinPortal={false} title="drawer-c">
          <button type="button" onClick={stack.closeAll}>
            close-all
          </button>
        </Drawer>
        <button type="button" onClick={() => stack.open('a')}>
          open-a
        </button>
      </Drawer.Stack>
    );
  }

  function SharedStackDemo({ drawerAProps }: { drawerAProps?: Partial<DrawerProps> }) {
    const [a, setA] = useState(false);
    const [b, setB] = useState(false);
    return (
      <>
        <Drawer
          opened={a}
          onClose={() => setA(false)}
          withinPortal={false}
          title="drawer-a"
          {...drawerAProps}
        >
          <button type="button" onClick={() => setB(true)}>
            open-b
          </button>
        </Drawer>
        <Drawer opened={b} onClose={() => setB(false)} withinPortal={false} title="drawer-b">
          drawer-b
        </Drawer>
        <button type="button" onClick={() => setA(true)}>
          open-a
        </button>
      </>
    );
  }

  const waitForFocusIn = (title: string) =>
    waitFor(() => {
      expect(screen.getByRole('dialog', { name: title })).toContainElement(
        document.activeElement as HTMLElement
      );
    });

  const openAndFocus = async (label: string, title: string) => {
    await userEvent.click(screen.getByRole('button', { name: label }));
    await waitForFocusIn(title);
  };

  it('returns focus to the element that opened each drawer when closing an explicit stack', async () => {
    render(<ExplicitStackDemo />);
    await openAndFocus('open-a', 'drawer-a');
    await openAndFocus('open-b', 'drawer-b');
    await openAndFocus('open-c', 'drawer-c');

    await userEvent.keyboard('{Escape}');
    await waitFor(() => expect(screen.getByRole('button', { name: 'open-c' })).toHaveFocus());

    await userEvent.keyboard('{Escape}');
    await waitFor(() => expect(screen.getByRole('button', { name: 'open-b' })).toHaveFocus());

    await userEvent.keyboard('{Escape}');
    await waitFor(() => expect(screen.getByRole('button', { name: 'open-a' })).toHaveFocus());
  });

  it('returns focus to the original trigger when the whole explicit stack closes at once', async () => {
    render(<ExplicitStackDemo />);
    await openAndFocus('open-a', 'drawer-a');
    await openAndFocus('open-b', 'drawer-b');
    await openAndFocus('open-c', 'drawer-c');

    await userEvent.click(screen.getByRole('button', { name: 'close-all' }));
    await waitFor(() => expect(screen.getByRole('button', { name: 'open-a' })).toHaveFocus());
  });

  it('returns focus to the trigger of a single drawer in the shared theme.overlayStack', async () => {
    render(<SharedStackDemo />, { overlayStack: true });
    await openAndFocus('open-a', 'drawer-a');

    await userEvent.keyboard('{Escape}');
    await waitFor(() => expect(screen.getByRole('button', { name: 'open-a' })).toHaveFocus());
  });

  it('returns focus through the shared theme.overlayStack', async () => {
    render(<SharedStackDemo />, { overlayStack: true });
    await openAndFocus('open-a', 'drawer-a');
    await openAndFocus('open-b', 'drawer-b');

    await userEvent.keyboard('{Escape}');
    await waitFor(() => expect(screen.getByRole('button', { name: 'open-b' })).toHaveFocus());

    await userEvent.keyboard('{Escape}');
    await waitFor(() => expect(screen.getByRole('button', { name: 'open-a' })).toHaveFocus());
  });

  it('does not return focus in the shared theme.overlayStack when returnFocus is false', async () => {
    render(<SharedStackDemo drawerAProps={{ returnFocus: false }} />, { overlayStack: true });
    await openAndFocus('open-a', 'drawer-a');

    await userEvent.keyboard('{Escape}');
    await act(() => new Promise((resolve) => setTimeout(resolve, 50)));
    expect(screen.getByRole('button', { name: 'open-a' })).not.toHaveFocus();
  });
});
