import { SunburstChart } from '@mantine/charts';
import { MantineDemo } from '@mantinex/demo';
import { data, dataCode } from './_data';

const code = `
import { SunburstChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return <SunburstChart data={data} {{props}} />;
}
`;

function Wrapper(props: any) {
  return <SunburstChart data={data} {...props} />;
}

export const innerRadius: MantineDemo = {
  type: 'configurator',
  component: Wrapper,
  centered: true,
  code: [
    { fileName: 'Demo.tsx', code, language: 'tsx' },
    { fileName: 'data.ts', code: dataCode, language: 'tsx' },
  ],
  controls: [
    {
      type: 'number',
      prop: 'innerRadius',
      min: 0,
      max: 120,
      step: 10,
      initialValue: 50,
      libraryValue: 50,
    },
  ],
};
