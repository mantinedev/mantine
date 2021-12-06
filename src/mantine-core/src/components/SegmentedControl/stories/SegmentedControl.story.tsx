import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import { RtlProvider } from '@mantine/ds/src';
import { SegmentedControl, SegmentedControlProps } from '../SegmentedControl';

const stringData = ['React', 'Angular', 'Vue', 'Very long label'];
const data = [
  { label: 'React', value: 'react' },
  { label: 'Angular', value: 'ng' },
  { label: 'Vue', value: 'vue' },
  { label: 'Very long label', value: 'svelte' },
];

function Controlled(props: Partial<SegmentedControlProps<string>>) {
  const [value, onChange] = useState<string>('ng');
  return <SegmentedControl {...props} data={data} value={value} onChange={onChange} />;
}

const sizes = (['xs', 'sm', 'md', 'lg', 'xl'] as const).map((size) => (
  <div key={size}>
    <Controlled size={size} style={{ marginTop: 20 }} />
  </div>
));

storiesOf('@mantine/core/SegmentedControl/stories', module)
  .add('Sizes', () => <div style={{ padding: 40 }}>{sizes}</div>)
  .add('String data', () => (
    <div style={{ padding: 40 }}>
      <SegmentedControl data={stringData} defaultValue="Vue" />
    </div>
  ))
  .add('RTL', () => (
    <RtlProvider>
      <div style={{ padding: 40 }}>
        <SegmentedControl data={stringData} defaultValue="Vue" />
      </div>
    </RtlProvider>
  ));
