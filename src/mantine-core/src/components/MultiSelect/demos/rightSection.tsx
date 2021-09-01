import React from 'react';
import { ChevronDownIcon } from '@modulz/radix-icons';
import { MultiSelect } from '../MultiSelect';
import { data } from './_data';

const code = `
<MultiSelect rightSection={<ChevronDownIcon />} />
`;

function Demo() {
  return (
    <div style={{ maxWidth: 400, marginLeft: 'auto', marginRight: 'auto' }}>
      <MultiSelect
        data={data}
        label="Your favorite frameworks/libraries"
        placeholder="Pick all that you like"
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
