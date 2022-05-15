import React from 'react';
import { Chip } from '@mantine/core';

function Demo() {
  return (
    <>
      <Chip.Group multiple value={['checked', 'checked-disabled']} position="center">
        <Chip value="default" variant="outline">
          Outline default
        </Chip>
        <Chip value="checked" variant="outline">
          Outline checked
        </Chip>
        <Chip value="checked-disabled" disabled variant="outline">
          Outline checked disabled
        </Chip>
      </Chip.Group>

      <Chip.Group multiple value={['checked', 'checked-disabled']} position="center" mt="md">
        <Chip value="default" variant="filled">
          Filled default
        </Chip>
        <Chip value="checked" variant="filled">
          Filled checked
        </Chip>
        <Chip value="checked-disabled" disabled variant="filled">
          Filled checked disabled
        </Chip>
      </Chip.Group>
    </>
  );
}

export const states: MantineDemo = {
  type: 'demo',
  component: Demo,
};
