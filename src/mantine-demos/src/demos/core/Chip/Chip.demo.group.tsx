import React from 'react';
import { Chip } from '@mantine/core';

const code = `
import { Chip } from '@mantine/core';

function Demo() {
  return (
    <>
      <Chip.Group position="center">
        <Chip value="1">Single chip</Chip>
        <Chip value="2">Can be selected</Chip>
        <Chip value="3">At a time</Chip>
      </Chip.Group>

      <Chip.Group position="center" multiple mt={15}>
        <Chip value="1">Multiple chips</Chip>
        <Chip value="2">Can be selected</Chip>
        <Chip value="3">At a time</Chip>
      </Chip.Group>
    </>
  );
}
`;

function Demo() {
  return (
    <>
      <Chip.Group position="center">
        <Chip value="1">Single chip</Chip>
        <Chip value="2">Can be selected</Chip>
        <Chip value="3">At a time</Chip>
      </Chip.Group>

      <Chip.Group position="center" multiple mt={15}>
        <Chip value="1">Multiple chips</Chip>
        <Chip value="2">Can be selected</Chip>
        <Chip value="3">At a time</Chip>
      </Chip.Group>
    </>
  );
}

export const group: MantineDemo = {
  type: 'demo',
  component: Demo,
  code,
};
