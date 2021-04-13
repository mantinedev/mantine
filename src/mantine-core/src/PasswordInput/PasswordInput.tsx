import React, { forwardRef, useState, useRef } from 'react';
import { useMergedRef } from '@mantine/hooks';
import { EyeOpenIcon, EyeClosedIcon } from '@modulz/radix-icons';
import { ActionIcon } from '../ActionIcon/ActionIcon';
import { TextInput } from '../TextInput/TextInput';

interface PasswordInputProps extends React.ComponentPropsWithoutRef<typeof TextInput> {
  /** Title for visibility toggle button in hidden state */
  showPasswordLabel?: string;

  /** Title for visibility toggle button in visible state */
  hidePasswordLabel?: string;

  /** Focus input when toggle button is pressed */
  focusInputOnToggle?: boolean;
}

export const PasswordInput = forwardRef(
  (
    {
      radius,
      disabled,
      hidePasswordLabel,
      showPasswordLabel,
      themeOverride,
      focusInputOnToggle = false,
      ...others
    }: PasswordInputProps,
    ref: React.ForwardedRef<HTMLInputElement>
  ) => {
    const inputRef = useRef<HTMLInputElement>();
    const [reveal, setReveal] = useState(false);

    const toggleReveal = () => {
      setReveal((current) => !current);
      if (focusInputOnToggle) {
        inputRef.current.focus();
      }
    };

    const rightSection = (
      <ActionIcon
        onClick={toggleReveal}
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
        disabled={disabled}
        themeOverride={themeOverride}
        ref={useMergedRef(inputRef, ref)}
        type={reveal ? 'text' : 'password'}
        rightSection={disabled ? null : rightSection}
        radius={radius}
      />
    );
  }
);

PasswordInput.displayName = '@mantine/core/PasswordInput';
