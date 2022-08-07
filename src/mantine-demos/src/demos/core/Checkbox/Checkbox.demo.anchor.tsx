import React from 'react';
import { Checkbox, Anchor } from '@mantine/core';

const code = `
import { Checkbox, Anchor } from '@mantine/core';

function Demo() {
  return (
    <Checkbox
      label={
        <>
          Accepts{' '}
          <Anchor size="sm" href="https://mantine.dev" target="_blank">
            terms and conditions
          </Anchor>
        </>
      }
    />
  );
}
`;

function Demo() {
  return (
    <Checkbox
      label={
        <>
          Accepts{' '}
          <Anchor size="sm" href="https://mantine.dev" target="_blank">
            terms and conditions
          </Anchor>
        </>
      }
    />
  );
}

export const anchor: MantineDemo = {
  type: 'demo',
  component: Demo,
  code,
};
