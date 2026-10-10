import { useState } from 'react';
import { CheckIcon, XIcon } from '@phosphor-icons/react';
import { Group, PasswordInput, Popover, Progress, Stack, Text } from '@mantine/core';
import { useUncontrolled } from '@mantine/hooks';
import { getStrength, getStrengthColor, PASSWORD_REQUIREMENTS } from './requirements';

interface PasswordInputWithStrengthProps {
  label?: React.ReactNode;
  placeholder?: string;
  withAsterisk?: boolean;
  value?: string;
  defaultValue?: string;
  onChange?: (value: string) => void;
  onFocus?: (event: React.FocusEvent<HTMLInputElement>) => void;
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
  error?: React.ReactNode;
}

export function PasswordInputWithStrength({
  label,
  placeholder,
  withAsterisk,
  value,
  defaultValue,
  onChange,
  onFocus,
  onBlur,
  error,
}: PasswordInputWithStrengthProps) {
  const [opened, setOpened] = useState(false);

  // onChange is passed as is so that the component subscribes to the form field
  const [password, handleChange] = useUncontrolled({
    value,
    defaultValue,
    finalValue: '',
    onChange,
  });

  const strength = getStrength(password);

  const checks = PASSWORD_REQUIREMENTS.map((requirement) => {
    const passed = requirement.re.test(password);
    return (
      <Group key={requirement.label} gap="xs">
        {passed ? (
          <CheckIcon size={14} weight="bold" color="var(--mantine-color-teal-6)" />
        ) : (
          <XIcon size={14} weight="bold" color="var(--mantine-color-red-6)" />
        )}
        <Text size="sm" c={passed ? 'teal' : 'red'}>
          {requirement.label}
        </Text>
      </Group>
    );
  });

  return (
    <Popover opened={opened} position="bottom-start" width="target">
      <Popover.Target>
        <PasswordInput
          label={label}
          placeholder={placeholder}
          withAsterisk={withAsterisk}
          value={password}
          error={error}
          onChange={(event) => handleChange(event.currentTarget.value)}
          onFocus={(event) => {
            setOpened(true);
            onFocus?.(event);
          }}
          onBlur={(event) => {
            setOpened(false);
            onBlur?.(event);
          }}
        />
      </Popover.Target>
      <Popover.Dropdown>
        <Stack gap="xs">
          <Progress value={strength} color={getStrengthColor(strength)} size="sm" />
          <Stack gap={6}>{checks}</Stack>
        </Stack>
      </Popover.Dropdown>
    </Popover>
  );
}
