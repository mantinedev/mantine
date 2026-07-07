import { Group, Stat } from '@mantine/core';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { Group, Stat } from '@mantine/core';

function Demo() {
  return (
    <Group gap={50}>
      <Stat label="Revenue" value={1340.5} prefix="$" decimalScale={2} fixedDecimalScale />
      <Stat label="Conversion" value={4.28} suffix="%" />
      <Stat label="Storage used" value={82} suffix="/ 100 GB" />
    </Group>
  );
}
`;

function Demo() {
  return (
    <Group gap={50}>
      <Stat label="Revenue" value={1340.5} prefix="$" decimalScale={2} fixedDecimalScale />
      <Stat label="Conversion" value={4.28} suffix="%" />
      <Stat label="Storage used" value={82} suffix="/ 100 GB" />
    </Group>
  );
}

export const formatting: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
  centered: true,
};
