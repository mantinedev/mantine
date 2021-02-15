import React from 'react';
import { storiesOf } from '@storybook/react';
import { MantineProvider } from '@mantine/theme';
import Anchor from './Anchor';

storiesOf('@mantine/core', module).add('Anchor', () => (
  <MantineProvider>
    <Anchor href="https://google.com" target="_blank">
      Google link
    </Anchor>

    <Anchor href="https://google.com" target="_blank" weight={700}>
      Google link
    </Anchor>
  </MantineProvider>
));
