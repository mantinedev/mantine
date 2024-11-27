import { DonutChart } from '@mantine/charts';
import { MantineDemo } from '@mantinex/demo';
import { data, dataCode } from './_data';

const code = `
import { DonutChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return <DonutChart{{props}} withLabels data={data} />;
}
`;

function Wrapper(props: any) {
  return <DonutChart {...props} withLabels data={data} />;
}

export const withLabels: MantineDemo = {
  type: 'configurator',
  component: Wrapper,
  code: [
    { fileName: 'Demo.tsx', code, language: 'tsx' },
    { fileName: 'data.ts', code: dataCode, language: 'tsx' },
  ],
  centered: true,
  controls: [
    { type: 'boolean', prop: 'withLabelsLine', initialValue: true, libraryValue: '__' },
    {
      type: 'segmented',
      prop: 'labelsType',
      initialValue: 'value',
      libraryValue: '__',
      data: ['value', 'percent'],
    },
  ],
};
