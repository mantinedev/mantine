import React from 'react';
import { storiesOf } from '@storybook/react';
import Month from './Month';

storiesOf('@mantine/core', module).add('Month', () => (
  <Month month={new Date(2020, 2)} selected={new Date()} disableOutsideEvents autoFocus />
));
