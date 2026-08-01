import { act, fireEvent } from '@testing-library/react';
import { createContextContainer, render, screen, tests, userEvent } from '@mantine-tests/core';
import { Drawer, DrawerProps, DrawerStylesNames } from './Drawer';
import { useDrawersStack } from '../Modal/use-modals-stack';
import { DrawerBody, DrawerBodyProps } from './DrawerBody';
import { DrawerCloseButton, DrawerCloseButtonProps } from './DrawerCloseButton';
import { DrawerContent, DrawerContentProps } from './DrawerContent';
import { DrawerFooter, DrawerFooterProps } from './DrawerFooter';
import { DrawerHeader, DrawerHeaderProps } from './DrawerHeader';
import { DrawerOverlay, DrawerOverlayProps } from './DrawerOverlay';
import { DrawerRoot, DrawerRootProps } from './DrawerRoot';
import { DrawerTitle, DrawerTitleProps } from './DrawerTitle';

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

    expect(container.querySelector('.mantine-Drawer-content')).toHaveStyle({
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

    expect(container.querySelector('.mantine-Drawer-content')).not.toHaveStyle({
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
