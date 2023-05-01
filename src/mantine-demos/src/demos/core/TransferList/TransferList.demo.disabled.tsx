import React from 'react';
import { Stack } from '@mantine/core';
import { MantineDemo } from '@mantine/ds';
import { Wrapper } from './_wrapper';

const code = `
import { TransferList } from '@mantine/core';

function Demo() {
  return (
    <fieldset disabled>
      <TransferList
      {/* ...other props */}
      />
    </fieldset>
    />
  );
}
`;

function Demo() {
  return (
    <Stack>
      <fieldset disabled>
        <Wrapper
          searchPlaceholder="Search..."
          nothingFound="Nothing here"
          titles={['Disabled by fieldset', 'Disabled by fieldset']}
          breakpoint="sm"
        />
      </fieldset>
    </Stack>
  );
}

export const disabled: MantineDemo = {
  type: 'demo',
  component: Demo,
  code,
};
