import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import { DEFAULT_THEME } from '@mantine/styles';
import { SegmentedControl } from './SegmentedControl';
import { DarkStory } from '../../../demos';

const data = [
  { label: 'React', value: 'react' },
  { label: 'Angular', value: 'ng' },
  { label: 'Vue', value: 'vue' },
  { label: 'Very long label', value: 'svelte' },
];

const simpleData = ['React', 'Angular', 'Vue', 'Very'];

function Wrapper(
  props: Omit<
    React.ComponentPropsWithoutRef<typeof SegmentedControl>,
    'value' | 'onChange' | 'data'
  >
) {
  const [value, onChange] = useState<string>('ng');
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
      <SegmentedControl data={data} defaultValue="vue" />
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
  .add('Simple Data Format', () => (
    <div style={{ padding: 40 }}>
      <SegmentedControl data={simpleData} defaultValue="Vue" />
    </div>
  ))
  .add('Dark theme', () => (
    <DarkStory>
      <div style={{ padding: 40 }}>
        <Wrapper />
        <div>
          <Wrapper color="blue" style={{ marginTop: 20 }} />
        </div>
      </div>
    </DarkStory>
  ));
