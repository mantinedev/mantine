import React from 'react';
import { MantineDemo } from '@mantine/ds';
import { TagInput } from '@mantine/core';

const code = `
<TagInput
  label="Technologies that you're interested in"
  placeholder="Add as many as you like"
  defaultValue={['react', 'next']}
  onlyUnique
/>
`;

function Demo() {
  return (
    <div style={{ maxWidth: 400, marginLeft: 'auto', marginRight: 'auto' }}>
      <TagInput
        label="Technologies that you're interested in"
        placeholder="Add as many as you like"
        defaultValue={['react', 'next']}
        onlyUnique
      />
    </div>
  );
}

export const onlyUnique: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
