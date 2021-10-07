/* eslint-disable no-console */
import React from 'react';
import { Group, Text, useMantineTheme, MantineTheme } from '@mantine/core';
import { ImageIcon } from '@modulz/radix-icons';
import { Dropzone, DropzoneStatus } from '../Dropzone';
import { IMAGE_MIME_TYPE } from '../../mime-types';

const code = `
import { Group, Text, useMantineTheme, MantineTheme } from '@mantine/core';
import { Dropzone, IMAGE_MIME_TYPE } from '@mantine/dropzone';
import { ImageIcon } from '@modulz/radix-icons';

function getIconColor(status, theme) {
  return status.accepted
    ? theme.colors[theme.primaryColor][6]
    : status.rejected
    ? theme.colors.red[6]
    : theme.colorScheme === 'dark'
    ? theme.colors.dark[0]
    : theme.black;
}

function Demo() {
  const theme = useMantineTheme();

  return (
    <Dropzone onDrop={console.log} maxSize={3 * 1024 ** 2} accept={IMAGE_MIME_TYPE}>
      {(status) => (
        <Group position="center" spacing="xl" style={{ minHeight: 220, pointerEvents: 'none' }}>
          <ImageIcon style={{ width: 60, height: 60, color: getIconColor(status, theme) }} />

          <div>
            <Text size="xl">Drag images here or click to select files</Text>
            <Text size="sm" color="dimmed">
              Attach as many files as you like, each file should not exceed 5mb
            </Text>
          </div>
        </Group>
      )}
    </Dropzone>
  );
}
`;

function getIconColor(status: DropzoneStatus, theme: MantineTheme) {
  return status.accepted
    ? theme.colors[theme.primaryColor][6]
    : status.rejected
    ? theme.colors.red[6]
    : theme.colorScheme === 'dark'
    ? theme.colors.dark[0]
    : theme.black;
}

function Demo() {
  const theme = useMantineTheme();

  return (
    <Dropzone onDrop={console.log} maxSize={3 * 1024 ** 2} accept={IMAGE_MIME_TYPE}>
      {(status) => (
        <Group position="center" spacing="xl" style={{ minHeight: 220, pointerEvents: 'none' }}>
          <ImageIcon style={{ width: 60, height: 60, color: getIconColor(status, theme) }} />

          <div>
            <Text size="xl">Drag images here or click to select files</Text>
            <Text size="sm" color="dimmed">
              Attach as many files as you like, each file should not exceed 5mb
            </Text>
          </div>
        </Group>
      )}
    </Dropzone>
  );
}

export const usage: MantineDemo = {
  type: 'demo',
  component: Demo,
  code,
};
