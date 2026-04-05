import { GaugeChart } from '@mantine/charts';
import { Group } from '@mantine/core';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { GaugeChart } from '@mantine/charts';
import { Group } from '@mantine/core';

function Demo() {
  return (
    <Group>
      <GaugeChart value={72} roundCaps size={160} />
      <GaugeChart value={72} roundCaps={false} size={160} />
    </Group>
  );
}
`;

function Demo() {
  return (
    <Group>
      <GaugeChart value={72} roundCaps size={160} />
      <GaugeChart value={72} roundCaps={false} size={160} />
    </Group>
  );
}

export const roundCaps: MantineDemo = {
  type: 'code',
  centered: true,
  component: Demo,
  code,
};
