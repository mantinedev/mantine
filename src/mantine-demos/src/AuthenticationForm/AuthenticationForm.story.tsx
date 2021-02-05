import React from 'react';
import { storiesOf } from '@storybook/react';
import { MantineProvider } from '@mantine/core';
import AuthenticationForm from './AuthenticationForm';

storiesOf('@mantine/demos', module).add('AuthenticationForm', () => (
  <MantineProvider>
    <AuthenticationForm />
  </MantineProvider>
));
