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

const sizes = (['xs', 'sm', 'md', 'lg', 'xl'] as const).map((size) => (
  <div key={size}>
    <Wrapper size={size} style={{ marginTop: 20 }} />
  </div>
));

const colors = Object.keys(DEFAULT_THEME.colors).map((color) => (
  <div key={color}>
    <Wrapper color={color} style={{ marginTop: 20 }} />
  </div>
));

storiesOf('@mantine/core/SegmentedControl', module)
  .add('General usage', () => (
    <div style={{ padding: 40, maxWidth: 400 }}>
      <Wrapper />
      <Wrapper
        fullWidth
        transitionDuration={500}
        transitionTimingFunction="linear"
        style={{ marginTop: 20 }}
      />
      <Wrapper radius="xl" fullWidth style={{ marginTop: 20 }} />
      <Wrapper color="blue" fullWidth style={{ marginTop: 20 }} />
      <Wrapper color="teal" fullWidth style={{ marginTop: 20 }} />
    </div>
  ))
  .add('Sizes', () => <div style={{ padding: 40 }}>{sizes}</div>)
  .add('Colors', () => <div style={{ padding: 40 }}>{colors}</div>)
  .add('Dark theme', () => (
    <MantineProvider theme={{ colorScheme: 'dark' }}>
      <div style={{ background: DEFAULT_THEME.colors.dark[7], minHeight: '100vh', padding: 40 }}>
        <Wrapper />
        <Wrapper fullWidth color="blue" style={{ marginTop: 20 }} />
      </div>
    </MantineProvider>
  ));
