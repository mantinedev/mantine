import { DonutChart } from '@mantine/charts';
import { MantineDemo } from '@mantinex/demo';
import { data, dataCode } from './_data';

const code = `
import { DonutChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return <DonutChart{{props}} data={data} />;
}
`;

function Wrapper(props: any) {
  return <DonutChart {...props} data={data} mih={300} />;
}

export const size: MantineDemo = {
  type: 'configurator',
  component: Wrapper,
  code: [
    { fileName: 'Demo.tsx', code, language: 'tsx' },
    { fileName: 'data.ts', code: dataCode, language: 'tsx' },
  ],
  centered: true,
  controls: [
    {
      type: 'number',
      prop: 'size',
      initialValue: 160,
      min: 80,
      max: 300,
      step: 1,
      libraryValue: '__',
    },
    {
      type: 'number',
      prop: 'thickness',
      initialValue: 20,
      min: 2,
      max: 30,
      step: 1,
      libraryValue: '__',
    },
  ],
};
