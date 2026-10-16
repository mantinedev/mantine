import { useEffect, useRef, useState } from 'react';
import { CloudArrowUpIcon, ImageIcon, UploadSimpleIcon, XIcon } from '@phosphor-icons/react';
import { Group, Text } from '@mantine/core';
import { Dropzone, FileWithPath, IMAGE_MIME_TYPE } from '@mantine/dropzone';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { useEffect, useRef, useState } from 'react';
import { CloudArrowUpIcon, ImageIcon, UploadSimpleIcon, XIcon } from '@phosphor-icons/react';
import { Group, Text } from '@mantine/core';
import { Dropzone, FileWithPath, IMAGE_MIME_TYPE } from '@mantine/dropzone';

function Demo() {
  const [progress, setProgress] = useState<number | undefined>(undefined);
  const interval = useRef<number>(undefined);

  useEffect(() => () => window.clearInterval(interval.current), []);

  const upload = (files: FileWithPath[]) => {
    if (files.length === 0) {
      return;
    }

    let uploaded = 0;
    setProgress(uploaded);

    interval.current = window.setInterval(() => {
      uploaded += 10;

      if (uploaded > 100) {
        window.clearInterval(interval.current);
        setProgress(undefined);
      } else {
        setProgress(uploaded);
      }
    }, 200);
  };

  return (
    <Dropzone
      accept={IMAGE_MIME_TYPE}
      onDrop={upload}
      progress={progress}
      progressProps={{ 'aria-label': 'Upload progress' }}
    >
      <Group justify="center" gap="xl" mih={220} style={{ pointerEvents: 'none' }}>
        <Dropzone.Accept>
          <UploadSimpleIcon size={52} color="var(--mantine-color-blue-6)" />
        </Dropzone.Accept>

        <Dropzone.Reject>
          <XIcon size={52} color="var(--mantine-color-red-6)" />
        </Dropzone.Reject>

        <Dropzone.Idle>
          <ImageIcon size={52} color="var(--mantine-color-dimmed)" />
        </Dropzone.Idle>

        <Dropzone.Uploading>
          <CloudArrowUpIcon size={52} color="var(--mantine-color-blue-6)" />
        </Dropzone.Uploading>

        <Text size="xl" inline>
          {progress === undefined
            ? 'Drag images here or click to select files'
            : \`Uploading… \${progress}%\`}
        </Text>
      </Group>
    </Dropzone>
  );
}
`;

function Demo() {
  const [progress, setProgress] = useState<number | undefined>(undefined);
  const interval = useRef<number>(undefined);

  useEffect(() => () => window.clearInterval(interval.current), []);

  const upload = (files: FileWithPath[]) => {
    if (files.length === 0) {
      return;
    }

    let uploaded = 0;
    setProgress(uploaded);

    interval.current = window.setInterval(() => {
      uploaded += 10;

      if (uploaded > 100) {
        window.clearInterval(interval.current);
        setProgress(undefined);
      } else {
        setProgress(uploaded);
      }
    }, 200);
  };

  return (
    <Dropzone
      accept={IMAGE_MIME_TYPE}
      onDrop={upload}
      progress={progress}
      progressProps={{ 'aria-label': 'Upload progress' }}
    >
      <Group justify="center" gap="xl" mih={220} style={{ pointerEvents: 'none' }}>
        <Dropzone.Accept>
          <UploadSimpleIcon size={52} color="var(--mantine-color-blue-6)" />
        </Dropzone.Accept>

        <Dropzone.Reject>
          <XIcon size={52} color="var(--mantine-color-red-6)" />
        </Dropzone.Reject>

        <Dropzone.Idle>
          <ImageIcon size={52} color="var(--mantine-color-dimmed)" />
        </Dropzone.Idle>

        <Dropzone.Uploading>
          <CloudArrowUpIcon size={52} color="var(--mantine-color-blue-6)" />
        </Dropzone.Uploading>

        <Text size="xl" inline>
          {progress === undefined
            ? 'Drag images here or click to select files'
            : `Uploading… ${progress}%`}
        </Text>
      </Group>
    </Dropzone>
  );
}

export const progress: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
};
