import React, { forwardRef } from 'react';
import {
  useMantineTheme,
  DefaultProps,
  MantineNumberSize,
  MantineSize,
  ClassNames,
  PolymorphicComponentProps,
  PolymorphicRef,
  extractMargins,
} from '@mantine/styles';
import { Box } from '../Box';
import useStyles, { InputVariant } from './Input.styles';

export type InputStylesNames = ClassNames<typeof useStyles>;

export interface InputBaseProps {
  /** Sets border color to red and aria-invalid=true on input element */
  invalid?: boolean;

  /** Adds icon on the left side of input */
  icon?: React.ReactNode;

  /** Right section of input, similar to icon but on the right */
  rightSection?: React.ReactNode;

  /** Width of right section, is used to calculate input padding-right */
  rightSectionWidth?: number;

  /** Props spread to rightSection div element */
  rightSectionProps?: React.ComponentPropsWithoutRef<'div'>;

  /** Properties spread to root element */
  wrapperProps?: React.ComponentPropsWithoutRef<'div'> & { [key: string]: any };

  /** Sets aria-required=true on input element */
  required?: boolean;

  /** Input border-radius from theme or number to set border-radius in px */
  radius?: MantineNumberSize;

  /** Defines input appearance, defaults to default in light color scheme and filled in dark */
  variant?: InputVariant;

  /** Will input have multiple lines? */
  multiline?: boolean;

  /** Disabled input state */
  disabled?: boolean;

  /** Input size */
  size?: MantineSize;
}

interface _InputProps extends InputBaseProps, DefaultProps<InputStylesNames> {
  /** Static css selector base */
  __staticSelector?: string;
}

export type InputProps<C extends React.ElementType> = PolymorphicComponentProps<C, _InputProps>;

type InputComponent = (<C extends React.ElementType = 'input'>(
  props: InputProps<C>
) => React.ReactElement) & { displayName?: string };

export const Input: InputComponent = forwardRef(
  <C extends React.ElementType = 'input'>(
    {
      component,
      className,
      invalid = false,
      required = false,
      disabled = false,
      variant,
      icon,
      style,
      rightSectionWidth = 36,
      rightSection,
      rightSectionProps = {},
      radius = 'sm',
      size = 'sm',
      wrapperProps,
      classNames,
      styles,
      __staticSelector = 'Input',
      multiline = false,
      sx,
      ...others
    }: InputProps<C>,
    ref: PolymorphicRef<C>
  ) => {
    const theme = useMantineTheme();
    const _variant = variant || (theme.colorScheme === 'dark' ? 'filled' : 'default');
    const { classes, cx } = useStyles(
      {
        radius,
        size,
        multiline,
        variant: _variant,
        invalid,
        rightSectionWidth,
        withRightSection: !!rightSection,
      },
      { classNames, styles, name: __staticSelector }
    );
    const { margins, rest } = extractMargins(others);
    const Element: any = component || 'input';

    return (
      <Box
        className={cx(classes.wrapper, className)}
        sx={sx}
        style={style}
        {...margins}
        {...wrapperProps}
      >
        {icon && <div className={classes.icon}>{icon}</div>}

        <Element
          {...rest}
          ref={ref}
          aria-required={required}
          aria-invalid={invalid}
          disabled={disabled}
          className={cx(classes[`${_variant}Variant`], classes.input, {
            [classes.withIcon]: icon,
            [classes.invalid]: invalid,
            [classes.disabled]: disabled,
          })}
        />

        {rightSection && (
          <div {...rightSectionProps} className={classes.rightSection}>
            {rightSection}
          </div>
        )}
      </Box>
    );
  }
);

Input.displayName = '@mantine/core/Input';
