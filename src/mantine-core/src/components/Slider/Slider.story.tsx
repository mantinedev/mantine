import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import { Slider } from './Slider';

function Wrapper(props: Omit<React.ComponentPropsWithoutRef<typeof Slider>, 'value' | 'onChange'>) {
  const [value, setValue] = useState(50);
  return <Slider value={value} onChange={setValue} {...props} />;
}

storiesOf('@mantine/core/Slider', module)
  .add('General usage', () => (
    <div style={{ padding: 100, minHeight: '100vh' }}>
      <Slider defaultValue={60} size="xs" styles={{ root: { marginTop: 25 } }} />
      <Slider defaultValue={60} size="sm" styles={{ root: { marginTop: 25 } }} />
      <Slider defaultValue={60} size="md" styles={{ root: { marginTop: 25 } }} />
      <Slider defaultValue={60} size="lg" styles={{ root: { marginTop: 25 } }} />
      <Slider defaultValue={60} size="xl" styles={{ root: { marginTop: 25 } }} />
      <Slider defaultValue={60} size={20} styles={{ root: { marginTop: 25 } }} />
    </div>
  ))
  .add('Controlled', () => (
    <div style={{ width: 280, padding: 40 }}>
      <Wrapper
        step={25}
        radius={0}
        marks={[
          { value: 0, label: 'xs' },
          { value: 25, label: 'sm' },
          { value: 50, label: 'md' },
          { value: 75, label: 'lg' },
          { value: 100, label: 'xl' },
        ]}
      />
    </div>
  ));
