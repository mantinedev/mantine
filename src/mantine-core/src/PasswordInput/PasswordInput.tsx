import React, { forwardRef, useState } from 'react';
import cx from 'clsx';
import { EyeOpenIcon, EyeClosedIcon } from '@modulz/radix-icons';
import { useId } from '@mantine/hooks';
import { DefaultProps, MantineNumberSize } from '@mantine/theme';
import { Subtract } from '@mantine/types';
import { InputWrapperBaseProps, InputWrapper } from '../InputWrapper/InputWrapper';
import { ActionIcon } from '../ActionIcon/ActionIcon';
import { Input } from '../Input/Input';
import useStyles from './PasswordInput.styles';

interface PasswordInputProps
  extends DefaultProps,
    InputWrapperBaseProps,
    Omit<React.ComponentPropsWithoutRef<'input'>, 'onChange'> {
  value?: string;
  onChange?(event: React.ChangeEvent<HTMLInputElement>): void;

  /** id is used to bind input and label, if not passed unique id will be generated for each input */
  id?: string;

  /** Adds icon on the left side of input */
  icon?: React.ReactNode;
  radius?: MantineNumberSize;

  /** Title for visibility toggle button in hidden state */
  showPasswordLabel?: string;

  /** Title for visibility toggle button in visible state */
  hidePasswordLabel?: string;

  /** Style properties added to input element */
  inputStyle?: React.CSSProperties;

  /** Class name added to input input element */
  inputClassName?: string;

  /** Props passed to root element (InputWrapper component) */
  wrapperProps?: Partial<
    Subtract<
      React.ComponentPropsWithoutRef<typeof InputWrapper>,
      InputWrapperBaseProps & DefaultProps
    >
  >;
}

export const PasswordInput = forwardRef(
  (
    {
      className,
      id,
      value,
      label,
      error,
      required,
      description,
      style,
      onChange,
      icon,
      radius,
      disabled,
      hidePasswordLabel,
      showPasswordLabel,
      themeOverride,
      wrapperProps,
      inputStyle,
      inputClassName,
      ...others
    }: PasswordInputProps,
    ref: React.ForwardedRef<HTMLInputElement>
  ) => {
    const classes = useStyles();
    const [reveal, setReveal] = useState(false);
    const uuid = useId(id);

    return (
      <InputWrapper
        className={className}
        required={required}
        id={uuid}
        label={label}
        error={error}
        style={style}
        description={description}
        themeOverride={themeOverride}
        {...wrapperProps}
      >
        <div className={classes.wrapper}>
          <Input
            {...others}
            id={uuid}
            required={required}
            disabled={disabled}
            radius={radius}
            ref={ref}
            inputClassName={cx(classes.input, inputClassName)}
            type={reveal ? 'text' : 'password'}
            value={value}
            invalid={!!error}
            onChange={onChange}
            icon={icon}
            themeOverride={themeOverride}
            style={inputStyle}
          />

          {!disabled && (
            <ActionIcon
              className={classes.control}
              onClick={() => setReveal((current) => !current)}
              themeOverride={themeOverride}
              title={reveal ? hidePasswordLabel : showPasswordLabel}
              radius={radius}
            >
              {reveal ? <EyeClosedIcon /> : <EyeOpenIcon />}
            </ActionIcon>
          )}
        </div>
      </InputWrapper>
    );
  }
);

PasswordInput.displayName = '@mantine/core/PasswordInput';
