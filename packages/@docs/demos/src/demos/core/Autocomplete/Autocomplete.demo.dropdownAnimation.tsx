import React from 'react';
import { MantineDemo } from '@mantinex/demo';
import { Autocomplete } from '@mantine/core';

const code = `
import { Autocomplete } from '@mantine/core';

function Demo() {
  return (
    <Autocomplete
      label="Your favorite library"
      placeholder="Pick value or enter anything"
      data={['React', 'Angular', 'Vue', 'Svelte']}
      comboboxProps={{ transitionProps: { transition: 'pop', duration: 200 } }}
    />
  );
}
`;

function Demo() {
  return (
    <Autocomplete
      label="Your favorite library"
      placeholder="Pick value or enter anything"
      data={['React', 'Angular', 'Vue', 'Svelte']}
      comboboxProps={{ transitionProps: { transition: 'pop', duration: 200 } }}
    />
  );
}

export const dropdownAnimation: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
  maxWidth: 340,
  centered: true,
};
