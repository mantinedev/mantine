import { RadarChart } from '@mantine/charts';
import { MantineDemo } from '@mantinex/demo';
import { multiData, multiDataCode } from './_data';

const code = `
import { RadarChart } from '@mantine/charts';
import { data } from './data';


function Demo() {
  return (
    <RadarChart
      h={300}
      data={data}
      dataKey="product"
      withTooltip
      withDots
      series={[
        { name: 'Sales January', color: 'lime.4', opacity: 0.1 },
        { name: 'Sales February', color: 'cyan.4', opacity: 0.1 },
      ]}
      {{props}}
    />
  );
}
`;

function Demo(props: any) {
  return (
    <RadarChart
      h={300}
      data={multiData}
      dataKey="product"
      withTooltip
      withDots
      series={[
        { name: 'Sales January', color: 'lime.4', opacity: 0.1 },
        { name: 'Sales February', color: 'cyan.4', opacity: 0.1 },
      ]}
      {...props}
    />
  );
}

export const tooltip: MantineDemo = {
  type: 'code',
  component: Demo,
  code: [
    { code, language: 'tsx', fileName: 'Demo.tsx' },
    { code: multiDataCode, language: 'tsx', fileName: 'data.ts' },
  ],
};
