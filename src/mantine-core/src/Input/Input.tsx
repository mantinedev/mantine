import React, { forwardRef } from 'react';
import {
  DefaultProps,
  MantineNumberSize,
  MantineSize,
  rem,
  Selectors,
  useComponentDefaultProps,
  Variants,
} from '@mantine/styles';
import { createPolymorphicComponent } from '@mantine/utils';
import { Box, extractSystemStyles } from '../Box';
import { InputWrapper } from './InputWrapper/InputWrapper';
import { InputDescription } from './InputDescription/InputDescription';
import { InputLabel } from './InputLabel/InputLabel';
import { InputError } from './InputError/InputError';
import { InputPlaceholder } from './InputPlaceholder/InputPlaceholder';
import { useInputWrapperContext } from './InputWrapper.context';
import useStyles from './Input.styles';

export type InputStylesNames = Selectors<typeof useStyles>;

export interface InputSharedProps {
  /** Adds icon on the left side of input */
  icon?: React.ReactNode;

  /** Width of icon section */
  iconWidth?: React.CSSProperties['width'];

  /** Right section of input, similar to icon but on the right */
  rightSection?: React.ReactNode;

  /** Width of right section, is used to calculate input padding-right */
  rightSectionWidth?: React.CSSProperties['width'];

  /** Props spread to rightSection div element */
  rightSectionProps?: Record<string, any>;

  /** Properties spread to root element */
  wrapperProps?: Record<string, any>;

  /** Sets required on input element */
  required?: boolean;

  /** Key of theme.radius or any valid CSS value to set border-radius, theme.defaultRadius by default */
  radius?: MantineNumberSize;

  /** Defines input appearance, defaults to default in light color scheme and filled in dark */
  variant?: Variants<'default' | 'filled' | 'unstyled'>;

  /** Disabled input state */
  disabled?: boolean;

  /** Input size */
  size?: MantineSize;
}

export interface InputProps extends InputSharedProps, DefaultProps<InputStylesNames> {
  /** Static css selector base */
  __staticSelector?: string;

  /** Determines whether input has error styles */
  error?: React.ReactNode;

  /** Will input have multiple lines? */
  multiline?: boolean;

  /** Determines whether cursor on input should be pointer */
  pointer?: boolean;
}

const defaultProps: Partial<InputProps> = {
  size: 'sm',
  variant: 'default',
};

export const _Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  const {
    className,
    error,
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
    unstyled,
    pointer,
    ...others
  } = useComponentDefaultProps('Input', defaultProps, props);
  const { offsetBottom, offsetTop, describedBy } = useInputWrapperContext();

  const { classes, cx } = useStyles(
    {
      radius,
      multiline,
      invalid: !!error,
      rightSectionWidth: rightSectionWidth ? rem(rightSectionWidth) : undefined,
      iconWidth,
      withRightSection: !!rightSection,
      offsetBottom,
      offsetTop,
      pointer,
    },
    { classNames, styles, name: ['Input', __staticSelector], unstyled, variant, size }
  );

  const { systemStyles, rest } = extractSystemStyles(others);

  return (
    <Box
      className={cx(classes.wrapper, className)}
      sx={sx}
      style={style}
      {...systemStyles}
      {...wrapperProps}
    >
      {icon && <div className={classes.icon}>{icon}</div>}

      <Box
        component="input"
        {...rest}
        ref={ref}
        required={required}
        aria-invalid={!!error}
        aria-describedby={describedBy}
        disabled={disabled}
        data-disabled={disabled || undefined}
        data-with-icon={!!icon || undefined}
        data-invalid={!!error || undefined}
        className={classes.input}
      />

      {rightSection && (
        <div {...rightSectionProps} className={classes.rightSection}>
          {rightSection}
        </div>
      )}
    </Box>
  );
}) as any;

_Input.displayName = '@mantine/core/Input';
_Input.Wrapper = InputWrapper;
_Input.Label = InputLabel;
_Input.Description = InputDescription;
_Input.Error = InputError;
_Input.Placeholder = InputPlaceholder;

export const Input = createPolymorphicComponent<
  'input',
  InputProps,
  {
    Wrapper: typeof InputWrapper;
    Label: typeof InputLabel;
    Description: typeof InputDescription;
    Error: typeof InputError;
    Placeholder: typeof InputPlaceholder;
  }
>(_Input);
