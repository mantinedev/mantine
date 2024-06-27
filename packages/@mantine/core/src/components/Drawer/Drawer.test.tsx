import { createContextContainer, render, tests } from '@mantine-tests/core';
import { Drawer, DrawerProps, DrawerStylesNames } from './Drawer';
import { DrawerBody, DrawerBodyProps } from './DrawerBody';
import { DrawerCloseButton, DrawerCloseButtonProps } from './DrawerCloseButton';
import { DrawerContent, DrawerContentProps } from './DrawerContent';
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
const OverlayContainer = createDrawerContextContainer(DrawerOverlay);
const TitleContainer = createDrawerContextContainer(DrawerTitle);

describe('@mantine/core/Drawer', () => {
  tests.itSupportsSystemProps<DrawerProps, DrawerStylesNames>({
    component: Drawer,
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

  it('exposes compound components', () => {
    expect(Drawer.Root).toBe(DrawerRoot);
    expect(Drawer.Overlay).toBe(DrawerOverlay);
    expect(Drawer.Content).toBe(DrawerContent);
    expect(Drawer.Body).toBe(DrawerBody);
    expect(Drawer.Header).toBe(DrawerHeader);
    expect(Drawer.Title).toBe(DrawerTitle);
    expect(Drawer.CloseButton).toBe(DrawerCloseButton);
  });
});

describe('@mantine/core/DrawerRoot', () => {
  tests.itSupportsSystemProps<DrawerRootProps, 'root'>({
    component: DrawerRoot,
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
    styleProps: true,
    children: true,
    extend: true,
    withProps: true,
    variant: true,
    size: true,
    classes: true,
    refType: HTMLDivElement,
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
    styleProps: true,
    children: true,
    extend: true,
    withProps: true,
    variant: true,
    size: true,
    classes: true,
    refType: HTMLButtonElement,
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
    styleProps: true,
    children: true,
    extend: true,
    withProps: true,
    variant: true,
    size: true,
    classes: true,
    refType: HTMLElement,
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
    styleProps: true,
    children: true,
    extend: true,
    withProps: true,
    variant: true,
    size: true,
    classes: true,
    refType: HTMLElement,
    displayName: '@mantine/core/DrawerHeader',
    selector: '.mantine-Drawer-header',
    variantSelector: '.mantine-Drawer-header',
    sizeSelector: '.mantine-Drawer-header',
  });
});

describe('@mantine/core/DrawerOverlay', () => {
  tests.itSupportsSystemProps<DrawerOverlayProps>({
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
    styleProps: true,
    children: true,
    extend: true,
    withProps: true,
    variant: true,
    size: true,
    classes: true,
    refType: HTMLHeadingElement,
    displayName: '@mantine/core/DrawerTitle',
    selector: '.mantine-Drawer-title',
    variantSelector: '.mantine-Drawer-title',
    sizeSelector: '.mantine-Drawer-title',
  });
});
