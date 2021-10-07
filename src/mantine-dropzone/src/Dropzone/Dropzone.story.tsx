import React from 'react';
import { storiesOf } from '@storybook/react';
import { Dropzone } from './Dropzone';

storiesOf('@mantine/dropzone/Dropzone', module).add('General usage', () => (
  <div style={{ padding: 40 }}>
    <Dropzone onDrop={console.log}>
      {(isDragging) =>
        isDragging ? <div>Drop files here</div> : <div>Drag and drop files here</div>
      }
    </Dropzone>
  </div>
));
