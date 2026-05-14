import { ScrollArea } from '@mantine/core';
import { MantineDemo } from '@mantinex/demo';
import { Content } from './_content';

const code = `
import { ScrollArea } from '@mantine/core';

function Demo() {
  return (
    <ScrollArea h={200} startScrollPosition={{ y: 250 }}>
      {/* ... content */}
    </ScrollArea>
  );
}
`;

function Demo() {
  return (
    <ScrollArea h={200} startScrollPosition={{ y: 250 }}>
      <Content />
    </ScrollArea>
  );
}

export const startScrollPosition: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
  centered: true,
  maxWidth: 300,
};
