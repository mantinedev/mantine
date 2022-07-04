import React, { forwardRef } from 'react';
import {
  useMantineTheme,
  DefaultProps,
  MantineNumberSize,
  MantineSize,
  Selectors,
  PolymorphicComponentProps,
  PolymorphicRef,
  extractSystemStyles,
  useMantineDefaultProps,
} from '@mantine/styles';
import { Box } from '../Box';
import useStyles, { InputVariant } from './Input.styles';

export type InputStylesNames = Selectors<typeof useStyles>;

export interface InputBaseProps {
  /** Adds icon on the left side of input */
  icon?: React.ReactNode;

  /** Width of icon section in px */
  iconWidth?: number;

  /** Right section of input, similar to icon but on the right */
  rightSection?: React.ReactNode;

  /** Width of right section, is used to calculate input padding-right */
  rightSectionWidth?: number;

  /** Props spread to rightSection div element */
  rightSectionProps?: React.ComponentPropsWithoutRef<'div'>;

  /** Properties spread to root element */
  wrapperProps?: { [key: string]: any };

  /** Sets required on input element */
  required?: boolean;

  /** Input border-radius from theme or number to set border-radius in px */
  radius?: MantineNumberSize;

  /** Defines input appearance, defaults to default in light color scheme and filled in dark */
  variant?: InputVariant;

  /** Disabled input state */
  disabled?: boolean;

  /** Input size */
  size?: MantineSize;
}

interface _InputProps extends InputBaseProps, DefaultProps<InputStylesNames> {
  /** Static css selector base */
  __staticSelector?: string;

  /** Sets border color to red and aria-invalid=true on input element */
  invalid?: boolean;

  /** Will input have multiple lines? */
  multiline?: boolean;
}

export type InputProps<C> = PolymorphicComponentProps<C, _InputProps>;

type InputComponent = (<C = 'input'>(props: InputProps<C>) => React.ReactElement) & {
  displayName?: string;
};

const defaultProps: Partial<InputProps<any>> = {
  rightSectionWidth: 36,
  size: 'sm',
  __staticSelector: 'Input',
};

export const Input: InputComponent = forwardRef(
  (props: InputProps<'input'>, ref: PolymorphicRef<'input'>) => {
    const {
      component,
      className,
      invalid,
      required,
      disabled,
      variant,
      icon,
      style,
      rightSectionWidth,
      iconWidth,
      rightSection,
      rightSectionProps,
      radius,
      size,
      wrapperProps,
      classNames,
      styles,
      __staticSelector,
      multiline,
      sx,
      ...others
    } = useMantineDefaultProps('Input', defaultProps, props);

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
        iconWidth,
        withRightSection: !!rightSection,
      },
      { classNames, styles, name: __staticSelector }
    );
    const { systemStyles, rest } = extractSystemStyles(others);
    const Element: any = component || 'input';

    return (
      <Box
        className={cx(classes.wrapper, className)}
        sx={sx}
        style={style}
        {...systemStyles}
        {...wrapperProps}
      >
        {icon && <div className={classes.icon}>{icon}</div>}

        <Element
          {...rest}
          ref={ref}
          required={required}
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
) as any;

Input.displayName = '@mantine/core/Input';
