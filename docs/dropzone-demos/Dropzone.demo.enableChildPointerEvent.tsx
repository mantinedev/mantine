import React, { useRef } from 'react';
import { Button, Group } from '@mantine/core';
import { Dropzone } from '@mantine/dropzone';
import { MantineDemo } from '@mantine/ds';

const code = `
import { useRef } from 'react';
import { Button, Group } from '@mantine/core';
import { Dropzone } from '@mantine/dropzone';

function Demo() {
  const openRef = useRef<() => void>(null);

  return (
    <Dropzone
      openRef={openRef}
      onDrop={() => {}}
      activateOnClick={false}
      styles={{ inner: { pointerEvents: 'all' } }}
    >
      <Group justify="center">
        <Button onClick={() => openRef.current?.()}>Select files</Button>
      </Group>
    </Dropzone>
  );
}
`;

function Demo() {
  const openRef = useRef<() => void>(null);

  return (
    <Dropzone
      openRef={openRef}
      onDrop={() => {}}
      activateOnClick={false}
      styles={{ inner: { pointerEvents: 'all' } }}
    >
      <Group justify="center">
        <Button onClick={() => openRef.current?.()}>Select files</Button>
      </Group>
    </Dropzone>
  );
}

export const enableChildPointerEvent: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
};
