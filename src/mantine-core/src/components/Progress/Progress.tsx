import React, { forwardRef } from 'react';
import { DefaultProps, MantineNumberSize, MantineColor, ClassNames } from '@mantine/styles';
import { Box } from '../Box';
import useStyles from './Progress.styles';

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

  /** Whether to animate striped progress bars */
  animated?: boolean;

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

export const Progress = forwardRef<HTMLDivElement, ProgressProps>(
  (
    {
      className,
      value,
      color,
      size = 'md',
      radius = 'sm',
      striped = false,
      animated = false,
      'aria-label': ariaLabel,
      classNames,
      styles,
      sections,
      ...others
    }: ProgressProps,
    ref
  ) => {
    const { classes, cx, theme } = useStyles(
      { color, size, radius, striped, animated },
      { classNames, styles, name: 'Progress' }
    );

    const segments = Array.isArray(sections)
      ? getCumulativeSections(sections).map((section, index) => (
          <div
            key={index}
            className={classes.bar}
            style={{
              width: `${section.value}%`,
              left: `${section.accumulated}%`,
              backgroundColor: theme.fn.themeColor(section.color, 7),
            }}
          />
        ))
      : null;

    return (
      <Box className={cx(classes.root, className)} ref={ref} {...others}>
        {segments || (
          <div
            role="progressbar"
            aria-valuemax={100}
            aria-valuemin={0}
            aria-valuenow={value}
            aria-label={ariaLabel}
            className={classes.bar}
            style={{ width: `${value}%` }}
          />
        )}
      </Box>
    );
  }
);

Progress.displayName = '@mantine/core/Progress';
