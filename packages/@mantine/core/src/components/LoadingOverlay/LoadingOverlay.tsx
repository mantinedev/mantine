import {
  Box,
  BoxProps,
  createVarsResolver,
  ElementProps,
  factory,
  Factory,
  getDefaultZIndex,
  StylesApiProps,
  useMantineTheme,
  useProps,
  useStyles,
} from '../../core';
import { Loader, LoaderProps } from '../Loader';
import { Overlay, OverlayProps } from '../Overlay';
import { Transition, TransitionOverride } from '../Transition';
import classes from './LoadingOverlay.module.css';

export type LoadingOverlayStylesNames = 'root' | 'loader' | 'overlay';
export type LoadingOverlayCssVariables = {
  root: '--lo-z-index';
};

export interface LoadingOverlayProps
  extends BoxProps, StylesApiProps<LoadingOverlayFactory>, ElementProps<'div'> {
  /** Props passed down to `Transition` component. Set `duration` to create custom transition or override default transition. */
  transitionProps?: TransitionOverride;

  /** Props passed down to `Loader` component */
  loaderProps?: LoaderProps;

  /** Props passed down to `Overlay` component. Use to customizing blur, opacity, color and other properties. */
  overlayProps?: OverlayProps;

  /** Controls overlay visibility. Typically used with state (useState, useDisclosure). @default false */
  visible?: boolean;

  /** Controls `z-index` of both the overlay and loader. The loader receives `z-index + 1`. @default 400 */
  zIndex?: string | number;

  /** Called when transition starts */
  onEnter?: () => void;

  /** Called when transition ends */
  onEntered?: () => void;

  /** Called when exit transition starts */
  onExit?: () => void;

  /** Called when exit transition ends */
  onExited?: () => void;
}

export type LoadingOverlayFactory = Factory<{
  props: LoadingOverlayProps;
  ref: HTMLDivElement;
  stylesNames: LoadingOverlayStylesNames;
  vars: LoadingOverlayCssVariables;
}>;

const defaultProps = {
  transitionProps: { transition: 'fade', duration: 0 },
  overlayProps: { backgroundOpacity: 0.75 },
  zIndex: getDefaultZIndex('overlay'),
} satisfies Partial<LoadingOverlayProps>;

const varsResolver = createVarsResolver<LoadingOverlayFactory>((_, { zIndex }) => ({
  root: {
    '--lo-z-index': zIndex?.toString(),
  },
}));

export const LoadingOverlay = factory<LoadingOverlayFactory>((_props) => {
  const props = useProps('LoadingOverlay', defaultProps, _props);
  const {
    classNames,
    className,
    style,
    styles,
    unstyled,
    vars,
    transitionProps,
    loaderProps,
    overlayProps,
    visible,
    zIndex,
    attributes,
    onEnter,
    onEntered,
    onExit,
    onExited,
    ...others
  } = props;

  const theme = useMantineTheme();

  const getStyles = useStyles<LoadingOverlayFactory>({
    name: 'LoadingOverlay',
    classes,
    props,
    className,
    style,
    classNames,
    styles,
    unstyled,
    attributes,
    vars,
    varsResolver,
  });

  const _overlayProps = { ...defaultProps.overlayProps, ...overlayProps };

  return (
    <Transition
      transition="fade"
      {...transitionProps}
      mounted={!!visible}
      onEnter={onEnter}
      onEntered={onEntered}
      onExit={onExit}
      onExited={onExited}
    >
      {(transitionStyles) => (
        <Box {...getStyles('root', { style: transitionStyles })} {...others}>
          <Loader
            unstyled={unstyled}
            {...loaderProps}
            {...getStyles('loader', {
              className: loaderProps?.className,
              style: loaderProps?.style,
            })}
          />

          <Overlay
            {..._overlayProps}
            {...getStyles('overlay', {
              className: _overlayProps?.className,
              style: _overlayProps?.style,
            })}
            unstyled={unstyled}
            color={overlayProps?.color || theme.white}
          />

          <Overlay
            {..._overlayProps}
            {...getStyles('overlay', {
              className: _overlayProps?.className,
              style: _overlayProps?.style,
            })}
            lightHidden
            unstyled={unstyled}
            color={overlayProps?.color || theme.colors.dark[5]}
          />
        </Box>
      )}
    </Transition>
  );
});

LoadingOverlay.classes = classes;
LoadingOverlay.varsResolver = varsResolver;
LoadingOverlay.displayName = '@mantine/core/LoadingOverlay';
