import React from 'react';
import { Button } from '../Button';
import { Group } from '../../Group/Group';

function Demo() {
  return (
    <>
      <Group position="center">
        <Button>Default filled variant</Button>
        <Button variant="light">Light variant</Button>
        <Button variant="outline">Outline variant</Button>
        <Button variant="link">Link variant</Button>
      </Group>
    </>
  );
}

export const variants: MantineDemo = {
  type: 'demo',
  component: Demo,
};
