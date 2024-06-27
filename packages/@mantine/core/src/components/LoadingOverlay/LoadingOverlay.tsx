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
  extends BoxProps,
    StylesApiProps<LoadingOverlayFactory>,
    ElementProps<'div'> {
  /** Props passed down to `Transition` component, `{ transition: 'fade', duration: 0 }` by default */
  transitionProps?: TransitionOverride;

  /** Props passed down to `Loader` component */
  loaderProps?: LoaderProps;

  /** Props passed down to `Overlay` component */
  overlayProps?: OverlayProps;

  /** Determines whether the overlay should be visible, `false` by default */
  visible?: boolean;

  /** Controls overlay `z-index`, `400` by default */
  zIndex?: string | number;
}

export type LoadingOverlayFactory = Factory<{
  props: LoadingOverlayProps;
  ref: HTMLDivElement;
  stylesNames: LoadingOverlayStylesNames;
  vars: LoadingOverlayCssVariables;
}>;

const defaultProps: Partial<LoadingOverlayProps> = {
  transitionProps: { transition: 'fade', duration: 0 },
  overlayProps: { backgroundOpacity: 0.75 },
  zIndex: getDefaultZIndex('overlay'),
};

const varsResolver = createVarsResolver<LoadingOverlayFactory>((_, { zIndex }) => ({
  root: {
    '--lo-z-index': zIndex?.toString(),
  },
}));

export const LoadingOverlay = factory<LoadingOverlayFactory>((_props, ref) => {
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
    vars,
    varsResolver,
  });

  const _overlayProps = { ...defaultProps.overlayProps, ...overlayProps };

  return (
    <Transition transition="fade" {...transitionProps} mounted={!!visible}>
      {(transitionStyles) => (
        <Box {...getStyles('root', { style: transitionStyles })} ref={ref} {...others}>
          <Loader {...getStyles('loader')} unstyled={unstyled} {...loaderProps} />

          <Overlay
            {..._overlayProps}
            {...getStyles('overlay')}
            darkHidden
            unstyled={unstyled}
            color={overlayProps?.color || theme.white}
          />

          <Overlay
            {..._overlayProps}
            {...getStyles('overlay')}
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
LoadingOverlay.displayName = '@mantine/core/LoadingOverlay';
