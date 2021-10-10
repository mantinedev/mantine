/* eslint-disable no-console */
import React, { useRef } from 'react';
import { storiesOf } from '@storybook/react';
import { Button } from '@mantine/core';
import { Dropzone, DropzoneStatus } from './Dropzone';
import { IMAGE_MIME_TYPE } from '../mime-types';

const children = (status: DropzoneStatus) =>
  status.accepted ? <div>Drop files here</div> : <div>Drag and drop files here</div>;

function ManualTrigger() {
  const openRef = useRef<() => void>(() => {});

  return (
    <div style={{ padding: 40 }}>
      <Dropzone onDrop={() => {}} openRef={openRef}>
        {children}
      </Dropzone>
      <Button onClick={() => openRef.current()}>Browse files</Button>
    </div>
  );
}

storiesOf('@mantine/dropzone/Dropzone', module)
  .add('General usage', () => (
    <div style={{ padding: 40 }}>
      <Dropzone onDrop={() => {}}>{children}</Dropzone>
    </div>
  ))
  .add('Manual open trigger', () => <ManualTrigger />)
  .add('Accept only images', () => (
    <div style={{ padding: 40 }}>
      <Dropzone onDrop={console.log} accept={IMAGE_MIME_TYPE}>
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
