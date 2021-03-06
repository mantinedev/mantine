import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import { Switch } from './Switch';

function SwitchWrapper(props: Omit<React.ComponentProps<typeof Switch>, 'value' | 'onChange'>) {
  const [value, onChange] = useState(false);
  return (
    <Switch
      checked={value}
      onChange={(event) => onChange(event.currentTarget.checked)}
      {...props}
    />
  );
}

storiesOf('@mantine/core', module).add('Switch', () => (
  <div style={{ padding: 50 }}>
    <>
      <Switch label="Uncontrolled" />
      <SwitchWrapper style={{ marginTop: 15 }} />
      <SwitchWrapper size="xs" label="Turn on the notifications" style={{ marginTop: 15 }} />
      <SwitchWrapper size="sm" label="Turn on the notifications" style={{ marginTop: 15 }} />
      <SwitchWrapper size="md" label="Turn on the notifications" style={{ marginTop: 15 }} />
      <SwitchWrapper size="lg" label="Turn on the notifications" style={{ marginTop: 15 }} />
      <SwitchWrapper
        color="red"
        size="xl"
        label="Turn on the notifications"
        style={{ marginTop: 15 }}
      />
      <SwitchWrapper label="Turn on the notifications" radius="sm" style={{ marginTop: 15 }} />
      <SwitchWrapper label="Turn on the notifications" radius={0} style={{ marginTop: 15 }} />
      <SwitchWrapper label="Turn on the notifications" disabled style={{ marginTop: 15 }} />
    </>
  </div>
));
