import React from 'react';
import { MantineDemo } from '@mantine/ds';
import { Checkbox, Stack } from '@mantine/core';

const code = `
import { Checkbox } from '@mantine/core';

function Demo() {
  return (
    <>
      <Checkbox />
      <Checkbox indeterminate />
      <Checkbox checked indeterminate />
      <Checkbox checked />
      <Checkbox disabled />
      <Checkbox disabled checked />
      <Checkbox disabled indeterminate />

      <fieldset disabled>
          <Checkbox />
          <Checkbox checked />
          <Checkbox indeterminate />
      </fieldset>
    </>
  );
}
`;

function Demo() {
  return (
    <Stack>
      <Checkbox checked={false} label="Default checkbox" />
      <Checkbox checked={false} indeterminate label="Indeterminate checkbox" />
      <Checkbox checked indeterminate label="Indeterminate checked checkbox" />
      <Checkbox checked label="Checked checkbox" />
      <Checkbox disabled label="Disabled checkbox" />
      <Checkbox disabled checked label="Disabled checked checkbox" />
      <Checkbox disabled indeterminate label="Disabled indeterminate checkbox" />

      <fieldset disabled>
        <Stack>
          <Checkbox label="Disabled checkbox by fieldset" />
          <Checkbox checked label="Disabled checked checkbox by fieldset" />
          <Checkbox indeterminate label="Disabled indeterminate checkbox by fieldset" />
        </Stack>
      </fieldset>
    </Stack>
  );
}

export const states: MantineDemo = {
  type: 'demo',
  component: Demo,
  code,
};
