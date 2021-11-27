import React from 'react';
import { storiesOf } from '@storybook/react';
import { MANTINE_SIZES } from '@mantine/styles';
import { paragraph } from '@mantine/mockdata';
import { InputWrapper } from '../InputWrapper';
import { Text } from '../../Text/Text';

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
      <InputWrapper label="Input label" required id="input-wrapper-1" error={paragraph}>
        <Text>Input is located here</Text>
      </InputWrapper>
      <InputWrapper
        label="Input label"
        required
        id="input-wrapper-1"
        error={paragraph.replace(/\s/g, '')}
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
