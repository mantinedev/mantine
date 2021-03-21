import React from 'react';
import cx from 'clsx';
import { Transition } from 'react-transition-group';
import { DefaultProps, useMantineTheme } from '@mantine/theme';
import { useReducedMotion } from '@mantine/hooks';
import { Overlay } from '../Overlay/Overlay';
import { Loader, LoaderProps } from '../Loader/Loader';
import useStyles from './LoadingOverlay.styles';

interface LoadingOverlayProps extends DefaultProps, React.ComponentPropsWithoutRef<'div'> {
  /** Loader component props */
  loaderProps?: Omit<LoaderProps, 'themeOverride'>;

  /** Sets overlay opacity */
  overlayOpacity?: number;

  /** Sets overlay color */
  overlayColor?: string;

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
  overlayColor = '#fff',
  themeOverride,
  transitionDuration = 200,
  style,
  ...others
}: LoadingOverlayProps) {
  const theme = useMantineTheme(themeOverride);
  const classes = useStyles();
  const reduceMotion = useReducedMotion();
  const duration = reduceMotion ? 1 : transitionDuration;

  return (
    <Transition
      timeout={duration}
      unmountOnExit
      mountOnEnter
      onEnter={(node: any) => node.offsetHeight}
      in={visible}
    >
      {(state) => (
        <div
          className={cx(classes.loadingOverlay, className)}
          style={{
            transition: `opacity ${duration}ms ${theme.transitionTimingFunction}`,
            opacity: state === 'entering' || state === 'entered' ? 1 : 0,
            ...style,
          }}
          {...others}
        >
          <Loader
            className={cx(classes.loader, loaderProps.className)}
            themeOverride={themeOverride}
            {...loaderProps}
          />
          <Overlay opacity={overlayOpacity} color={overlayColor} />
        </div>
      )}
    </Transition>
  );
}

LoadingOverlay.displayName = '@mantine/core/LoadingOverlay';
