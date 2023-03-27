import React from 'react';
import { IconPlus } from '@tabler/icons-react';
import { MantineDemo } from '@mantine/ds';
import { Box } from '@mantine/core';
import { BaseDemo } from './_base';

const code = `
import { Accordion } from '@mantine/core';
import { IconPlus } from '@tabler/icons-react';

function Demo() {
  return (
    <Accordion
      chevron={<IconPlus size="1rem" />}
      styles={{
        chevron: {
          '&[data-rotate]': {
            transform: 'rotate(45deg)',
          },
        },
      }}
    >
      {/* ... content */}
    </Accordion>
  );
}
`;

export function IconReplaceDemo() {
  return (
    <BaseDemo
      chevron={<IconPlus size="1rem" />}
      styles={{
        chevron: {
          '&[data-rotate]': {
            transform: 'rotate(45deg)',
          },
        },
      }}
    />
  );
}

function Demo() {
  return (
    <Box maw={380} mx="auto">
      <IconReplaceDemo />
    </Box>
  );
}

export const chevron: MantineDemo = {
  type: 'demo',
  component: Demo,
  code,
};
