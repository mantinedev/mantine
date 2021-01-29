import React from 'react';
import { storiesOf } from '@storybook/react';
import Anchor from './Anchor';

storiesOf('@mantine/core/Anchor', module).add('General usage', () => (
  <Anchor href="https://google.com" target="_blank">
    Google link
  </Anchor>
));
