import React from 'react';
import { Chip } from '@mantine/core';

const code = `
// Single chip can be selected at a time (radio input)
<Chip.Group>{/* <Chip /> components */}</Chip.Group>

// Multiple chips can be selected at a time (checkbox input)
<Chip.Group multiple>{/* <Chip /> components */}</Chip.Group>
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

export const type: MantineDemo = {
  type: 'demo',
  component: Demo,
  code,
};
