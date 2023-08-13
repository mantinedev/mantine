import React from 'react';
import { IconHash } from '@tabler/icons-react';
import { MultiSelect, rem } from '@mantine/core';
import { MantineDemo } from '@mantine/ds';
import { data } from './_data';

const code = `
import { MultiSelect } from '@mantine/core';
import { IconHash } from '@tabler/icons-react';

function Demo() {
  return <MultiSelect icon={<IconHash />} />;
}
`;

function Demo() {
  return (
    <MultiSelect
      maw={400}
      mx="auto"
      data={data}
      label="Pick hashtags"
      placeholder="Pick all that you like"
      icon={<IconHash size={rem(14)} />}
    />
  );
}

export const icon: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
