import React from 'react';
import { storiesOf } from '@storybook/react';
import { RingProgress } from './RingProgress';
import { Text } from '../Text/Text';

const sizes = [20, 40, 60, 90, 120, 250].map((size) => (
  <RingProgress
    thickness={size / 10}
    size={size}
    key={size}
    sections={[{ color: 'red', value: 40 }]}
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
          { color: 'cyan', value: 20 },
          { color: 'yellow', value: 20 },
          { color: 'grape', value: 30 },
        ]}
      />
    </div>
  ));
