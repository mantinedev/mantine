import React, { useState, useRef } from 'react';
import { useId, useMergedRef, useClickOutside, useFocusTrap } from '@mantine/hooks';
import {
  useMantineTheme,
  InputWrapper,
  Input,
  InputProps,
  InputWrapperBaseProps,
  Transition,
  Paper,
  Group,
  ColorSwatch,
  Text,
} from '@mantine/core';

interface ColorInputProps
  extends InputProps,
    InputWrapperBaseProps,
    Omit<React.ComponentPropsWithoutRef<'button'>, 'value' | 'onChange'> {
  value: string;
  onChange(color: string): void;
  data: string[];
}

export function ColorInput({
  id,
  value,
  placeholder,
  onChange,
  data,
  required,
  description,
  label,
  error,
  ...others
}: ColorInputProps) {
  const theme = useMantineTheme();
  const uuid = useId(id);
  const controlRef = useRef<HTMLButtonElement>();
  const [dropdownOpened, setDropdownOpened] = useState(false);
  const focusTrapRef = useFocusTrap();
  const closeDropdown = () => setDropdownOpened(false);
  const clickOutsideRef = useClickOutside(closeDropdown);
  const dropdownRef = useMergedRef(focusTrapRef, clickOutsideRef);

  const handleChange = (color: string) => {
    onChange(color);
    closeDropdown();
  };

  const colors = data.map((color) => (
    <ColorSwatch
      style={{ cursor: 'pointer' }}
      key={color}
      component="button"
      color={color}
      onClick={() => handleChange(color)}
    />
  ));

  return (
    <InputWrapper
      required={required}
      id={uuid}
      label={label}
      error={error}
      description={description}
    >
      <div style={{ position: 'relative' }}>
        <Input
          component="button"
          id={uuid}
          onClick={() => setDropdownOpened(true)}
          inputStyle={{ cursor: 'pointer' }}
          elementRef={controlRef}
          {...others}
        >
          {value ? (
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <ColorSwatch color={value} size={16} style={{ marginRight: 10 }} />
              <Text size="sm" transform="uppercase" style={{ lineHeight: 1 }}>
                {value}
              </Text>
            </div>
          ) : (
            <Text color="gray" size="sm">
              {placeholder}
            </Text>
          )}
        </Input>

        <Transition
          transition="skew-up"
          duration={250}
          mounted={dropdownOpened}
          // Wait for focus trap to unmount and focus control
          onExited={() => setTimeout(() => controlRef.current.focus(), 10)}
        >
          {(transitionStyles) => (
            <Paper
              shadow="md"
              padding="md"
              elementRef={dropdownRef}
              style={{
                ...transitionStyles,
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                border: `1px solid ${
                  theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[2]
                }`,
              }}
              onKeyDownCapture={(event) => {
                if (event.nativeEvent.code === 'Escape') {
                  closeDropdown();
                }
              }}
            >
              <Group position="center">{colors}</Group>
            </Paper>
          )}
        </Transition>
      </div>
    </InputWrapper>
  );
}
