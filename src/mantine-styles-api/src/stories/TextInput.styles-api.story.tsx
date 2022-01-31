import React from 'react';
import { storiesOf } from '@storybook/react';
import { createStyles, MantineProvider, TextInput, TextInputProps } from '@mantine/core';
import { generateBorderStyles, InputStylesApiWrapper } from '@mantine/storybook';
import { TextInput as TextInputStylesApi } from '../styles-api';

const styles = generateBorderStyles(TextInputStylesApi);
const useStyles = createStyles(() => styles);

function Wrapper(props: Partial<TextInputProps>) {
  return <InputStylesApiWrapper component={TextInput} {...props} />;
}

function WithClassNames() {
  return <Wrapper classNames={useStyles().classes} />;
}

storiesOf('@mantine/core/TextInput/styles-api', module)
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
    <MantineProvider styles={{ TextInput: () => styles }}>
      <Wrapper />
    </MantineProvider>
  ));
