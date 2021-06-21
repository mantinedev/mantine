import React from 'react';
import { storiesOf } from '@storybook/react';
import { Calendar } from './Calendar';

storiesOf('@mantine/dates/Calendar', module)
  .add('General usage', () => (
    <div style={{ padding: 40, width: 400 }}>
      <Calendar value={new Date()} />
    </div>
  ))
  .add('With select', () => (
    <div style={{ padding: 40, width: 400 }}>
      <Calendar withSelect disableOutsideEvents />
    </div>
  ));
