import React from 'react';
import { MantineDemo } from '@mantine/ds';
import { Autocomplete } from '@mantine/core';

const code = `
import { Autocomplete } from '@mantine/core';

function Demo() {
  return (
    <Autocomplete
      data={['React', 'Angular', 'Svelte', 'Vue']}
      transition="pop-top-left"
      transitionDuration={80}
      transitionTimingFunction="ease"
    />
  );
}
`;

function Demo() {
  return (
    <Autocomplete
      maw={320}
      mx="auto"
      label="Your favorite framework/library"
      placeholder="Pick one"
      data={['React', 'Angular', 'Svelte', 'Vue']}
      transition="pop-top-left"
      transitionDuration={80}
      transitionTimingFunction="ease"
    />
  );
}

export const animations: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
