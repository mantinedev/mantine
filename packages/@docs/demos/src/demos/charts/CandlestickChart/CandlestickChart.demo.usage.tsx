import { CandlestickChart } from '@mantine/charts';
import { MantineDemo } from '@mantinex/demo';
import { data, dataCode } from './_data';

const code = `
import { CandlestickChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return <CandlestickChart h={300} data={data} dataKey="date" {{props}} />;
}
`;

function Wrapper(props: any) {
  return <CandlestickChart h={300} data={data} dataKey="date" {...props} />;
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
      prop: 'withTooltip',
      initialValue: true,
      libraryValue: true,
    },
  ],
};
