import React from 'react';
import { ArrowLeftIcon, ArrowRightIcon } from '@modulz/radix-icons';
import { Center, useMantineTheme, Anchor } from '@mantine/core';

const code = `
<Anchor href="https://mantine.dev" target="_blank">
  <Center inline>
    <ArrowLeftIcon style={{ marginRight: 5 }} />
    <span>Back to Mantine website</span>
  </Center>
</Anchor>
`;

function Demo() {
  const theme = useMantineTheme();
  return (
    <Anchor href="https://mantine.dev" target="_blank">
      <Center inline>
        {theme.dir === 'ltr' ? (
          <ArrowLeftIcon style={{ marginRight: 5 }} />
        ) : (
          <ArrowRightIcon style={{ marginLeft: 5 }} />
        )}
        <span>Back to Mantine website</span>
      </Center>
    </Anchor>
  );
}

export const inline: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
