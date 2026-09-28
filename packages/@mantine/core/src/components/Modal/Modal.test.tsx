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
import { MantineThemeProvider } from '../../core';
import { Modal, ModalProps, ModalStylesNames } from './Modal';
import { ModalBody, ModalBodyProps } from './ModalBody';
import { ModalCloseButton, ModalCloseButtonProps } from './ModalCloseButton';
import { ModalContent, ModalContentProps } from './ModalContent';
import { ModalFooter, ModalFooterProps } from './ModalFooter';
import { ModalHeader, ModalHeaderProps } from './ModalHeader';
import { ModalOverlay, ModalOverlayProps } from './ModalOverlay';
import { ModalRoot, ModalRootProps } from './ModalRoot';
import { ModalTitle, ModalTitleProps } from './ModalTitle';
import { useModalStackContext } from './use-modal-stack-context';
import { useModalsStack } from './use-modals-stack';

const defaultProps: ModalProps = {
  opened: true,
  onClose: () => {},
  title: 'test-title',
  withinPortal: false,
};

const createModalContextContainer = (component: any) =>
  createContextContainer(component, ModalRoot, defaultProps);

const BodyContainer = createModalContextContainer(ModalBody);
const CloseButtonContainer = createModalContextContainer(ModalCloseButton);
const ContentContainer = createModalContextContainer(ModalContent);
const HeaderContainer = createModalContextContainer(ModalHeader);
const FooterContainer = createModalContextContainer(ModalFooter);
const OverlayContainer = createModalContextContainer(ModalOverlay);
const TitleContainer = createModalContextContainer(ModalTitle);

