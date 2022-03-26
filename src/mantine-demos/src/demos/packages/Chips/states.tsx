import React from 'react';
import { Chips, Chip } from '@mantine/core';

function Demo() {
  return (
    <>
      <Chips multiple value={['checked', 'checked-disabled']} position="center" variant="outline">
        <Chip value="default">Outline default</Chip>
        <Chip value="checked">Outline checked</Chip>
        <Chip value="checked-disabled" disabled>
          Outline checked disabled
        </Chip>
      </Chips>

      <Chips
        multiple
        value={['checked', 'checked-disabled']}
        position="center"
        variant="filled"
        style={{ marginTop: 15 }}
      >
        <Chip value="default">Filled default</Chip>
        <Chip value="checked">Filled checked</Chip>
        <Chip value="checked-disabled" disabled>
          Filled checked disabled
        </Chip>
      </Chips>
    </>
  );
}

export const states: MantineDemo = {
  type: 'demo',
  component: Demo,
};
