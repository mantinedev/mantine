import React from 'react';
import { HashIcon } from '@primer/octicons-react';
import { MultiSelect } from '../MultiSelect';
import { data } from './_data';

const code = `
<MultiSelect
  data={data}
  label="Pick hashtags"
  placeholder="Pick all that you like"
  icon={<HashIcon />}
/>
`;

function Demo() {
  return (
    <div style={{ maxWidth: 400, marginLeft: 'auto', marginRight: 'auto' }}>
      <MultiSelect
        data={data}
        label="Pick hashtags"
        placeholder="Pick all that you like"
        icon={<HashIcon />}
      />
    </div>
  );
}

export const icon: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
