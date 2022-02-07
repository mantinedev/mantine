import React from 'react';
import { storiesOf } from '@storybook/react';
import { createStyles, MantineProvider, PasswordInput, PasswordInputProps } from '@mantine/core';
import { generateBorderStyles, InputStylesApiWrapper } from '@mantine/storybook';
import { PasswordInput as PasswordInputStylesApi } from '../styles-api';

const styles = generateBorderStyles(PasswordInputStylesApi);
const useStyles = createStyles(() => styles);

function Wrapper(props: Partial<PasswordInputProps>) {
  return <InputStylesApiWrapper component={PasswordInput} {...props} />;
}

function WithClassNames() {
  return <Wrapper classNames={useStyles().classes} />;
}

storiesOf('@mantine/core/PasswordInput/styles-api', module)
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
    <MantineProvider styles={{ PasswordInput: () => styles }}>
      <Wrapper />
    </MantineProvider>
  ));
