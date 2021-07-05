import React from 'react';
import { storiesOf } from '@storybook/react';
import { Affix } from './Affix';

storiesOf('@mantine/core/Affix', module).add('General usage', () => (
  <div style={{ padding: 40 }}>
    <Affix position={{ bottom: 20, right: 20 }}>Hello</Affix>
  </div>
));
