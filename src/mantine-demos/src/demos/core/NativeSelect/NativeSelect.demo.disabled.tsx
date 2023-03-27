import React from 'react';
import { MantineDemo } from '@mantine/ds';
import { NativeSelect } from '@mantine/core';

const code = `
import { NativeSelect } from '@mantine/core';

function Demo() {
  return <NativeSelect disabled data={[]} />;
}
`;

function Demo() {
  return (
    <NativeSelect
      maw={320}
      mx="auto"
      data={['React', 'Angular', 'Svelte', 'Vue']}
      label="Disabled select"
      placeholder="Pick one that you like"
      disabled
    />
  );
}

export const disabled: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