describe('@mantine/core/Modal', () => {
  tests.itSupportsSystemProps<ModalProps, ModalStylesNames>({
    component: Modal,
    props: defaultProps,
    children: true,
    displayName: '@mantine/core/Modal',
    stylesApiSelectors: ['root', 'body', 'close', 'content', 'header', 'inner', 'overlay', 'title'],
    selector: '.mantine-Modal-root',
    variantSelector: '.mantine-Modal-root',
    sizeSelector: '.mantine-Modal-root',
  });

  it('sets data-centered attribute when centered prop is passed', () => {
    const { container, rerender } = render(<Modal {...defaultProps} centered />);
    expect(container.querySelector('.mantine-Modal-root')).toHaveAttribute('data-centered');

    rerender(<Modal {...defaultProps} centered={false} />);
    expect(container.querySelector('.mantine-Modal-root')).not.toHaveAttribute('data-centered');
  });

  it('sets data-full-screen attribute when fullScreen prop is passed', () => {
    const { container, rerender } = render(<Modal {...defaultProps} fullScreen />);
    expect(container.querySelector('.mantine-Modal-root')).toHaveAttribute('data-full-screen');

    rerender(<Modal {...defaultProps} fullScreen={false} />);
    expect(container.querySelector('.mantine-Modal-root')).not.toHaveAttribute('data-full-screen');
  });

  describe('fullScreenBelow', () => {
    const isMinWidthQuery = (query: string) => query.startsWith('(min-width');
    const getRoot = (container: HTMLElement) => container.querySelector('.mantine-Modal-root');
    let media: ReturnType<typeof mockMatchMedia>;

    afterEach(() => {
      media.restore();
    });

    it('makes the modal full screen when the viewport is below the breakpoint', () => {
      media = mockMatchMedia(false, { filter: isMinWidthQuery });
      const { container } = render(<Modal {...defaultProps} fullScreenBelow="sm" />);
      expect(getRoot(container)).toHaveAttribute('data-full-screen');
      expect(container.querySelector('.mantine-Modal-content')).toHaveAttribute('data-full-screen');
      expect(media.queries).toEqual(['(min-width: 48em)']);
    });

    it('passes fullScreen resolved from the breakpoint to Styles API functions', () => {
      media = mockMatchMedia(false, { filter: isMinWidthQuery });
      const styles = jest.fn((_theme: unknown, _props: ModalProps) => ({}));
      render(<Modal {...defaultProps} fullScreenBelow="sm" styles={styles} />);
      expect(styles).toHaveBeenCalled();
      styles.mock.calls.forEach(([, props]) => expect(props.fullScreen).toBe(true));
    });

    it('keeps the modal full screen when fullScreen is set and the viewport is above the breakpoint', () => {
      media = mockMatchMedia(true, { filter: isMinWidthQuery });
      const { container } = render(<Modal {...defaultProps} fullScreen fullScreenBelow="sm" />);
      expect(getRoot(container)).toHaveAttribute('data-full-screen');
    });

    it('switches to full screen while opened when the viewport shrinks below the breakpoint', () => {
      media = mockMatchMedia(true, { filter: isMinWidthQuery });
      const { container } = render(<Modal {...defaultProps} fullScreenBelow="md" />);
      expect(getRoot(container)).not.toHaveAttribute('data-full-screen');

      act(() => media.setMatches(false));
      expect(getRoot(container)).toHaveAttribute('data-full-screen');

      act(() => media.setMatches(true));
      expect(getRoot(container)).not.toHaveAttribute('data-full-screen');
    });
  });

  it('does not render overlay when withOverlay is false', () => {
    const { container, rerender } = render(<Modal {...defaultProps} withOverlay={false} />);
    expect(container.querySelector('.mantine-Modal-overlay')).not.toBeInTheDocument();

    rerender(<Modal {...defaultProps} withOverlay />);
    expect(container.querySelector('.mantine-Modal-overlay')).toBeInTheDocument();
  });

  it('does not render header if title and withCloseButton are not provided', () => {
    const { container, rerender } = render(
      <Modal {...defaultProps} title={null} withCloseButton />
    );
    expect(container.querySelector('.mantine-Modal-header')).toBeInTheDocument();

    rerender(<Modal {...defaultProps} withCloseButton={false} title="test-title" />);
    expect(container.querySelector('.mantine-Modal-header')).toBeInTheDocument();

    rerender(<Modal {...defaultProps} withCloseButton={false} title={null} />);
    expect(container.querySelector('.mantine-Modal-header')).not.toBeInTheDocument();
  });

  it('renders given title', () => {
    const { container } = render(<Modal {...defaultProps} title="test-title" />);
    expect(container.querySelector('.mantine-Modal-title')).toHaveTextContent('test-title');
  });

  it('renders Modal.Footer content', () => {
    render(
      <Modal opened onClose={() => {}} withinPortal={false}>
        <Modal.Footer>footer-content</Modal.Footer>
      </Modal>
    );
    expect(screen.getByText('footer-content')).toBeInTheDocument();
  });

  it('sets data-sticky on header by default and removes it when stickyHeader is false', () => {
    const { container, rerender } = render(
      <Modal.Root opened onClose={() => {}} withinPortal={false}>
        <Modal.Content>
          <Modal.Header>header</Modal.Header>
          <Modal.Body>body</Modal.Body>
        </Modal.Content>
      </Modal.Root>
    );
    expect(container.querySelector('.mantine-Modal-header')).toHaveAttribute('data-sticky');

    rerender(
      <Modal.Root opened onClose={() => {}} withinPortal={false} stickyHeader={false}>
        <Modal.Content>
          <Modal.Header>header</Modal.Header>
          <Modal.Body>body</Modal.Body>
        </Modal.Content>
      </Modal.Root>
    );
    expect(container.querySelector('.mantine-Modal-header')).not.toHaveAttribute('data-sticky');
  });

  it('sets data-sticky on footer by default and removes it when stickyFooter is false', () => {
    const { container, rerender } = render(
      <Modal.Root opened onClose={() => {}} withinPortal={false}>
        <Modal.Content>
          <Modal.Body>body</Modal.Body>
          <Modal.Footer>footer</Modal.Footer>
        </Modal.Content>
      </Modal.Root>
    );
    expect(container.querySelector('.mantine-Modal-footer')).toHaveAttribute('data-sticky');

    rerender(
      <Modal.Root opened onClose={() => {}} withinPortal={false} stickyFooter={false}>
        <Modal.Content>
          <Modal.Body>body</Modal.Body>
          <Modal.Footer>footer</Modal.Footer>
        </Modal.Content>
      </Modal.Root>
    );
    expect(container.querySelector('.mantine-Modal-footer')).not.toHaveAttribute('data-sticky');
  });

  it('exposes compound components', () => {
    expect(Modal.Root).toBe(ModalRoot);
    expect(Modal.Overlay).toBe(ModalOverlay);
    expect(Modal.Content).toBe(ModalContent);
    expect(Modal.Body).toBe(ModalBody);
    expect(Modal.Header).toBe(ModalHeader);
    expect(Modal.Footer).toBe(ModalFooter);
    expect(Modal.Title).toBe(ModalTitle);
    expect(Modal.CloseButton).toBe(ModalCloseButton);
  });

  it('applies display: none style when keepMountedMode is display-none and opened is false (transitionDuration is 0)', () => {
    const { container } = render(
      <Modal
        {...defaultProps}
        opened={false}
        keepMounted
        keepMountedMode="display-none"
        transitionProps={{ duration: 0 }}
      />,
      undefined,
      { env: 'default' }
    );

    expect(container.querySelector('.mantine-Modal-content')).toHaveStyle({
      display: 'none',
    });
  });

  it('does not apply display: none style when keepMountedMode is activity and opened is false (transitionDuration is 0)', () => {
    const { container } = render(
      <Modal
        {...defaultProps}
        opened={false}
        keepMounted
        keepMountedMode="activity"
        transitionProps={{ duration: 0 }}
      />,
      undefined,
      { env: 'default' }
    );

    expect(container.querySelector('.mantine-Modal-content')).not.toHaveStyle({
      display: 'none',
    });
  });
});

