import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import 'dayjs/locale/ru';
import { DEFAULT_THEME, MANTINE_SIZES } from '@mantine/core';
import dayjs from 'dayjs';
import { Month } from './Month';

function WrappedMonth(
  props: Omit<React.ComponentPropsWithoutRef<typeof Month>, 'selected' | 'onDayClick' | 'month'>
) {
  const [value, onChange] = useState(new Date());
  return <Month month={value} value={value} onChange={onChange} {...props} />;
}

const sizes = MANTINE_SIZES.map((size) => (
  <WrappedMonth size={size} key={size} style={{ marginTop: 30 }} />
));

storiesOf('@mantine/dates/Month/stories', module)
  .add('First day of the week - Sunday', () => (
    <div style={{ maxWidth: 240, padding: 40 }}>
      <Month
        month={new Date()}
        firstDayOfWeek="sunday"
        range={[
          dayjs(new Date()).subtract(7, 'days').toDate(),
          dayjs(new Date()).add(2, 'days').toDate(),
        ]}
      />
    </div>
  ))
  .add('With range', () => (
    <div style={{ maxWidth: 240, padding: 40 }}>
      <Month
        month={new Date()}
        range={[
          dayjs(new Date()).subtract(7, 'days').toDate(),
          dayjs(new Date()).add(2, 'days').toDate(),
        ]}
      />
    </div>
  ))
  .add('Sizes', () => <div style={{ maxWidth: 440, padding: 40 }}>{sizes}</div>)
  .add('Day style', () => (
    <WrappedMonth
      locale="ru"
      dayStyle={(date) =>
        date.getDate() === new Date().getDate()
          ? { backgroundColor: DEFAULT_THEME.colors.red[0] }
          : {}
      }
    />
  ));
