import React from 'react';
import { storiesOf } from '@storybook/react';
import { Dropzone } from './Dropzone';

storiesOf('@mantine/dropzone/Dropzone', module).add('General usage', () => (
  <div style={{ padding: 40 }}>
    <Dropzone />
  </div>
));
