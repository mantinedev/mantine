import React from 'react';
import { storiesOf } from '@storybook/react';
import { MantineProvider } from '@mantine/theme';
import { Loader } from './Loader';

storiesOf('@mantine/core', module).add('Loader', () => (
  <MantineProvider>
    <Loader color="orange" style={{ marginTop: 20 }} />
  </MantineProvider>
));
