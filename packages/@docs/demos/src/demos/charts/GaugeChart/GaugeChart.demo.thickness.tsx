import { GaugeChart } from '@mantine/charts';
import { Group } from '@mantine/core';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { GaugeChart } from '@mantine/charts';
import { Group } from '@mantine/core';

function Demo() {
  return (
    <Group>
      <GaugeChart value={72} thickness={6} size={160} />
      <GaugeChart value={72} thickness={20} size={160} />
    </Group>
  );
}
`;

function Demo() {
  return (
    <Group>
      <GaugeChart value={72} thickness={6} size={160} />
      <GaugeChart value={72} thickness={20} size={160} />
    </Group>
  );
}

export const thickness: MantineDemo = {
  type: 'code',
  centered: true,
  component: Demo,
  code,
};
