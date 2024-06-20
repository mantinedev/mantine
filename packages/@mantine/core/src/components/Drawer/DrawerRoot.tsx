import {
  createVarsResolver,
  factory,
  Factory,
  getDefaultZIndex,
  getSize,
  MantineRadius,
  rem,
  StylesApiProps,
  useDirection,
  useProps,
  useStyles,
} from '../../core';
import { ModalBase, ModalBaseProps, ModalBaseStylesNames } from '../ModalBase';
import { MantineTransition } from '../Transition';
import { DrawerProvider, ScrollAreaComponent } from './Drawer.context';
import classes from './Drawer.module.css';

type DrawerPosition = 'bottom' | 'left' | 'right' | 'top';

function getDrawerAlign(position: DrawerPosition | undefined) {
  switch (position) {
    case 'top':
      return 'flex-start';
    case 'bottom':
      return 'flex-end';
    default:
      return undefined;
  }
}

function getDrawerFlex(position: DrawerPosition | undefined) {
  if (position === 'top' || position === 'bottom') {
    return '0 0 calc(100% - var(--drawer-offset, 0rem) * 2)';
  }

  return undefined;
}

export type DrawerRootStylesNames = ModalBaseStylesNames;
export type DrawerRootCssVariables = {
  root:
    | '--drawer-size'
    | '--drawer-flex'
    | '--drawer-height'
    | '--drawer-align'
    | '--drawer-justify'
    | '--drawer-offset';
};

export interface DrawerRootProps extends StylesApiProps<DrawerRootFactory>, ModalBaseProps {
  /** Scroll area component, native `div` element by default */
  scrollAreaComponent?: ScrollAreaComponent;

  /** Side of the screen on which drawer will be opened, `'left'` by default */
  position?: DrawerPosition;

  /** Key of `theme.radius` or any valid CSS value to set `border-radius`, numbers are converted to rem, `0` by default */
  radius?: MantineRadius;

  /** Drawer container offset from the viewport end, `0` by default */
  offset?: number | string;
}

export type DrawerRootFactory = Factory<{
  props: DrawerRootProps;
  ref: HTMLDivElement;
  stylesNames: DrawerRootStylesNames;
  vars: DrawerRootCssVariables;
  compound: true;
}>;

const transitions: Record<DrawerPosition, MantineTransition> = {
  top: 'slide-down',
  bottom: 'slide-up',
  left: 'slide-right',
  right: 'slide-left',
};

const rtlTransitions: Record<DrawerPosition, MantineTransition> = {
  top: 'slide-down',
  bottom: 'slide-up',
  right: 'slide-right',
  left: 'slide-left',
};

const defaultProps: Partial<DrawerRootProps> = {
  closeOnClickOutside: true,
  withinPortal: true,
  lockScroll: true,
  trapFocus: true,
  returnFocus: true,
  closeOnEscape: true,
  keepMounted: false,
  zIndex: getDefaultZIndex('modal'),
  position: 'left',
};

const varsResolver = createVarsResolver<DrawerRootFactory>((_, { position, size, offset }) => ({
  root: {
    '--drawer-size': getSize(size, 'drawer-size'),
    '--drawer-flex': getDrawerFlex(position),
    '--drawer-height':
      position === 'left' || position === 'right' ? undefined : 'var(--drawer-size)',
    '--drawer-align': getDrawerAlign(position),
    '--drawer-justify': position === 'right' ? 'flex-end' : undefined,
    '--drawer-offset': rem(offset),
  },
}));

export const DrawerRoot = factory<DrawerRootFactory>((_props, ref) => {
  const props = useProps('DrawerRoot', defaultProps, _props);
  const {
    classNames,
    className,
    style,
    styles,
    unstyled,
    vars,
    scrollAreaComponent,
    position,
    transitionProps,
    radius,
    ...others
  } = props;

  const { dir } = useDirection();

  const getStyles = useStyles<DrawerRootFactory>({
    name: 'Drawer',
    classes,
    props,
    className,
    style,
    classNames,
    styles,
    unstyled,
    vars,
    varsResolver,
  });

  const drawerTransition = (dir === 'rtl' ? rtlTransitions : transitions)[position!];

  return (
    <DrawerProvider value={{ scrollAreaComponent, getStyles, radius }}>
      <ModalBase
        ref={ref}
        {...getStyles('root')}
        transitionProps={{ transition: drawerTransition, ...transitionProps }}
        unstyled={unstyled}
        {...others}
      />
    </DrawerProvider>
  );
});

DrawerRoot.classes = classes;
DrawerRoot.displayName = '@mantine/core/DrawerRoot';
