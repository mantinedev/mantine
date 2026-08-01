import { Group, Stat } from '@mantine/core';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { Group, Stat } from '@mantine/core';

function Demo() {
  return (
    <Group gap={50}>
      <Stat label="Active users" value={92410} thousandSeparator loading />
      <Stat label="Revenue" value={1340} prefix="$" loading />
    </Group>
  );
}
`;

function Demo() {
  return (
    <Group gap={50}>
      <Stat label="Active users" value={92410} thousandSeparator loading />
      <Stat label="Revenue" value={1340} prefix="$" loading />
    </Group>
  );
}

export const loading: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
  centered: true,
};
