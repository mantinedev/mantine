import { Radio, Group } from '@mantine/core';
import { MantineDemo } from '@mantine/ds';
import React from 'react';

const code = `
import { Radio, Group } from '@mantine/core';

function Demo() {
  return (
    <Group>
      <Radio checked disabled label="React" value="react" />
      <Radio disabled label="Angular" value="nu" />
      <Radio disabled label="Svelte" value="sv" />
    </Group>
  );
}
`;

function Demo() {
  return (
    <Group>
      <Radio checked disabled label="React" value="react" />
      <Radio disabled label="Angular" value="nu" />
      <Radio disabled label="Svelte" value="sv" />
    </Group>
  );
}

export const disabled: MantineDemo = {
  type: 'code',
  centered: true,
  component: Demo,
  code,
};
