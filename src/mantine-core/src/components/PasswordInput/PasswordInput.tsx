import React, { forwardRef } from 'react';
import { useBooleanToggle } from '@mantine/hooks';
import { getSizeValue } from '@mantine/styles';
import { ActionIcon } from '../ActionIcon/ActionIcon';
import { TextInput } from '../TextInput/TextInput';
import { PasswordToggleIcon } from './PasswordToggleIcon';

export interface PasswordInputProps
  extends Omit<
    React.ComponentPropsWithoutRef<typeof TextInput>,
    'rightSection' | 'rightSectionProps' | 'rightSectionWidth'
  > {
  /** Toggle button tabIndex, set to 0 to make button focusable with tab key */
  toggleTabIndex?: -1 | 0;
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

export const PasswordInput = forwardRef<HTMLInputElement, PasswordInputProps>(
  ({ radius, disabled, size = 'sm', toggleTabIndex = -1, ...others }: PasswordInputProps, ref) => {
    const [reveal, toggle] = useBooleanToggle(false);

    const rightSection = (
      <ActionIcon<'button'>
        tabIndex={toggleTabIndex}
        radius={radius}
        size={getSizeValue({ size, sizes: buttonSizes })}
        aria-hidden="true"
        onMouseDown={(event) => {
          event.preventDefault();
          toggle();
        }}
        onKeyDown={(event) => {
          if (event.nativeEvent.code === 'Space') {
            event.preventDefault();
            toggle();
          }
        }}
      >
        <PasswordToggleIcon reveal={reveal} size={getSizeValue({ size, sizes: iconSizes })} />
      </ActionIcon>
    );

    return (
      <TextInput
        {...others}
        ref={ref}
        disabled={disabled}
        type={reveal ? 'text' : 'password'}
        rightSection={disabled ? null : rightSection}
        rightSectionWidth={getSizeValue({ size, sizes: rightSectionWidth })}
        size={size}
        radius={radius}
        __staticSelector="PasswordInput"
      />
    );
  }
);

PasswordInput.displayName = '@mantine/core/PasswordInput';
