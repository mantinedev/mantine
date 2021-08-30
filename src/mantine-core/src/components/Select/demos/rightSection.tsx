import React from 'react';
import { ChevronDownIcon } from '@modulz/radix-icons';
import { Select } from '../Select';

const code = `
<Select rightSection={<ChevronDownIcon />} />
`;

function Demo() {
  return (
    <div style={{ maxWidth: 320, marginLeft: 'auto', marginRight: 'auto' }}>
      <Select
        label="Your favorite framework/library"
        placeholder="Pick one"
        rightSection={<ChevronDownIcon />}
        data={[
          { value: 'react', label: 'React' },
          { value: 'ng', label: 'Angular' },
          { value: 'svelte', label: 'Svelte' },
          { value: 'vue', label: 'Vue' },
        ]}
      />
    </div>
  );
}

export const rightSection: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
