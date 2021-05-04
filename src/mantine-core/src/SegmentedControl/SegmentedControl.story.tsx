import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import { SegmentedControl } from './SegmentedControl';

const data = [
  { label: 'React', value: 'react' },
  { label: 'Angular', value: 'ng' },
  { label: 'Vue', value: 'vue' },
  { label: 'Svelte', value: 'svelte' },
];

function Wrapper(
  props: Omit<
    React.ComponentPropsWithoutRef<typeof SegmentedControl>,
    'value' | 'onChange' | 'data'
  >
) {
  const [value, onChange] = useState<string>(null);
  return <SegmentedControl {...props} data={data} value={value} onChange={onChange} />;
}

storiesOf('@mantine/core/SegmentedControl', module).add('General usage', () => (
  <div style={{ padding: 40 }}>
    <Wrapper />
  </div>
));
