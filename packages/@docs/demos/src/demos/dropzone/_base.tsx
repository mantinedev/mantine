/* eslint-disable no-console */
import React from 'react';
import { Group, Text, rem } from '@mantine/core';
import { IconUpload, IconPhoto, IconX } from '@tabler/icons-react';
import { Dropzone, DropzoneProps, IMAGE_MIME_TYPE } from '@mantine/dropzone';

export function DropzoneDemoChildren() {
  return (
    <Group justify="center" gap="xl" mih={220} style={{ pointerEvents: 'none' }}>
      <Dropzone.Accept>
        <IconUpload
          style={{ width: rem(52), height: rem(52), color: 'var(--mantine-color-blue-6)' }}
          stroke={1.5}
        />
      </Dropzone.Accept>
      <Dropzone.Reject>
        <IconX
          style={{ width: rem(52), height: rem(52), color: 'var(--mantine-color-red-6)' }}
          stroke={1.5}
        />
      </Dropzone.Reject>
      <Dropzone.Idle>
        <IconPhoto
          style={{ width: rem(52), height: rem(52), color: 'var(--mantine-color-dimmed)' }}
          stroke={1.5}
        />
      </Dropzone.Idle>

      <div>
        <Text size="xl" inline>
          Drag images here or click to select files
        </Text>
        <Text size="sm" c="dimmed" inline mt={7}>
          Attach as many files as you like, each file should not exceed 5mb
        </Text>
      </div>
    </Group>
  );
}

export function BaseDemo(props: Partial<DropzoneProps>) {
  return (
    <Dropzone
      onDrop={(files) => console.log('accepted files', files)}
      onReject={(files) => console.log('rejected files', files)}
      maxSize={3 * 1024 ** 2}
      accept={IMAGE_MIME_TYPE}
      {...props}
    >
      <DropzoneDemoChildren />
    </Dropzone>
  );
}
