import React from 'react';
import { IconSearch } from '@tabler/icons-react';
import { MantineDemo } from '@mantine/ds';
import { Kbd, TextInput, Flex } from '@mantine/core';

const code = `
import { Kbd, TextInput, Flex } from '@mantine/core';
import { IconSearch } from '@tabler/icons-react';

function Demo() {
  const rightSection = (
    <Flex align="center">
      <Kbd mr={5}>Ctrl</Kbd>
      <span>+</span>
      <Kbd ml={5}>K</Kbd>
    </Flex>
  );

  return (
    <TextInput
      placeholder="Search"
      icon={<IconSearch size="1rem" />}
      rightSectionWidth={90}
      rightSection={rightSection}
      styles={{ rightSection: { pointerEvents: 'none' } }}
    />
  );
}
`;

function Demo() {
  const rightSection = (
    <Flex align="center">
      <Kbd mr={5}>Ctrl</Kbd>
      <span>+</span>
      <Kbd ml={5}>K</Kbd>
    </Flex>
  );

  return (
    <TextInput
      placeholder="Search"
      icon={<IconSearch size="1rem" />}
      rightSectionWidth={90}
      rightSection={rightSection}
      styles={{ rightSection: { pointerEvents: 'none' } }}
    />
  );
}

export const input: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
