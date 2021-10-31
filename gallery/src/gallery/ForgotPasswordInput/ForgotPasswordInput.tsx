import React from 'react';
import { PasswordInput, Text, Group, UnstyledButton, PasswordInputProps } from '@mantine/core';

export function ForgotPasswordInput(props: PasswordInputProps) {
  return (
    <>
      <Group position="apart" mb={-4}>
        <Text component="label" htmlFor="your-password" size="sm" weight={500}>
          Your password
        </Text>

        <UnstyledButton
          sx={(theme) => ({
            paddingTop: 2,
            color: theme.colors[theme.primaryColor][theme.colorScheme === 'dark' ? 4 : 6],
            fontWeight: 500,
            fontSize: theme.fontSizes.xs,
          })}
        >
          Forgot your password?
        </UnstyledButton>
      </Group>
      <PasswordInput placeholder="Your password" id="your-password" {...props} />
    </>
  );
}
