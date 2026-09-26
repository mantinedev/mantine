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

export const legend: MantineDemo = {
  type: 'configurator',
  centered: true,
  component: Wrapper,
  code: [
    { code, language: 'tsx', fileName: 'Demo.tsx' },
    { code: dataCode, language: 'tsx', fileName: 'data.ts' },
  ],
  controls: [
    {
      type: 'segmented',
      prop: 'legendPosition',
      initialValue: 'bottom',
      libraryValue: 'bottom',
      transformLabel: false,
      data: [
        { value: 'top', label: 'top' },
        { value: 'bottom', label: 'bottom' },
        { value: 'left', label: 'left' },
        { value: 'right', label: 'right' },
      ],
    },
  ],
};
