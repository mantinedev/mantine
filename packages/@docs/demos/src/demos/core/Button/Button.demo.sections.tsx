import { ArrowRightIcon, DownloadSimpleIcon, ImageIcon } from '@phosphor-icons/react';
import { Button, Group } from '@mantine/core';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { Group, Button } from '@mantine/core';
import { ImageIcon, DownloadSimpleIcon, ArrowRightIcon } from '@phosphor-icons/react';

function Demo() {
  return (
    <Group justify="center">
      <Button leftSection={<ImageIcon size={14} />} variant="default">
        Gallery
      </Button>

      <Button rightSection={<DownloadSimpleIcon size={14} />}>Download</Button>

      <Button
        variant="light"
        leftSection={<ImageIcon size={14} />}
        rightSection={<ArrowRightIcon size={14} />}
      >
        Visit gallery
      </Button>
    </Group>
  );
}
`;

function Demo() {
  return (
    <Group justify="center">
      <Button leftSection={<ImageIcon size={14} />} variant="default">
        Gallery
      </Button>

      <Button rightSection={<DownloadSimpleIcon size={14} />}>Download</Button>
      <Button
        variant="light"
        leftSection={<ImageIcon size={14} />}
        rightSection={<ArrowRightIcon size={14} className="mantine-rotate-rtl" />}
      >
        Visit gallery
      </Button>
    </Group>
  );
}

export const sections: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
};
