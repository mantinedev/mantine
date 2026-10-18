import { ScrollArea } from '@mantine/core';
import { MantineDemo } from '@mantinex/demo';
import { Content } from './_content';

const code = `
import { ScrollArea } from '@mantine/core';

function Demo() {
  return (
    <ScrollArea
      w={300}
      h={200}
      type="always"
      scrollbarSize={6}
      offsetScrollbars="y"
      style={{ '--scrollarea-offset-size': '20px' }}
    >
      {/* ... content */}
    </ScrollArea>
  );
}
`;

function Demo() {
  return (
    <ScrollArea
      w={300}
      h={200}
      type="always"
      scrollbarSize={6}
      offsetScrollbars="y"
      style={{ '--scrollarea-offset-size': '20px' }}
    >
      <Content />
    </ScrollArea>
  );
}

export const offsetSize: MantineDemo = {
  type: 'code',
  component: Demo,
  centered: true,
  code,
};
