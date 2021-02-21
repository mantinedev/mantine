import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import { MantineProvider } from '@mantine/theme';
import { Month } from './Month';

function WrappedMonth(
  props: Omit<React.ComponentPropsWithoutRef<typeof Month>, 'selected' | 'onDayClick' | 'month'>
) {
  const [value, onChange] = useState(new Date());
  return <Month month={value} selected={value} onDayClick={onChange} {...props} />;
}

storiesOf('@mantine/core', module).add('Month', () => (
  <MantineProvider>
    <WrappedMonth disableOutsideEvents autoFocus />
  </MantineProvider>
));
