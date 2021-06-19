import React from 'react';
import { SegmentedControlWrapper } from './Wrapper';

const code = `
<SegmentedControl
  data={[
    { label: 'React', value: 'react' },
    { label: 'Angular', value: 'ng' },
    { label: 'Vue', value: 'vue' },
    { label: 'Svelte', value: 'svelte' },
  ]}
/>
`;

function Demo() {
  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <SegmentedControlWrapper />
    </div>
  );
}

export const usage: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
