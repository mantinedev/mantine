import React from 'react';
import { storiesOf } from '@storybook/react';
import { InputWrapper } from './InputWrapper';
import { Text } from '../Text/Text';

const lorem =
  'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet consequatur vitae commodi ipsa ipsam vel voluptatem eligendi placeat. Deleniti nulla atque officiis mollitia quasi numquam explicabo animi earum quas labore.';

storiesOf('@mantine/core/InputWrapper', module)
  .add('All parts', () => (
    <div style={{ padding: 15, maxWidth: 400 }}>
      <InputWrapper
        label="Input label"
        required
        error="Validation error"
        id="input-wrapper-1"
        description="Provide additional information about input here, can be multiline. Dimmed and smaller compared to label."
      >
        <Text>Input is located here</Text>
      </InputWrapper>
    </div>
  ))
  .add('Label only', () => (
    <div style={{ padding: 15, maxWidth: 400 }}>
      <InputWrapper label="Input label" required id="input-wrapper-1">
        <Text>Input is located here</Text>
      </InputWrapper>
    </div>
  ))
  .add('Error overflow', () => (
    <div style={{ padding: 15, maxWidth: 300, backgroundColor: '#f3f3f3' }}>
      <InputWrapper label="Input label" required id="input-wrapper-1" error={lorem}>
        <Text>Input is located here</Text>
      </InputWrapper>
      <InputWrapper
        label="Input label"
        required
        id="input-wrapper-1"
        error={lorem.replace(/\s/g, '')}
      >
        <Text>Input is located here</Text>
      </InputWrapper>
    </div>
  ))

  .add('Label overflow', () => (
    <div style={{ padding: 15, maxWidth: 300, backgroundColor: '#f3f3f3' }}>
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
