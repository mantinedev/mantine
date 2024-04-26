import { AreaChart } from '@mantine/charts';
import { MantineDemo } from '@mantinex/demo';
import { connectNullsData, connectNullsDataCode } from './_data';

const code = `
import { AreaChart } from '@mantine/charts';
import { data } from './data';


function Demo() {
  return (
    <AreaChart
      h={300}
      data={data}
      dataKey="date"
      series={[{ name: 'Apples', color: 'indigo.6' }]}
      {{props}}
    />
  );
}
`;

function Wrapper(props: any) {
  return (
    <AreaChart
      h={300}
      data={connectNullsData}
      dataKey="date"
      series={[{ name: 'Apples', color: 'indigo.6' }]}
      {...props}
    />
  );
}

export const connectNulls: MantineDemo = {
  type: 'configurator',
  component: Wrapper,
  code: [
    { code, language: 'tsx', fileName: 'Demo.tsx' },
    { code: connectNullsDataCode, language: 'tsx', fileName: 'data.ts' },
  ],
  controls: [
    {
      type: 'select',
      prop: 'curveType',
      initialValue: 'linear',
      libraryValue: null,
      data: [
        { value: 'bump', label: 'bump' },
        { value: 'linear', label: 'linear' },
        { value: 'natural', label: 'natural' },
        { value: 'monotone', label: 'monotone' },
        { value: 'step', label: 'step' },
        { value: 'stepBefore', label: 'stepBefore' },
        { value: 'stepAfter', label: 'stepAfter' },
      ],
    },
    {
      type: 'boolean',
      prop: 'connectNulls',
      initialValue: true,
      libraryValue: '__',
    },
  ],
};
