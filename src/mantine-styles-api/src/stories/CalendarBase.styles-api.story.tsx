import React from 'react';
import { storiesOf } from '@storybook/react';
import { createStyles, MantineProvider } from '@mantine/core';
import { generateBorderStyles } from '@mantine/storybook';
import { CalendarBase, CalendarBaseProps } from '@mantine/dates';
import { CalendarBase as CalendarBaseStylesApi } from '../styles-api';

const styles = generateBorderStyles(CalendarBaseStylesApi);
const useStyles = createStyles(() => styles);

function Wrapper(props: Partial<CalendarBaseProps>) {
  return <CalendarBase {...props} mx="auto" mt="xl" />;
}

function WithClassNames() {
  return <Wrapper classNames={useStyles().classes} />;
}

storiesOf('@mantine/dates/CalendarBase/styles-api', module)
  .add('With sx', () => <Wrapper sx={{ border: '1px solid red', backgroundColor: 'blue' }} />)
  .add('Initial level: month', () => <Wrapper initialLevel="month" styles={styles} />)
  .add('Initial level: year', () => <Wrapper initialLevel="year" styles={styles} />)
  .add('With styles as object', () => <Wrapper styles={styles} />)
  .add('With styles as function', () => <Wrapper styles={() => styles} />)
  .add('With styles as classNames', () => <WithClassNames />)
  .add('Styles API on MantineProvider', () => (
    <MantineProvider styles={{ CalendarBase: () => styles }}>
      <Wrapper />
    </MantineProvider>
  ));