describe('@mantine/core/ModalRoot', () => {
  tests.itSupportsSystemProps<ModalRootProps, 'root'>({
    component: ModalRoot,
    props: defaultProps,
    varsResolver: true,
    children: true,
    displayName: '@mantine/core/ModalRoot',
    stylesApiSelectors: ['root'],
    selector: '.mantine-Modal-root',
    variantSelector: '.mantine-Modal-root',
    sizeSelector: '.mantine-Modal-root',
    stylesApiName: 'Modal',
  });
});

describe('@mantine/core/ModalBody', () => {
  tests.itSupportsSystemProps<ModalBodyProps>({
    component: BodyContainer,
    props: {},
    children: true,
    displayName: '@mantine/core/ModalBody',
    selector: '.mantine-Modal-body',
    variantSelector: '.mantine-Modal-body',
    sizeSelector: '.mantine-Modal-body',
  });
});

describe('@mantine/core/ModalCloseButton', () => {
  tests.itSupportsSystemProps<ModalCloseButtonProps>({
    component: CloseButtonContainer,
    props: {},
    children: true,
    displayName: '@mantine/core/ModalCloseButton',
    selector: '.mantine-Modal-close',
    variantSelector: '.mantine-Modal-close',
    sizeSelector: '.mantine-Modal-close',
  });
});

describe('@mantine/core/ModalContent', () => {
  tests.itSupportsSystemProps<ModalContentProps>({
    component: ContentContainer,
    props: {},
    children: true,
    displayName: '@mantine/core/ModalContent',
    selector: '.mantine-Modal-content',
    variantSelector: '.mantine-Modal-content',
    sizeSelector: '.mantine-Modal-content',
  });
});

describe('@mantine/core/ModalHeader', () => {
  tests.itSupportsSystemProps<ModalHeaderProps>({
    component: HeaderContainer,
    props: {},
    children: true,
    displayName: '@mantine/core/ModalHeader',
    selector: '.mantine-Modal-header',
    variantSelector: '.mantine-Modal-header',
    sizeSelector: '.mantine-Modal-header',
  });
});

describe('@mantine/core/ModalFooter', () => {
  tests.itSupportsSystemProps<ModalFooterProps>({
    component: FooterContainer,
    props: {},
    children: true,
    displayName: '@mantine/core/ModalFooter',
    selector: '.mantine-Modal-footer',
    variantSelector: '.mantine-Modal-footer',
    sizeSelector: '.mantine-Modal-footer',
  });
});

describe('@mantine/core/ModalOverlay', () => {
  tests.itSupportsSystemProps<ModalOverlayProps>({
    component: OverlayContainer,
    props: {},
    children: true,
    displayName: '@mantine/core/ModalOverlay',
    selector: '.mantine-Modal-overlay',
    variantSelector: '.mantine-Modal-overlay',
    sizeSelector: '.mantine-Modal-overlay',
  });
});

describe('@mantine/core/ModalTitle', () => {
  tests.itSupportsSystemProps<ModalTitleProps>({
    component: TitleContainer,
    props: {},
    children: true,
    displayName: '@mantine/core/ModalTitle',
    selector: '.mantine-Modal-title',
    variantSelector: '.mantine-Modal-title',
    sizeSelector: '.mantine-Modal-title',
  });
});

