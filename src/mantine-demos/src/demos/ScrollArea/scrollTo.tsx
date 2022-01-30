import React, { useRef } from 'react';
import { ScrollArea, Button, Group } from '@mantine/core';
import { Content } from './_content';

const code = `
import { useRef } from 'react';
import { ScrollArea, Button, Group } from '@mantine/core';

function Demo() {
  const viewport = useRef<HTMLDivElement>();

  const scrollToBottom = () =>
    viewport.current.scrollTo({ top: viewport.current.scrollHeight, behavior: 'smooth' });

  const scrollToCenter = () =>
    viewport.current.scrollTo({ top: viewport.current.scrollHeight / 2, behavior: 'smooth' });

  const scrollToTop = () => viewport.current.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <Group position="center" direction="column">
      <ScrollArea style={{ width: 300, height: 200 }} viewportRef={viewport}>
        {/* ... content */}
      </ScrollArea>

      <Group>
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
    </Group>
  );
}
`;

function Demo() {
  const viewport = useRef<HTMLDivElement>();
  const scrollToBottom = () =>
    viewport.current.scrollTo({ top: viewport.current.scrollHeight, behavior: 'smooth' });
  const scrollToCenter = () =>
    viewport.current.scrollTo({ top: viewport.current.scrollHeight / 2, behavior: 'smooth' });
  const scrollToTop = () => viewport.current.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <Group position="center" direction="column">
      <ScrollArea style={{ width: 300, height: 200 }} viewportRef={viewport}>
        <Content />
      </ScrollArea>
      <Group>
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
    </Group>
  );
}

export const scrollTo: MantineDemo = {
  type: 'demo',
  component: Demo,
  code,
};
