import { GaugeChart } from '@mantine/charts';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { GaugeChart } from '@mantine/charts';

function Demo() {
  return <GaugeChart value={72} size={200} thickness={12} />;
}
`;

function Demo() {
  return <GaugeChart value={72} size={200} thickness={12} />;
}

export const usage: MantineDemo = {
  type: 'code',
  centered: true,
  component: Demo,
  code,
};
