import React from 'react';
import cx from 'clsx';
import { DefaultProps } from '@mantine/theme';
import { Overlay } from '../Overlay/Overlay';
import { Loader } from '../Loader/Loader';
import useStyles from './LoadingOverlay.styles';

interface LoadingOverlayProps extends DefaultProps, React.ComponentPropsWithoutRef<'div'> {
  loaderSize?: number;
  opacity?: number;
  visible: boolean;
}

export function LoadingOverlay({
  className,
  visible,
  loaderSize,
  opacity = 0.75,
  themeOverride,
  ...others
}: LoadingOverlayProps) {
  const classes = useStyles({});

  if (!visible) {
    return null;
  }

  return (
    <div className={cx(classes.loadingOverlay, className)} {...others}>
      <Loader className={classes.loader} size={loaderSize} themeOverride={themeOverride} />
      <Overlay opacity={opacity} />
    </div>
  );
}

LoadingOverlay.displayName = '@mantine/core/LoadingOverlay';
