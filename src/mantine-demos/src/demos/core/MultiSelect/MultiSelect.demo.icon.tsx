import React from 'react';
import { IconHash } from '@tabler/icons';
import { MultiSelect } from '@mantine/core';
import { data } from './_data';

const code = `
import { MultiSelect } from '@mantine/core';
import { IconHash } from '@tabler/icons';

function Demo() {
  return <MultiSelect icon={<IconHash />} />;
}
`;

function Demo() {
  return (
    <div style={{ maxWidth: 400, marginLeft: 'auto', marginRight: 'auto' }}>
      <MultiSelect
        data={data}
        label="Pick hashtags"
        placeholder="Pick all that you like"
        icon={<IconHash size={14} />}
      />
    </div>
  );
}

export const icon: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
