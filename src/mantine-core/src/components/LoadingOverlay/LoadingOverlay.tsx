import React from 'react';
import { DefaultProps, MantineMargin, MantineNumberSize } from '@mantine/styles';
import { Overlay } from '../Overlay/Overlay';
import { Transition } from '../Transition';
import { Loader, LoaderProps } from '../Loader/Loader';
import useStyles from './LoadingOverlay.styles';

export interface LoadingOverlayProps
  extends Omit<DefaultProps, MantineMargin>,
    React.ComponentPropsWithoutRef<'div'> {
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

export function LoadingOverlay({
  className,
  visible,
  loaderProps = {},
  overlayOpacity = 0.75,
  overlayColor,
  transitionDuration = 200,
  zIndex = 1000,
  style,
  loader,
  radius,
  sx,
  ...others
}: LoadingOverlayProps) {
  const { classes, cx, theme } = useStyles(null, { sx, name: 'LoadingOverlay' });

  return (
    <Transition duration={transitionDuration} mounted={visible} transition="fade">
      {(transitionStyles) => (
        <div
          className={cx(classes.root, className)}
          style={{ ...transitionStyles, ...style, zIndex }}
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
        </div>
      )}
    </Transition>
  );
}

LoadingOverlay.displayName = '@mantine/core/LoadingOverlay';
