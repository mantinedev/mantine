import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import { MANTINE_SIZES } from '@mantine/core';
import { TimeInput } from './TimeInput';

const sizes = MANTINE_SIZES.map((size) => (
  <TimeInput label={size} size={size} key={size} style={{ marginTop: 30 }} />
));

function Controlled() {
  const [value, onChange] = useState(new Date());
  return <TimeInput value={value} onChange={onChange} label="Controlled" />;
}

storiesOf('@mantine/dates/TimeInput', module)
  .add('General usage', () => (
    <div style={{ width: 320, padding: 40 }}>
      <TimeInput label="Time input" disabled />
    </div>
  ))
  .add('Controlled', () => (
    <div style={{ width: 320, padding: 40 }}>
      <Controlled />
    </div>
  ))
  .add('Sizes', () => <div style={{ width: 320, padding: 40 }}>{sizes}</div>);
