import React from 'react';
import {
  useMantineTheme,
  mergeStyles,
  DefaultProps,
  MantineNumberSize,
  getThemeColor,
  MantineColor,
  ClassNames,
} from '@mantine/styles';
import useStyles, { sizes } from './Progress.styles';

export const PROGRESS_SIZES = sizes;

export type ProgressStylesNames = ClassNames<typeof useStyles>;

export interface ProgressProps
  extends DefaultProps<ProgressStylesNames>,
    React.ComponentPropsWithoutRef<'div'> {
  /** Percent of filled bar (0-100) */
  value?: number;

  /** Progress color from theme */
  color?: MantineColor;

  /** Predefined progress height or number for height in px */
  size?: MantineNumberSize;

  /** Predefined progress radius from theme.radius or number for height in px */
  radius?: MantineNumberSize;

  /** Adds stripes */
  striped?: boolean;

  /** Replaces value if present, renders multiple sections instead of single one */
  sections?: { value: number; color: MantineColor }[];
}

function getCumulativeSections(
  sections: { value: number; color: MantineColor }[]
): { value: number; color: MantineColor; accumulated: number }[] {
  return sections.reduce(
    (acc, section) => {
      acc.sections.push({ ...section, accumulated: acc.accumulated });
      acc.accumulated += section.value;
      return acc;
    },
    { accumulated: 0, sections: [] }
  ).sections;
}

export function Progress({
  className,
  style,
  value,
  color,
  size = 'md',
  radius = 'sm',
  striped = false,
  'aria-label': ariaLabel,
  classNames,
  styles,
  sections,
  ...others
}: ProgressProps) {
  const theme = useMantineTheme();
  const { classes, cx } = useStyles({ color, size, radius, striped }, classNames, 'progress');
  const _styles = mergeStyles(classes, styles);

  const segments = Array.isArray(sections)
    ? getCumulativeSections(sections).map((section, index) => (
        <div
          key={index}
          className={classes.bar}
          style={{
            ..._styles.bar,
            width: `${section.value}%`,
            left: `${section.accumulated}%`,
            backgroundColor: getThemeColor({ theme, color: section.color, shade: 7 }),
          }}
        />
      ))
    : null;

  return (
    <div className={cx(classes.root, className)} style={{ ...style, ..._styles.root }} {...others}>
      {segments || (
        <div
          role="progressbar"
          aria-valuemax={100}
          aria-valuemin={0}
          aria-valuenow={value}
          aria-label={ariaLabel}
          className={classes.bar}
          style={{ ..._styles.bar, width: `${value}%` }}
        />
      )}
    </div>
  );
}

Progress.displayName = '@mantine/core/Progress';
