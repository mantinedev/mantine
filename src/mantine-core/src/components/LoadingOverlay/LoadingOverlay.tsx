import React, { forwardRef } from 'react';
import { DefaultProps, MantineNumberSize, getDefaultZIndex } from '@mantine/styles';
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

  /** Loading overlay z-index */
  zIndex?: number;

  /** If visible overlay will take 100% width and height of first parent with relative position and overlay all of its content */
  visible: boolean;

  /** Appear and disappear animation duration */
  transitionDuration?: number;

  /** Value from theme.radius or number to set border-radius in px */
  radius?: MantineNumberSize;
}

export const LoadingOverlay = forwardRef<HTMLDivElement, LoadingOverlayProps>(
  (
    {
      className,
      visible,
      loaderProps = {},
      overlayOpacity = 0.75,
      overlayColor,
      transitionDuration = 200,
      zIndex = getDefaultZIndex('overlay'),
      style,
      loader,
      radius,
      classNames,
      styles,
      ...others
    }: LoadingOverlayProps,
    ref
  ) => {
    const { classes, cx, theme } = useStyles(null, { name: 'LoadingOverlay', classNames, styles });

    return (
      <Transition duration={transitionDuration} mounted={visible} transition="fade">
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
              color={
                overlayColor || (theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.white)
              }
            />
          </Box>
        )}
      </Transition>
    );
  }
);

LoadingOverlay.displayName = '@mantine/core/LoadingOverlay';
