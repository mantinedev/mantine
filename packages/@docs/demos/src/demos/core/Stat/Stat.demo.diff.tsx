import { Group, Stat } from '@mantine/core';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { Group, Stat } from '@mantine/core';

function Demo() {
  return (
    <Group gap={50}>
      <Stat label="Revenue" value={92410} thousandSeparator diff={12.4} />
      <Stat label="Churn" value={1240} thousandSeparator diff={-8.2} />
      <Stat label="Stable" value={512} diff={0} withDiffIcon={false} />
    </Group>
  );
}
`;

function Demo() {
  return (
    <Group gap={50}>
      <Stat label="Revenue" value={92410} thousandSeparator diff={12.4} />
      <Stat label="Churn" value={1240} thousandSeparator diff={-8.2} />
      <Stat label="Stable" value={512} diff={0} withDiffIcon={false} />
    </Group>
  );
}

export const diff: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
  centered: true,
};
