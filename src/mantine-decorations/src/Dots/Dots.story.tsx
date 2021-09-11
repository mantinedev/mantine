import React from 'react';
import { storiesOf } from '@storybook/react';
import { Dots } from './Dots';

storiesOf('@mantine/decorations/Dots', module).add('General usage', () => (
  <div style={{ padding: 40 }}>
    <Dots color="silver" size={100} radius={10} />
  </div>
));
