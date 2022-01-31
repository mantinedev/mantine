import { BaseDemo } from './_base';

const code = `
import { Group, Text, useMantineTheme } from '@mantine/core';
import { ImageIcon, UploadIcon, CrossCircledIcon } from '@modulz/radix-icons';

function ImageUploadIcon({ status, ...props }) {
  if (status.accepted) {
    return <UploadIcon {...props} />;
  }

  if (status.rejected) {
    return <CrossCircledIcon {...props} />;
  }

  return <ImageIcon {...props} />;
}

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
    // See results in console after dropping files to Dropzone
    <Dropzone
      onDrop={(files) => console.log('accepted files', files)}
      onReject={(files) => console.log('rejected files', files)}
      maxSize={3 * 1024 ** 2}
      accept={IMAGE_MIME_TYPE}
    >
      {(status) => (
        <Group position="center" spacing="xl" style={{ minHeight: 220, pointerEvents: 'none' }}>
          <ImageUploadIcon
            status={status}
            style={{ width: 80, height: 80, color: getIconColor(status, theme) }}
          />

          <div>
            <Text size="xl" inline>
              Drag images here or click to select files
            </Text>
            <Text size="sm" color="dimmed" inline mt={7}>
              Attach as many files as you like, each file should not exceed 5mb
            </Text>
          </div>
        </Group>
      )}
    </Dropzone>
  );
}
`;

export const usage: MantineDemo = {
  type: 'demo',
  component: BaseDemo,
  code,
};
