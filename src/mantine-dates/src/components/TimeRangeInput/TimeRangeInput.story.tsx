/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import { MANTINE_SIZES } from '@mantine/core';
import { TimeRangeInput } from './TimeRangeInput';

const sizes = MANTINE_SIZES.map((size) => (
  <TimeRangeInput label={size} size={size} key={size} style={{ marginTop: 30 }} />
));

function Controlled() {
  const [value, setValue] = useState([new Date(), new Date()]);
  const onChange = (val) => {
    setValue(val);
  };
  return <TimeRangeInput value={[value[0], value[1]]} onChange={onChange} label="Controlled" withSeconds />;
}

storiesOf('@mantine/dates/TimeRangeInput', module)
  .add('General usage', () => (
    <TimeRangeInput
      label="Time Range input"
      disabled
      styles={{
      wrapper: {
        padding: '100px',
      },
    }}
    />
  ))
  .add('Controlled', () => (
    <div style={{ width: 320, padding: 40 }}>
      <Controlled />
    </div>
  ))
  .add('Sizes', () => <div style={{ width: 320, padding: 40 }}>{sizes}</div>);
