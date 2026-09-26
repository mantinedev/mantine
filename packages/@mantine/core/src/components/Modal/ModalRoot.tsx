import { RemoveScroll } from 'react-remove-scroll';
import {
  Box,
  createVarsResolver,
  factory,
  Factory,
  getDefaultZIndex,
  getRadius,
  getShadow,
  getSize,
  getSpacing,
  MantineRadius,
  rem,
  StylesApiProps,
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
import { ModalProvider, ScrollAreaComponent } from './Modal.context';
import classes from './Modal.module.css';

export type ModalRootStylesNames = ModalBaseStylesNames;
export type ModalRootCssVariables = {
  root: '--modal-radius' | '--modal-size' | '--modal-y-offset' | '--modal-x-offset';
};

export interface ModalRootProps extends StylesApiProps<ModalRootFactory>, ModalBaseProps {
  __staticSelector?: string;

  /** Top/bottom modal offset @default 5dvh @category appearance */
  yOffset?: React.CSSProperties['marginTop'];

  /** Left/right modal offset @default 5vw @category appearance */
  xOffset?: React.CSSProperties['marginLeft'];

  /** Scroll area component @default 'div' */
  scrollAreaComponent?: ScrollAreaComponent;

  /** Key of `theme.radius` or any valid CSS value to set `border-radius` @default theme.defaultRadius @category appearance */
  radius?: MantineRadius;

  /** If set, the modal is centered vertically @default false @category appearance */
  centered?: boolean;

  /** If set, the modal takes the entire screen @default false @category appearance */
  fullScreen?: boolean;

  /** Key of `theme.breakpoints`, CSS length or px number below which the modal takes the entire screen @category appearance */
  fullScreenBelow?: ModalBaseBreakpoint;

  /** If set, the header stays pinned to the top while the body scrolls @default true @category appearance */
  stickyHeader?: boolean;

  /** If set, the footer stays pinned to the bottom while the body scrolls @default true @category appearance */
  stickyFooter?: boolean;
}

export type ModalRootFactory = Factory<{
  props: ModalRootProps;
  ref: HTMLDivElement;
  stylesNames: ModalRootStylesNames;
  vars: ModalRootCssVariables;
}>;

const defaultProps = {
  __staticSelector: 'Modal',
  closeOnClickOutside: true,
  withinPortal: true,
  lockScroll: true,
  trapFocus: true,
  returnFocus: true,
  closeOnEscape: true,
  keepMounted: false,
  keepMountedMode: 'activity',
  zIndex: getDefaultZIndex('modal'),
  transitionProps: { duration: 200, transition: 'fade-down' },
  yOffset: '5dvh',
  stickyHeader: true,
  stickyFooter: true,
} satisfies Partial<ModalRootProps>;

const varsResolver = createVarsResolver<ModalRootFactory>(
  (_, { radius, size, yOffset, xOffset }) => ({
    root: {
      '--modal-radius': radius === undefined ? undefined : getRadius(radius),
      '--modal-size': getSize(size, 'modal-size'),
      '--modal-y-offset': rem(yOffset),
      '--modal-x-offset': rem(xOffset),
    },
  })
);

export const ModalRoot = factory<ModalRootFactory>((_props) => {
  const props = useProps('ModalRoot', defaultProps, _props);
  const {
    classNames,
    className,
    style,
    styles,
    unstyled,
    vars,
    yOffset,
    scrollAreaComponent,
    radius,
    fullScreen,
    fullScreenBelow,
    centered,
    stickyHeader,
    stickyFooter,
    xOffset,
    __staticSelector,
    attributes,
    keepMounted,
    keepMountedMode,
    opened,
    onClose,
    id,
    transitionProps,
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
    __stackActive,
    ...others
  } = props;

  const belowBreakpoint = useBelowBreakpoint(fullScreenBelow);
  const resolvedFullScreen = fullScreen || belowBreakpoint;

  const getStyles = useStyles<ModalRootFactory>({
    name: __staticSelector,
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

  const overlay = useOverlay({
    id,
    transitionProps,
    opened,
    trapFocus,
    closeOnEscape,
    onClose,
    returnFocus,
    handledEscapeEvents: __handledEscapeEvents,
    stackActive: __stackActive,
  });

  const { key: removeScrollKey, ...otherRemoveScrollProps } = removeScrollProps || {};

  return (
    <ModalProvider
      value={{
        yOffset,
        scrollAreaComponent,
        getStyles,
        fullScreen: resolvedFullScreen,
        centered,
        stickyHeader,
        stickyFooter,
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
          transitionProps: { ...transitionProps, keepMounted, keepMountedMode },
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
              data-centered={centered || undefined}
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
    </ModalProvider>
  );
});

ModalRoot.classes = classes;
ModalRoot.varsResolver = varsResolver;
ModalRoot.displayName = '@mantine/core/ModalRoot';
