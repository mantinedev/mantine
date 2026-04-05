import { WaffleChart } from '@mantine/charts';
import { MantineDemo } from '@mantinex/demo';
import { data, dataCode } from './_data';

const code = `
import { WaffleChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return <WaffleChart data={data} {{props}} />;
}
`;

function Wrapper(props: any) {
  return <WaffleChart data={data} {...props} />;
}

export const gap: MantineDemo = {
  type: 'configurator',
  centered: true,
  component: Wrapper,
  code: [
    { code, language: 'tsx', fileName: 'Demo.tsx' },
    { code: dataCode, language: 'tsx', fileName: 'data.ts' },
  ],
  controls: [
    {
      type: 'number',
      prop: 'gap',
      initialValue: 2,
      libraryValue: 2,
      min: 0,
      max: 5,
    },
    {
      type: 'number',
      prop: 'columns',
      initialValue: 10,
      libraryValue: 10,
      min: 5,
      max: 15,
    },
    {
      type: 'number',
      prop: 'rows',
      initialValue: 10,
      libraryValue: 10,
      min: 5,
      max: 15,
    },
  ],
};
