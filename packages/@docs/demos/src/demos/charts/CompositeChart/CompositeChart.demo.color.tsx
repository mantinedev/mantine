import { CompositeChart } from '@mantine/charts';
import { MantineDemo } from '@mantinex/demo';
import { data, dataCode } from './_data';

const code = (props: Record<string, any>) => `
import { CompositeChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return (
    <CompositeChart
      h={300}
      data={data}
      dataKey="date"
      series={[{ name: 'Apples', type: 'line', color: '${props.color}' }]}
    />
  );
}
`;

function Wrapper(props: any) {
  return (
    <CompositeChart
      h={300}
      data={data}
      dataKey="date"
      series={[{ name: 'Apples', type: 'line', color: props.color }]}
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
  ],
};
