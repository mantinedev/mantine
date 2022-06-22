import React from 'react';
import { Dropzone } from './Dropzone';

export default { title: 'Dropzone' };

export function Usage() {
  return (
    <div style={{ padding: 40 }}>
      <Dropzone onDrop={console.log} accept={['image/jpeg']}>
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
