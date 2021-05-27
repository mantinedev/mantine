import React from 'react';
import { storiesOf } from '@storybook/react';
import { DEFAULT_THEME } from '@mantine/core';
import { AuthenticationForm } from './AuthenticationForm';

storiesOf('@mantine/demos/AuthenticationForm', module).add('General usage', () => (
  <div
    style={{
      backgroundColor: DEFAULT_THEME.colors.gray[0],
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100vh',
    }}
  >
    <div style={{ width: 440 }}>
      <AuthenticationForm />
    </div>
  </div>
));
