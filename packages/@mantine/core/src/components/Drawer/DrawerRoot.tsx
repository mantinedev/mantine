import { RemoveScroll } from 'react-remove-scroll';
import {
  Box,
  createVarsResolver,
  factory,
  Factory,
  getDefaultZIndex,
  getShadow,
  getSize,
  getSpacing,
  MantineRadius,
  rem,
  StylesApiProps,
  useDirection,
  useProps,
  useStyles,
} from '../../core';
import {
  ModalBaseBreakpoint,
  ModalBaseProps,
  ModalBaseProvider,
  ModalBaseStylesNames,
  useOverlay,
} from '../ModalBase';
import { useBelowBreakpoint } from '../ModalBase/use-below-breakpoint';
import { OptionalPortal } from '../Portal';
import { ScrollArea } from '../ScrollArea';
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

export type DrawerRootStylesNames = ModalBaseStylesNames | 'panel' | 'handle';
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
  /** Scroll area component @default 'div' */
  scrollAreaComponent?: ScrollAreaComponent;

  /** Side of the screen on which drawer will be opened @default 'left' */
  position?: DrawerPosition;

  /** Key of `theme.radius` or any valid CSS value to set `border-radius`, numbers are converted to rem @default 0 */
  radius?: MantineRadius;

  /** Drawer container offset from the viewport end @default 0 */
  offset?: number | string;

  /** If set, the drawer takes the entire viewport along its position axis, `size`, `offset` and `radius` props are ignored @default false */
  fullScreen?: boolean;

  /** Key of `theme.breakpoints`, CSS length or px number below which the drawer takes the entire viewport along its position axis */
  fullScreenBelow?: ModalBaseBreakpoint;

  /** If set, the header stays pinned to the top while the body scrolls @default true */
  stickyHeader?: boolean;

  /** If set, the footer stays pinned to the bottom while the body scrolls @default true */
  stickyFooter?: boolean;

  /** If set, the drawer can be dismissed with a swipe gesture in the direction of its position @default true */
  withSwipe?: boolean;

  /** If set, a drag handle is displayed on the overlay at the drawer's leading edge @default false */
  withHandle?: boolean;

  /** Fraction of the drawer size past which a swipe release dismisses the drawer @default 0.25 */
  swipeThreshold?: number;

  /** Snap points along the position axis at which the drawer can rest. Each point is a fraction of the viewport in `(0, 1]` (for example `0.5`), a number of pixels (`> 1`), or a percentage string (for example `'50%'`). When set, the drawer is sized to fill the viewport along its axis and rests at these points */
  snapPoints?: (number | string)[];

  /** Controlled active snap point */
  activeSnapPoint?: number | string;

  /** Uncontrolled active snap point initial value @default largest snap point */
  defaultActiveSnapPoint?: number | string;

  /** Called when the active snap point changes */
  onSnapPointChange?: (point: number | string) => void;
}

