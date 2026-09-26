import { Badge, Group } from '@mantine/core';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { Badge, Group } from '@mantine/core';

function Demo() {
  return (
    <Group>
      <Badge autoContrast={false} size="lg" color="lime.4">
        Without auto contrast
      </Badge>
      <Badge size="lg" color="lime.4">
        Auto contrast
      </Badge>
    </Group>
  );
}
`;

function Demo() {
  return (
    <Group>
      <Badge autoContrast={false} size="lg" color="lime.4">
        Without auto contrast
      </Badge>
      <Badge size="lg" color="lime.4">
        Auto contrast
      </Badge>
    </Group>
  );
}

export const autoContrast: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
  centered: true,
};
