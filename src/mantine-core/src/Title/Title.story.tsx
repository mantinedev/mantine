import React from 'react';
import { storiesOf } from '@storybook/react';
import Title from './Title';

storiesOf('@mantine/core/Title', module).add('General usage', () => (
  <div>
    <Title order={1}>h1 title</Title>
    <Title order={2}>h2 title</Title>
    <Title order={3}>h3 title</Title>
    <Title order={4}>h4 title</Title>
    <Title order={5}>h5 title</Title>
    <Title order={6}>h6 title</Title>
  </div>
));