describe('@mantine/core/ModalStack', () => {
  function StackDemo({ maxDepth }: { maxDepth?: number }) {
    const stack = useModalsStack(['a', 'b', 'c']);
    return (
      <Modal.Stack maxDepth={maxDepth}>
        <Modal {...stack.register('a')} withinPortal={false}>
          modal-a
        </Modal>
        <Modal {...stack.register('b')} withinPortal={false}>
          modal-b
        </Modal>
        <Modal {...stack.register('c')} withinPortal={false}>
          modal-c
        </Modal>
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
        <button type="button" onClick={stack.closeAll}>
          close-all
        </button>
      </Modal.Stack>
    );
  }

  it('keeps non-top stacked modals mounted and visible', async () => {
    render(<StackDemo />);
    await userEvent.click(screen.getByText('open'));
    expect(screen.getByText('modal-a')).toBeInTheDocument();
    expect(screen.getByText('modal-b')).toBeInTheDocument();
    expect(screen.getByText('modal-a').closest('[data-stack-hidden]')).toBeNull();
  });

  it('renders a newly opened modal as the top card without freezing its layout', async () => {
    function OpenSecondDemo() {
      const stack = useModalsStack(['a', 'b']);
      return (
        <Modal.Stack>
          <Modal {...stack.register('a')} withinPortal={false}>
            modal-a
          </Modal>
          <Modal {...stack.register('b')} withinPortal={false}>
            modal-b
          </Modal>
          <button type="button" onClick={() => stack.open('a')}>
            open-a
          </button>
          <button type="button" onClick={() => stack.open('b')}>
            open-b
          </button>
        </Modal.Stack>
      );
    }

    render(<OpenSecondDemo />);
    await userEvent.click(screen.getByText('open-a'));
    await userEvent.click(screen.getByText('open-b'));

    const top = screen.getByText('modal-b').closest<HTMLElement>('[data-modal-content]')!;
    expect(top.style.overflow).not.toBe('hidden');
    expect(top.style.maxHeight).toBe('');
    expect(top.style.maxWidth).toBe('var(--modal-size)');
  });

  it('offsets centered stacked modals so that each card peeks above the top one', async () => {
    const originalGetBoundingClientRect = HTMLElement.prototype.getBoundingClientRect;
    HTMLElement.prototype.getBoundingClientRect = function getBoundingClientRect() {
      return {
        width: 400,
        height: 300,
        top: 0,
        left: 0,
        right: 400,
        bottom: 300,
        x: 0,
        y: 0,
      } as any;
    };

    function CenteredStackDemo() {
      const stack = useModalsStack(['a', 'b']);
      return (
        <Modal.Stack>
          <Modal {...stack.register('a')} withinPortal={false} centered>
            modal-a
          </Modal>
          <Modal {...stack.register('b')} withinPortal={false} centered>
            modal-b
          </Modal>
          <button type="button" onClick={() => stack.open('a')}>
            open-a
          </button>
          <button type="button" onClick={() => stack.open('b')}>
            open-b
          </button>
        </Modal.Stack>
      );
    }

    try {
      render(<CenteredStackDemo />);
      await userEvent.click(screen.getByText('open-a'));
      await userEvent.click(screen.getByText('open-b'));

      await waitFor(() => {
        const inner = screen.getByText('modal-a').closest<HTMLElement>('.mantine-Modal-inner')!;
        expect(inner.style.transform).toBe('translateY(-16px)');
      });
    } finally {
      HTMLElement.prototype.getBoundingClientRect = originalGetBoundingClientRect;
    }
  });

  it('narrows the card behind a stacked modal that opens from a closed state', async () => {
    const originalGetBoundingClientRect = HTMLElement.prototype.getBoundingClientRect;
    HTMLElement.prototype.getBoundingClientRect = function getBoundingClientRect() {
      return {
        width: 400,
        height: 300,
        top: 0,
        left: 0,
        right: 400,
        bottom: 300,
        x: 0,
        y: 0,
      } as any;
    };

    function OpenFromClosedDemo() {
      const stack = useModalsStack(['a', 'b']);
      return (
        <Modal.Stack>
          <Modal {...stack.register('a')} withinPortal={false}>
            modal-a
          </Modal>
          <Modal {...stack.register('b')} withinPortal={false}>
            modal-b
          </Modal>
          <button type="button" onClick={() => stack.open('a')}>
            open-a
          </button>
          <button type="button" onClick={() => stack.open('b')}>
            open-b
          </button>
        </Modal.Stack>
      );
    }

    try {
      render(<OpenFromClosedDemo />, undefined, { env: 'default' });
      await userEvent.click(screen.getByText('open-a'));
      await userEvent.click(screen.getByText('open-b'));

      await waitFor(() => {
        const behind = screen.getByText('modal-a').closest<HTMLElement>('[data-modal-content]')!;
        expect(behind.style.maxWidth).toBe('386px');
        expect(behind.style.maxHeight).toBe('286px');
      });
    } finally {
      HTMLElement.prototype.getBoundingClientRect = originalGetBoundingClientRect;
    }
  });

  it('hides stacked items beyond maxDepth', async () => {
    const { container } = render(<StackDemo maxDepth={1} />);
    await userEvent.click(screen.getByText('open'));
    const inners = container.querySelectorAll('.mantine-Modal-inner');
    const hidden = Array.from(inners).filter(
      (el) => el.hasAttribute('data-stack-hidden') || (el as HTMLElement).style.display === 'none'
    );
    expect(hidden.length).toBe(1);
  });

  it('applies a stack transform to non-top modals by default', async () => {
    const { container } = render(<StackDemo />);
    await userEvent.click(screen.getByText('open'));
    const inners = Array.from(container.querySelectorAll<HTMLElement>('.mantine-Modal-inner'));
    expect(inners.map((el) => el.style.transform)).toEqual([
      'translateY(-18px)',
      'translateY(-9px)',
      'translateY(0px)',
    ]);
  });

  it('unmounts all stacked modals on closeAll and supports reopening', async () => {
    render(<StackDemo />);
    await userEvent.click(screen.getByText('open'));
    expect(screen.getByText('modal-a')).toBeInTheDocument();
    expect(screen.getByText('modal-b')).toBeInTheDocument();
    expect(screen.getByText('modal-c')).toBeInTheDocument();

    fireEvent.click(screen.getByText('close-all'));

    await waitFor(() => {
      expect(screen.queryByText('modal-a')).not.toBeInTheDocument();
      expect(screen.queryByText('modal-b')).not.toBeInTheDocument();
      expect(screen.queryByText('modal-c')).not.toBeInTheDocument();
    });

    await userEvent.click(screen.getByText('open'));
    await waitFor(() => {
      expect(screen.getByText('modal-a')).toBeInTheDocument();
      expect(screen.getByText('modal-b')).toBeInTheDocument();
      expect(screen.getByText('modal-c')).toBeInTheDocument();
    });
  });

  it('does not apply transform or inline size when withStackTransform is false', async () => {
    function NoTransformStackDemo() {
      const stack = useModalsStack(['a', 'b']);
      return (
        <Modal.Stack withStackTransform={false}>
          <Modal {...stack.register('a')} withinPortal={false}>
            modal-a
          </Modal>
          <Modal {...stack.register('b')} withinPortal={false}>
            modal-b
          </Modal>
          <button
            type="button"
            onClick={() => {
              stack.open('a');
              stack.open('b');
            }}
          >
            open
          </button>
        </Modal.Stack>
      );
    }

    const { container } = render(<NoTransformStackDemo />);
    await userEvent.click(screen.getByText('open'));

    const inners = Array.from(container.querySelectorAll<HTMLElement>('.mantine-Modal-inner'));
    const transformed = inners.filter((el) => el.style.transform && el.style.transform !== 'none');
    expect(transformed.length).toBe(0);

    const contents = Array.from(container.querySelectorAll<HTMLElement>('[data-modal-content]'));
    const sized = contents.filter((el) => el.style.overflow === 'hidden');
    expect(sized.length).toBe(0);
  });

  it('does not clamp the size of a fullScreen modal while stacked', async () => {
    const originalGetBoundingClientRect = HTMLElement.prototype.getBoundingClientRect;
    HTMLElement.prototype.getBoundingClientRect = function getBoundingClientRect() {
      return {
        width: 400,
        height: 300,
        top: 0,
        left: 0,
        right: 400,
        bottom: 300,
        x: 0,
        y: 0,
      } as any;
    };

    function FullScreenStackDemo() {
      const stack = useModalsStack(['a', 'b', 'c']);
      return (
        <Modal.Stack>
          <Modal {...stack.register('a')} fullScreen withinPortal={false}>
            modal-a
          </Modal>
          <Modal {...stack.register('b')} withinPortal={false}>
            modal-b
          </Modal>
          <Modal {...stack.register('c')} withinPortal={false}>
            modal-c
          </Modal>
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
        </Modal.Stack>
      );
    }

    try {
      render(<FullScreenStackDemo />);
      await userEvent.click(screen.getByText('open'));

      await waitFor(() => {
        const regular = screen.getByText('modal-b').closest<HTMLElement>('[data-modal-content]')!;
        expect(regular.style.maxWidth).toBe('386px');
      });

      const fullScreen = screen.getByText('modal-a').closest<HTMLElement>('[data-modal-content]')!;
      expect(fullScreen).toHaveAttribute('data-full-screen');
      expect(fullScreen.style.maxWidth).toBe('');
      expect(fullScreen.style.maxHeight).toBe('');
      expect(fullScreen.style.overflow).not.toBe('hidden');
    } finally {
      HTMLElement.prototype.getBoundingClientRect = originalGetBoundingClientRect;
    }
  });
});

