import React, { forwardRef } from 'react';
import {
  DefaultProps,
  MantineSize,
  MantineNumberSize,
  MantineGradient,
  MantineColor,
  Selectors,
  useComponentDefaultProps,
  Variants,
  getSize,
} from '@mantine/styles';
import { createPolymorphicComponent } from '@mantine/utils';
import { UnstyledButton } from '../UnstyledButton';
import { Loader, LoaderProps } from '../Loader';
import { ButtonGroup } from './ButtonGroup/ButtonGroup';
import useStyles, { sizes, ButtonStylesParams } from './Button.styles';

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

  /** Key of theme.radius or any valid CSS value to set border-radius, theme.defaultRadius by default */
  radius?: MantineNumberSize;

  /** Controls button appearance */
  variant?: Variants<'filled' | 'outline' | 'light' | 'white' | 'default' | 'subtle' | 'gradient'>;

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
  loaderPosition?: 'left' | 'right' | 'center';

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
      fullWidth,
      compact,
      gradient,
      withLeftIcon: !!leftIcon,
      withRightIcon: !!rightIcon,
    },
    { name: 'Button', unstyled, classNames, styles, variant, size }
  );

  const colors = theme.fn.variant({ color, variant });

  const loader = (
    <Loader
      color={colors.color}
      size={`calc(${(getSize({ size, sizes }) as any).height} / 2)`}
      {...loaderProps}
    />
  );

  return (
    <UnstyledButton
      className={cx(classes.root, className)}
      type={type}
      disabled={disabled}
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

        {loading && loaderPosition === 'center' && (
          <span className={classes.centerLoader}>{loader}</span>
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
