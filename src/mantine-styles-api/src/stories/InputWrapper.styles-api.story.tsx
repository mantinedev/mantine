import React from 'react';
import { storiesOf } from '@storybook/react';
import { createStyles, MantineProvider, InputWrapper, InputWrapperProps } from '@mantine/core';
import { generateBorderStyles } from '@mantine/storybook';
import { InputWrapper as InputWrapperStylesApi } from '../styles-api';

const styles = generateBorderStyles(InputWrapperStylesApi);
const useStyles = createStyles(() => styles);

function Wrapper(props: Partial<InputWrapperProps>) {
  return (
    <InputWrapper
      {...props}
      style={{ maxWidth: 400 }}
      mt="xl"
      mx="auto"
      label="Label"
      error="Error"
      description="Description"
    >
      content
    </InputWrapper>
  );
}

function WithClassNames() {
  return <Wrapper classNames={useStyles().classes} />;
}

storiesOf('@mantine/core/InputWrapper/styles-api', module)
  .add('With sx', () => <Wrapper sx={{ border: '1px solid red', backgroundColor: 'blue' }} />)
  .add('With styles as object', () => <Wrapper styles={styles} />)
  .add('With styles as function', () => <Wrapper styles={() => styles} />)
  .add('With styles as classNames', () => <WithClassNames />)
  .add('Styles API on MantineProvider', () => (
    <MantineProvider styles={{ InputWrapper: () => styles }}>
      <Wrapper />
    </MantineProvider>
  ));
