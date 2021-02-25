import React from 'react';
import cx from 'clsx';
import { useReducedMotion } from '@mantine/hooks';
import { DefaultProps, useMantineTheme, MantineNumberSize } from '@mantine/theme';
import useStyles from './Progress.styles';

interface ProgressProps extends DefaultProps, React.ComponentPropsWithoutRef<'div'> {
  value: number;
  color?: string;
  size?: MantineNumberSize;
  radius?: MantineNumberSize;
}

export function Progress({
  className,
  value,
  color,
  size,
  radius,
  themeOverride,
  ...others
}: ProgressProps) {
  const classes = useStyles({
    color,
    size,
    radius,
    reduceMotion: useReducedMotion(),
    theme: useMantineTheme(themeOverride),
  });

  return (
    <div className={cx(classes.progress, className)} {...others}>
      <div
        role="progressbar"
        aria-valuemax={100}
        aria-valuemin={0}
        aria-valuenow={value}
        aria-label={`${value}%`}
        className={classes.bar}
        style={{ width: `${value}%` }}
      />
    </div>
  );
}

Progress.displayName = '@mantine/core/Progress';
