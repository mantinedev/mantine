import { CompositeChart } from '@mantine/charts';
import { MantineDemo } from '@mantinex/demo';
import { data, dataCode } from './_data';

const code = `
import { CompositeChart } from '@mantine/charts';
import { data } from './data';


function Demo() {
  return (
    <CompositeChart
      h={300}
      data={data}
      dataKey="date"
      maxBarWidth={30}
      series={[
        { name: 'Tomatoes', color: 'rgba(18, 120, 255, 0.2)', type: 'bar' },
        { name: 'Apples', color: 'red.8', type: 'line' },
        { name: 'Oranges', color: 'yellow.8', type: 'area' },
      ]}
      {{props}}
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
      maxBarWidth={30}
      series={[
        { name: 'Tomatoes', color: 'rgba(18, 120, 255, 0.2)', type: 'bar' },
        { name: 'Apples', color: 'red.8', type: 'line' },
        { name: 'Oranges', color: 'yellow.8', type: 'area' },
      ]}
      {...props}
    />
  );
}

export const usage: MantineDemo = {
  type: 'configurator',
  component: Wrapper,
  code: [
    { code, language: 'tsx', fileName: 'Demo.tsx' },
    { code: dataCode, language: 'tsx', fileName: 'data.ts' },
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
      type: 'segmented',
      prop: 'tickLine',
      initialValue: 'y',
      libraryValue: 'y',
      transformLabel: false,
      data: [
        { value: 'x', label: 'x' },
        { value: 'y', label: 'y' },
        { value: 'xy', label: 'xy' },
        { value: 'none', label: 'none' },
      ],
    },
    {
      type: 'segmented',
      prop: 'gridAxis',
      initialValue: 'x',
      libraryValue: 'x',
      transformLabel: false,
      data: [
        { value: 'x', label: 'x' },
        { value: 'y', label: 'y' },
        { value: 'xy', label: 'xy' },
        { value: 'none', label: 'none' },
      ],
    },
    {
      type: 'boolean',
      prop: 'withXAxis',
      initialValue: true,
      libraryValue: true,
    },
    {
      type: 'boolean',
      prop: 'withYAxis',
      initialValue: true,
      libraryValue: true,
    },
    {
      type: 'boolean',
      prop: 'withDots',
      initialValue: true,
      libraryValue: true,
    },
  ],
};
