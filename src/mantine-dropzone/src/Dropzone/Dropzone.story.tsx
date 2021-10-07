import React from 'react';
import { storiesOf } from '@storybook/react';
import { Dropzone } from './Dropzone';

const children = (isDragging) =>
  isDragging ? <div>Drop files here</div> : <div>Drag and drop files here</div>;

storiesOf('@mantine/dropzone/Dropzone', module)
  .add('General usage', () => (
    <div style={{ padding: 40 }}>
      <Dropzone onDrop={() => {}}>{children}</Dropzone>
    </div>
  ))
  .add('Accept only images', () => (
    <div style={{ padding: 40 }}>
      <Dropzone onDrop={console.log} accept={['image/png', 'image/svg+xml']}>
        {children}
      </Dropzone>
    </div>
  ))
  .add('Loading', () => (
    <div style={{ padding: 40 }}>
      <Dropzone onDrop={() => {}} loading>
        {children}
      </Dropzone>
    </div>
  ));
