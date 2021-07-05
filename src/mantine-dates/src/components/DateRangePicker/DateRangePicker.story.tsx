import React from 'react';
import { storiesOf } from '@storybook/react';
import { DateRangePicker } from './DateRangePicker';

storiesOf('@mantine/dates/DateRangePicker', module).add('General usage', () => (
  <div style={{ padding: 40 }}>
    <DateRangePicker placeholder="Dates range" dropdownType="modal" />
  </div>
));
