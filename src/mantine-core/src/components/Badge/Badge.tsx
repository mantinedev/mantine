import React from 'react';
import cx from 'clsx';
import { mergeStyles } from '@mantine/tss';
import {
  DefaultProps,
  MantineSize,
  MantineNumberSize,
  MantineGradient,
  MantineColor,
} from '@mantine/theme';
import useStyles, { heights } from './Badge.styles';

export const BADGE_SIZES = heights;
export const BADGE_VARIANTS = ['light', 'filled', 'outline', 'dot', 'gradient'] as const;
export type BadgeVariant = typeof BADGE_VARIANTS[number];
export type BadgeStylesNames = Exclude<keyof ReturnType<typeof useStyles>, BadgeVariant>;

interface _BadgeProps<C extends React.ElementType, R extends HTMLElement>
  extends DefaultProps<BadgeStylesNames> {
  /** Root element or custom component */
  component?: C;

  /** Get element ref */
  elementRef?: React.ForwardedRef<R>;

  /** Badge color from theme */
  color?: MantineColor;

  /** Controls badge background, color and border styles */
  variant?: 'light' | 'filled' | 'outline' | 'dot' | 'gradient';

  /** Controls gradient settings in gradient variant only */
  gradient?: MantineGradient;

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

export type BadgeProps<
  C extends React.ElementType = 'div',
  R extends HTMLElement = HTMLDivElement
> = _BadgeProps<C, R> & Omit<React.ComponentPropsWithoutRef<C>, keyof _BadgeProps<C, R>>;

export function Badge<C extends React.ElementType = 'div', R extends HTMLElement = HTMLDivElement>({
  component,
  className,
  style,
  color,
  elementRef,
  variant = 'light',
  fullWidth,
  children,
  size = 'md',
  leftSection,
  rightSection,
  radius = 'xl',
  gradient = { from: 'blue', to: 'cyan', deg: 45 },
  classNames,
  styles,
  ...others
}: BadgeProps<C, R>) {
  const classes = useStyles(
    {
      size,
      fullWidth,
      color,
      radius,
      gradientFrom: gradient.from,
      gradientTo: gradient.to,
      gradientDeg: gradient.deg,
    },
    classNames,
    'badge'
  );
  const _styles = mergeStyles(classes, styles);
  const Element = component || 'div';

  return (
    <Element
      {...others}
      className={cx(classes.root, classes[variant], className)}
      style={{ ...style, ..._styles.root, ..._styles[variant] }}
      ref={elementRef as any}
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
    </Element>
  );
}

Badge.displayName = '@mantine/core/Badge';
