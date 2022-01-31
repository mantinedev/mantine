import React from 'react';
import { Hash } from 'tabler-icons-react';
import { MultiSelect } from '@mantine/core';
import { data } from './_data';

const code = `
<MultiSelect icon={<Hash />} />
`;

function Demo() {
  return (
    <div style={{ maxWidth: 400, marginLeft: 'auto', marginRight: 'auto' }}>
      <MultiSelect
        data={data}
        label="Pick hashtags"
        placeholder="Pick all that you like"
        icon={<Hash size={14} />}
      />
    </div>
  );
}

export const icon: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