describe('@mantine/core/Modal theme.overlayStack', () => {
  function StackInfo() {
    const stack = useModalStackContext();
    return (
      <>
        <span>stack-size:{stack.stack.length}</span>
        <button type="button" onClick={stack.closeAll}>
          close-all
        </button>
      </>
    );
  }

  interface SharedStackDemoProps {
    onCloseA?: () => void;
    onCloseB?: () => void;
    modalAProps?: Partial<ModalProps>;
    modalBProps?: Partial<ModalProps>;
    withInfo?: boolean;
    wrapB?: (node: React.ReactNode) => React.ReactNode;
  }

  function SharedStackDemo({
    onCloseA,
    onCloseB,
    modalAProps,
    modalBProps,
    withInfo,
    wrapB,
  }: SharedStackDemoProps) {
    const [a, setA] = useState(false);
    const [b, setB] = useState(false);
    const [mountedA, setMountedA] = useState(true);

    const modalB = (
      <Modal
        opened={b}
        onClose={() => {
          setB(false);
          onCloseB?.();
        }}
        withinPortal={false}
        {...modalBProps}
      >
        modal-b
      </Modal>
    );

    return (
      <>
        {mountedA && (
          <Modal
            opened={a}
            onClose={() => {
              setA(false);
              onCloseA?.();
            }}
            withinPortal={false}
            {...modalAProps}
          >
            modal-a
          </Modal>
        )}
        {wrapB ? wrapB(modalB) : modalB}
        <button type="button" onClick={() => setA(true)}>
          open-a
        </button>
        <button type="button" onClick={() => setB(true)}>
          open-b
        </button>
        <button
          type="button"
          onClick={() => {
            setA(true);
            setB(true);
          }}
        >
          open
        </button>
        <button type="button" onClick={() => setMountedA(false)}>
          unmount-a
        </button>
        {withInfo && <StackInfo />}
      </>
    );
  }

  const getInners = (container: HTMLElement) =>
    Array.from(container.querySelectorAll<HTMLElement>('.mantine-Modal-inner'));
  const getOverlays = (container: HTMLElement) =>
    container.querySelectorAll('.mantine-Modal-overlay');

  it('stacks all modals without Modal.Stack and stackId when theme.overlayStack is set', async () => {
    const { container } = render(<SharedStackDemo />, { overlayStack: true });
    await userEvent.click(screen.getByText('open'));

    const inners = getInners(container);
    expect(inners[0].style.transform).toBe('translateY(-9px)');
    expect(inners[1].style.transform).toBe('translateY(0px)');
    expect(getOverlays(container)).toHaveLength(1);
    expect(container.querySelectorAll('[data-stacked]')).toHaveLength(2);
  });

  it('does not stack modals when theme.overlayStack is not set', async () => {
    const { container } = render(<SharedStackDemo />);
    await userEvent.click(screen.getByText('open'));

    const inners = getInners(container);
    expect(inners[0].style.transform).toBe('');
    expect(inners[1].style.transform).toBe('');
    expect(getOverlays(container)).toHaveLength(2);
    expect(container.querySelectorAll('[data-stacked]')).toHaveLength(0);
  });

  it('closes only the top modal on Escape in the shared stack', async () => {
    const onCloseA = jest.fn();
    const onCloseB = jest.fn();
    render(<SharedStackDemo onCloseA={onCloseA} onCloseB={onCloseB} />, { overlayStack: true });
    await userEvent.click(screen.getByText('open'));

    await userEvent.keyboard('{Escape}');
    expect(onCloseB).toHaveBeenCalledTimes(1);
    expect(onCloseA).not.toHaveBeenCalled();
    expect(screen.getByText('modal-a')).toBeInTheDocument();
    expect(screen.queryByText('modal-b')).not.toBeInTheDocument();

    await userEvent.keyboard('{Escape}');
    expect(onCloseA).toHaveBeenCalledTimes(1);
  });

  it('respects closeOnEscape={false} of the top modal in the shared stack', async () => {
    const onCloseA = jest.fn();
    const onCloseB = jest.fn();
    render(
      <SharedStackDemo
        onCloseA={onCloseA}
        onCloseB={onCloseB}
        modalBProps={{ closeOnEscape: false }}
      />,
      { overlayStack: true }
    );
    await userEvent.click(screen.getByText('open'));

    await userEvent.keyboard('{Escape}');
    expect(onCloseA).not.toHaveBeenCalled();
    expect(onCloseB).not.toHaveBeenCalled();
    expect(screen.getByText('modal-b')).toBeInTheDocument();
  });

  it('joins Modal.Stack rendered inside the shared stack instead of creating a nested stack', async () => {
    const { container } = render(
      <SharedStackDemo
        wrapB={(node) => <Modal.Stack withStackTransform={false}>{node}</Modal.Stack>}
      />,
      { overlayStack: true }
    );
    await userEvent.click(screen.getByText('open'));

    expect(getInners(container)[0].style.transform).toBe('translateY(-9px)');
    expect(getOverlays(container)).toHaveLength(1);
  });

  it('keeps nested explicit Modal.Stack isolated when theme.overlayStack is not set', async () => {
    const { container } = render(
      <Modal.Stack>
        <SharedStackDemo wrapB={(node) => <Modal.Stack>{node}</Modal.Stack>} />
      </Modal.Stack>
    );
    await userEvent.click(screen.getByText('open'));

    const inners = getInners(container);
    expect(inners[0].style.transform).toBe('translateY(0px)');
    expect(inners[1].style.transform).toBe('translateY(0px)');
    expect(getOverlays(container)).toHaveLength(2);
  });

  it('closes all modals with useModalStackContext', async () => {
    const onCloseA = jest.fn();
    const onCloseB = jest.fn();
    render(<SharedStackDemo onCloseA={onCloseA} onCloseB={onCloseB} withInfo />, {
      overlayStack: true,
    });
    await userEvent.click(screen.getByText('open'));
    expect(screen.getByText('stack-size:2')).toBeInTheDocument();

    fireEvent.click(screen.getByText('close-all'));
    expect(onCloseA).toHaveBeenCalledTimes(1);
    expect(onCloseB).toHaveBeenCalledTimes(1);

    await waitFor(() => {
      expect(screen.queryByText('modal-a')).not.toBeInTheDocument();
      expect(screen.queryByText('modal-b')).not.toBeInTheDocument();
      expect(screen.getByText('stack-size:0')).toBeInTheDocument();
    });
  });

  it('removes unmounted modal from the shared stack', async () => {
    const { container } = render(<SharedStackDemo withInfo />, { overlayStack: true });
    await userEvent.click(screen.getByText('open'));
    expect(screen.getByText('stack-size:2')).toBeInTheDocument();

    await userEvent.click(screen.getByText('unmount-a'));
    expect(screen.getByText('stack-size:1')).toBeInTheDocument();
    expect(getOverlays(container)).toHaveLength(1);
  });

  it('derives stack z-index from currently opened modals only', async () => {
    const { container } = render(<SharedStackDemo modalAProps={{ zIndex: 1000 }} />, {
      overlayStack: true,
    });
    await userEvent.click(screen.getByText('open'));

    const getRootZIndex = () =>
      Array.from(container.querySelectorAll<HTMLElement>('.mantine-Modal-root')).map((root) =>
        root.style.getPropertyValue('--mb-z-index')
      );

    expect(getRootZIndex()).toStrictEqual(['calc(1000 + 0 + 2)', 'calc(1000 + 2 + 2)']);

    await userEvent.click(screen.getByText('unmount-a'));
    expect(getRootZIndex()).toStrictEqual(['calc(200 + 0 + 2)']);
  });

  it('keeps the default overlay transition for a single modal in the shared stack', async () => {
    const { container } = render(<SharedStackDemo />, { overlayStack: true }, { env: 'default' });
    await userEvent.click(screen.getByText('open-a'));

    await waitFor(() => {
      expect(getOverlays(container)).toHaveLength(1);
      expect((getOverlays(container)[0] as HTMLElement).style.transitionDuration).toBe('200ms');
    });

    await userEvent.click(screen.getByText('open-b'));

    await waitFor(() => {
      expect(getOverlays(container)).toHaveLength(1);
      expect((getOverlays(container)[0] as HTMLElement).style.transitionDuration).toBe('');
    });
  });

  it('does not create a second shared stack in nested MantineThemeProvider', async () => {
    const { container } = render(
      <SharedStackDemo
        wrapB={(node) => (
          <MantineThemeProvider theme={{ primaryColor: 'red' }}>{node}</MantineThemeProvider>
        )}
      />,
      { overlayStack: true }
    );
    await userEvent.click(screen.getByText('open'));

    expect(getInners(container)[0].style.transform).toBe('translateY(-9px)');
    expect(getOverlays(container)).toHaveLength(1);
  });

  it('opts out of the shared stack in nested MantineThemeProvider with overlayStack: false', async () => {
    const { container } = render(
      <SharedStackDemo
        wrapB={(node) => (
          <MantineThemeProvider theme={{ overlayStack: false }}>{node}</MantineThemeProvider>
        )}
      />,
      { overlayStack: true }
    );
    await userEvent.click(screen.getByText('open'));

    const inners = getInners(container);
    expect(inners[0].style.transform).toBe('translateY(0px)');
    expect(inners[1].style.transform).toBe('');
    expect(container.querySelectorAll('[data-stacked]')).toHaveLength(1);
    expect(getOverlays(container)).toHaveLength(2);
  });

  it('creates the shared stack in nested MantineThemeProvider with overlayStack', async () => {
    const { container } = render(
      <MantineThemeProvider theme={{ overlayStack: true }}>
        <SharedStackDemo />
      </MantineThemeProvider>
    );
    await userEvent.click(screen.getByText('open'));

    expect(getInners(container)[0].style.transform).toBe('translateY(-9px)');
    expect(getOverlays(container)).toHaveLength(1);
  });

  it('hides and disables non-top modals when theme.overlayStack withStackTransform is false', async () => {
    const { container } = render(<SharedStackDemo />, {
      overlayStack: { withStackTransform: false },
    });
    await userEvent.click(screen.getByText('open'));

    const inners = getInners(container);
    const getSection = (inner: HTMLElement) => inner.querySelector<HTMLElement>('section')!;
    expect(inners[0]).toHaveAttribute('data-stack-hidden');
    expect(getSection(inners[0]).style.pointerEvents).toBe('none');
    expect(inners[1]).not.toHaveAttribute('data-stack-hidden');
    expect(getSection(inners[1]).style.pointerEvents).toBe('');

    await userEvent.keyboard('{Escape}');
    await waitFor(() => expect(screen.queryByText('modal-b')).not.toBeInTheDocument());
    expect(getInners(container)[0]).not.toHaveAttribute('data-stack-hidden');
    expect(getSection(getInners(container)[0]).style.pointerEvents).toBe('');
  });

  it('keeps ids of separate Modal.Stack instances apart in the shared stack', async () => {
    const onCloseOuter = jest.fn();

    function InnerStack() {
      const stack = useModalsStack(['first']);
      return (
        <Modal.Stack>
          <button type="button" onClick={() => stack.open('first')}>
            open-inner
          </button>
          <Modal {...stack.register('first')} withinPortal={false} title="inner">
            inner-content
          </Modal>
        </Modal.Stack>
      );
    }

    function OuterStack() {
      const stack = useModalsStack(['first']);
      return (
        <Modal.Stack>
          <button type="button" onClick={() => stack.open('first')}>
            open-outer
          </button>
          <Modal
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
          </Modal>
        </Modal.Stack>
      );
    }

    const { container } = render(<OuterStack />, { overlayStack: true });
    await userEvent.click(screen.getByText('open-outer'));
    await userEvent.click(screen.getByText('open-inner'));

    const zIndexes = Array.from(container.querySelectorAll<HTMLElement>('.mantine-Modal-root')).map(
      (root) => root.style.getPropertyValue('--mb-z-index')
    );
    expect(zIndexes).toStrictEqual(['calc(200 + 0 + 2)', 'calc(200 + 2 + 2)']);

    const closeButtons = container.querySelectorAll<HTMLButtonElement>('.mantine-Modal-close');
    fireEvent.click(closeButtons[1]);
    await waitFor(() => expect(screen.queryByText('inner-content')).not.toBeInTheDocument());

    await userEvent.keyboard('{Escape}');
    expect(onCloseOuter).toHaveBeenCalledTimes(1);
    await waitFor(() => expect(screen.queryByText('outer-content')).not.toBeInTheDocument());
  });

  it('applies theme.overlayStack options to the shared stack', async () => {
    const { container } = render(<SharedStackDemo />, {
      overlayStack: { withStackTransform: false },
    });
    await userEvent.click(screen.getByText('open'));

    const inners = getInners(container);
    expect(inners[0].style.transform).toBe('');
    expect(inners[1].style.transform).toBe('');
    expect(getOverlays(container)).toHaveLength(1);
  });
});

