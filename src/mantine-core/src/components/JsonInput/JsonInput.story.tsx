import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import { JsonInput } from './JsonInput';

function Controlled() {
  const [value, onChange] = useState('');
  return (
    <JsonInput value={value} onChange={onChange} label="Controlled" placeholder="Controlled" />
  );
}

storiesOf('@mantine/core/JsonInput', module)
  .add('General usage', () => (
    <div style={{ padding: 40, maxWidth: 400 }}>
      <JsonInput formatOnBlur autosize validationError="Invalid JSON" />
    </div>
  ))
  .add('Controlled', () => (
    <div style={{ padding: 40, maxWidth: 400 }}>
      <Controlled />
    </div>
  ));
