import React from 'react';
import { EnvelopeOpenIcon } from '@modulz/radix-icons';
import { TagInput } from '@mantine/labs';

const code = `
<TagInput
  label="Technologies that you're interested in"
  placeholder="Add as many as you like"
  defaultValue={['react', 'next']}
  rightSection={<EnvelopeOpenIcon />}
  clearable

/>
`;

function Demo() {
  return (
    <div style={{ maxWidth: 400, marginLeft: 'auto', marginRight: 'auto' }}>
      <TagInput
        label="Email subscriber"
        placeholder="Add as many as you like"
        rightSection={<EnvelopeOpenIcon />}
        m={12}
        clearable
      />
    </div>
  );
}

export const rightSection: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
