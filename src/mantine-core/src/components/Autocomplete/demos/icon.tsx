import React from 'react';
import { FrameIcon } from '@modulz/radix-icons';
import { Autocomplete } from '../Autocomplete';

const code = `
<Autocomplete icon={<FrameIcon />} />
`;

function Demo() {
  return (
    <div style={{ maxWidth: 320, marginLeft: 'auto', marginRight: 'auto' }}>
      <Autocomplete
        label="Enter a hashtag"
        placeholder="Enter a hashtag"
        data={['React', 'Angular', 'Svelte', 'Vue']}
        icon={<FrameIcon />}
      />
    </div>
  );
}

export const icon: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
