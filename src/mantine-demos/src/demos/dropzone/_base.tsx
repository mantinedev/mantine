/* eslint-disable no-console */
import React from 'react';
import { Group, Text, useMantineTheme } from '@mantine/core';
import { IconUpload, IconPhoto, IconX } from '@tabler/icons-react';
import { Dropzone, DropzoneProps, IMAGE_MIME_TYPE } from '@mantine/dropzone';

export function DropzoneDemoChildren() {
  const theme = useMantineTheme();

  return (
    <Group position="center" spacing="xl" mih={220} sx={{ pointerEvents: 'none' }}>
      <Dropzone.Accept>
        <IconUpload
          size="3.2rem"
          stroke={1.5}
          color={theme.colors[theme.primaryColor][theme.colorScheme === 'dark' ? 4 : 6]}
        />
      </Dropzone.Accept>
      <Dropzone.Reject>
        <IconX
          size="3.2rem"
          stroke={1.5}
          color={theme.colors.red[theme.colorScheme === 'dark' ? 4 : 6]}
        />
      </Dropzone.Reject>
      <Dropzone.Idle>
        <IconPhoto size="3.2rem" stroke={1.5} />
      </Dropzone.Idle>

      <div>
        <Text size="xl" inline>
          Drag images here or click to select files
        </Text>
        <Text size="sm" color="dimmed" inline mt={7}>
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
