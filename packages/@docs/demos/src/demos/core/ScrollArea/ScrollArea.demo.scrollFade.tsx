import { ScrollArea } from '@mantine/core';
import { MantineDemo } from '@mantinex/demo';
import { Content } from './_content';

const code = `
import { ScrollArea } from '@mantine/core';

function Demo() {
  return (
    <ScrollArea h={250} w={400} scrollFade>
      {/* ... content */}
    </ScrollArea>
  );
}
`;

function Demo() {
  return (
    <ScrollArea h={250} w={400} scrollFade>
      <Content />
    </ScrollArea>
  );
}

export const scrollFade: MantineDemo = {
  type: 'code',
  component: Demo,
  centered: true,
  code,
};
