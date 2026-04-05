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

export const fillDirection: MantineDemo = {
  type: 'configurator',
  centered: true,
  component: Wrapper,
  code: [
    { code, language: 'tsx', fileName: 'Demo.tsx' },
    { code: dataCode, language: 'tsx', fileName: 'data.ts' },
  ],
  controls: [
    {
      type: 'select',
      prop: 'fillDirection',
      initialValue: 'left-to-right',
      libraryValue: 'left-to-right',
      transformLabel: false,
      data: [
        { value: 'left-to-right', label: 'left-to-right' },
        { value: 'right-to-left', label: 'right-to-left' },
        { value: 'top-to-bottom', label: 'top-to-bottom' },
        { value: 'bottom-to-top', label: 'bottom-to-top' },
      ],
    },
  ],
};
