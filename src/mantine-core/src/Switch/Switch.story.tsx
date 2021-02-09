import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import { MantineProvider } from '@mantine/theme';
import Switch from './Switch';

function SwitchWrapper(props: Omit<React.ComponentProps<typeof Switch>, 'value' | 'onChange'>) {
  const [value, onChange] = useState(false);
  return <Switch value={value} onChange={onChange} {...props} />;
}

storiesOf('@mantine/core', module).add('Switch', () => (
  <MantineProvider>
    <SwitchWrapper />
    <SwitchWrapper label="Turn on the notifications" style={{ marginTop: 15 }} />
    <SwitchWrapper label="Turn on the notifications" disabled style={{ marginTop: 15 }} />
  </MantineProvider>
));
