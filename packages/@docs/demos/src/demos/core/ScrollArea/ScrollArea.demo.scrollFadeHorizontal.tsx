import { Badge, Group, ScrollArea } from '@mantine/core';
import { MantineDemo } from '@mantinex/demo';

const badges = Array.from({ length: 25 }, (_, index) => (
  <Badge key={index} variant="light" size="lg" style={{ flexShrink: 0 }}>
    Item {index + 1}
  </Badge>
));

const code = `
import { Badge, Group, ScrollArea } from '@mantine/core';

const badges = Array.from({ length: 25 }, (_, index) => (
  <Badge key={index} variant="light" size="lg" style={{ flexShrink: 0 }}>
    Item {index + 1}
  </Badge>
));

function Demo() {
  return (
    <ScrollArea w={420} scrollbars="x" scrollFade="x" scrollFadeSize={40} py="sm">
      <Group wrap="nowrap" gap="xs">
        {badges}
      </Group>
    </ScrollArea>
  );
}
`;

function Demo() {
  return (
    <ScrollArea w={420} scrollbars="x" scrollFade="x" scrollFadeSize={40} py="sm">
      <Group wrap="nowrap" gap="xs">
        {badges}
      </Group>
    </ScrollArea>
  );
}

export const scrollFadeHorizontal: MantineDemo = {
  type: 'code',
  component: Demo,
  centered: true,
  code,
};
