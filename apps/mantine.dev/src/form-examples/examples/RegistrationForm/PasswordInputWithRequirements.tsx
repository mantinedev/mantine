import { useState } from 'react';
import { CheckIcon, XIcon } from '@phosphor-icons/react';
import { Group, PasswordInput, Popover, Stack, Text } from '@mantine/core';
import { UseFormReturnType } from '@mantine/form';

export const passwordRequirements = [
  { label: 'At least 8 characters', test: (value: string) => value.length >= 8 },
  { label: 'Includes a number', test: (value: string) => /[0-9]/.test(value) },
  { label: 'Includes an uppercase letter', test: (value: string) => /[A-Z]/.test(value) },
];

export function validatePassword(value: string) {
  const failed = passwordRequirements.find((requirement) => !requirement.test(value));
  return failed ? `Password must satisfy: ${failed.label.toLowerCase()}` : null;
}

interface PasswordInputWithRequirementsProps {
  form: UseFormReturnType<{ password: string }>;
}

export function PasswordInputWithRequirements({ form }: PasswordInputWithRequirementsProps) {
  const [opened, setOpened] = useState(false);
  const password = form.useWatchValue('password');
  const inputProps = form.getInputProps('password');

  const checks = passwordRequirements.map((requirement) => {
    const passed = requirement.test(password);
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
          label="Password"
          placeholder="Your password"
          withAsterisk
          {...inputProps}
          onFocus={(event) => {
            setOpened(true);
            inputProps.onFocus?.(event);
          }}
          onBlur={(event) => {
            setOpened(false);
            inputProps.onBlur?.(event);
          }}
        />
      </Popover.Target>
      <Popover.Dropdown>
        <Stack gap={6}>{checks}</Stack>
      </Popover.Dropdown>
    </Popover>
  );
}
