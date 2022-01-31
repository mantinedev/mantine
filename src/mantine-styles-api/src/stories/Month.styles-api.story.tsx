import React from 'react';
import { storiesOf } from '@storybook/react';
import { createStyles, MantineProvider } from '@mantine/core';
import { generateBorderStyles } from '@mantine/storybook';
import { Month, MonthProps } from '@mantine/dates';
import { Month as MonthStylesApi } from '../styles-api';

const styles = generateBorderStyles(MonthStylesApi);
const useStyles = createStyles(() => styles);

function Wrapper(props: Partial<MonthProps>) {
  return <Month month={new Date()} {...props} mx="auto" mt="xl" />;
}

function WithClassNames() {
  return <Wrapper classNames={useStyles().classes} />;
}

storiesOf('@mantine/dates/Month/styles-api', module)
  .add('With sx', () => <Wrapper sx={{ border: '1px solid red', backgroundColor: 'blue' }} />)
  .add('With styles as object', () => <Wrapper styles={styles} />)
  .add('With styles as function', () => <Wrapper styles={() => styles} />)
  .add('With styles as classNames', () => <WithClassNames />)
  .add('Styles API on MantineProvider', () => (
    <MantineProvider styles={{ Month: () => styles }}>
      <Wrapper />
    </MantineProvider>
  ));
