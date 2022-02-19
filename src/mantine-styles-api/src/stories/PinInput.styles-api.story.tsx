import React from 'react';
import { storiesOf } from '@storybook/react';
import { createStyles, MantineProvider } from '@mantine/core';
import { PinInput, PinInputProps } from '@mantine/labs';
import { generateBorderStyles, InputStylesApiWrapper } from '@mantine/storybook';
import { PinInput as PinInputStylesApi } from '../styles-api';

const styles = generateBorderStyles(PinInputStylesApi);
const useStyles = createStyles(() => styles);

function Wrapper(props: Partial<PinInputProps>) {
  return (
    <InputStylesApiWrapper component={PinInput} data={['React', 'Angular', 'Vue']} {...props} />
  );
}

function WithClassNames() {
  return <Wrapper classNames={useStyles().classes} />;
}

storiesOf('@mantine/core/PinInput/styles-api', module)
  .add('With sx', () => (
    <Wrapper sx={{ border: '1px solid red', maxWidth: 400 }} mx="auto" mt="xl" />
  ))
  .add('Root styles object', () => <Wrapper styles={{ wrapper: { border: '1px solid blue' } }} />)
  .add('Root styles function', () => (
    <Wrapper styles={() => ({ wrapper: { border: '1px solid blue' } })} />
  ))
  .add('With styles as object', () => <Wrapper styles={styles} />)
  .add('With styles as function', () => <Wrapper styles={() => styles} />)
  .add('With styles as classNames', () => <WithClassNames />)
  .add('Styles API on MantineProvider', () => (
    <MantineProvider styles={{ PinInput: () => styles }}>
      <Wrapper />
    </MantineProvider>
  ));
