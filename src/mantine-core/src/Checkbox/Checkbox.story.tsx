import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import { Checkbox } from './Checkbox';

function CheckboxWrapper(props: Omit<React.ComponentProps<typeof Checkbox>, 'value' | 'onChange'>) {
  const [value, onChange] = useState(false);
  return (
    <Checkbox
      checked={value}
      onChange={(event) => onChange(event.currentTarget.checked)}
      {...props}
    />
  );
}

storiesOf('@mantine/core', module).add('Checkbox', () => (
  <>
    <CheckboxWrapper intermediate label="intermediate" />
    <CheckboxWrapper size="xl" style={{ marginTop: 15 }} />
    <Checkbox size="xl" label="Uncontrolled" style={{ marginTop: 15 }} />
    <CheckboxWrapper size="xl" label="Turn on the notifications" style={{ marginTop: 15 }} />
    <CheckboxWrapper
      size="lg"
      label="Turn on the notifications"
      color="red"
      style={{ marginTop: 15 }}
    />
    <CheckboxWrapper label="Turn on the notifications" color="teal" style={{ marginTop: 15 }} />
    <CheckboxWrapper
      size="sm"
      label="Turn on the notifications"
      color="grape"
      style={{ marginTop: 15 }}
    />
    <CheckboxWrapper
      size="xs"
      label="Turn on the notifications"
      color="violet"
      style={{ marginTop: 15 }}
    />

    <CheckboxWrapper
      size={42}
      label="Turn on the notifications"
      color="indigo"
      style={{ marginTop: 15 }}
    />
    <CheckboxWrapper label="Turn on the notifications" disabled style={{ marginTop: 15 }} />
  </>
));
