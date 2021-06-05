import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import { Slider } from './Slider';

function Wrapper(props: Omit<React.ComponentPropsWithoutRef<typeof Slider>, 'value' | 'onChange'>) {
  const [value, setValue] = useState(40);
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
    <div style={{ padding: 100, minHeight: '100vh' }}>
      <Wrapper />
    </div>
  ));
