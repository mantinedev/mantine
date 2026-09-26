import { SunburstChart } from '@mantine/charts';
import { MantineDemo } from '@mantinex/demo';
import { data, dataCode } from './_data';

const code = `
import { SunburstChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return <SunburstChart data={data} size={400} />;
}
`;

function Demo() {
  return <SunburstChart data={data} size={400} />;
}

export const size: MantineDemo = {
  type: 'code',
  component: Demo,
  centered: true,
  code: [
    { code, language: 'tsx', fileName: 'Demo.tsx' },
    { code: dataCode, language: 'tsx', fileName: 'data.ts' },
  ],
};
