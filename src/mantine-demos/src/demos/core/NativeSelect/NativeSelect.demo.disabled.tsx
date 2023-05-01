import React from 'react';
import { MantineDemo } from '@mantine/ds';
import { Box, NativeSelect } from '@mantine/core';

const code = `
import { NativeSelect } from '@mantine/core';

function Demo() {
  return (
    <>
      <NativeSelect disabled data={[]} />

      <fieldset disabled>
        <NativeSelect data={[]} />
      </fieldset>
    </>
  )
}
`;

function Demo() {
  return (
    <Box maw={320} mx="auto">
      <NativeSelect
        data={['React', 'Angular', 'Svelte', 'Vue']}
        label="Disabled select"
        placeholder="Pick one that you like"
        disabled
      />

      <br />

      <fieldset disabled>
        <NativeSelect
          data={['React', 'Angular', 'Svelte', 'Vue']}
          label="Disabled select with fieldset"
          placeholder="Pick one that you like"
          disabled
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
