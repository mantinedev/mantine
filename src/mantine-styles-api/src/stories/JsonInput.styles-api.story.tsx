import React from 'react';
import { storiesOf } from '@storybook/react';
import { createStyles, MantineProvider, JsonInput, JsonInputProps } from '@mantine/core';
import { generateBorderStyles, InputStylesApiWrapper } from '@mantine/storybook';
import { JsonInput as JsonInputStylesApi } from '../styles-api';

const styles = generateBorderStyles(JsonInputStylesApi);
const useStyles = createStyles(() => styles);

function Wrapper(props: Partial<JsonInputProps>) {
  return <InputStylesApiWrapper component={JsonInput} {...props} />;
}

function WithClassNames() {
  return <Wrapper classNames={useStyles().classes} />;
}

storiesOf('@mantine/core/JsonInput/styles-api', module)
  .add('With sx', () => (
    <Wrapper sx={{ border: '1px solid red', maxWidth: 400 }} mx="auto" mt="xl" />
  ))
  .add('Root styles object', () => <Wrapper styles={{ root: { border: '1px solid blue' } }} />)
  .add('Root styles function', () => (
    <Wrapper styles={() => ({ root: { border: '1px solid blue' } })} />
  ))
  .add('With styles as object', () => <Wrapper styles={styles} />)
  .add('With styles as function', () => <Wrapper styles={() => styles} />)
  .add('With styles as classNames', () => <WithClassNames />)
  .add('Styles API on MantineProvider', () => (
    <MantineProvider styles={{ JsonInput: () => styles }}>
      <Wrapper />
    </MantineProvider>
  ));
