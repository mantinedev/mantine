import React from 'react';
import { MantineDemo } from '@mantine/ds';
import { Rating, Group } from '@mantine/core';

const code = `
import { Rating, Group } from '@mantine/core';

function Demo() {
  return (
    <Group position="center">
      <Rating value={3.5} fractions={2} readOnly />
    </Group>
  );
}
`;

function Demo() {
  return (
    <Group position="center">
      <Rating value={3.5} fractions={2} readOnly />
    </Group>
  );
}

export const readOnly: MantineDemo = {
  type: 'demo',
  component: Demo,
  code,
};
