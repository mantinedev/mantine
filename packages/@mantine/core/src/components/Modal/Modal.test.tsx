import { fireEvent, waitFor } from '@testing-library/react';
import { createContextContainer, render, screen, tests, userEvent } from '@mantine-tests/core';
import { Modal, ModalProps, ModalStylesNames } from './Modal';
import { ModalBody, ModalBodyProps } from './ModalBody';
import { ModalCloseButton, ModalCloseButtonProps } from './ModalCloseButton';
import { ModalContent, ModalContentProps } from './ModalContent';
import { ModalFooter, ModalFooterProps } from './ModalFooter';
import { ModalHeader, ModalHeaderProps } from './ModalHeader';
import { ModalOverlay, ModalOverlayProps } from './ModalOverlay';
import { ModalRoot, ModalRootProps } from './ModalRoot';
import { ModalTitle, ModalTitleProps } from './ModalTitle';
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
    const transformed = inners.filter((el) => el.style.transform && el.style.transform !== 'none');
    expect(transformed.length).toBeGreaterThan(0);
  });

  it('does not apply a stack transform when withStackTransform is false', async () => {
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

  it('sizes background cards to the top modal measured size via reportTopRect', async () => {
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

    try {
      const { container } = render(<StackDemo />);
      await userEvent.click(screen.getByText('open'));

      await waitFor(() => {
        const contents = Array.from(
          container.querySelectorAll<HTMLElement>('[data-modal-content]')
        );
        const sized = contents.filter(
          (el) => el.style.maxWidth !== '' && el.style.overflow === 'hidden'
        );
        expect(sized.length).toBeGreaterThan(0);
      });

      const contents = Array.from(container.querySelectorAll<HTMLElement>('[data-modal-content]'));
      const sized = contents.filter((el) => el.style.overflow === 'hidden');
      sized.forEach((el) => {
        expect(el.style.maxWidth).not.toBe('');
        expect(el.style.maxHeight).not.toBe('');
        expect(el.style.overflow).toBe('hidden');
      });
    } finally {
      HTMLElement.prototype.getBoundingClientRect = originalGetBoundingClientRect;
    }
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
    function FullScreenStackDemo() {
      const stack = useModalsStack(['a', 'b']);
      return (
        <Modal.Stack>
          <Modal {...stack.register('a')} fullScreen withinPortal={false}>
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

    const { container } = render(<FullScreenStackDemo />);
    await userEvent.click(screen.getByText('open'));
    expect(container.querySelector('[data-modal-content][data-full-screen]')).not.toBeNull();
  });
});
