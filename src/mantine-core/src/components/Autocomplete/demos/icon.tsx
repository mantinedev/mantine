import React from 'react';
import { HashIcon } from '@primer/octicons-react';
import { Autocomplete } from '../Autocomplete';

const code = `
<Autocomplete icon={<HashIcon />} />
`;

function Demo() {
  return (
    <div style={{ maxWidth: 320, marginLeft: 'auto', marginRight: 'auto' }}>
      <Autocomplete
        label="Enter a hashtag"
        placeholder="Enter a hashtag"
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
