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
    </>
  );
}
`;

function Demo() {
  return (
    <Stack>
      <Checkbox checked={false} onChange={() => {}} label="Default checkbox" />
      <Checkbox checked={false} onChange={() => {}} indeterminate label="Indeterminate checkbox" />
      <Checkbox checked onChange={() => {}} indeterminate label="Indeterminate checked checkbox" />
      <Checkbox checked onChange={() => {}} label="Checked checkbox" />
      <Checkbox disabled label="Disabled checkbox" />
      <Checkbox disabled checked onChange={() => {}} label="Disabled checked checkbox" />
      <Checkbox disabled indeterminate label="Disabled indeterminate checkbox" />
    </Stack>
  );
}

export const states: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
};
