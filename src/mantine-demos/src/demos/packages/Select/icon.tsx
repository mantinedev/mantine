import React from 'react';
import { Hash } from 'tabler-icons-react';
import { Select } from '@mantine/core';

const code = `
<Select icon={<HashIcon />} />
`;

function Demo() {
  return (
    <div style={{ maxWidth: 320, marginLeft: 'auto', marginRight: 'auto' }}>
      <Select
        label="Pick a hashtag"
        placeholder="Pick a hashtag"
        data={['React', 'Angular', 'Svelte', 'Vue']}
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
