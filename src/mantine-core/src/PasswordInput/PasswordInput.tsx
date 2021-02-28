import React, { forwardRef, useState } from 'react';
import { useId } from '@mantine/hooks';
import { EyeOpenIcon, EyeClosedIcon } from '@modulz/radix-icons';
import { DefaultProps, MantineNumberSize } from '@mantine/theme';
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
  id?: string;
  icon?: React.ReactNode;
  radius?: MantineNumberSize;
  showPasswordLabel?: string;
  hidePasswordLabel?: string;
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
      style,
      onChange,
      icon,
      radius,
      disabled,
      hidePasswordLabel,
      showPasswordLabel,
      themeOverride,
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
        themeOverride={themeOverride}
      >
        <div className={classes.wrapper}>
          <Input
            {...others}
            required={required}
            disabled={disabled}
            radius={radius}
            ref={ref}
            inputClassName={classes.input}
            type={reveal ? 'text' : 'password'}
            value={value}
            invalid={!!error}
            onChange={onChange}
            icon={icon}
            themeOverride={themeOverride}
          />

          {!disabled && (
            <ActionIcon
              className={classes.control}
              onClick={() => setReveal((current) => !current)}
              themeOverride={themeOverride}
              title={reveal ? hidePasswordLabel : showPasswordLabel}
              aria-label={reveal ? hidePasswordLabel : showPasswordLabel}
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
