import React from 'react';
import { storiesOf } from '@storybook/react';
import { RingProgress } from './RingProgress';
import { Text } from '../Text/Text';

const sizes = (['xs', 'sm', 'md', 'lg', 'xl'] as const).map((size) => (
  <RingProgress
    size={size}
    key={size}
    sections={[{ color: 'red', value: 40 }]}
    style={{ marginTop: 10 }}
  />
));

storiesOf('@mantine/core/RingProgress', module)
  .add('General Usage', () => (
    <div style={{ padding: 20 }}>
      <RingProgress sections={[{ color: 'red', value: 50 }]} />
    </div>
  ))
  .add('Thickness', () => (
    <div style={{ padding: 20 }}>
      <RingProgress thickness={2} sections={[{ color: 'red', value: 70 }]} />
      <RingProgress
        thickness={10}
        sections={[{ color: 'red', value: 80 }]}
        style={{ marginTop: 10 }}
      />
    </div>
  ))
  .add('Size', () => <div style={{ padding: 20 }}>{sizes}</div>)
  .add('Label', () => (
    <div style={{ padding: 20 }}>
      <RingProgress
        sections={[{ color: 'red', value: 50 }]}
        label={<Text style={{ color: 'red' }}>50</Text>}
      />
    </div>
  ))
  .add('Sections', () => (
    <div style={{ padding: 20 }}>
      <RingProgress
        sections={[
          { color: 'red', value: 50 },
          { color: 'blue', value: 10 },
          { color: 'green', value: 10 },
        ]}
      />
    </div>
  ));
