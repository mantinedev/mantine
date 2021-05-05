import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import { MantineProvider, DEFAULT_THEME } from '@mantine/theme';
import { SegmentedControl } from './SegmentedControl';

const data = [
  { label: 'React', value: 'react' },
  { label: 'Angular', value: 'ng' },
  { label: 'Vue', value: 'vue' },
  { label: 'Very long label', value: 'svelte' },
];

function Wrapper(
  props: Omit<
    React.ComponentPropsWithoutRef<typeof SegmentedControl>,
    'value' | 'onChange' | 'data'
  >
) {
  const [value, onChange] = useState<string>('react');
  return <SegmentedControl {...props} data={data} value={value} onChange={onChange} />;
}

storiesOf('@mantine/core/SegmentedControl', module)
  .add('General usage', () => (
    <div style={{ padding: 40, maxWidth: 400 }}>
      <Wrapper />
      <Wrapper fullWidth style={{ marginTop: 20 }} />
      <Wrapper color="blue" fullWidth style={{ marginTop: 20 }} />
    </div>
  ))
  .add('Dark theme', () => (
    <MantineProvider theme={{ colorScheme: 'dark' }}>
      <div style={{ background: DEFAULT_THEME.colors.dark[7], minHeight: '100vh', padding: 40 }}>
        <Wrapper />
      </div>
    </MantineProvider>
  ));