describe('@mantine/core/Modal focus return', () => {
  function ExplicitStackDemo() {
    const stack = useModalsStack(['a', 'b', 'c']);
    return (
      <Modal.Stack>
        <Modal {...stack.register('a')} withinPortal={false} title="modal-a">
          <button type="button" onClick={() => stack.open('b')}>
            open-b
          </button>
        </Modal>
        <Modal {...stack.register('b')} withinPortal={false} title="modal-b">
          <button type="button" onClick={() => stack.open('c')}>
            open-c
          </button>
        </Modal>
        <Modal {...stack.register('c')} withinPortal={false} title="modal-c">
          <button type="button" onClick={stack.closeAll}>
            close-all
          </button>
        </Modal>
        <button type="button" onClick={() => stack.open('a')}>
          open-a
        </button>
      </Modal.Stack>
    );
  }

  function SharedStackDemo({ modalAProps }: { modalAProps?: Partial<ModalProps> }) {
    const [a, setA] = useState(false);
    const [b, setB] = useState(false);
    return (
      <>
        <Modal
          opened={a}
          onClose={() => setA(false)}
          withinPortal={false}
          title="modal-a"
          {...modalAProps}
        >
          <button type="button" onClick={() => setB(true)}>
            open-b
          </button>
        </Modal>
        <Modal opened={b} onClose={() => setB(false)} withinPortal={false} title="modal-b">
          modal-b
        </Modal>
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

  it('returns focus to the element that opened each modal when closing an explicit stack', async () => {
    render(<ExplicitStackDemo />);
    await openAndFocus('open-a', 'modal-a');
    await openAndFocus('open-b', 'modal-b');
    await openAndFocus('open-c', 'modal-c');

    await userEvent.keyboard('{Escape}');
    await waitFor(() => expect(screen.getByRole('button', { name: 'open-c' })).toHaveFocus());

    await userEvent.keyboard('{Escape}');
    await waitFor(() => expect(screen.getByRole('button', { name: 'open-b' })).toHaveFocus());

    await userEvent.keyboard('{Escape}');
    await waitFor(() => expect(screen.getByRole('button', { name: 'open-a' })).toHaveFocus());
  });

  it('returns focus to the original trigger when the whole explicit stack closes at once', async () => {
    render(<ExplicitStackDemo />);
    await openAndFocus('open-a', 'modal-a');
    await openAndFocus('open-b', 'modal-b');
    await openAndFocus('open-c', 'modal-c');

    await userEvent.click(screen.getByRole('button', { name: 'close-all' }));
    await waitFor(() => expect(screen.getByRole('button', { name: 'open-a' })).toHaveFocus());
  });

  it('returns focus to the trigger of a single modal in the shared theme.overlayStack', async () => {
    render(<SharedStackDemo />, { overlayStack: true });
    await openAndFocus('open-a', 'modal-a');

    await userEvent.keyboard('{Escape}');
    await waitFor(() => expect(screen.getByRole('button', { name: 'open-a' })).toHaveFocus());
  });

  it('returns focus through the shared theme.overlayStack', async () => {
    render(<SharedStackDemo />, { overlayStack: true });
    await openAndFocus('open-a', 'modal-a');
    await openAndFocus('open-b', 'modal-b');

    await userEvent.keyboard('{Escape}');
    await waitFor(() => expect(screen.getByRole('button', { name: 'open-b' })).toHaveFocus());

    await userEvent.keyboard('{Escape}');
    await waitFor(() => expect(screen.getByRole('button', { name: 'open-a' })).toHaveFocus());
  });

  it('does not return focus in the shared theme.overlayStack when returnFocus is false', async () => {
    render(<SharedStackDemo modalAProps={{ returnFocus: false }} />, { overlayStack: true });
    await openAndFocus('open-a', 'modal-a');

    await userEvent.keyboard('{Escape}');
    await act(() => new Promise((resolve) => setTimeout(resolve, 50)));
    expect(screen.getByRole('button', { name: 'open-a' })).not.toHaveFocus();
  });
});
