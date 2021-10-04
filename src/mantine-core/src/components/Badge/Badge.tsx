import React, { forwardRef } from 'react';
import {
  mergeStyles,
  DefaultProps,
  MantineSize,
  MantineNumberSize,
  MantineGradient,
  MantineColor,
  ClassNames,
  useExtractedMargins,
  PolymorphicComponentProps,
  PolymorphicRef,
} from '@mantine/styles';
import useStyles from './Badge.styles';

export type BadgeVariant = 'light' | 'filled' | 'outline' | 'dot' | 'gradient';
export type BadgeStylesNames = Exclude<ClassNames<typeof useStyles>, BadgeVariant>;

interface _BadgeProps extends DefaultProps<BadgeStylesNames> {
  /** Badge color from theme */
  color?: MantineColor;

  /** Controls badge background, color and border styles */
  variant?: BadgeVariant;

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

export type BadgeProps<C extends React.ElementType> = PolymorphicComponentProps<C, _BadgeProps>;

type BadgeComponent = <C extends React.ElementType = 'div'>(
  props: BadgeProps<C>
) => React.ReactElement;

export const Badge: BadgeComponent & { displayName?: string } = forwardRef(
  <C extends React.ElementType = 'div'>(
    {
      component,
      className,
      style,
      color,
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
    }: BadgeProps<C>,
    ref: PolymorphicRef<C>
  ) => {
    const { classes, cx } = useStyles(
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
    const { mergedStyles, rest } = useExtractedMargins({ others, rootStyle: _styles.root, style });
    const Element = component || 'div';

    return (
      <Element
        {...rest}
        className={cx(classes.root, classes[variant], className)}
        style={mergedStyles}
        ref={ref}
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
);

Badge.displayName = '@mantine/core/Badge';
