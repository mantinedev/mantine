import React from 'react';
import { useFocusWithin } from '@mantine/hooks';
import { MantineDemo } from '@mantine/ds';
import { TextInput, Button, Box, Text } from '@mantine/core';

const code = `
import { useFocusWithin } from '@mantine/hooks';
import { TextInput, Button, Box, Text } from '@mantine/core';

function Demo() {
  const { ref, focused } = useFocusWithin();
  return (
    <div ref={ref}>
      <Box
        sx={(theme) => ({
          backgroundColor: focused
            ? theme.fn.variant({ variant: 'light' }).background
            : 'transparent',
          padding: theme.spacing.xl,
        })}
      >
        <Text size="sm">One of elements has focus: {focused.toString()}</Text>
        <TextInput label="Focus this input" placeholder="Styles will be added to parent" />
        <Button mt="md">Button</Button>
      </Box>
    </div>
  );
}
`;

function Demo() {
  const { ref, focused } = useFocusWithin();
  return (
    <div ref={ref}>
      <Box
        sx={(theme) => ({
          backgroundColor: focused
            ? theme.fn.variant({ variant: 'light' }).background
            : 'transparent',
          padding: theme.spacing.xl,
        })}
      >
        <Text size="sm">One of elements has focus: {focused.toString()}</Text>
        <TextInput label="Focus this input" placeholder="Styles will be added to parent" />
        <Button mt="md">Button</Button>
      </Box>
    </div>
  );
}

export const useFocusWithinDemo: MantineDemo = {
  type: 'demo',
  component: Demo,
  code,
};
