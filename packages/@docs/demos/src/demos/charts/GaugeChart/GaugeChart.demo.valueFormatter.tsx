import { GaugeChart } from '@mantine/charts';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { GaugeChart } from '@mantine/charts';

function Demo() {
  return <GaugeChart value={72.456} valueFormatter={(value) => \`\${value.toFixed(1)}%\`} />;
}
`;

function Demo() {
  return <GaugeChart value={72.456} valueFormatter={(value) => `${value.toFixed(1)}%`} />;
}

export const valueFormatter: MantineDemo = {
  type: 'code',
  centered: true,
  component: Demo,
  code,
};
