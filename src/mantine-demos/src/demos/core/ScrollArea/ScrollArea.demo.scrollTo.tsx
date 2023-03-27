import React, { useRef } from 'react';
import { ScrollArea, Button, Stack, Group } from '@mantine/core';
import { MantineDemo } from '@mantine/ds';
import { Content } from './_content';

const code = `
import { useRef } from 'react';
import { ScrollArea, Button, Stack, Group } from '@mantine/core';

function Demo() {
  const viewport = useRef<HTMLDivElement>(null);

  const scrollToBottom = () =>
    viewport.current.scrollTo({ top: viewport.current.scrollHeight, behavior: 'smooth' });

  const scrollToCenter = () =>
    viewport.current.scrollTo({ top: viewport.current.scrollHeight / 2, behavior: 'smooth' });

  const scrollToTop = () => viewport.current.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <Stack align="center">
      <ScrollArea w={300} h={200} viewportRef={viewport}>
        {/* ... content */}
      </ScrollArea>

      <Group position="center">
        <Button onClick={scrollToBottom} variant="outline">
          Scroll to bottom
        </Button>
        <Button onClick={scrollToCenter} variant="outline">
          Scroll to center
        </Button>
        <Button onClick={scrollToTop} variant="outline">
          Scroll to top
        </Button>
      </Group>
    </Stack>
  );
}
`;

function Demo() {
  const viewport = useRef<HTMLDivElement>(null);
  const scrollToBottom = () =>
    viewport.current.scrollTo({ top: viewport.current.scrollHeight, behavior: 'smooth' });
  const scrollToCenter = () =>
    viewport.current.scrollTo({ top: viewport.current.scrollHeight / 2, behavior: 'smooth' });
  const scrollToTop = () => viewport.current.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <Stack align="center">
      <ScrollArea w={300} h={200} viewportRef={viewport}>
        <Content />
      </ScrollArea>
      <Group position="center">
        <Button onClick={scrollToBottom} variant="outline">
          Scroll to bottom
        </Button>
        <Button onClick={scrollToCenter} variant="outline">
          Scroll to center
        </Button>
        <Button onClick={scrollToTop} variant="outline">
          Scroll to top
        </Button>
      </Group>
    </Stack>
  );
}

export const scrollTo: MantineDemo = {
  type: 'demo',
  component: Demo,
  code,
};
