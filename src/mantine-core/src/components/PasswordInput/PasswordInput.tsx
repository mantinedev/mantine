import React, { useState, useRef } from 'react';
import { useMergedRef } from '@mantine/hooks';
import { getSizeValue } from '../../theme';
import type { InputStylesNames } from '../Input/Input';
import type { InputWrapperStylesNames } from '../InputWrapper/InputWrapper';
import { ActionIcon } from '../ActionIcon/ActionIcon';
import { TextInput } from '../TextInput/TextInput';
import { PasswordToggleIcon } from './PasswordToggleIcon';

export type PasswordInputStylesNames = InputStylesNames | InputWrapperStylesNames;

export interface PasswordInputProps
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

const buttonSizes = {
  xs: 22,
  sm: 28,
  md: 26,
  lg: 32,
  xl: 40,
};

const iconSizes = {
  xs: 12,
  sm: 15,
  md: 17,
  lg: 19,
  xl: 21,
};

const rightSectionWidth = {
  xs: 28,
  sm: 34,
  md: 34,
  lg: 44,
  xl: 54,
};

export function PasswordInput({
  radius,
  disabled,
  hidePasswordLabel,
  showPasswordLabel,
  themeOverride,
  focusInputOnToggle = false,
  elementRef,
  size = 'sm',
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
      size={getSizeValue({ size, sizes: buttonSizes })}
    >
      <PasswordToggleIcon reveal={reveal} size={getSizeValue({ size, sizes: iconSizes })} />
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
      rightSectionWidth={getSizeValue({ size, sizes: rightSectionWidth })}
      size={size}
      radius={radius}
      __staticSelector="password-input"
    />
  );
}

PasswordInput.displayName = '@mantine/core/PasswordInput';
