import React from 'react';
import { MultiSelect } from '@mantine/core';
import { MantineDemo } from '@mantine/ds';
import { data } from './_data';

const code = `
import { MultiSelect } from '@mantine/core';

function Demo() {
  return (
    <MultiSelect
      data={[]}
      transitionDuration={150}
      transition="pop-top-left"
      transitionTimingFunction="ease"
    />
  );
}
`;

function Demo() {
  return (
    <MultiSelect
      maw={400}
      mx="auto"
      data={data}
      transitionDuration={150}
      transition="pop-top-left"
      transitionTimingFunction="ease"
      label="Your favorite frameworks/libraries"
      placeholder="Pick all that you like"
    />
  );
}

export const transitions: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
