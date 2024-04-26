/* eslint-disable no-console */
import { useRef } from 'react';
import { Button, Group } from '@mantine/core';
import { Dropzone } from './index';

export default { title: 'Dropzone' };

export function Usage() {
  return (
    <div style={{ padding: 40 }}>
      <Dropzone onDrop={console.log} accept={['image/jpeg', 'image/png']} role="button">
        <div>Drag and drop files</div>
      </Dropzone>
    </div>
  );
}

export function Loading() {
  return (
    <div style={{ padding: 40 }}>
      <Dropzone onDrop={console.log} accept={['image/jpeg', 'image/png']} loading>
        <div>Drag and drop files</div>
      </Dropzone>
    </div>
  );
}

export function NoClick() {
  return (
    <div style={{ padding: 40 }}>
      <Dropzone onDrop={console.log} accept={['image/jpeg', 'image/png']} activateOnClick={false}>
        <div>Drag and drop files</div>
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

export function EnableChildPointerEvent() {
  const openRef = useRef<() => void>(null);

  return (
    <Dropzone openRef={openRef} onDrop={() => {}} activateOnClick={false}>
      <Group justify="center" bg="red">
        <Button onClick={() => openRef.current?.()}>Select files</Button>
      </Group>
    </Dropzone>
  );
}
