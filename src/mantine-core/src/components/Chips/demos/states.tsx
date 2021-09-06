import React from 'react';
import { Chips, Chip } from '../Chips';

const code = `
<Chips multiple value={['checked', 'checked-disabled']} position="center">
  <Chip value="default">Default</Chip>
  <Chip value="checked">Checked</Chip>
  <Chip value="checked-disabled">Checked disabled</Chip>
</Chips>
`;

function Demo() {
  return (
    <Chips multiple value={['checked', 'checked-disabled']} position="center">
      <Chip value="default">Default</Chip>
      <Chip value="checked">Checked</Chip>
      <Chip value="checked-disabled">Checked disabled</Chip>
    </Chips>
  );
}

export const states: MantineDemo = {
  type: 'demo',
  component: Demo,
  code,
};
