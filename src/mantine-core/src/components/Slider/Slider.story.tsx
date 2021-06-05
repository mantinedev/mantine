import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import { Slider } from './Slider';

function Wrapper(props: Omit<React.ComponentPropsWithoutRef<typeof Slider>, 'value' | 'onChange'>) {
  const [value, setValue] = useState(40);
  return <Slider value={value} onChange={setValue} {...props} />;
}

storiesOf('@mantine/core/Slider', module).add('General usage', () => (
  <div style={{ padding: 100, minHeight: '100vh' }}>
    <Wrapper size="xs" styles={{ root: { marginTop: 25 } }} />
    <Wrapper size="sm" styles={{ root: { marginTop: 25 } }} />
    <Wrapper size="md" styles={{ root: { marginTop: 25 } }} />
    <Wrapper size="lg" styles={{ root: { marginTop: 25 } }} />
    <Wrapper size="xl" styles={{ root: { marginTop: 25 } }} />
    <Wrapper size={20} styles={{ root: { marginTop: 25 } }} />
  </div>
));