export type DrawerRootFactory = Factory<{
  props: DrawerRootProps;
  ref: HTMLDivElement;
  stylesNames: DrawerRootStylesNames;
  vars: DrawerRootCssVariables;
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

const defaultProps = {
  closeOnClickOutside: true,
  withinPortal: true,
  lockScroll: true,
  trapFocus: true,
  returnFocus: true,
  closeOnEscape: true,
  keepMounted: false,
  keepMountedMode: 'activity',
  zIndex: getDefaultZIndex('modal'),
  position: 'left',
  stickyHeader: true,
  stickyFooter: true,
  withSwipe: true,
  withHandle: false,
} satisfies Partial<DrawerRootProps>;

const varsResolver = createVarsResolver<DrawerRootFactory>(
  (_, { position, size, offset, snapPoints, fullScreen }) => {
    const hasSnapPoints = Array.isArray(snapPoints) && snapPoints.length > 0;
    const isHorizontal = position === 'left' || position === 'right';
    const fillAxis = 'calc(100% - var(--drawer-offset, 0rem) * 2)';

    return {
      root: {
        '--drawer-size': fullScreen ? '100%' : getSize(size, 'drawer-size'),
        '--drawer-flex':
          hasSnapPoints && isHorizontal ? `0 0 ${fillAxis}` : getDrawerFlex(position),
        '--drawer-height': isHorizontal
          ? undefined
          : hasSnapPoints
            ? fillAxis
            : 'var(--drawer-size)',
        '--drawer-align': getDrawerAlign(position),
        '--drawer-justify': position === 'right' ? 'flex-end' : undefined,
        '--drawer-offset': fullScreen ? undefined : rem(offset),
      },
    };
  }
);

export const DrawerRoot = factory<DrawerRootFactory>((_props) => {
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
    fullScreen,
    fullScreenBelow,
    stickyHeader,
    stickyFooter,
    withSwipe,
    withHandle,
    swipeThreshold,
    snapPoints,
    activeSnapPoint,
    defaultActiveSnapPoint,
    onSnapPointChange,
    transitionProps,
    radius,
    attributes,
    keepMounted,
    keepMountedMode,
    opened,
    onClose,
    id,
    onExitTransitionEnd,
    onEnterTransitionEnd,
    trapFocus,
    closeOnEscape,
    returnFocus,
    closeOnClickOutside,
    withinPortal,
    portalProps,
    lockScroll,
    children,
    zIndex,
    shadow,
    padding,
    __vars,
    removeScrollProps,
    __handledEscapeEvents,
    ...others
  } = props;

  const { dir } = useDirection();
  const belowBreakpoint = useBelowBreakpoint(fullScreenBelow);
  const hasSnapPoints = Array.isArray(snapPoints) && snapPoints.length > 0;
  const resolvedFullScreen = !hasSnapPoints && (fullScreen || belowBreakpoint);

  const getStyles = useStyles<DrawerRootFactory>({
    name: 'Drawer',
    classes,
    props: { ...props, fullScreen: resolvedFullScreen },
    className,
    style,
    classNames,
    styles,
    unstyled,
    attributes,
    vars,
    varsResolver,
  });

  const drawerTransition = (dir === 'rtl' ? rtlTransitions : transitions)[position];
  const mergedTransitionProps = { transition: drawerTransition, ...transitionProps };

  const overlay = useOverlay({
    id,
    transitionProps: mergedTransitionProps,
    opened,
    trapFocus,
    closeOnEscape,
    onClose,
    returnFocus,
    handledEscapeEvents: __handledEscapeEvents,
  });

  const { key: removeScrollKey, ...otherRemoveScrollProps } = removeScrollProps || {};

  return (
    <DrawerProvider
      value={{
        scrollAreaComponent,
        getStyles,
        radius,
        stickyHeader,
        stickyFooter,
        position,
        withSwipe,
        withHandle,
        swipeThreshold,
        snapPoints,
        activeSnapPoint,
        defaultActiveSnapPoint,
        onSnapPointChange,
      }}
    >
      <ModalBaseProvider
        value={{
          ...overlay,
          opened,
          onClose,
          closeOnClickOutside,
          onExitTransitionEnd,
          onEnterTransitionEnd,
          transitionProps: { ...mergedTransitionProps, keepMounted, keepMountedMode },
          trapFocus,
          closeOnEscape,
          zIndex,
          unstyled,
        }}
      >
        <OptionalPortal {...portalProps} withinPortal={withinPortal}>
          <RemoveScroll
            enabled={overlay.shouldLockScroll && lockScroll}
            key={removeScrollKey}
            {...otherRemoveScrollProps}
          >
            <Box
              {...getStyles('root')}
              data-full-screen={resolvedFullScreen || undefined}
              data-offset-scrollbars={scrollAreaComponent === ScrollArea.Autosize || undefined}
              {...others}
              id={overlay._id}
              __vars={{
                ...__vars,
                '--mb-z-index': (zIndex || getDefaultZIndex('modal')).toString(),
                '--mb-shadow': getShadow(shadow),
                '--mb-padding': getSpacing(padding),
              }}
            >
              {children}
            </Box>
          </RemoveScroll>
        </OptionalPortal>
      </ModalBaseProvider>
    </DrawerProvider>
  );
});

DrawerRoot.classes = classes;
DrawerRoot.varsResolver = varsResolver;
DrawerRoot.displayName = '@mantine/core/DrawerRoot';
