import React, { forwardRef } from 'react';
import {
  DefaultProps,
  MantineSize,
  MantineNumberSize,
  MantineGradient,
  MantineColor,
  Selectors,
  useComponentDefaultProps,
} from '@mantine/styles';
import { createPolymorphicComponent } from '@mantine/utils';
import { UnstyledButton } from '../UnstyledButton';
import { Loader, LoaderProps } from '../Loader';
import { ButtonGroup } from './ButtonGroup/ButtonGroup';
import useStyles, { sizes, ButtonVariant, ButtonStylesParams } from './Button.styles';

export type ButtonStylesNames = Selectors<typeof useStyles>;

export interface ButtonProps extends DefaultProps<ButtonStylesNames, ButtonStylesParams> {
  /** Predefined button size */
  size?: MantineSize;

  /** Button type attribute */
  type?: 'submit' | 'button' | 'reset';

  /** Button color from theme */
  color?: MantineColor;

  /** Adds icon before button label  */
  leftIcon?: React.ReactNode;

  /** Adds icon after button label  */
  rightIcon?: React.ReactNode;

  /** Sets button width to 100% of parent element */
  fullWidth?: boolean;

  /** Button border-radius from theme or number to set border-radius in px */
  radius?: MantineNumberSize;

  /** Controls button appearance */
  variant?: ButtonVariant;

  /** Controls gradient settings in gradient variant only */
  gradient?: MantineGradient;

  /** Set text-transform to uppercase */
  uppercase?: boolean;

  /** Reduces vertical and horizontal spacing */
  compact?: boolean;

  /** Indicate loading state */
  loading?: boolean;

  /** Props spread to Loader component */
  loaderProps?: LoaderProps;

  /** Loader position relative to button label */
  loaderPosition?: 'left' | 'right';

  /** Button label */
  children?: React.ReactNode;

  /** Disabled state */
  disabled?: boolean;
}

const defaultProps: Partial<ButtonProps> = {
  size: 'sm',
  type: 'button',
  variant: 'filled',
  loaderPosition: 'left',
};

export const _Button = forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
  const {
    className,
    size,
    color,
    type,
    disabled,
    children,
    leftIcon,
    rightIcon,
    fullWidth,
    variant,
    radius,
    uppercase,
    compact,
    loading,
    loaderPosition,
    loaderProps,
    gradient,
    classNames,
    styles,
    unstyled,
    ...others
  } = useComponentDefaultProps('Button', defaultProps, props);

  const { classes, cx, theme } = useStyles(
    {
      radius,
      color,
      size,
      fullWidth,
      compact,
      gradient,
      variant,
      withLeftIcon: !!leftIcon,
      withRightIcon: !!rightIcon,
    },
    { name: 'Button', unstyled, classNames, styles }
  );

  const colors = theme.fn.variant({ color, variant });

  const loader = (
    <Loader
      color={colors.color}
      size={theme.fn.size({ size, sizes }).height / 2}
      {...loaderProps}
    />
  );

  return (
    <UnstyledButton
      className={cx(classes.root, className)}
      type={type}
      disabled={disabled || loading}
      data-button
      data-disabled={disabled || undefined}
      data-loading={loading || undefined}
      ref={ref}
      unstyled={unstyled}
      {...others}
    >
      <div className={classes.inner}>
        {(leftIcon || (loading && loaderPosition === 'left')) && (
          <span className={cx(classes.icon, classes.leftIcon)}>
            {loading && loaderPosition === 'left' ? loader : leftIcon}
          </span>
        )}

        <span
          className={classes.label}
          style={{ textTransform: uppercase ? 'uppercase' : undefined }}
        >
          {children}
        </span>

        {(rightIcon || (loading && loaderPosition === 'right')) && (
          <span className={cx(classes.icon, classes.rightIcon)}>
            {loading && loaderPosition === 'right' ? loader : rightIcon}
          </span>
        )}
      </div>
    </UnstyledButton>
  );
}) as any;

_Button.displayName = '@mantine/core/Button';
_Button.Group = ButtonGroup;

export const Button = createPolymorphicComponent<
  'button',
  ButtonProps,
  { Group: typeof ButtonGroup }
>(_Button);
