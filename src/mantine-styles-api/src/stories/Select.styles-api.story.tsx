import React from 'react';
import { storiesOf } from '@storybook/react';
import { createStyles, MantineProvider, Select, SelectProps } from '@mantine/core';
import { generateBorderStyles, InputStylesApiWrapper } from '@mantine/storybook';
import { Select as SelectStylesApi } from '../styles-api';

const styles = generateBorderStyles(SelectStylesApi);
const useStyles = createStyles(() => styles);

function Wrapper(props: Partial<SelectProps>) {
  return <InputStylesApiWrapper component={Select} data={['React', 'Angular', 'Vue']} {...props} />;
}

function WithClassNames() {
  return <Wrapper classNames={useStyles().classes} />;
}

storiesOf('@mantine/core/Select/styles-api', module)
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
    <MantineProvider styles={{ Select: () => styles }}>
      <Wrapper />
    </MantineProvider>
  ));
