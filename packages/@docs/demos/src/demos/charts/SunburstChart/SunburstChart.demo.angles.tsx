import { SunburstChart } from '@mantine/charts';
import { MantineDemo } from '@mantinex/demo';
import { data, dataCode } from './_data';

const code = `
import { SunburstChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return <SunburstChart data={data} startAngle={180} endAngle={0} />;
}
`;

function Demo() {
  return <SunburstChart data={data} startAngle={180} endAngle={0} />;
}

export const angles: MantineDemo = {
  type: 'code',
  component: Demo,
  centered: true,
  code: [
    { fileName: 'Demo.tsx', code, language: 'tsx' },
    { fileName: 'data.ts', code: dataCode, language: 'tsx' },
  ],
};
