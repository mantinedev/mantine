import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import { Textarea, TextareaProps } from './Textarea';

function Controlled(props: Partial<TextareaProps>) {
  const [value, onChange] = useState('');
  return (
    <Textarea value={value} onChange={(event) => onChange(event.currentTarget.value)} {...props} />
  );
}

storiesOf('Textarea', module)
  .add('Controlled', () => (
    <div style={{ width: 300, padding: 20 }}>
      <Controlled label="text" placeholder="text" />
    </div>
  ))
  .add('Autosize', () => (
    <div style={{ width: 300, padding: 20 }}>
      <Textarea label="text" placeholder="text" autosize minRows={3} maxRows={10} />
    </div>
  ));
