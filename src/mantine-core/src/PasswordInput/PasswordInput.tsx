import React, { useState, useRef } from 'react';
import { useMergedRef } from '@mantine/hooks';
import { ActionIcon } from '../ActionIcon/ActionIcon';
import { TextInput } from '../TextInput/TextInput';
import { PasswordToggleIcon } from './PasswordToggleIcon';

interface PasswordInputProps
  extends Omit<
    React.ComponentPropsWithoutRef<typeof TextInput>,
    'rightSection' | 'rightSectionProps' | 'rightSectionWidth'
  > {
  /** Title for visibility toggle button in hidden state */
  showPasswordLabel?: string;

  /** Title for visibility toggle button in visible state */
  hidePasswordLabel?: string;

  /** Focus input when toggle button is pressed */
  focusInputOnToggle?: boolean;
}

export function PasswordInput({
  radius,
  disabled,
  hidePasswordLabel,
  showPasswordLabel,
  themeOverride,
  focusInputOnToggle = false,
  elementRef,
  ...others
}: PasswordInputProps) {
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
      <PasswordToggleIcon reveal={reveal} />
    </ActionIcon>
  );

  return (
    <TextInput
      {...others}
      disabled={disabled}
      themeOverride={themeOverride}
      elementRef={useMergedRef(inputRef, elementRef)}
      type={reveal ? 'text' : 'password'}
      rightSection={disabled ? null : rightSection}
      radius={radius}
    />
  );
}

PasswordInput.displayName = '@mantine/core/PasswordInput';
