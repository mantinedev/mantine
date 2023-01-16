import React, { forwardRef } from 'react';
import {
  DefaultProps,
  MantineNumberSize,
  getDefaultZIndex,
  useComponentDefaultProps,
} from '@mantine/styles';
import { Overlay } from '../Overlay';
import { Transition } from '../Transition';
import { Loader, LoaderProps } from '../Loader';
import { Box } from '../Box';
import useStyles from './LoadingOverlay.styles';

export interface LoadingOverlayProps extends DefaultProps, React.ComponentPropsWithoutRef<'div'> {
  variant?: string;

  /** If set loading overlay will not be unmounted from the DOM when it is hidden, display: none styles will be added instead */
  keepMounted?: boolean;

  /** Provide custom loader */
  loader?: React.ReactNode;

  /** Loader component props */
  loaderProps?: LoaderProps;

  /** Sets overlay opacity */
  overlayOpacity?: number;

  /** Sets overlay color, defaults to theme.white in light theme and to theme.colors.dark[5] in dark theme */
  overlayColor?: string;

  /** Sets overlay blur */
  overlayBlur?: number | string;

  /** Loading overlay z-index */
  zIndex?: React.CSSProperties['zIndex'];

  /** If visible overlay will take 100% width and height of first parent with relative position and overlay all of its content */
  visible: boolean;

  /** Animation duration in ms */
  transitionDuration?: number;

  /** Exit transition duration in ms */
  exitTransitionDuration?: number;

  /** Key of theme.radius or any valid CSS value to set border-radius, 0 by default */
  radius?: MantineNumberSize;
}

const defaultProps: Partial<LoadingOverlayProps> = {
  overlayOpacity: 0.75,
  transitionDuration: 0,
  radius: 0,
  zIndex: getDefaultZIndex('overlay'),
};

export const LoadingOverlay = forwardRef<HTMLDivElement, LoadingOverlayProps>((props, ref) => {
  const {
    className,
    visible,
    loaderProps,
    overlayOpacity,
    overlayColor,
    transitionDuration,
    exitTransitionDuration,
    zIndex,
    style,
    loader,
    radius,
    overlayBlur,
    unstyled,
    variant,
    keepMounted,
    ...others
  } = useComponentDefaultProps('LoadingOverlay', defaultProps, props);
  const { classes, cx, theme } = useStyles(null, { name: 'LoadingOverlay', unstyled, variant });
  const _zIndex = `calc(${zIndex} + 1)` as any;

  return (
    <Transition
      keepMounted={keepMounted}
      duration={transitionDuration}
      exitDuration={exitTransitionDuration}
      mounted={visible}
      transition="fade"
    >
      {(transitionStyles) => (
        <Box
          className={cx(classes.root, className)}
          style={{ ...transitionStyles, ...style, zIndex }}
          ref={ref}
          {...others}
        >
          {loader ? (
            <div style={{ zIndex: _zIndex }}>{loader}</div>
          ) : (
            <Loader style={{ zIndex: _zIndex }} {...loaderProps} />
          )}

          <Overlay
            opacity={overlayOpacity}
            zIndex={zIndex}
            radius={radius}
            blur={overlayBlur}
            unstyled={unstyled}
            color={
              overlayColor || (theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.white)
            }
          />
        </Box>
      )}
    </Transition>
  );
});

LoadingOverlay.displayName = '@mantine/core/LoadingOverlay';
