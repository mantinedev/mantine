import React from 'react';
import { storiesOf } from '@storybook/react';
import { createStyles, MantineProvider, NativeSelect, NativeSelectProps } from '@mantine/core';
import { generateBorderStyles, InputStylesApiWrapper } from '@mantine/storybook';
import { NativeSelect as NativeSelectStylesApi } from '../styles-api';

const styles = generateBorderStyles(NativeSelectStylesApi);
const useStyles = createStyles(() => styles);

function Wrapper(props: Partial<NativeSelectProps>) {
  return (
    <InputStylesApiWrapper
      component={NativeSelect}
      value={['React', 'Angular']}
      data={['React', 'Angular', 'Vue', 'Svelte']}
      rightSection={null}
      {...props}
    />
  );
}

function WithClassNames() {
  return <Wrapper classNames={useStyles().classes} />;
}

storiesOf('@mantine/core/NativeSelect/styles-api', module)
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
    <MantineProvider styles={{ NativeSelect: () => styles }}>
      <Wrapper />
    </MantineProvider>
  ));
