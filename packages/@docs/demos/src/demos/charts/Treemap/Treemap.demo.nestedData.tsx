import { Treemap } from '@mantine/charts';
import { MantineDemo } from '@mantinex/demo';
import { nestedData, nestedDataCode } from './_data';

const code = `
import { Treemap } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return <Treemap data={data} />;
}
`;

function Demo() {
  return <Treemap data={nestedData} />;
}

export const nestedDataDemo: MantineDemo = {
  type: 'code',
  component: Demo,
  code: [
    { code, language: 'tsx', fileName: 'Demo.tsx' },
    { code: nestedDataCode, language: 'tsx', fileName: 'data.ts' },
  ],
};
