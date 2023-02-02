import React from 'react';
import { IconArrowLeft, IconArrowRight } from '@tabler/icons-react';
import { MantineDemo } from '@mantine/ds';
import { Center, useMantineTheme, Anchor, Box, rem } from '@mantine/core';

const code = `
import { Center, Anchor, Box, rem } from '@mantine/core';
import { IconArrowLeft } from '@tabler/icons-react';

function Demo() {
  return (
    <Anchor href="https://mantine.dev" target="_blank">
      <Center inline>
        <IconArrowLeft size={rem(14)} />
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
        {theme.dir === 'ltr' ? <IconArrowLeft size={rem(14)} /> : <IconArrowRight size={rem(14)} />}
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
