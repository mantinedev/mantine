import React from 'react';
import { Button, Tooltip } from '@mantine/core';
import { useClipboard } from '@mantine/hooks';
import { Copy } from 'tabler-icons-react';

export function ButtonCopy() {
  const clipboard = useClipboard();
  return (
    <Tooltip
      label="Link copied!"
      gutter={5}
      placement="center"
      position="bottom"
      radius="xl"
      transition="slide-down"
      transitionDuration={200}
      opened={clipboard.copied}
    >
      <Button
        variant="light"
        rightIcon={<Copy size={20} />}
        radius="xl"
        size="md"
        styles={{
          root: { paddingRight: 14, height: 48 },
          rightIcon: { marginLeft: 22 },
        }}
        onClick={() => clipboard.copy('https://www.youtube.com/watch?v=dQw4w9WgXcQ')}
      >
        Copy link to clipboard
      </Button>
    </Tooltip>
  );
}
