import React from 'react';
import cx from 'clsx';
import { useReducedMotion } from '@mantine/hooks';
import { DefaultProps, useMantineTheme, MantineNumberSize } from '@mantine/theme';
import useStyles, { sizes } from './Progress.styles';

export const PROGRESS_SIZES = sizes;

interface ProgressProps extends DefaultProps, React.ComponentPropsWithoutRef<'div'> {
  /** Percent of filled bar (0-100) */
  value: number;

  /** Progress color from theme */
  color?: string;

  /** Predefined progress height or number for height in px */
  size?: MantineNumberSize;

  /** Predefined progress radius from theme.radius or number for height in px */
  radius?: MantineNumberSize;

  /** Adds stripes */
  striped?: boolean;
}

export function Progress({
  className,
  value,
  color,
  size = 'md',
  radius = 'sm',
  striped = false,
  themeOverride,
  'aria-label': ariaLabel,
  ...others
}: ProgressProps) {
  const classes = useStyles({
    color,
    size,
    radius,
    striped,
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
        aria-label={ariaLabel}
        className={classes.bar}
        style={{ width: `${value}%` }}
      />
    </div>
  );
}

Progress.displayName = '@mantine/core/Progress';
