import React from 'react';
import cx from 'clsx';
import { ComponentPassThrough } from '../../types';
import {
  useMantineTheme,
  DefaultProps,
  MantineSize,
  MantineNumberSize,
  mergeStyles,
} from '../../theme';
import useStyles, { heights } from './Badge.styles';

export const BADGE_SIZES = heights;
export const BADGE_VARIANTS = ['light', 'filled', 'outline', 'dot'] as const;
export type BadgeVariant = typeof BADGE_VARIANTS[number];
export type BadgeStylesNames = Exclude<keyof ReturnType<typeof useStyles>, BadgeVariant>;

export interface BadgeProps extends DefaultProps<BadgeStylesNames> {
  /** Badge color from theme */
  color?: string;

  /** Controls badge background, color and border styles */
  variant?: 'light' | 'filled' | 'outline' | 'dot';

  /** Defines badge height and font-size */
  size?: MantineSize;

  /** Predefined border-radius value from theme.radius or number for border-radius in px */
  radius?: MantineNumberSize;

  /** Sets badge width to 100% of parent element, hides overflow text with text-overflow: ellipsis */
  fullWidth?: boolean;

  /** Section rendered on the left side of label */
  leftSection?: React.ReactNode;

  /** Section rendered on the right side of label */
  rightSection?: React.ReactNode;
}

export function Badge<T extends React.ElementType = 'div'>({
  component: Component = 'div',
  className,
  style,
  color,
  variant = 'light',
  fullWidth,
  children,
  themeOverride,
  size = 'md',
  leftSection,
  rightSection,
  radius = 'xl',
  classNames,
  styles,
  ...others
}: ComponentPassThrough<T, BadgeProps>) {
  const theme = useMantineTheme(themeOverride);
  const classes = useStyles({ size, fullWidth, color, radius, theme }, classNames, 'badge');
  const _styles = mergeStyles(classes, styles);

  return (
    <Component
      {...others}
      className={cx(classes.root, classes[variant], className)}
      style={{ ...style, ..._styles.root, ..._styles[variant] }}
    >
      {leftSection && (
        <span className={classes.leftSection} style={_styles.leftSection}>
          {leftSection}
        </span>
      )}

      <span className={classes.inner} style={_styles.inner}>
        {children}
      </span>

      {rightSection && (
        <span className={classes.rightSection} style={_styles.rightSection}>
          {rightSection}
        </span>
      )}
    </Component>
  );
}

Badge.displayName = '@mantine/core/Badge';
