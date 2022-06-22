/* eslint-disable no-console */
import React from 'react';
import { Dropzone } from './Dropzone';

export default { title: 'Dropzone' };

export function Usage() {
  return (
    <div style={{ padding: 40 }}>
      <Dropzone onDrop={console.log} accept={['image/jpeg', 'image/png']}>
        <div>Drag and drop files</div>
      </Dropzone>
    </div>
  );
}

export function Statues() {
  return (
    <div style={{ padding: 40 }}>
      <Dropzone onDrop={console.log} accept={['image/jpeg', 'image/png']}>
        <Dropzone.Accept>
          <div>Accept file</div>
        </Dropzone.Accept>
        <Dropzone.Reject>
          <div>Rejected files</div>
        </Dropzone.Reject>
        <Dropzone.Idle>
          <div>Idling</div>
        </Dropzone.Idle>
      </Dropzone>
    </div>
  );
}
