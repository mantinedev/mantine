import React from 'react';
import { IconArrowLeft, IconArrowRight } from '@tabler/icons';
import { Center, useMantineTheme, Anchor, Box } from '@mantine/core';

const code = `
import { Center, Anchor, Box } from '@mantine/core';
import { IconArrowLeft } from '@tabler/icons';

function Demo() {
  return (
    <Anchor href="https://mantine.dev" target="_blank">
      <Center inline>
        <IconArrowLeft size={14} />
        <Box ml={5}>Back to Mantine website</Box>
      </Center>
    </Anchor>
  );
}
`;

function Demo() {
  const theme = useMantineTheme();
  return (
    <Anchor href="https://mantine.dev" target="_blank">
      <Center inline>
        {theme.dir === 'ltr' ? <IconArrowLeft size={14} /> : <IconArrowRight size={14} />}
        <Box ml={5}>Back to Mantine website</Box>
      </Center>
    </Anchor>
  );
}

export const inline: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
