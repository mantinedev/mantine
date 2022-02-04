import React from 'react';
import { storiesOf } from '@storybook/react';
import { MANTINE_SIZES } from '@mantine/styles';
import { InputWrapper } from './InputWrapper';
import { Text } from '../Text/Text';

const sizes = MANTINE_SIZES.map((size) => (
  <InputWrapper
    size={size}
    key={size}
    label={`${size} Input label`}
    required
    error="Validation error"
    id="input-wrapper-1"
    description="Provide additional information about input here, can be multiline. Dimmed and smaller compared to label."
    style={{ marginTop: 30 }}
  >
    <Text>Input is located here</Text>
  </InputWrapper>
));

storiesOf('@mantine/core/InputWrapper/stories', module)
  .add('Sizes', () => <div style={{ padding: 15, maxWidth: 400 }}>{sizes}</div>)
  .add('Error overflow', () => (
    <div style={{ padding: 15, maxWidth: 300, backgroundColor: 'rgba(0, 0, 0, .1)' }}>
      <InputWrapper
        label="Input label"
        required
        id="input-wrapper-1"
        error="Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci magni earum sequi praesentium dolores illum cum, eum iusto doloribus suscipit assumenda numquam expedita repellendus id, neque accusamus nemo autem facere."
      >
        <Text>Input is located here</Text>
      </InputWrapper>
    </div>
  ))

  .add('Label overflow', () => (
    <div style={{ padding: 15, maxWidth: 300, backgroundColor: 'rgba(0, 0, 0, .1)' }}>
      <InputWrapper
        label="This input has so large label that it should get to the next line"
        required
        id="input-wrapper-1"
      >
        <Text>Input is located here</Text>
      </InputWrapper>

      <InputWrapper
        label="ThisInputHasLabelThatIsSoLargeThatItWillOverflowAndBreakLayout"
        required
        id="input-wrapper-1"
      >
        <Text>Input is located here</Text>
      </InputWrapper>
    </div>
  ));
