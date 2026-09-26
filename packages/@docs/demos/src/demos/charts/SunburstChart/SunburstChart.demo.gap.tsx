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

export const gap: MantineDemo = {
  type: 'configurator',
  component: Wrapper,
  centered: true,
  code: [
    { fileName: 'Demo.tsx', code, language: 'tsx' },
    { fileName: 'data.ts', code: dataCode, language: 'tsx' },
  ],
  controls: [
    { type: 'number', prop: 'gap', min: 0, max: 10, step: 1, initialValue: 1, libraryValue: '__' },
  ],
};
