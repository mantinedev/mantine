import { GaugeChart } from '@mantine/charts';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { GaugeChart } from '@mantine/charts';

function Demo() {
  return <GaugeChart value={72} startAngle={-90} endAngle={90} />;
}
`;

function Demo() {
  return <GaugeChart value={72} startAngle={-90} endAngle={90} />;
}

export const angles: MantineDemo = {
  type: 'code',
  centered: true,
  component: Demo,
  code,
};
