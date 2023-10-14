import React from 'react';
import {
  StylesApiProps,
  factory,
  useProps,
  useStyles,
  createVarsResolver,
  Factory,
  getDefaultZIndex,
  getSize,
  useDirection,
} from '../../core';
import { MantineTransition } from '../Transition';
import { ModalBaseProps, ModalBase, ModalBaseStylesNames } from '../ModalBase';
import { DrawerProvider, ScrollAreaComponent } from './Drawer.context';
import classes from './Drawer.module.css';

type DrawerPosition = 'bottom' | 'left' | 'right' | 'top';

export type DrawerRootStylesNames = ModalBaseStylesNames;
export type DrawerRootCssVariables = {
  root:
    | '--drawer-size'
    | '--drawer-flex'
    | '--drawer-height'
    | '--drawer-align'
    | '--drawer-justify';
};

export interface DrawerRootProps extends StylesApiProps<DrawerRootFactory>, ModalBaseProps {
  /** Scroll area component, native `div` element by default */
  scrollAreaComponent?: ScrollAreaComponent;

  /** Side of the screen on which drawer will be opened, `'left'` by default */
  position?: DrawerPosition;
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

const varsResolver = createVarsResolver<DrawerRootFactory>((_, { position, size }) => ({
  root: {
    '--drawer-size': getSize(size, 'drawer-size'),
    '--drawer-flex': position === 'left' || position === 'right' ? undefined : '0 0 100%',
    '--drawer-height':
      position === 'left' || position === 'right' ? undefined : 'var(--drawer-size)',
    '--drawer-align': position === 'bottom' ? 'flex-end' : undefined,
    '--drawer-justify': position === 'right' ? 'flex-end' : undefined,
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
    <DrawerProvider value={{ scrollAreaComponent, getStyles }}>
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
