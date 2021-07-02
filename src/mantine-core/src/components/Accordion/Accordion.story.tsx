import React from 'react';
import { storiesOf } from '@storybook/react';
import { Accordion } from './Accordion';

storiesOf('@mantine/core/Accordion', module).add('General usage', () => (
  <div style={{ padding: 40 }}>
    <Accordion />
  </div>
));
