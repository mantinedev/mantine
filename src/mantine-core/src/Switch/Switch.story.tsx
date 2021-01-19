import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import Switch from './Switch';

function SwitchWrapper(props: Omit<React.ComponentProps<typeof Switch>, 'value' | 'onChange'>) {
  const [value, onChange] = useState(false);
  return <Switch value={value} onChange={onChange} {...props} />;
}

storiesOf('@mantine/core/Switch', module).add('General Usage', () => (
  <SwitchWrapper label="Turn on the notifications" />
));
