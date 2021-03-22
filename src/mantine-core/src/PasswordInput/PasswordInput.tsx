import React, { forwardRef, useState } from 'react';
import { EyeOpenIcon, EyeClosedIcon } from '@modulz/radix-icons';
import { ActionIcon } from '../ActionIcon/ActionIcon';
import { TextInput } from '../TextInput/TextInput';

interface PasswordInputProps extends React.ComponentPropsWithoutRef<typeof TextInput> {
  /** Title for visibility toggle button in hidden state */
  showPasswordLabel?: string;

  /** Title for visibility toggle button in visible state */
  hidePasswordLabel?: string;
}

export const PasswordInput = forwardRef(
  (
    {
      radius,
      disabled,
      hidePasswordLabel,
      showPasswordLabel,
      themeOverride,
      ...others
    }: PasswordInputProps,
    ref: React.ForwardedRef<HTMLInputElement>
  ) => {
    const [reveal, setReveal] = useState(false);

    const rightSection = (
      <ActionIcon
        onClick={() => setReveal((current) => !current)}
        themeOverride={themeOverride}
        title={reveal ? hidePasswordLabel : showPasswordLabel}
        aria-label={reveal ? hidePasswordLabel : showPasswordLabel}
        radius={radius}
      >
        {reveal ? <EyeClosedIcon /> : <EyeOpenIcon />}
      </ActionIcon>
    );

    return (
      <TextInput
        {...others}
        themeOverride={themeOverride}
        ref={ref}
        type={reveal ? 'text' : 'password'}
        rightSection={disabled ? null : rightSection}
        radius={radius}
      />
    );
  }
);

PasswordInput.displayName = '@mantine/core/PasswordInput';
