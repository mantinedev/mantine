import React from 'react';
import { storiesOf } from '@storybook/react';
import MantineProvider from '../../MantineProvider/MantineProvider';
import Anchor from './Anchor';

storiesOf('@mantine/core', module).add('Anchor', () => (
  <MantineProvider>
    <Anchor href="https://google.com" target="_blank">
      Google link
    </Anchor>

    <Anchor href="https://google.com" target="_blank" semibold>
      Google link
    </Anchor>
  </MantineProvider>
));
