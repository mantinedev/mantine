import React from 'react';
import { storiesOf } from '@storybook/react';
import { createStyles, MantineProvider, Checkbox, CheckboxProps } from '@mantine/core';
import { generateBorderStyles } from '@mantine/storybook';
import { Checkbox as CheckboxStylesApi } from '../styles-api';

const styles = generateBorderStyles(CheckboxStylesApi);
const useStyles = createStyles(() => styles);

function Wrapper(props: Partial<CheckboxProps>) {
  return <Checkbox {...props} style={{ maxWidth: 500 }} mx="auto" mt="xl" label="Test checkbox" />;
}

function WithClassNames() {
  return <Wrapper classNames={useStyles().classes} />;
}

storiesOf('@mantine/core/Checkbox/styles-api', module)
  .add('With sx', () => <Wrapper sx={{ border: '1px solid red', backgroundColor: 'blue' }} />)
  .add('With styles as object', () => <Wrapper styles={styles} />)
  .add('With styles as function', () => <Wrapper styles={() => styles} />)
  .add('With styles as classNames', () => <WithClassNames />)
  .add('Styles API on MantineProvider', () => (
    <MantineProvider styles={{ Checkbox: () => styles }}>
      <Wrapper />
    </MantineProvider>
  ));
