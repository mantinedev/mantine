import React from 'react';
import { storiesOf } from '@storybook/react';
import { CalendarBase } from './CalendarBase';

storiesOf('@mantine/dates/CalendarBase', module).add('General usage', () => (
  <div style={{ padding: 40 }}>
    <CalendarBase />
  </div>
));
