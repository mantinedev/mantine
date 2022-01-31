import React from 'react';
import { storiesOf } from '@storybook/react';
import { createStyles, MantineProvider, RadioGroup, RadioGroupProps, Radio } from '@mantine/core';
import { generateBorderStyles } from '@mantine/storybook';
import { RadioGroup as RadioGroupStylesApi } from '../styles-api';

const styles = generateBorderStyles(RadioGroupStylesApi);
const useStyles = createStyles(() => styles);

function Wrapper(props: Partial<RadioGroupProps>) {
  return (
    <RadioGroup
      {...props}
      style={{ maxWidth: 500 }}
      mx="auto"
      mt="xl"
      label="Label"
      error="Error"
      description="Description"
    >
      <Radio value="1">Item 1</Radio>
      <Radio value="2">Item 2</Radio>
      <Radio value="3">Item 3</Radio>
    </RadioGroup>
  );
}

function WithClassNames() {
  return <Wrapper classNames={useStyles().classes} />;
}

storiesOf('@mantine/core/RadioGroup/styles-api', module)
  .add('With sx', () => <Wrapper sx={{ border: '1px solid red', backgroundColor: 'blue' }} />)
  .add('With styles as object', () => <Wrapper styles={styles} />)
  .add('With styles as function', () => <Wrapper styles={() => styles} />)
  .add('With styles as classNames', () => <WithClassNames />)
  .add('Styles API on MantineProvider', () => (
    <MantineProvider styles={{ RadioGroup: () => styles }}>
      <Wrapper />
    </MantineProvider>
  ));
