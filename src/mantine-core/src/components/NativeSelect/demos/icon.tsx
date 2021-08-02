import React from 'react';
import { HashIcon } from '@primer/octicons-react';
import { NativeSelect } from '../NativeSelect';

const code = `
<NativeSelect
  label="Pick a hashtag"
  placeholder="Pick a hashtag"
  data={['React', 'Angular', 'Svelte', 'Vue']}
  icon={<HashIcon />}
/>
`;

function Demo() {
  return (
    <div style={{ maxWidth: 320, marginLeft: 'auto', marginRight: 'auto' }}>
      <NativeSelect
        label="Pick a hashtag"
        placeholder="Pick a hashtag"
        data={['React', 'Angular', 'Svelte', 'Vue']}
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
