import React from 'react';
import { MantineDemo } from '@mantine/ds';
import { NumberInput, Box, ActionIcon } from '@mantine/core';
import { IconRefresh } from '@tabler/icons-react';

const code = `
import { NumberInput } from '@mantine/core';

function Demo() {
  return (
    <>
      <NumberInput label="You can compose a custom rightSection including default controls" rightSection={(controls) => <><ActionIcon size="xs" variant="subtle" mr="xs"><IconRefresh /></ActionIcon>{controls}</>} rightSectionWidth="3.25rem" />
    </>
  );
}
`;

function Demo() {
  return (
    <Box maw={420} mx="auto">
      <NumberInput label="You can compose a custom rightSection including default controls" rightSection={(controls) => <><ActionIcon size="xs" variant="subtle" mr="xs"><IconRefresh /></ActionIcon>{controls}</>} rightSectionWidth="3.25rem" />
    </Box>
  );
}

export const customControls: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
