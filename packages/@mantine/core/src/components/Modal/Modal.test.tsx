import { createContextContainer, render, tests } from '@mantine-tests/core';
import { Modal, ModalProps, ModalStylesNames } from './Modal';
import { ModalBody, ModalBodyProps } from './ModalBody';
import { ModalCloseButton, ModalCloseButtonProps } from './ModalCloseButton';
import { ModalContent, ModalContentProps } from './ModalContent';
import { ModalHeader, ModalHeaderProps } from './ModalHeader';
import { ModalOverlay, ModalOverlayProps } from './ModalOverlay';
import { ModalRoot, ModalRootProps } from './ModalRoot';
import { ModalTitle, ModalTitleProps } from './ModalTitle';

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
const OverlayContainer = createModalContextContainer(ModalOverlay);
const TitleContainer = createModalContextContainer(ModalTitle);

describe('@mantine/core/Modal', () => {
  tests.itSupportsSystemProps<ModalProps, ModalStylesNames>({
    component: Modal,
    props: defaultProps,
    mod: true,
    styleProps: true,
    children: true,
    extend: true,
    withProps: true,
    variant: true,
    size: true,
    classes: true,
    refType: HTMLDivElement,
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

  it('exposes compound components', () => {
    expect(Modal.Root).toBe(ModalRoot);
    expect(Modal.Overlay).toBe(ModalOverlay);
    expect(Modal.Content).toBe(ModalContent);
    expect(Modal.Body).toBe(ModalBody);
    expect(Modal.Header).toBe(ModalHeader);
    expect(Modal.Title).toBe(ModalTitle);
    expect(Modal.CloseButton).toBe(ModalCloseButton);
  });
});

describe('@mantine/core/ModalRoot', () => {
  tests.itSupportsSystemProps<ModalRootProps, 'root'>({
    component: ModalRoot,
    props: defaultProps,
    mod: true,
    styleProps: true,
    children: true,
    extend: true,
    withProps: true,
    variant: true,
    size: true,
    classes: true,
    refType: HTMLDivElement,
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
    styleProps: true,
    children: true,
    extend: true,
    withProps: true,
    variant: true,
    size: true,
    classes: true,
    refType: HTMLDivElement,
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
    styleProps: true,
    children: true,
    extend: true,
    withProps: true,
    variant: true,
    size: true,
    classes: true,
    refType: HTMLButtonElement,
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
    styleProps: true,
    children: true,
    extend: true,
    withProps: true,
    variant: true,
    size: true,
    classes: true,
    refType: HTMLElement,
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
    styleProps: true,
    children: true,
    extend: true,
    withProps: true,
    variant: true,
    size: true,
    classes: true,
    refType: HTMLElement,
    displayName: '@mantine/core/ModalHeader',
    selector: '.mantine-Modal-header',
    variantSelector: '.mantine-Modal-header',
    sizeSelector: '.mantine-Modal-header',
  });
});

describe('@mantine/core/ModalOverlay', () => {
  tests.itSupportsSystemProps<ModalOverlayProps>({
    component: OverlayContainer,
    props: {},
    styleProps: true,
    children: true,
    extend: true,
    withProps: true,
    variant: true,
    size: true,
    classes: true,
    refType: HTMLDivElement,
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
    styleProps: true,
    children: true,
    extend: true,
    withProps: true,
    variant: true,
    size: true,
    classes: true,
    refType: HTMLHeadingElement,
    displayName: '@mantine/core/ModalTitle',
    selector: '.mantine-Modal-title',
    variantSelector: '.mantine-Modal-title',
    sizeSelector: '.mantine-Modal-title',
  });
});
