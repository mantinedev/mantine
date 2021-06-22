import React from 'react';
import cx from 'clsx';
import { useReducedMotion } from '@mantine/hooks';
import { DefaultProps, useMantineTheme, MantineNumberSize, mergeStyles } from '../../theme';
import useStyles, { sizes } from './Progress.styles';

export const PROGRESS_SIZES = sizes;

export type ProgressStylesNames = keyof ReturnType<typeof useStyles>;

export interface ProgressProps
  extends DefaultProps<ProgressStylesNames>,
    React.ComponentPropsWithoutRef<'div'> {
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
  style,
  value,
  color,
  size = 'md',
  radius = 'sm',
  striped = false,
  themeOverride,
  'aria-label': ariaLabel,
  classNames,
  styles,
  ...others
}: ProgressProps) {
  const theme = useMantineTheme(themeOverride);
  const reduceMotion = useReducedMotion();
  const classes = useStyles(
    { color, size, radius, striped, reduceMotion, theme },
    classNames,
    'progress'
  );
  const _styles = mergeStyles(classes, styles);

  return (
    <div className={cx(classes.root, className)} style={{ ...style, ..._styles.root }} {...others}>
      <div
        role="progressbar"
        aria-valuemax={100}
        aria-valuemin={0}
        aria-valuenow={value}
        aria-label={ariaLabel}
        className={classes.bar}
        style={{ ..._styles.bar, width: `${value}%` }}
      />
    </div>
  );
}

Progress.displayName = '@mantine/core/Progress';
