import React from 'react';
import { storiesOf } from '@storybook/react';
import { MANTINE_SIZES } from '@mantine/core';
import { TimeInput } from './TimeInput';

const sizes = MANTINE_SIZES.map((size) => (
  <TimeInput label={size} size={size} key={size} style={{ marginTop: 30 }} />
));

storiesOf('@mantine/dates/TimeInput', module)
  .add('General usage', () => (
    <div style={{ width: 320, padding: 40 }}>
      <TimeInput label="Time input" required />
    </div>
  ))
  .add('Sizes', () => <div style={{ width: 320, padding: 40 }}>{sizes}</div>);
