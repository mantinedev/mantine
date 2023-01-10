import React from 'react';
import { MantineDemo } from '@mantine/ds';
import { Select } from '@mantine/core';

const code = `
import { Select } from '@mantine/core';

function Demo() {
  return (
    <Select
      transition="pop-top-left"
      transitionDuration={80}
      transitionTimingFunction="ease"
    />
  );
}
`;

function Demo() {
  return (
    <Select
      maw={320}
      mx="auto"
      label="Your favorite framework/library"
      placeholder="Pick one"
      data={['React', 'Angular', 'Svelte', 'Vue']}
      transition="pop-top-left"
      transitionDuration={80}
      transitionTimingFunction="ease"
      withinPortal
    />
  );
}

export const animations: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
