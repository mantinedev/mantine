import React from 'react';
import { ScrollArea, Box } from '@mantine/core';
import { MantineDemo } from '@mantine/ds';
import { Content } from './_content';

const code = `
import { ScrollArea, Box } from '@mantine/core';

function Demo() {
  return (
    <ScrollArea w={300} h={200}>
      <Box w={600}>
        {/* ... content */}
      </Box>
    </ScrollArea>
  );
}
`;

function Demo() {
  return (
    <ScrollArea w={300} h={200}>
      <Box w={600}>
        <Content />
      </Box>
    </ScrollArea>
  );
}

export const horizontal: MantineDemo = {
  type: 'code',
  component: Demo,
  centered: true,
  code,
};
