import React from 'react';
import { storiesOf } from '@storybook/react';
import { MantineProvider } from '@mantine/theme';
import Month from './Month';

storiesOf('@mantine/core', module).add('Month', () => (
  <MantineProvider>
    <Month
      month={new Date(2020, 2)}
      selected={new Date(2020, 2, 5)}
      disableOutsideEvents
      autoFocus
    />
  </MantineProvider>
));
