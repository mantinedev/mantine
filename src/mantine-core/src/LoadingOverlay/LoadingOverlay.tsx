import React from 'react';
import cx from 'clsx';
import { DefaultProps, useMantineTheme } from '@mantine/theme';
import { useReducedMotion } from '@mantine/hooks';
import { Overlay } from '../Overlay/Overlay';
import { Transition } from '../Transition/Transition';
import { Loader, LoaderProps } from '../Loader/Loader';
import useStyles from './LoadingOverlay.styles';

interface LoadingOverlayProps extends DefaultProps, React.ComponentPropsWithoutRef<'div'> {
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
}

export function LoadingOverlay({
  className,
  visible,
  loaderProps = {},
  overlayOpacity = 0.75,
  overlayColor,
  themeOverride,
  transitionDuration = 200,
  zIndex = 1000,
  style,
  ...others
}: LoadingOverlayProps) {
  const theme = useMantineTheme(themeOverride);
  const classes = useStyles();
  const reduceMotion = useReducedMotion();
  const duration = reduceMotion ? 1 : transitionDuration;

  return (
    <Transition
      duration={duration}
      mounted={visible}
      transition="fade"
      themeOverride={themeOverride}
    >
      {(transitionStyles) => (
        <div
          className={cx(classes.loadingOverlay, className)}
          style={{ ...transitionStyles, ...style, zIndex }}
          {...others}
        >
          <Loader themeOverride={themeOverride} style={{ zIndex: zIndex + 1 }} {...loaderProps} />
          <Overlay
            opacity={overlayOpacity}
            color={
              overlayColor || (theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.white)
            }
            zIndex={zIndex}
          />
        </div>
      )}
    </Transition>
  );
}

LoadingOverlay.displayName = '@mantine/core/LoadingOverlay';
