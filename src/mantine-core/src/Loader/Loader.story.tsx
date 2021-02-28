import React from 'react';
import { storiesOf } from '@storybook/react';
import { Loader } from './Loader';

storiesOf('@mantine/core', module).add('Loader', () => (
  <>
    <Loader color="orange" style={{ marginTop: 20 }} />
    <Loader size={50} color="orange" style={{ marginTop: 20, display: 'block' }} />
  </>
));
