import React, { forwardRef } from 'react';
import {
  DefaultProps,
  MantineNumberSize,
  getDefaultZIndex,
  useMantineDefaultProps,
} from '@mantine/styles';
import { Overlay } from '../Overlay';
import { Transition } from '../Transition';
import { Loader, LoaderProps } from '../Loader';
import { Box } from '../Box';
import useStyles from './LoadingOverlay.styles';

export interface LoadingOverlayProps extends DefaultProps, React.ComponentPropsWithoutRef<'div'> {
  /** Provide custom loader */
  loader?: React.ReactNode;

  /** Loader component props */
  loaderProps?: LoaderProps;

  /** Sets overlay opacity */
  overlayOpacity?: number;

  /** Sets overlay color, defaults to theme.white in light theme and to theme.colors.dark[5] in dark theme */
  overlayColor?: string;

  /** Sets overlay blur in px */
  overlayBlur?: number;

  /** Loading overlay z-index */
  zIndex?: number;

  /** If visible overlay will take 100% width and height of first parent with relative position and overlay all of its content */
  visible: boolean;

  /** Animation duration in ms */
  transitionDuration?: number;

  /** Exit transition duration in ms */
  exitTransitionDuration?: number;

  /** Value from theme.radius or number to set border-radius in px */
  radius?: MantineNumberSize;
}

const defaultProps: Partial<LoadingOverlayProps> = {
  overlayOpacity: 0.75,
  transitionDuration: 0,
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
    classNames,
    styles,
    overlayBlur,
    ...others
  } = useMantineDefaultProps('LoadingOverlay', defaultProps, props);
  const { classes, cx, theme } = useStyles(null, { name: 'LoadingOverlay', classNames, styles });

  return (
    <Transition
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
            <div style={{ zIndex: zIndex + 1 }}>{loader}</div>
          ) : (
            <Loader style={{ zIndex: zIndex + 1 }} {...loaderProps} />
          )}

          <Overlay
            opacity={overlayOpacity}
            zIndex={zIndex}
            radius={radius}
            blur={overlayBlur}
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
