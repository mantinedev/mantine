import { GaugeChart } from '@mantine/charts';
import { Text } from '@mantine/core';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { GaugeChart } from '@mantine/charts';
import { Text } from '@mantine/core';

function Demo() {
  return (
    <GaugeChart
      value={72}
      aria-label="CPU usage"
      label={
        <div>
          <Text ta="center" fz="xl" fw="var(--mantine-font-weight-medium)" c="bright">
            72%
          </Text>
          <Text ta="center" size="sm">
            CPU Usage
          </Text>
        </div>
      }
    />
  );
}
`;

function Demo() {
  return (
    <GaugeChart
      value={72}
      aria-label="CPU usage"
      label={
        <div>
          <Text ta="center" fz="xl" fw="var(--mantine-font-weight-medium)" c="bright">
            72%
          </Text>
          <Text ta="center" size="sm">
            CPU Usage
          </Text>
        </div>
      }
    />
  );
}

export const label: MantineDemo = {
  type: 'code',
  centered: true,
  component: Demo,
  code,
};
