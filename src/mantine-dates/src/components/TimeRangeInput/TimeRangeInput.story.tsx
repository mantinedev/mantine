import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import { MANTINE_SIZES } from '@mantine/core';
import { TimeRangeInput } from './TimeRangeInput';

const sizes = MANTINE_SIZES.map((size) => (
  <TimeRangeInput label={size} size={size} key={size} style={{ marginTop: 30 }} />
));

function Controlled() {
  const [value, setValue] = useState([new Date(), new Date()]);
  return <TimeRangeInput value={[value[0], value[1]]} onChange={setValue} label="Controlled" withSeconds />;
}

storiesOf('@mantine/dates/TimeRangeInput', module)
  .add('General usage', () => (
    <div style={{ width: 320, padding: 40 }}>
      <TimeRangeInput label="Time Range input" disabled />
    </div>
  ))
  .add('Controlled', () => (
    <div style={{ width: 320, padding: 40 }}>
      <Controlled />
    </div>
  ))
  .add('Sizes', () => <div style={{ width: 320, padding: 40 }}>{sizes}</div>);
