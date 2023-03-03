import React, { forwardRef } from 'react';
import {
  DefaultProps,
  MantineNumberSize,
  MantineColor,
  Selectors,
  useComponentDefaultProps,
} from '@mantine/styles';
import { Box } from '../Box';
import { Text } from '../Text';
import { Tooltip } from '../Tooltip';
import useStyles, { ProgressStylesParams } from './Progress.styles';

export type ProgressStylesNames = Selectors<typeof useStyles>;

interface ProgressSection extends React.ComponentPropsWithRef<'div'> {
  value: number;
  color: MantineColor;
  label?: string;
  tooltip?: React.ReactNode;
}

export interface ProgressProps
  extends DefaultProps<ProgressStylesNames, ProgressStylesParams>,
    React.ComponentPropsWithoutRef<'div'> {
  variant?: string;

  /** Percent of filled bar (0-100) */
  value?: number;

  /** Progress color from theme */
  color?: MantineColor;

  /** Height of progress bar */
  size?: MantineNumberSize;

  /** Key of theme.radius or any valid CSS value to set border-radius, theme.defaultRadius by default */
  radius?: MantineNumberSize;

  /** Adds stripes */
  striped?: boolean;

  /** Whether to animate striped progress bars */
  animate?: boolean;

  /** Text to be placed inside the progress bar */
  label?: string;

  /** Replaces value if present, renders multiple sections instead of single one */
  sections?: ProgressSection[];
}

function getCumulativeSections(
  sections: ProgressSection[]
): (ProgressSection & { accumulated: number })[] {
  return sections.reduce(
    (acc, section) => {
      acc.sections.push({ ...section, accumulated: acc.accumulated });
      acc.accumulated += section.value;
      return acc;
    },
    { accumulated: 0, sections: [] }
  ).sections;
}

const defaultProps: Partial<ProgressProps> = {
  size: 'md',
  radius: 'sm',
  striped: false,
  animate: false,
  label: '',
};

export const Progress = forwardRef<HTMLDivElement, ProgressProps>((props, ref) => {
  const {
    className,
    value,
    color,
    size,
    radius,
    striped,
    animate,
    label,
    'aria-label': ariaLabel,
    classNames,
    styles,
    sections,
    unstyled,
    variant,
    ...others
  } = useComponentDefaultProps('Progress', defaultProps, props);

  const { classes, cx, theme } = useStyles(
    { color, radius },
    { name: 'Progress', classNames, styles, unstyled, variant, size }
  );

  const segments = Array.isArray(sections)
    ? getCumulativeSections(sections).map(
        (
          {
            tooltip,
            accumulated,
            value: sectionValue,
            label: sectionLabel,
            color: sectionColor,
            ...sectionProps
          },
          index
        ) => (
          <Tooltip.Floating label={tooltip} disabled={!tooltip} key={index}>
            <Box
              {...sectionProps}
              className={cx(classes.bar, sectionProps.className)}
              data-striped={striped || animate || undefined}
              data-animate={animate || undefined}
              sx={{
                width: `${sectionValue}%`,
                left: `${accumulated}%`,
                backgroundColor: theme.fn.variant({
                  variant: 'filled',
                  primaryFallback: false,
                  color: sectionColor || theme.primaryColor,
                }).background,
              }}
            >
              {sectionLabel && <Text className={classes.label}>{sectionLabel}</Text>}
            </Box>
          </Tooltip.Floating>
        )
      )
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
          data-striped={striped || animate || undefined}
          data-animate={animate || undefined}
        >
          {label ? <Text className={classes.label}>{label}</Text> : ''}
        </div>
      )}
    </Box>
  );
});

Progress.displayName = '@mantine/core/Progress';
