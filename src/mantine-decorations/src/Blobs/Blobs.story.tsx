import React from 'react';
import { storiesOf } from '@storybook/react';
import { Blobs } from './Blobs';

storiesOf('@mantine/decorations/Blobs', module).add('General usage', () => (
  <div
    style={{
      backgroundImage: 'linear-gradient(90deg, #6741d9 0%, #22b8cf 100%)',
      height: 800,
      position: 'relative',
    }}
  >
    <Blobs />
  </div>
));
