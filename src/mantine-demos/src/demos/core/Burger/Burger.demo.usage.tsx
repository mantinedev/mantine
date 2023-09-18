import React from 'react';
import { MantineDemo } from '@mantine/ds';
import { useDisclosure } from '@mantine/hooks';
import { Burger } from '@mantine/core';

const code = `
import { useDisclosure } from '@mantine/hooks';
import { Burger } from '@mantine/core';

function Demo() {
  const [opened, { toggle }] = useDisclosure();
  return <Burger{{props}} opened={opened} onClick={toggle} aria-label="Toggle navigation" />;
}
`;

function Wrapper(props: any) {
  const [opened, { toggle }] = useDisclosure();
  return <Burger {...props} opened={opened} onClick={toggle} aria-label="Toggle navigation" />;
}

export const usage: MantineDemo = {
  type: 'configurator',
  component: Wrapper,
  code,
  centered: true,
  controls: [{ type: 'size', prop: 'size', initialValue: 'md', libraryValue: 'md' }],
};
