import { Badge, Group, Scroller } from '@mantine/core';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { Badge, Group, Scroller } from '@mantine/core';

function Demo() {
  return (
    <Scroller draggable={false}>
      <Group gap="xs" wrap="nowrap">
        {Array.from({ length: 20 }).map((_, index) => (
          <Badge key={index} variant="default" size="lg" miw="fit-content">
            Badge {index + 1}
          </Badge>
        ))}
      </Group>
    </Scroller>
  );
}
`;

function Demo() {
  return (
    <Scroller draggable={false}>
      <Group gap="xs" wrap="nowrap">
        {Array.from({ length: 20 }).map((_, index) => (
          <Badge key={index} variant="default" size="lg" miw="fit-content">
            Badge {index + 1}
          </Badge>
        ))}
      </Group>
    </Scroller>
  );
}

export const draggable: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
  centered: true,
  maxWidth: 500,
};
