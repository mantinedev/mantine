import React from 'react';
import { MantineDemo } from '@mantine/ds';
import { Autocomplete, Box } from '@mantine/core';

const code = `
import { Autocomplete } from '@mantine/core';

function Demo() {
  return (
    <>
      <Autocomplete disabled data={['React', 'Angular', 'Svelte', 'Vue']} />

      <fieldset disabled>
        <Autocomplete data={['React', 'Angular', 'Svelte', 'Vue']} />
      </fieldset>
    /<>
  );
}
`;

function Demo() {
  return (
    <Box maw={320} mx="auto">
      <Autocomplete
        data={['React', 'Angular', 'Svelte', 'Vue']}
        label="Disabled without value"
        placeholder="Pick all that you like"
        disabled
      />

      <Autocomplete
        mt="md"
        data={['React', 'Angular', 'Svelte', 'Vue']}
        label="Disabled with value"
        placeholder="Pick all that you like"
        disabled
        value="React"
      />

      <br />

      <fieldset disabled>
        <Autocomplete
          data={['React', 'Angular', 'Svelte', 'Vue']}
          label="Disabled by fieldset without value"
          placeholder="Pick all that you like"
        />

        <Autocomplete
          mt="md"
          data={['React', 'Angular', 'Svelte', 'Vue']}
          label="Disabled by fieldset with value"
          placeholder="Pick all that you like"
          disabled
          value="React"
        />
      </fieldset>
    </Box>
  );
}

export const disabled: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
