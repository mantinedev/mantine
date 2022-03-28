import React from 'react';
import { Chips, Chip } from '@mantine/core';

const code = `
// Single chip can be selected at a time (radio input)
<Chips>{/* <Chip /> components */}</Chips>

// Multiple chips can be selected at a time (checkbox input)
<Chips multiple>{/* <Chip /> components */}</Chips>
`;

function Demo() {
  return (
    <>
      <Chips position="center">
        <Chip value="1">Single chip</Chip>
        <Chip value="2">Can be selected</Chip>
        <Chip value="3">At a time</Chip>
      </Chips>

      <Chips position="center" multiple mt={15}>
        <Chip value="1">Multiple chips</Chip>
        <Chip value="2">Can be selected</Chip>
        <Chip value="3">At a time</Chip>
      </Chips>
    </>
  );
}

export const type: MantineDemo = {
  type: 'demo',
  component: Demo,
  code,
};
