import { BarChart } from '@mantine/charts';
import { MantineDemo } from '@mantinex/demo';
import { data, dataCode } from './_data';

const code = (props: Record<string, any>) => `
import { BarChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return (
    <BarChart
      h={300}
      data={data}
      dataKey="month"
      series={[{ name: 'Smartphones', color: '${props.color}' }]}
    />
  );
}
`;

function Wrapper(props: any) {
  return (
    <BarChart
      h={300}
      data={data}
      dataKey="month"
      series={[{ name: 'Smartphones', color: props.color }]}
      {...props}
    />
  );
}

export const color: MantineDemo = {
  type: 'configurator',
  component: Wrapper,
  code: [
    { code, language: 'tsx', fileName: 'Demo.tsx' },
    { code: dataCode, language: 'tsx', fileName: 'data.ts' },
  ],
  controls: [
    {
      type: 'color',
      prop: 'color',
      initialValue: 'blue',
      libraryValue: true,
    },
    {
      type: 'number',
      prop: 'fillOpacity',
      initialValue: 1,
      libraryValue: '__',
      min: 0,
      max: 1,
      step: 0.01,
    },
  ],
};
