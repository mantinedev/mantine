import React from 'react';
import { ChevronDownIcon } from '@modulz/radix-icons';
import { NativeSelect } from '@mantine/core';

const code = `
<NativeSelect rightSection={<ChevronDownIcon />} />
`;

function Demo() {
  return (
    <div style={{ maxWidth: 320, marginLeft: 'auto', marginRight: 'auto' }}>
      <NativeSelect
        label="Your favorite library/framework"
        placeholder="Your favorite library/framework"
        data={['React', 'Angular', 'Svelte', 'Vue']}
        rightSection={<ChevronDownIcon />}
      />
    </div>
  );
}

export const rightSection: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
