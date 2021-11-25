import React from 'react';
import { storiesOf } from '@storybook/react';
import { Affix } from '../Affix';

storiesOf('@mantine/core/Affix/styles-api', module).add('With sx', () => (
  <Affix sx={{ backgroundColor: 'red', padding: '10px 20px' }} position={{ top: 20, left: 20 }}>
    Affix
  </Affix>
));
