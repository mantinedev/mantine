import React from 'react';
import { storiesOf } from '@storybook/react';
import { MantineProvider } from '@mantine/theme';
import InputWrapper from './InputWrapper';
import Text from '../Text/Text';

storiesOf('@mantine/core', module).add('InputWrapper', () => (
  <MantineProvider>
    <InputWrapper
      label="Input label"
      required
      error="Validation error"
      id="input-wrapper-1"
      description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis totam harum, a, cumque sed quia asperiores amet libero error atque mollitia sit obcaecati repudiandae? Neque molestiae ipsum rem excepturi corporis."
    >
      <Text>Input is located here</Text>
    </InputWrapper>
  </MantineProvider>
));
