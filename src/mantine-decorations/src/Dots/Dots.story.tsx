import React from 'react';
import { storiesOf } from '@storybook/react';
import { Dots } from './Dots';

storiesOf('@mantine/decorations/Dots', module).add('General usage', () => (
  <div style={{ padding: 40 }}>
    <Dots color="silver" size={400} radius={0} />
  </div>
));
