import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import { Slider } from './Slider';

function Wrapper(props: Omit<React.ComponentPropsWithoutRef<typeof Slider>, 'value' | 'onChange'>) {
  const [value, setValue] = useState(40);
  return <Slider value={value} onChange={setValue} {...props} />;
}

storiesOf('@mantine/core/Slider', module).add('General usage', () => (
  <div style={{ padding: 100, minHeight: '100vh' }}>
    <Wrapper radius={2} />
  </div>
));
