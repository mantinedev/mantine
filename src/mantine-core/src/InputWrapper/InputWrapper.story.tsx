import React from 'react';
import { storiesOf } from '@storybook/react';
import { MantineProvider } from '@mantine/theme';
import InputWrapper from './InputWrapper';
import Text from '../Text/Text';

storiesOf('@mantine/core', module).add('InputWrapper', () => (
  <MantineProvider>
    <InputWrapper label="Input label" required error="Validation error" id="input-wrapper-1">
      <Text>Input is located here</Text>
    </InputWrapper>
  </MantineProvider>
));
