import React from 'react';
import { storiesOf } from '@storybook/react';
import { Affix } from '@mantine/core';

storiesOf('@mantine/core/Affix/styles-api', module).add('With sx', () => (
  <Affix sx={{ border: '1px solid red', padding: '10px 20px' }} position={{ bottom: 20, left: 20 }}>
    Affix
  </Affix>
));
