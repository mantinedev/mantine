import React from 'react';
import cx from 'clsx';
import { DefaultProps, MantineNumberSize, useMantineTheme } from '@mantine/theme';
import useStyles from './Paper.styles';

interface PaperProps extends DefaultProps, React.ComponentPropsWithoutRef<'div'> {
  /** Predefined padding value from theme.spacing or number for padding in px */
  padding?: MantineNumberSize;

  /** Predefined box-shadow from theme.shadows (xs, sm, md, lg, xl) or any valid css box-shadow property */
  shadow?: string;

  /** Predefined border-radius value from theme.radius or number for border-radius in px */
  radius?: MantineNumberSize;

  /** Get element ref */
  elementRef?: React.ForwardedRef<HTMLDivElement>;
}

export function Paper({
  className,
  children,
  padding = 0,
  radius = 'sm',
  shadow,
  themeOverride,
  elementRef,
  ...others
}: PaperProps) {
  const classes = useStyles({ radius, shadow, padding, theme: useMantineTheme(themeOverride) });

  return (
    <div className={cx(classes.paper, className)} ref={elementRef} {...others}>
      {children}
    </div>
  );
}

Paper.displayName = '@mantine/core/Paper';
