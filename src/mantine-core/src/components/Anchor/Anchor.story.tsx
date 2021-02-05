import React from 'react';
import { storiesOf } from '@storybook/react';
import Anchor from './Anchor';

storiesOf('@mantine/core', module).add('Anchor', () => (
  <Anchor href="https://google.com" target="_blank">
    Google link
  </Anchor>
));
