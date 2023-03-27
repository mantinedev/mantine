import React from 'react';
import { MantineDemo } from '@mantine/ds';
import { PasswordInput, Box } from '@mantine/core';

const code = `
import { PasswordInput } from '@mantine/core';

function Demo() {
  return (
    <>
      <PasswordInput
        label="Toggle button is not focusable"
        placeholder="Toggle button is not focusable"
      />

      <PasswordInput
        label="Toggle button is focusable"
        placeholder="Toggle button is focusable"
        toggleTabIndex={0}
      />
    </>
  );
}
`;

function Demo() {
  return (
    <Box maw={360} mx="auto">
      <PasswordInput
        label="Toggle button is not focusable"
        placeholder="Toggle button is not focusable"
        toggleTabIndex={-1}
      />

      <PasswordInput
        mt="md"
        label="Toggle button is focusable"
        placeholder="Toggle button is focusable"
        toggleTabIndex={0}
      />
    </Box>
  );
}

export const focus: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
