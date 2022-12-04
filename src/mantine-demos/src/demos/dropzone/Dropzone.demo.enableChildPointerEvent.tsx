import React, { useRef } from 'react';
import { Button } from '@mantine/core';
import { Dropzone } from '@mantine/dropzone';
import { MantineDemo } from '@mantine/ds';

const code = `
import { useRef } from 'react';
import { Button, Group } from '@mantine/core';
import { Dropzone } from '@mantine/dropzone';

function Demo() {
  const openRef = useRef<() => void>(null);

  return (
    <>
      <Dropzone
        openRef={openRef}
        activateOnClick={false}
        styles={{ inner: { pointerEvents: 'all' } }}
      >
        <Button onClick={() => openRef.current()}>Select files</Button>
      </Dropzone>
    </>
  );
}
`;

function Demo() {
  const openRef = useRef<() => void>(null);

  return (
    <>
      <Dropzone
        openRef={openRef}
        onDrop={() => {}}
        activateOnClick={false}
        styles={{ inner: { pointerEvents: 'all' } }}
      >
        <Button onClick={() => openRef.current()}>Select files</Button>
      </Dropzone>
    </>
  );
}

export const enableChildPointerEvent: MantineDemo = {
  type: 'demo',
  component: Demo,
  code,
};
