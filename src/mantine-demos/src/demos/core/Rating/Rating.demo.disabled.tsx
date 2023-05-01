import React from 'react';
import { MantineDemo } from '@mantine/ds';
import { Rating, Group, Box } from '@mantine/core';

const code = `
import { Rating, Group } from '@mantine/core';

function Demo() {
  return (
    <fieldset disabled>
      <Group position="center">
        <Rating value={3.5} fractions={2} />
      </Group>
    </fieldset>
  );
}
`;

function Demo() {
  return (
    <Box maw={320} mx="auto">
      <fieldset disabled>
        <Group position="center">
          <Rating value={3.5} fractions={2} />
        </Group>
      </fieldset>
    </Box>
  );
}

export const disabled: MantineDemo = {
  type: 'demo',
  component: Demo,
  code,
};
