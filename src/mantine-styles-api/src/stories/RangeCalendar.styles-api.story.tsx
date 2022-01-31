import React, { useState } from 'react';
import dayjs from 'dayjs';
import { storiesOf } from '@storybook/react';
import { createStyles, MantineProvider } from '@mantine/core';
import { generateBorderStyles } from '@mantine/storybook';
import { RangeCalendar, RangeCalendarProps } from '@mantine/dates';
import { RangeCalendar as RangeCalendarStylesApi } from '../styles-api';

const styles = generateBorderStyles(RangeCalendarStylesApi);
const useStyles = createStyles(() => styles);

function Wrapper(props: Partial<RangeCalendarProps>) {
  const [value, setValue] = useState<[Date, Date]>([
    new Date(),
    dayjs(new Date()).add(5, 'days').toDate(),
  ]);
  return <RangeCalendar {...props} mx="auto" mt="xl" value={value} onChange={setValue} />;
}

function WithClassNames() {
  return <Wrapper classNames={useStyles().classes} />;
}

storiesOf('@mantine/dates/RangeCalendar/styles-api', module)
  .add('With sx', () => <Wrapper sx={{ border: '1px solid red', backgroundColor: 'blue' }} />)
  .add('Initial level: month', () => <Wrapper initialLevel="month" styles={styles} />)
  .add('Initial level: year', () => <Wrapper initialLevel="year" styles={styles} />)
  .add('With styles as object', () => <Wrapper styles={styles} />)
  .add('With styles as function', () => <Wrapper styles={() => styles} />)
  .add('With styles as classNames', () => <WithClassNames />)
  .add('Styles API on MantineProvider', () => (
    <MantineProvider styles={{ RangeCalendar: () => styles }}>
      <Wrapper />
    </MantineProvider>
  ));
