import React from 'react';
import { MantineDemo } from '@mantine/ds';
import { Chip, Group } from '@mantine/core';

const code = `
import { Chip } from '@mantine/core';

function Demo() {
  return (
    <>
      <Chip.Group>
        <Group position="center">
          <Chip value="1">Single chip</Chip>
          <Chip value="2">Can be selected</Chip>
          <Chip value="3">At a time</Chip>
        </Group>
      </Chip.Group>

      <Chip.Group multiple>
        <Group position="center" mt="md">
          <Chip value="1">Multiple chips</Chip>
          <Chip value="2">Can be selected</Chip>
          <Chip value="3">At a time</Chip>
        </Group>
      </Chip.Group>
    </>
  );
}
`;

function Demo() {
  return (
    <>
      <Chip.Group>
        <Group position="center">
          <Chip value="1">Single chip</Chip>
          <Chip value="2">Can be selected</Chip>
          <Chip value="3">At a time</Chip>
        </Group>
      </Chip.Group>

      <Chip.Group multiple>
        <Group position="center" mt="md">
          <Chip value="1">Multiple chips</Chip>
          <Chip value="2">Can be selected</Chip>
          <Chip value="3">At a time</Chip>
        </Group>
      </Chip.Group>
    </>
  );
}

export const group: MantineDemo = {
  type: 'demo',
  component: Demo,
  code,
};
