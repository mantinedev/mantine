import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import 'dayjs/locale/ru';
import { Month } from './Month';

function WrappedMonth(
  props: Omit<React.ComponentPropsWithoutRef<typeof Month>, 'selected' | 'onDayClick' | 'month'>
) {
  const [value, onChange] = useState(new Date());
  return <Month month={value} selected={value} onDayClick={onChange} {...props} />;
}

storiesOf('@mantine/dates/Month', module).add('Month', () => (
  <>
    <WrappedMonth autoFocus locale="ru" />
  </>
));
