import React from 'react';
import { MantineDemo } from '@mantine/ds';
import { TagInput } from '@mantine/core';

const code = `
<TagInput
  label="Technologies that you're interested in"
  placeholder="Add as many as you like"
/>
`;

function Demo() {
  return (
    <div style={{ maxWidth: 400, marginLeft: 'auto', marginRight: 'auto' }}>
      <TagInput
        label="Technologies that you're interested in"
        placeholder="Add as many as you like"
      />
    </div>
  );
}

export const usage: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
