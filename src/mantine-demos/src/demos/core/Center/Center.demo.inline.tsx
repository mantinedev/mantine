import React from 'react';
import { ArrowLeft, ArrowRight } from 'tabler-icons-react';
import { Center, useMantineTheme, Anchor, Box } from '@mantine/core';

const code = `
import { Center, Anchor, Box } from '@mantine/core';
import { ArrowLeft } from 'tabler-icons-react';

function Demo() {
  return (
    <Anchor href="https://mantine.dev" target="_blank">
      <Center inline>
        <ArrowLeft size={14} />
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
        {theme.dir === 'ltr' ? <ArrowLeft size={14} /> : <ArrowRight size={14} />}
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
