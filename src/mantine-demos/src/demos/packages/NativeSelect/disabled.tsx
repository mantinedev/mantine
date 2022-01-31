import React from 'react';
import { NativeSelect } from '@mantine/core';

const code = `
<NativeSelect disabled />
`;

function Demo() {
  return (
    <div style={{ maxWidth: 320, marginLeft: 'auto', marginRight: 'auto' }}>
      <NativeSelect
        data={['React', 'Angular', 'Svelte', 'Vue']}
        label="Disabled select"
        placeholder="Pick one that you like"
        disabled
      />
    </div>
  );
}

export const disabled: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
