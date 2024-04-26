import { PieChart } from '@mantine/charts';
import { MantineDemo } from '@mantinex/demo';
import { data, dataCode } from './_data';

const code = `
import { PieChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return <PieChart{{props}} data={data} />;
}
`;

function Wrapper(props: any) {
  return <PieChart {...props} data={data} />;
}

export const strokeWidth: MantineDemo = {
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
      prop: 'strokeWidth',
      initialValue: 1,
      min: 0,
      max: 2,
      step: 0.1,
      libraryValue: '__',
    },
  ],
};
