import React from 'react';
import { storiesOf } from '@storybook/react';
import { TimeInput } from './TimeInput';

storiesOf('@mantine/dates/TimeInput', module).add('General usage', () => (
  <div style={{ width: 320, padding: 40 }}>
    <TimeInput label="Time input" required />
  </div>
));
