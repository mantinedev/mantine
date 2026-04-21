import { Treemap } from '@mantine/charts';
import { MantineDemo } from '@mantinex/demo';
import { data, dataCode } from './_data';

const code = `
import { Treemap } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return <Treemap data={data} />;
}
`;

function Demo() {
  return <Treemap data={data} />;
}

export const color: MantineDemo = {
  type: 'code',
  component: Demo,
  code: [
    { code, language: 'tsx', fileName: 'Demo.tsx' },
    { code: dataCode, language: 'tsx', fileName: 'data.ts' },
  ],
};
