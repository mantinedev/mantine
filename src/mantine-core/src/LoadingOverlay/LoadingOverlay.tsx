import React from 'react';
import cx from 'clsx';
import { DefaultProps, useMantineTheme } from '@mantine/theme';
import Loader from '../Loader/Loader';
import useStyles from './LoadingOverlay.styles';

interface LoadingOverlayProps extends DefaultProps, React.HTMLProps<HTMLDivElement> {
  loaderSize?: number;
  opacity?: number;
  visible: boolean;
}

export default function LoadingOverlay({
  className,
  visible,
  loaderSize,
  opacity = 0.75,
  themeOverride,
  ...others
}: LoadingOverlayProps) {
  const classes = useStyles({ theme: useMantineTheme(themeOverride) });

  if (!visible) {
    return null;
  }

  return (
    <div className={cx(classes.loadingOverlay, className)} {...others}>
      <Loader className={classes.loader} size={loaderSize} themeOverride={themeOverride} />
      <div style={{ opacity }} className={classes.background} />
    </div>
  );
}

LoadingOverlay.displayName = '@mantine/core/LoadingOverlay';
