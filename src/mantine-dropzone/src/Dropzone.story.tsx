/* eslint-disable no-console */
import React from 'react';
import { Dropzone } from './index';

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
        <Dropzone.Idle>Idling</Dropzone.Idle>
      </Dropzone>
    </div>
  );
}

const lorem =
  'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae esse eos error omnis eius nulla aperiam at inventore consequatur velit fuga sint pariatur, quisquam ut odit eligendi dolorum iste dolorem cupiditate? Facere tempora reprehenderit tenetur hic sapiente ullam non minus quod, maiores sed, veritatis repellat repudiandae recusandae corrupti alias aliquam?';

export function FullScreen() {
  return (
    <div style={{ padding: 40 }}>
      {Array(10)
        .fill(0)
        .map((_, index) => (
          <p key={index}>{lorem}</p>
        ))}
      <Dropzone.FullScreen onDrop={console.log} accept={['image/jpeg', 'image/png']}>
        <div>Drag and drop files</div>
      </Dropzone.FullScreen>
    </div>
  );
}
