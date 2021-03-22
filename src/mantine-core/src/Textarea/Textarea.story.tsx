import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import { Textarea } from './Textarea';

function WrappedTextarea(props: Omit<React.ComponentProps<typeof Textarea>, 'value' | 'onChange'>) {
  const [value, onChange] = useState('');
  return (
    <Textarea value={value} onChange={(event) => onChange(event.currentTarget.value)} {...props} />
  );
}

storiesOf('@mantine/core/Textarea', module)
  .add('General usage', () => (
    <div style={{ width: 300, padding: 20 }}>
      <WrappedTextarea label="text" placeholder="text" />
    </div>
  ))
  .add('Autosize', () => (
    <div style={{ width: 300, padding: 20 }}>
      <WrappedTextarea label="text" placeholder="text" autosize minRows={3} maxRows={10} />
    </div>
  ))
  .add('Uncontrolled', () => (
    <div style={{ width: 300, padding: 20 }}>
      <Textarea label="Uncontrolled" placeholder="Uncontrolled" />
    </div>
  ))
  .add('Required', () => (
    <div style={{ width: 300, padding: 20 }}>
      <Textarea label="Required" placeholder="Required" required />
    </div>
  ))
  .add('Disabled', () => (
    <div style={{ width: 300, padding: 20 }}>
      <Textarea disabled label="Disabled" placeholder="Disabled" required />
    </div>
  ))
  .add('Error', () => (
    <div style={{ width: 300, padding: 20 }}>
      <Textarea label="With error" placeholder="With error" error="text too short" />
    </div>
  ))
  .add('Custom radius', () => (
    <div style={{ width: 300, padding: 20 }}>
      <Textarea label="Radius" placeholder="Radius" radius="lg" />
    </div>
  ))
  .add('Autofocus', () => (
    <div style={{ width: 300, padding: 20 }}>
      <Textarea label="Autofocus" placeholder="Autofocus" autoFocus />
    </div>
  ));
